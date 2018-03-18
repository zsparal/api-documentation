.. _v1/refunds-create:

Refunds API v1: Create refund
=============================
``POST`` ``https://api.mollie.com/v1/payments/*id*/refunds``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Most payment methods support refunds. This means you can request your payment to be refunded to the consumer. The amount
of the refund will be withheld from your next settlement.

Refunds are not available at all for Bitcoin, paysafecard and gift cards. If you need to refund direct debit payments,
please contact our support department.

By supplying the optional ``amount`` parameter, you can issue a partial refund where the consumer is only refunded a
fraction of the total payment. It is also possible to refund up to €25.00 more than the original transaction amount,
for example to refund costs for returnment shipping.

Refunds support ``description``s, which we will show in the dashboard, your exports and pass to the consumer if
possible.

If you have insufficient balance with Mollie to perform the refund, the refund will be ``queued``. We will automatically
process the refund once your balance increases.

Possible errors
---------------
Sometimes a situation can occur in which it is not possible to perform the refund. In such cases an HTTP ``4xx`` error
will be returned. Some of these situations are illustrated here:

* There might not be enough balance on your account with the payment provider (e.g. PayPal).
* You may have forgotten to grant the appropriate rights to Mollie for the payment provider (PayPal only).
* It is possible that the payment has already been (partially) refunded either directly through Mollie or through the
  payment provider (e.g. PayPal).
* If your account with the payment provider is not set up correctly, it might be possible that Mollie is not
  authenticated to perform refunds for that specific payment method.
* It is not always possible to do a partial refund.

If you perform many refunds in parallel, you may get an HTTP ``503 Service unavailable`` error. In this case, you can be
certain the refund was not performed and you can safely retry the refund.

If there is a connection issue during the creation of a refund (e.g. a client-side time out is triggered) you should
**not retry automatically** as you cannot be sure the refund has been performed or not. In this case we suggest logging
into the Mollie Dashboard, or retrieving the payment's refunds via the API to validate if the refund has been created.

Parameters
----------
Replace ``id`` in the endpoint URL by the payment's ID, for example ``tr_7UhSN1zuXS``.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``amount``
       | decimal
     - Optional – The amount to refund. When ommitted, the full amount is refunded. Can be up to €25.00 more than the
       original transaction amount.

   * - | ``description``
       | string
     - Optional – The description of the refund you are creating. This will be shown to the consumer on their card or
       bank statement when possible. Max. 140 characters.

Mollie Connect/OAuth parameters
-------------------------------
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to refund a test mode payment.

Response
--------
``201`` ``application/json; charset=utf-8``

A refund object is returned, as described in :ref:`Get refund <v1/refunds-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X POST https://api.mollie.com/v1/payments/tr_WDqYK6vllg/refunds \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d "amount=5.95" # Optional amount, if no amount is provided the total payment amount will be refunded

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 201 Created
   Content-Type: application/json; charset=utf-8

   {
       "id": "re_4qqhO89gsT",
       "payment": {
           "id": "tr_WDqYK6vllg",
           "mode": "test",
           "createdDatetime": "2018-03-14T12:10:57.0Z",
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
       "description: "Order",
       "refundedDatetime": "2018-03-14T17:09:02.0Z"
   }
