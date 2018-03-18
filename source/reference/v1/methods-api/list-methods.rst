.. _v1/methods-list:

Methods API v1: List payment methods
====================================
``GET`` ``https://api.mollie.com/v1/methods``

Authentication: :ref:`API keys <guides/authentication>`. :ref:`OAuth access tokens <oauth/overview>`

Retrieve all payment methods activated on the payment profile.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``include``
       | string
     - Include additional data. Must be a comma separated list of one or more includes. See
       :ref:`Get method <v1/methods-get>` for available includes.

   * - | ``recurringType``
       | string
     - Optional – Passing ``first`` will only show payment methods eligible for making a
       :ref:`first payment <guides/recurring/first-payment>`. Passing ``recurring`` shows payment methods which can be
       used to automatically charge your customer's account when authorization has been given.

       Possible values: ``first`` ``recurring``

   * - | ``locale``
       | string
     - Optional – Passing a locale will sort the payment methods in the preferred order for the country, and translate
       the payment method names to the corresponding language.

       Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

   * - | ``offset``
       | integer
     - Optional – The number of objects to skip.

   * - | ``count``
       | integer
     - Optional – The number of objects to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the only mandatory extra parameter is the ``profileId`` parameter.
With it, you can specify which profile you want to list the methods of. Organizations can have multiple profiles for
each of their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``profileId``
       | string
     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``
       | boolean
     - Optional – Set this to true to only retrieve payment methods available in test mode. By default, only live
       payment methods are returned.

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

   * - | ``totalCount``
       | integer
     - The total number of payment methods available.

   * - | ``offset``
       | integer
     - The number of skipped payment methods as requested.

   * - | ``count``
       | integer
     - The number of payment methods found in data, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``
       | array
     - An array of payment method objects as described in :ref:`Get payment method <v1/methods-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of payment methods, based on the given offset.

       .. list-table::
          :header-rows: 0
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of payment methods, if available.

          * - | ``next``
              | string
            - Optional – The next set of payment methods, if available.

          * - | ``first``
              | string
            - Optional – The first set of payment methods, if available.

          * - | ``last``
              | string
            - Optional – The last set of payment methods, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/methods \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 2,
       "offset": 0,
       "count": 2,
       "data": [
           {
               "resource": "method",
               "id": "ideal",
               "description": "iDEAL",
               "amount": {
                   "minimum": "0.53",
                   "maximum": "50000.00"
               },
               "image": {
                   "normal": "https://www.mollie.com/images/payscreen/methods/ideal.png",
                   "bigger": "https://www.mollie.com/images/payscreen/methods/ideal%402x.png"
               }
           },
           {
               "resource": "method",
               "id": "paypal",
               "description": "PayPal",
               "amount": {
                   "minimum": "0.13",
                   "maximum": "8000.00"
               },
               "image": {
                   "normal": "https://www.mollie.com/images/payscreen/methods/paypal.png",
                   "bigger": "https://www.mollie.com/images/payscreen/methods/paypal%402x.png"
               }
           },
           { ... },
           { ... }
       ]
   }
