.. _v1/methods-get:

Methods API v1: Get payment method
==================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/methods/*id*

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve a payment method object by its payment method identifier.

Parameters
----------
Replace ``id`` in the endpoint URL by the payment method's ID, for example ``creditcard``.

.. list-table::
   :widths: auto

   * - | ``include``

       .. type:: string
          :required: true

     - Include additional data. Must be a comma separated list of one or more includes.

   * - | ``locale``

       .. type:: string
          :required: false

     - Passing a locale will translate the payment method name to the corresponding language.

       Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the only mandatory extra parameter is the ``profileId`` parameter.
With it, you can specify which profile you want to retrieve a method for. Organizations can have multiple profiles for
each of their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
   :widths: auto

   * - | ``profileId``

       .. type:: string
          :required: true

     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to true to only retrieve the payment method if it is available in test mode.

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``issuers`` Include issuer details if available, for instance for the iDEAL or gift card payment methods.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string
          :required: true

     - Indicates the response contains a payment method object. Will always contain ``method`` for this endpoint.

   * - | ``id``

       .. type:: string
          :required: true

     - The identifier uniquely referring to this payment method. When supplying this ID as the ``method`` parameter
       during :ref:`payment creation <v1/payments-create>`, the payment method selection screen is skipped.

   * - | ``description``

       .. type:: string
          :required: true

     - The full name of the payment method.

   * - | ``amount``

       .. type:: object
          :required: true

     - The minimum and maximum allowed payment amount will differ between payment methods.

       .. list-table::
          :widths: auto

          * - | ``minimum``

              .. type:: decimal
                 :required: true

            - The minimum payment amount in EUR required to use this payment method.

          * - | ``maximum``

              .. type:: decimal
                 :required: true

            - The maximum payment amount in EUR allowed when using this payment method. For gift cards, the maximum
              amount may be ignored.

   * - | ``image``

       .. type:: object
          :required: true

     - URLs of images representing the payment method.

       .. list-table::
          :widths: auto

          * - | ``normal``

              .. type:: string
                 :required: true

            - The URL for a payment method icon of 55x37 pixels.

          * - | ``bigger``

              .. type:: string
                 :required: true

            - The URL for a payment method icon of 110x74 pixels.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/methods/creditcard \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "method",
       "id": "creditcard",
       "description": "Credit card",
       "amount": {
           "minimum": "0.31",
           "maximum": "10000.00"
       },
       "image": {
           "normal": "https://www.mollie.com/images/payscreen/methods/creditcard.png",
           "bigger": "https://www.mollie.com/images/payscreen/methods/creditcard%402x.png"
       }
   }
