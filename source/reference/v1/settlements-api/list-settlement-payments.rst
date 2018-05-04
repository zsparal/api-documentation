.. _v1/settlements-get-payments:

Settlements API v1: Get settlement payments
===========================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/settlements/*settlementId*/payments

.. authentication::
   :api_keys: false
   :oauth: true

Retrieve all payments included in a settlement.

Parameters
----------
Replace ``settlementId`` in the endpoint URL by the settlement's ID, for example ``stl_jDk30akdN``.

This endpoint is an alias of the :ref:`List payments <v1/payments-list>` endpoint. All parameters for that endpoint can
be used here as well.

Response
--------
``200`` ``application/json; charset=utf-8``

This endpoint is an alias of the :ref:`List payments <v1/payments-list>` endpoint. The response is therefore the exact
same.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/settlements/stl_jDk30akdN/payments \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 280,
       "offset": 0,
       "count": 10,
       "data": [
           {
               "resource": "payment",
               "id": "tr_7UhSN1zuXS",
               "method": "ideal",
               "mode": "test",
               "createdDatetime": "2018-03-17T01:47:50.0Z"
               "status": "paid",
               "amount": "10.00",
               "description": "My first payment",
               "metadata": null,
               "profileId": "pfl_QkEhN94Ba",
               "customerId": "cst_4qqhO89gsT",
               "settlementId": "stl_jDk30akdN",
               "links": {
                   "settlement": "https://api.mollie.com/v1/settlements/stl_jDk30akdN",
                   "redirectUrl": "https://webshop.example.org/order/12345/"
               }
           },
           { },
           { }
       ],
       "links": {
           "first": "https://api.mollie.com/v1/settlements/stl_jDk30akdN/payments?count=10&offset=0",
           "previous": null,
           "next": "https://api.mollie.com/v1/settlements/stl_jDk30akdN/payments?count=10&offset=10",
           "last": "https://api.mollie.com/v1/settlements/stl_jDk30akdN/payments?count=10&offset=270"
       }
   }
