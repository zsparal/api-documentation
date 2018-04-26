.. _v2/settlements-get-payments:

Settlements API v2: Get settlement payments
===========================================
``GET`` ``https://api.mollie.com/v2/settlements/*settlementId*/payments``

Authentication: :ref:`OAuth access tokens <oauth/overview>`

Retrieve all payments included in a settlement.

Parameters
----------
Replace ``settlementId`` in the endpoint URL by the settlement's ID, for example ``stl_jDk30akdN``.

This endpoint is an alias of the :ref:`List payments <v2/payments-list>` endpoint. All parameters for that endpoint can
be used here as well.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

This endpoint is an alias of the :ref:`List payments <v2/payments-list>` endpoint. The response is therefore the exact
same.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/settlements/stl_jDk30akdN/payments?limit=5 \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "count": 5,
       "_embedded": {
           "payments": [
               {
                   "resource": "payment",
                   "id": "tr_7UhSN1zuXS",
                   "mode": "test",
                   "createdAt": "2018-02-12T11:58:35.0Z",
                   "expiresAt": "2018-02-12T12:13:35.0Z",
                   "status": "open",
                   "isCancelable": false,
                   "amount": {
                       "value": "75.00",
                       "currency": "GBP"
                   },
                   "description": "test",
                   "method": "ideal",
                   "metadata": null,
                   "details": null,
                   "profileId": "pfl_QkEhN94Ba",
                   "settlementId": "stl_jDk30akdN",
                   "redirectUrl": "https://webshop.example.org/order/12345/",
                   "_links": {
                       "checkout": {
                           "href": "https://www.mollie.com/paymentscreen/issuer/select/ideal/7UhSN1zuXS",
                           "type": "text/html"
                       },
                       "self": {
                           "href": "https://api.mollie.com/v2/payments/tr_7UhSN1zuXS",
                           "type": "application/hal+json"
                       }
                   }
               },
               { },
               { },
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/settlements/stl_jDk30akdN/payments?limit=5",
               "type": "application/hal+json"
           },
           "previous": null,
           "next": {
               "href": "https://api.mollie.com/v2/settlements/stl_jDk30akdN/payments?from=tr_SDkzMggpvx&limit=5",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/payments/list",
               "type": "text/html"
           }
       }
   }
