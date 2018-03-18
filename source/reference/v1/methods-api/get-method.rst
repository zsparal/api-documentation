.. _v1/methods-get:

Methods API v1: Get payment method
==================================
``GET`` ``https://api.mollie.com/v1/methods/*id*``

Authentication: :ref:`API keys <guides/authentication>`. :ref:`OAuth access tokens <oauth/overview>`

Retrieve a payment method object by its payment method identifier.

Parameters
----------
Replace ``id`` in the endpoint URL by the payment method's ID, for example ``creditcard``.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``include``
       | string
     - Include additional data. Must be a comma separated list of one or more includes.

   * - | ``locale``
       | string
     - Optional – Passing a locale will translate the payment method name to the corresponding language.

       Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the only mandatory extra parameter is the ``profileId`` parameter.
With it, you can specify which profile you want to retrieve a method for. Organizations can have multiple profiles for
each of their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``profileId``
       | string
     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``
       | boolean
     - Optional – Set this to true to only retrieve the payment method if it is available in test mode.

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``issuers`` Include issuer details if available, for instance for the iDEAL or gift card payment methods.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``resource``
       | string
     - Indicates the response contains a payment method object. Will always contain ``method`` for this endpoint.

   * - | ``id``
       | string
     - The identifier uniquely referring to this payment method. When supplying this ID as the ``method`` parameter
       during :ref:`payment creation <v1/payments-create>`, the payment method selection screen is skipped.

   * - | ``description``
       | string
     - The full name of the payment method.

   * - | ``amount``
       | object
     - The minimum and maximum allowed payment amount will differ between payment methods.

       .. list-table::
          :header-rows: 0
          :widths: auto

          * - | ``minimum``
              | decimal
            - The minimum payment amount in EUR required to use this payment method.

          * - | ``maximum``
              | decimal
            - The maximum payment amount in EUR allowed when using this payment method. For gift cards, the maximum
              amount may be ignored.

   * - | ``image``
       | object
     - URLs of images representing the payment method.

       .. list-table::
          :header-rows: 0
          :widths: auto

          * - | ``normal``
              | string
            - The URL for a payment method icon of 55x37 pixels.

          * - | ``bigger``
              | string
            - The URL for a payment method icon of 110x74 pixels.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/methods/creditcard \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

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
