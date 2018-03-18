.. _v1/issuers-list:

Issuers API v1: List issuers
============================
``GET`` ``https://api.mollie.com/v1/issuers``

Authentication: :ref:`API keys <guides/authentication>`. :ref:`OAuth access tokens <oauth/overview>`

Retrieve all available iDEAL issuers. This endpoint enables you to integrate iDEAL's bank selection screen into your own
payment flow.

The Issuers API only supports iDEAL.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``offset``
       | integer
     - Optional – The number of issuers to skip.

   * - | ``count``
       | integer
     - Optional – The number of issuers to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``testmode``
       | boolean
     - Optional – Set this to true to only retrieve the issuers available in test mode.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``totalCount``
       | integer
     - The total number of issuers available.

   * - | ``offset``
       | integer
     - The number of skipped issuers as requested.

   * - | ``count``
       | integer
     - The number of issuers found in data, which is either the requested number (with a maximum of 250) or the default
       number.

   * - | ``data``
       | array
     - An array of issuer objects as described in :ref:`Get issuer <v1/issuers-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of issuers, based on the given offset.

       .. list-table::
          :header-rows: 0
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of issuers, if available.

          * - | ``next``
              | string
            - Optional – The next set of issuers, if available.

          * - | ``first``
              | string
            - Optional – The first set of issuers, if available.

          * - | ``last``
              | string
            - Optional – The last set of issuers, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/issuers \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 9,
       "offset": 0,
       "count": 9,
       "data": [
           {
               "resource": "issuer",
               "id": "ideal_ABNANL2A",
               "name": "ABN AMRO",
               "method": "ideal",
               "image": {
                   "normal": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ABNANL2A.png",
                   "bigger": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ABNANL2A%402x.png"
               }
           {
               "resource": "issuer",
               "id": "ideal_ASNBNL21",
               "name": "ASN Bank",
               "method": "ideal",
               "image": {
                   "normal": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ASNBNL21.png",
                   "bigger": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ASNBNL21%402x.png"
               }
           },
           {
               "resource": "issuer",
               "id": "ideal_INGBNL2A",
               "name": "ING",
               "method": "ideal",
               "image": {
                   "normal": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/INGBNL2A.png",
                   "bigger": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/INGBNL2A%402x.png"
               }
           },
           { ... },
           { ... }
       ]
   }
