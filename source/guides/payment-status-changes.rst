Payment status changes
======================

Every possible payment status
-----------------------------

Depending on what happens payments go through a number of statuses. On this page we will first simply list and explain
them. Then we will show you how the statuses are connected.

``open``
    The payment has been created, but nothing else has happened yet. This is not a status Mollie will call your webhook for.
``cancelled``
    Your customer has cancelled the payment. This is a definitive status. Mollie will call your webhook when this status
    is reached.

``pending``
    This is a temporary status that can occur when the actual payment process has been started, but it's not complete
    yet. Nothing really needs to happen on your end when this status occurs. Mollie will not call your webhook when
    this status occurs.

``expired``
    The payment has expired. For some payment methods like ``banktransfer`` it can take a few days for this status to
    occur. This status is definitive and we will call your webhook when it occurs. How much time it takes for a payment
    to expire depends on the payment method. We explain this in more detail below.

``failed``
    The payment has failed and cannot be completed with a different payment method. This status is used for failed
    ``directdebit`` payments for example.

``paid``
    This status occurs whenever a payment is successfully paid. When this status occurs we'll call your webhook.

``paidout``
    This status occurs for payments we've transferred to your bank account. We don't call your webhook when this status
    occurs.

``refunded``
    When you issue a refund for a payment, it gets this status. When this status occurs we call your webhook.

``charged_back``
    ``creditcard``, ``directdebit``, ``paypal`` and ``sofort`` provide your customers with the ability to dispute
    payments which could ultimately lead to a chargeback. You will find payments that have been charged back to have
    this status.


How does one status lead to another?
------------------------------------

Please look at the below diagram. It tells you exactly when to expect what status:

.. image:: images/api-status-list@2x.png

When does a payment expire?
---------------------------

When your customer doesn't make an actual payment, the payment will at some point expire. After a certain expiry time an
``open`` payment will become ``expired``. This could happen when a consumer decides not to make a payment after all, and
abandons it. The expiry time is different for each payment method.

Note that it's not a good idea to predict payment expiry. Best wait until your webhook is called and fetch the status as
usual. This is the most reliable way to keep your system in sync with Mollie, also in the case of expiring payments.