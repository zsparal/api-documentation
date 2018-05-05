.. _v2/settlements-list-refunds:

List settlement refunds
=======================
.. api-name:: Settlements API
   :version: 2

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v2/settlements/*settlementId*/refunds

.. authentication::
   :api_keys: false
   :oauth: true

Retrieve all refunds included in a settlement.

Parameters
----------
Replace ``settlementId`` in the endpoint URL by the settlement's ID, for example ``stl_jDk30akdN``.

This endpoint is an alias of the :ref:`List refunds <v2/refunds-list>` endpoint. All parameters for that endpoint can
be used here as well.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

This endpoint is an alias of the :ref:`List refunds <v2/refunds-list>` endpoint. The response is therefore the exact
same.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/settlements/stl_jDk30akdN/refunds \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "totalCount": 28,
       "offset": 0,
       "count": 10,
       "data": [
           {
               "id": "re_CkS3qkJ8Ny",
               "payment": {
                   "resource": "payment",
                   "id": "tr_2qkhcMzypH",
                   "mode": "live",
                   "createdDatetime": "2017-01-11T15:38:55.0Z",
                   "status": "refunded",
                   "paidDatetime": "2017-01-11T15:40:59.0Z",
                   "amount": "25.00",
                   "amountRefunded": "5.00",
                   "amountRemaining": "45.00",
                   "description": "Test payment 25 EU",
                   "method": "ideal",
                   "metadata": null,
                   "profileId": "pfl_D96wnsu869",
                   "links": {
                       "refunds": "http://api.mollie.com/v2/payments/tr_2qkhcMzypH/refunds",
                       "settlement": "http://api.mollie.com/v2/settlements/stl_QM8w7JDEhU"
                   },
                   "settlementId": "stl_QM8w7JDEhU"
               },
               "amount": "5.00",
               "status": "processing",
               "refundedDatetime": "2017-01-11T15:39:53.0Z",
               "description": "Test refund 5 EU",
               "links": {
                   "self": "http://api.mollie.com/v2/payments/tr_2qkhcMzypH/refunds/re_CkS3qkJ8Ny"
               }
           },
           { },
           { }
       ],
       "links": {
           "first": "https://api.mollie.com/v2/settlements/stl_QM8w7JDEhU/refunds?count=10&offset=0",
           "previous": null,
           "next": "https://api.mollie.com/v2/settlements/stl_QM8w7JDEhU/refunds?count=10&offset=10",
           "last": "https://api.mollie.com/v2/settlements/stl_QM8w7JDEhU/refunds?count=10&offset=20"
       }
   }
