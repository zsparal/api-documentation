.. _v2/refunds-create:

Refunds API v2: Create refund
=============================

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v1/payments/*id*/refunds

.. authentication::
   :api_keys: true
   :oauth: true

Most payment methods support refunds. This means you can request your payment to be refunded to the consumer. The amount
of the refund will be withheld from your next settlement.

Refunds are not available at all for Bitcoin, paysafecard and gift cards. If you need to refund direct debit payments,
please contact our support department.

Refunds support descriptions, which we will show in the Dashboard, your exports and pass to the consumer if possible.

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
   :widths: auto

   * - | ``amount``

       .. type:: amount object
          :required: false

     - The amount to refund. For some payments, it can be up to €25.00 more than the original transaction amount.

       .. list-table::
          :widths: auto

          * - | ``currency``

              .. type:: string
                 :required: true

            - An `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code. The currency must be the same as
              the corresponding payment.

          * - | ``value``

              .. type:: string
                 :required: true

            - A string containing the exact amount you want to refund in the given currency. Make sure to send the right
              amount of decimals. Non-string values are not accepted.

   * - | ``description``

       .. type:: string
          :required: false

     - The description of the refund you are creating. This will be shown to the consumer on their card or
       bank statement when possible. Max. 140 characters.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to refund a test mode payment.

Response
--------
``201`` ``application/hal+json; charset=utf-8``

A refund object is returned, as described in :ref:`Get refund <v2/refunds-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X POST https://api.mollie.com/v2/payments/tr_WDqYK6vllg/refunds \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d "{\"amount\":{\"currency\":\"EUR\",\"value\":\"5.95\"}}" # Optional amount.

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 201 Created
   Content-Type: application/hal+json; charset=utf-8

   {
       "resource": "refund",
       "id": "re_4qqhO89gsT",
       "amount": {
           "currency": "EUR",
           "value": "5.95"
       },
       "status": "pending",
       "createdAt": "2018-03-14T17:09:02.0Z",
       "description": "Order",
       "paymentId": "tr_WDqYK6vllg",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg/refunds/re_4qqhO89gsT",
               "type": "application/hal+json"
           },
           "payment": {
               "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/refunds/create",
               "type": "text/html"
           }
       }
   }
