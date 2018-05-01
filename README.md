# Mollie public API documentation


This project contains the source of all of Mollie's public API documentation. The full documentation (in an easy to use
format) in the future may be found at https://docs.mollie.com.

**Before we go live:**
You can find the docs on https://d12nhbpjotbqmy.cloudfront.net/, automatically deployed by Travis to S3, and cached by
Cloudfront. During the development phase it is secured with basic auth using an AWS Lambda function:
```
Username: polder
Password: approved
```

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
- Node > 8.x
### Running locally

Download a copy of this repostory:

```
git clone git@github.com:mollie/api-documentation.git
```

Then visit the downloaded repository and install dependencies:

```
cd api-documentation
npm install
pip install -U -r requirements.txt
```

### Generate docs

Finally, build the documentation, its CSS and JS files by running:

```
make html
```

You can now preview the docs by opening `build/html/index.html`:

```
open build/html/index.html
```

### Styling docs

You can make changes to the styling by starting several hot-module reload processes:

```
make html-reload
make css-reload
make js-reload
```

Fonts can only be downloaded from `docs.mollie.dev` or `docs.mollie.com`. Add the following line to your `/etc/hosts` file:

```
127.0.0.1 docs.mollie.dev
```

Visit http://docs.mollie.dev:8000 to preview your changes. CSS & JS changes will appear without the need to refresh your browser.
## Support

If you are having issues, please let us know. We accept pull requests on our public documentation.

You can get support via info@mollie.com.

## License

The project is licensed under the MIT license.
