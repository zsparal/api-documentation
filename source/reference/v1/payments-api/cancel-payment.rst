.. _v1/payments-cancel:

Payments API v1: Cancel payment
===============================
.. warning:: This is the documentation of the v1 API. The documentation for cancelling payments in the new v2 API can be
             found :ref:`here <v2/payments-cancel>`. For more information on the v2 API, refer to our
             :ref:`v2 migration guide <migrate-to-v2>`.

``DELETE`` ``https://api.mollie.com/v1/payments``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Some payment methods are cancellable for an amount of time, usually until the next day. Or as long as the payment status
is open. Payments may be cancelled manually from the Dashboard, or automatically by using this endpoint.

The ``canBeCancelled`` property on the :ref:`Payment object <v1/payments-get>` will indicate if the payment can be
cancelled.

Parameters
----------
Replace ``id`` in the endpoint URL by the payment's ID, for example ``tr_7UhSN1zuXS``.

Response
--------
``200`` ``application/json; charset=utf-8``

A payment object is returned, as described in :ref:`Get payment <v1/payments-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X DELETE https://api.mollie.com/v1/payments/tr_WDqYK6vllg \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "payment",
       "id": "tr_WDqYK6vllg",
       "mode": "test",
       "createdDatetime": "2018-03-16T14:30:07.0Z",
       "status": "cancelled",
       "cancelledDatetime": "2018-03-16T14:34:50.0Z",
       "amount": "35.07",
       "description": "Order 33",
       "method": "banktransfer",
       "metadata": {
           "order_id": "33"
       },
       "details": {
           "bankName": "Stichting Mollie Payments",
           "bankAccount": "NL53ABNA0627535577",
           "bankBic": "ABNANL2A",
           "transferReference": "RF12-3456-7890-1234"
       },
       "profileId": "pfl_QkEhN94Ba",
       "links": {
           "webhookUrl": "https://webshop.example.org/payments/webhook",
           "redirectUrl": "https://webshop.example.org/order/33/"
       }
   }
