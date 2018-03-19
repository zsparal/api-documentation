.. _v1/settlements-list:

Settlements API v1: List settlements
====================================
``GET`` ``https://api.mollie.com/v1/settlements``

Authentication: :ref:`OAuth access tokens <oauth/overview>`

Retrieve all settlements, ordered from new to old.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``reference``
       | string
     - Optional – Use this parameter to filter for a settlement with a specific reference. The reference is visible on
       your bank statement and in emails. An example reference would be ``1182161.1506.02``.

   * - | ``offset``
       | integer
     - Optional – The number of payment profiles to skip.

   * - | ``count``
       | integer
     - Optional – The number of payment profiles to return (with a maximum of 250).

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``
       | integer
     - The total number of settlements available.

   * - | ``offset``
       | integer
     - The number of skipped settlements as requested.

   * - | ``count``
       | integer
     - The number of settlements found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``
       | array
     - An array of settlement objects as described in :ref:`Get settlement <v1/settlements-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of settlements, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of settlements, if available.

          * - | ``next``
              | string
            - Optional – The next set of settlements, if available.

          * - | ``first``
              | string
            - Optional – The first set of settlements, if available.

          * - | ``last``
              | string
            - Optional – The last set of settlements, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/settlements \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

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
               "resource": "settlement",
               "id": "stl_jDk30akdN",
               "reference": "123456.1501.02",
               "settledDatetime": "2015-01-09T07:00:00.0Z",
               "amount": "994.55",
               "periods": {
                   "2015": {
                       "01": {
                           "revenue": [
                               {
                                   "description": "iDEAL",
                                   "method": "ideal",
                                   "count": 3,
                                   "amount": {
                                       "net": "100.0000",
                                       "vat": null,
                                       "gross": "100.0000"
                                   }
                               }
                           ],
                           "costs": [
                               {
                                   "description": "iDEAL",
                                   "method": "ideal",
                                   "count": 3,
                                   "amount": {
                                       "net": "4.5000",
                                       "vat": "0.9450",
                                       "gross": "5.4450"
                                   }
                               }
                           ]
                       }
                   }
               },
               "paymentIds": [
                   "tr_RpAwK4A7dg",
                   "tr_V22Ek4ttj5",
                   "tr_ReitZQReAz"
               ]
           },
           {
               "resource": "settlement",
               "id": "stl_pAd3Vq83",
               "reference": "123456.1501.01",
               "settledDatetime": "2015-01-02T07:00:00.0Z",
               "amount": "993.58",
               "periods": {
                   "2015": {
                       "01": {
                           "revenue": [
                               {
                                   "description": "Creditcard",
                                   "method": "creditcard",
                                   "count": 10,
                                   "amount": {
                                       "net": "100.0000",
                                       "vat": null,
                                       "gross": "100.0000"
                                   }
                               }
                           ],
                           "costs": [
                               {
                                   "description": "Creditcard",
                                   "method": "creditcard",
                                   "count": 10,
                                   "rate": {
                                       "fixed": "0.25",
                                       "percent": null
                                   },
                                   "amount": {
                                       "net": "2.5000",
                                       "vat": "0.5250",
                                       "gross": "3.0250"
                                   }
                               },
                               {
                                   "description": "Creditcard vaste transactiekosten",
                                   "method": "creditcard",
                                   "count": 10,
                                   "rate": {
                                       "fixed": null,
                                       "percent": "2.80"
                                   },
                                   "amount": {
                                       "net": "2.8000",
                                       "vat": "0.5880",
                                       "gross": "3.3880"
                                   }
                               }
                           ]
                       }
                   }
               },
               "paymentIds": [
                   "tr_s3cMndA7dg",
                   "tr_Vs3cPTdtj5",
                   "tr_Q3cEnMReAz",
                   ...
               ]
           },
           { ... },
           { ... }
       ],
       "links": {
           "first": "https://api.mollie.com/v1/settlements?count=10&offset=0",
           "previous": null,
           "next": "https://api.mollie.com/v1/settlements?count=10&offset=10",
           "last": "https://api.mollie.com/v1/settlements?count=10&offset=20"
       }
   }
