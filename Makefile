.DEFAULT_GOAL := html

# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line. When editing extensions, it is
# recommended to use the "-E" flag to force a rebuild every time you run 'Make', as
# it is not guaranteed it will rebuild when no '.rst' files have changed.
SPHINXOPTS     = -W -j auto
SPHINXPRODOPTS = -D html_file_suffix=''
SPHINXBUILD    = python -msphinx
SPHINXPROJ     = api-documentation
SOURCEDIR      = source
BUILDDIR       = build

node_modules/.bin/parcel: package-lock.json
	npm install --no-optional

source/_static/style.css: source/theme/styles/main.scss node_modules/.bin/parcel
	node_modules/.bin/parcel build source/theme/styles/main.scss --out-dir source/_static --out-file style --detailed-report

source/_static/index.js: source/theme/js/index.js node_modules/.bin/parcel
	node_modules/.bin/parcel build source/theme/js/index.js --out-dir source/_static --out-file index --detailed-report

css-reload:
	@./node_modules/.bin/parcel source/theme/styles/main.scss --out-dir build/_static --out-file style --no-hmr --port 8001

js-reload:
	@./node_modules/.bin/parcel source/theme/js/index.js --out-dir build/_static --out-file index --no-hmr --port 8002

html-reload:
	sphinx-autobuild -b html "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

start:
	make html-reload & make css-reload & make js-reload

install:
	pip install -U -r requirements.txt

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
html: Makefile source/_static/style.css source/_static/index.js
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

html-production: Makefile source/_static/style.css source/_static/index.js
	@$(SPHINXBUILD) -M html "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(SPHINXPRODOPTS) $(O)
