.. _v1/mandates-list:

Mandates API v1: List mandates
==============================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/customers/*customerId*/mandates

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve all mandates of a customer.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

.. list-table::
   :widths: auto

   * - | ``offset``

       .. type:: integer
          :required: false

     - The number of mandates to skip.

   * - | ``count``

       .. type:: integer
          :required: false

     - The number of mandates to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to true to only retrieve test mode mandates.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``

       .. type:: integer
          :required: true

     - The total number of mandates available.

   * - | ``offset``

       .. type:: integer
          :required: true

     - The number of skipped mandates as requested.

   * - | ``count``

       .. type:: integer
          :required: true

     - The number of mandates found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``

       .. type:: array
          :required: true

     - An array of mandate objects as described in :ref:`Get mandate <v1/mandates-get>`.

   * - | ``links``

       .. type:: object
          :required: false

     - Links to help navigate through the lists of mandates, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``

              .. type:: string
                 :required: false

            - The previous set of mandates, if available.

          * - | ``next``

              .. type:: string
                 :required: false

            - The next set of mandates, if available.

          * - | ``first``

              .. type:: string
                 :required: false

            - The first set of mandates, if available.

          * - | ``last``

              .. type:: string
                 :required: false

            - The last set of mandates, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/customers/cst_8wmqcHMN4U/mandates \
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
               "resource": "mandate",
               "id": "mdt_pO2m5jVgMa",
               "status": "valid",
               "method": "directdebit",
               "customerId": "cst_8wmqcHMN4U",
               "details": {
                   "consumerName": "Hr E G H K\u00fcppers en\/of MW M.J. K\u00fcppers-Veeneman",
                   "consumerAccount": "NL53INGB0618365937",
                   "consumerBic": "INGBNL2A"
               },
               "createdDatetime": "2016-04-13T11:32:38.0Z"
           },
           {
               "resource": "mandate",
               "id": "mdt_qtUgejVgMN",
               "status": "valid",
               "method": "creditcard",
               "customerId": "cst_8wmqcHMN4U",
               "details": {
                   "cardHolder": "John Doe",
                   "cardNumber": "1234",
                   "cardLabel": "Mastercard",
                   "cardFingerprint": "fHB3CCKx9REkz8fPplT8N4nq",
                   "cardExpiryDate": "2016-03-31"
               },
               "createdDatetime": "2016-04-13T11:32:38.0Z"
           }
       ]
   }
