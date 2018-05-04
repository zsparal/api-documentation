.. _v2/methods-get:

Methods API v2: Get payment method
==================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v2/methods/*id*

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve a single method by its ID. Note that if a method is not available on the payment profile a status
``404 Not found`` is returned. When the method is not enabled, a status ``403 Forbidden`` is returned.

If you do not know the method's ID, you can use the :ref:`methods list endpoint <v2/methods-list>` to retrieve all
payment methods that are available.

Parameters
----------
Replace ``id`` in the endpoint URL by the methods's ID. For example: ``https://api.mollie.com/v2/methods/ideal``.

.. list-table::
   :widths: auto

   * - | ``locale``

       .. type:: string
          :required: false

     - Passing a locale will translate the payment method name in the corresponding language.

       Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

Mollie Connect/OAuth parameters
-------------------------------
If you're creating an app with Mollie Connect/OAuth, the following parameters are also available. With the ``profileId``
parameter, you must specify which profile you want to look at when listing methods. Organizations can have multiple
profiles for each of their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
   :widths: auto

   * - | ``profileId``

       .. type:: string
          :required: true

     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to list all methods available in testmode.

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``issuers`` Include issuers available for the payment method (e.g. for iDEAL, KBC/CBC payment button or gift cards).

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string
          :required: true

     - Indicates the response contains a method object. Will always contain ``method`` for this endpoint.

   * - | ``id``

       .. type:: string
          :required: true

     - The unique identifier of the payment method. When used during :ref:`payment creation <v2/payments-create>`,
       the payment method selection screen will be skipped.

   * - | ``description``

       .. type:: string
          :required: true

     - The full name of the payment method, translated in the optional locale passed.

   * - | ``image``

       .. type:: image object
          :required: true

     - The URLs of images representing the payment method.

       .. list-table::
          :widths: auto

          * - | ``size1x``

              .. type:: string
                 :required: true

            - The URL for a payment method icon of 55x37 pixels.

          * - | ``size2x``

              .. type:: string
                 :required: true

            - The URL for a payment method icon of 110x74 pixels. Use this for high resolution screens.

   * - | ``_links``

       .. type:: object
          :required: true

     - An object with several URL objects relevant to the payment method. Every URL object will contain an ``href`` and
       a ``type`` field.

       .. list-table::
          :widths: auto

          * - | ``self``

              .. type:: URL object
                 :required: true

            - The API resource URL of the payment method itself.

          * - | ``documentation``

              .. type:: URL object
                 :required: true

            - The URL to the payment method retrieval endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/methods/ideal?include=issuers \
       -H "Authorization: Bearer live_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
        "resource": "method",
        "id": "ideal",
        "description": "iDEAL",
        "image": {
            "size1x": "https://www.mollie.com/images/payscreen/methods/ideal.png",
            "size2x": "https://www.mollie.com/images/payscreen/methods/ideal%402x.png"
        },
        "issuers": [
            {
                "resource": "issuer",
                "id": "ideal_ABNANL2A",
                "name": "ABN AMRO",
                "image": {
                    "size1x": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ABNANL2A.png",
                    "size2x": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ABNANL2A.png"
                }
            },
            {
                "resource": "issuer",
                "id": "ideal_ASNBNL21",
                "name": "ASN Bank",
                "image": {
                    "size1x": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ASNBNL21.png",
                    "size2x": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ASNBNL21.png"
                }
            },
            { },
            { }
        ],
        "_links": {
            "self": {
                "href": "https://api.mollie.com/v2/methods/ideal",
                "type": "application/hal+json"
            },
            "documentation": {
                "href": "https://www.mollie.com/en/docs/reference/methods/get",
                "type": "text/html"
            }
        }
    }
