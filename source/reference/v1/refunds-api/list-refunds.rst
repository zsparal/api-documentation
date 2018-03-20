.. _v1/refunds-list:

Methods API v1: List refunds
============================
``GET`` ``https://api.mollie.com/v1/refunds``

``GET`` ``https://api.mollie.com/v1/payments/*paymentId*/refunds``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve all refunds. If the payment-specific endpoint is used, only refunds for that specific payment are returned.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
When using the payment-specific endpoint, replace ``paymentId`` in the endpoint URL by the payment's ID, for example
``tr_7UhSN1zuXS``.

.. list-table::
   :widths: auto

   * - | ``offset``
       | integer
     - Optional – The number of refunds to skip.

   * - | ``count``
       | integer
     - Optional – The number of refunds to return (with a maximum of 250).

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``
       | integer
     - The total number of refunds available.

   * - | ``offset``
       | integer
     - The number of skipped refunds as requested.

   * - | ``count``
       | integer
     - The number of refunds found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``
       | array
     - An array of refund objects as described in :ref:`Get refund <v1/refunds-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of refunds, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of refunds, if available.

          * - | ``next``
              | string
            - Optional – The next set of refunds, if available.

          * - | ``first``
              | string
            - Optional – The first set of refunds, if available.

          * - | ``last``
              | string
            - Optional – The last set of refunds, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/payments/tr_7UhSN1zuXS/refunds \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 3,
       "offset": 0,
       "count": 3,
       "data": [
           {
               "id": "re_4qqhO89gsT",
               "payment": {
                   "id": "tr_WDqYK6vllg",
                   "mode": "test",
                   "createdDatetime": "2018-03-14T11:26:38.0Z",
                   "status": "refunded",
                   "amount": "35.07",
                   "amountRefunded": "5.95",
                   "amountRemaining": "54.12",
                   "description": "Order",
                   "method": "ideal",
                   "metadata": {
                       "order_id": "33"
                   },
                   "details": {
                       "consumerName": "Hr E G H K\u00fcppers en\/of MW M.J. K\u00fcppers-Veeneman",
                       "consumerAccount": "NL53INGB0654422370",
                       "consumerBic": "INGBNL2A"
                   },
                   "locale": "nl",
                   "links": {
                       "webhookUrl": "https://webshop.example.org/payments/webhook",
                       "redirectUrl": "https://webshop.example.org/order/33/",
                       "refunds": "https://api.mollie.com/v1/payments/tr_WDqYK6vllg/refunds"
                   }
               },
               "amount": "5.95",
               "status": "pending",
               "refundedDatetime": "2018-03-14T17:00:50.0Z",
               "description": "Refund of order",
               "links": {
                   "self": "https://api.mollie.com/v1/payments/tr_WDqYK6vllg/refunds/re_4qqhO89gsT"
               }
           },
           { ... },
           { ... }
       ]
   }
