.. _v1/issuers-list:

Issuers API v1: List issuers
============================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/issuers

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve all available iDEAL issuers. This endpoint enables you to integrate iDEAL's bank selection screen into your own
payment flow.

The Issuers API only supports iDEAL.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``offset``

       .. type:: integer
          :required: false

     - The number of issuers to skip.

   * - | ``count``

       .. type:: integer
          :required: false

     - The number of issuers to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to true to only retrieve the issuers available in test mode.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``

       .. type:: integer
          :required: true

     - The total number of issuers available.

   * - | ``offset``

       .. type:: integer
          :required: true

     - The number of skipped issuers as requested.

   * - | ``count``

       .. type:: integer
          :required: true

     - The number of issuers found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``

       .. type:: array
          :required: true

     - An array of issuer objects as described in :ref:`Get issuer <v1/issuers-get>`.

   * - | ``links``

       .. type:: object
          :required: false

     - Links to help navigate through the lists of issuers, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``

              .. type:: string
                 :required: false

            - The previous set of issuers, if available.

          * - | ``next``

              .. type:: string
                 :required: false

            - The next set of issuers, if available.

          * - | ``first``

              .. type:: string
                 :required: false

            - The first set of issuers, if available.

          * - | ``last``

              .. type:: string
                 :required: false

            - The last set of issuers, if available.

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
           },
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
           { },
           { }
       ]
   }
