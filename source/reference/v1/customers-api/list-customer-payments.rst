.. _v1/customers-list-payments:

Customers API v1: List customer payments
========================================
``GET`` ``https://api.mollie.com/v1/customers/*customerId*/payments``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve all payments linked to the customer.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

This endpoint accepts the same parameters as the :ref:`List payments <v1/payments-list>` endpoint.

Response
--------
``200`` ``application/json; charset=utf-8``

This endpoint returns results in the same format as the :ref:`List payments <v1/payments-list>` endpoint.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/customers/cst_8wmqcHMN4U/payments \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

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
               "mode": "test",
               "createdDatetime": "2018-03-16T17:09:01.0Z",
               "status": "open",
               "expiryPeriod": "PT15M",
               "amount": "10.00",
               "description": "My first payment",
               "metadata": {
                   "order_id": "12345"
               },
               "locale": "nl",
               "profileId": "pfl_QkEhN94Ba",
               "customerId": "cst_8wmqcHMN4U",
               "links": {
                   "redirectUrl": "https://webshop.example.org/order/12345/"
               }
           },
           { ... },
           { ... }
       ],
       "links": {
           "first": "https://api.mollie.com/v1/payments?count=10&offset=0",
           "previous": null,
           "next": "https://api.mollie.com/v1/payments?count=10&offset=10",
           "last": "https://api.mollie.com/v1/payments?count=10&offset=270"
       }
   }
