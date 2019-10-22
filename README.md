# Mollie public API documentation

[![Greenkeeper badge](https://badges.greenkeeper.io/mollie/api-documentation.svg)](https://greenkeeper.io/)


This project contains the source of all of Mollie's public API documentation. The full documentation (in an easy to use
format) may be found at https://docs.mollie.com.

## Contribute

- [Issue Tracker](https://github.com/mollie/api-documentation/issues)
- [Source Code](https://github.com/mollie/api-documentation)

We take pull requests on our documentation as well, if you think that something can be improved please open a PR.

The documentation is formatted using [reStructuredText](http://www.sphinx-doc.org/en/master/rest.html). All
documentation should be written in US English.

Note that PhpStorm comes with a reStructuredText plugin. You can enable it from the Plugins preferences pane. It enables
some syntax highlighting.

### Prerequisites

- Python > 2.7.9
- [pip](https://pypi.org/project/pip/), Python's package manager. [Installation instructions](https://pip.pypa.io/en/stable/installing/).
- Node > 9.x

### Running locally

Create a fork, or clone this repository if you have write access:

```shell
git clone git@github.com:mollie/api-documentation.git
```

Then visit the downloaded repository and install dependencies:

```shell
cd api-documentation
make install
```

### Generate HTML and supporting files

Finally, build the documentation, its CSS and JS files by running:

```shell
make html
```

You can now preview the generated documentation by opening `build/html/index.html`:

```shell
open build/html/index.html
```

### Making changes to copy

After running `make html` at least once, you can use `make html-only` to quickly update the HTML files if you changed
some copy. This way, you can have a quick [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop).

```shell
$ make html-only
Running Sphinx v1.7.1
...
updating environment: 0 added, 2 changed, 0 removed
...
build succeeded.

The HTML pages are in build/html.
$ open build/html/index.html
```

Sphinx will only update files for which the source files have changed.

### Styling docs

You can make changes to the styling by starting a web server locally:

```shell
make start
```

Visit `http://localhost:8000` to preview your changes. CSS & JS changes will appear without the need to refresh your
browser.

### Releasing new versions of the documentation

Deployment is handled using continuous deployment via [Travis CI](https://docs.travis-ci.com/user/deployment/).
Successful builds on the `master` branch will be automatically deployed.

## Support

If you are having issues, please let us know. We accept pull requests on our public documentation.

You can get support via info@mollie.com.

## Working at Mollie

Mollie is always looking for new talent to join our teams. We’re looking for inquisitive minds with good ideas and
strong opinions, and, most importantly, who know how to ship great products. Want to join the future of payments?
[Check out our vacancies](https://jobs.mollie.com).

## License

The documentation is licensed under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/?) license.

# FAQ

- [sphinx-autobuild is not found](#sphinx-autobuild-not-found)

## sphinx-autobuild not found

It might be that the location of the installed pip packages is not included in your `$PATH`.

It's also recommended to use `python3` and `pip3` instead of the pre-installed python 2.7 version which comes with MacOS.

The following steps install `python3` and `pip3` and add the package location to your `$PATH` variable

1. make sure you have homebrew installed (http://brew.sh)
2. install python3, which comes with pip3: `brew install python3`
3. see if the executable works for both python3 and pip3: `which python3 && which pip3`. This command should print two paths
4. `pip3` installs its package executables on `/Users/<your-username>/Library/Python/<version>/bin`. Add this path to your `$PATH` variable. Add `export PATH=/Users/<your-username>/Library/Python/<version>/bin:$PATH"` to your `.zshrc` or `.bash_profile`.
5. You can choose to alias pip3 to pip. Add this to your `.zshrc` or `.bash_profile`: `alias pip=pip3`
6. If you did step 5, `make install` will now work. If you didn't. Copy the make install command and replace `pip` with `pip3`.
7. `make start` is now able to run smoothly.
