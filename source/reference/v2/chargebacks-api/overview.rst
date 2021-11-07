Chargebacks API
===============
For credit payment methods such as credit card and SEPA Direct Debit, consumers are able to file a dispute and initiate
a chargeback. If the card issuer or bank accepts the chargeback, the money will be reclaimed and deducted from your
Mollie balance.

The Chargebacks API allows you to retrieve details on the chargebacks that took place on your account.

As soon as we receive notification of a chargeback, we will notify you both via a webhook and via email. Depending on
the nature of the chargeback, there will be an opportunity to respond to this notification.

For more information on dealing with chargebacks, please refer to our
`knowledge base <https://help.mollie.com/hc/en-us/articles/115001470869-What-are-chargebacks->`_.

Endpoints
---------
.. endpoint-card::
   :name: Get payment chargeback
   :method: GET
   :url: /v2/payments/*paymentId*/chargebacks/*id*
   :ref: /reference/v2/chargebacks-api/get-payment-chargeback

   Retrieve a specific payment chargeback.

.. endpoint-card::
   :name: List payment chargebacks
   :method: GET
   :url: /v2/payments/*paymentId*/chargebacks
   :ref: /reference/v2/chargebacks-api/list-payment-chargebacks

   Retrieve a list of all chargebacks filed for a specific payment.

.. endpoint-card::
   :name: List chargebacks
   :method: GET
   :url: /v2/chargebacks
   :ref: /reference/v2/chargebacks-api/list-chargebacks

   Retrieve a list of all chargebacks.
