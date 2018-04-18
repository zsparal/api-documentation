.. _v2/methods-list:

Methods API v2: List payment methods
====================================
``GET`` ``https://api.mollie.com/v2/methods``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve all available payment methods. The results are not paginated.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``sequenceType``
       | string
     - Optional – Passing ``first`` will only show payment methods eligible for making a first payment. Passing
       ``recurring`` shows payment methods which can be used to automatically charge your customer's account when
       authorization has been given. Set to ``oneoff`` by default, which indicates the method is available for a
       regular non-recurring payment.

       Possible values: ``oneoff`` ``first`` ``recurring``

   * - | ``locale``
       | string
     - Optional – Passing a locale will sort the payment methods in the preferred order for the country, and translate
       the payment method names in the corresponding language.

       Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

   * - | ``amount``
       | object
     - Optional – An object containing ``value`` and ``currency``. Only methods that support the amount and currency
       are returned.

       Example: ``https://api.mollie.com/v2/methods?amount[value]=100.00&amount[currency]=USD``

Mollie Connect/OAuth parameters
-------------------------------
If you're creating an app with Mollie Connect/OAuth, the following parameters are also available. With the ``profileId``
parameter, you must specify which profile you want to look at when listing methods. Organizations can have multiple
profiles for each of their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
   :widths: auto

   * - | ``profileId``
       | string
     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to list all methods available in testmode.

Includes
--------
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``issuers`` Include issuer details such as which iDeal issuers are available.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``count``
       | integer
     - The number of methods found in ``_embedded``.

   * - | ``_embedded``
       | object
     - The object containing the queried data.

       .. list-table::
          :widths: auto

          * - | ``methods``
              | array
            - An array of methods objects as described in :ref:`Get method <v2/methods-get>`.

   * - | ``_links``
       | object
     - Links related to the lists of methods. Every URL object will contain an ``href`` and a ``type``
       field.

       .. list-table::
          :widths: auto

          * - | ``self``
              | object
            - The URL to the current set of methods.

          * - | ``documentation``
              | object
            - The URL to the methods list endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/payments/methods \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "count": 13,
       "_embedded": {
           "methods": [
               {
                    "resource": "method",
                    "id": "ideal",
                    "description": "iDEAL",
                    "image": {
                        "size1x": "https://mollie.com/images/payscreen/methods/ideal.png",
                        "size2x": "https://mollie.com/images/payscreen/methods/ideal%402x.png"
                    },
                    "_links": {
                        "self": {
                            "href": "https://api.mollie.com/v2/methods/ideal",
                            "type": "application/json"
                        }
                    }
               },
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/methods",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/methods/list",
               "type": "text/html"
           }
       }
   }
