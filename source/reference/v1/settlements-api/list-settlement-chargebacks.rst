.. _v1/settlements-get-chargebacks:

Settlements API v1: Get settlement chargebacks
==============================================
``GET`` ``https://api.mollie.com/v1/settlements/*settlementId*/chargebacks``

Authentication: :ref:`OAuth access tokens <oauth/overview>`

Retrieve all chargebacks included in a settlement.

Parameters
----------
Replace ``settlementId`` in the endpoint URL by the settlement's ID, for example ``stl_jDk30akdN``.

This endpoint is an alias of the :ref:`List chargebacks <v1/chargebacks-list>` endpoint. All parameters for that
endpoint can be used here as well.

Response
--------
``200`` ``application/json; charset=utf-8``

This endpoint is an alias of the :ref:`List chargebacks <v1/chargebacks-list>` endpoint. The response is therefore the
exact same.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/settlements/stl_jDk30akdN/chargebacks \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 28,
       "offset": 0,
       "count": 10,
       "data": [
           {
               "resource": "chargeback",
               "id": "chb_n9z0tp",
               "payment": "tr_2qkhcMzypH",
               "amount": "25.00",
               "chargebackDatetime": "2017-01-11T15:39:53.0Z",
               "reversedDatetime": null,
               "links": {
                   "self": "https://api.mollie.com/v1/payments/tr_2qkhcMzypH/chargebacks/chb_n9z0tp"
               }
           },
           { ... },
           { ... }
       ],
       "links": {
           "first": "https://api.mollie.com/v1/settlements/stl_QM8w7JDEhU/chargebacks?count=10&offset=0",
           "previous": null,
           "next": "https://api.mollie.com/v1/settlements/stl_QM8w7JDEhU/chargebacks?count=10&offset=10",
           "last": "https://api.mollie.com/v1/settlements/stl_QM8w7JDEhU/chargebacks?count=10&offset=20"
       }
   }
