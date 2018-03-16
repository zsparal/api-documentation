.. _payment-status-changes:

Payment status changes
======================

Every possible payment status
-----------------------------
Depending on what happens payments go through a number of statuses. On this page we will first simply list and explain
them. Then we will show you how the statuses are connected.

``open``
    The payment has been created, but nothing else has happened yet. This is not a status Mollie will call your webhook
    for.

``cancelled``
    Your customer has cancelled the payment. This is a definitive status. Mollie will call your webhook when this status
    is reached.

``pending``
    This is a temporary status that can occur when the actual payment process has been started, but it's not complete
    yet. Nothing really needs to happen on your end when this status occurs. Mollie will not call your webhook when this
    status occurs.

``expired``
    The payment has expired. For some payment methods like ``banktransfer`` it can take a few days for this status to
    occur. This status is definitive and we will call your webhook when it occurs. How much time it takes for a payment
    to expire depends on the payment method. We explain this in more detail below.

``failed``
    The payment has failed and cannot be completed with a different payment method.

``paid``
    This status occurs whenever a payment is successfully paid. When this status occurs we'll call your webhook.

.. note:: In the ``v1`` API, there were statuses for when payments were refunded, charged back, or paid out (settled).
          These statuses have been removed in ``v2``. You can get the same information from other properties on the
          :ref:`Payment object <v2/payments-get>`.

How does one status lead to another?
------------------------------------
Please look at the below diagram. It tells you exactly when to expect what status:

.. image:: images/api-status-list@2x.png

When does a payment expire?
---------------------------
When your customer doesn't make an actual payment, the payment will at some point expire. After a certain expiry time an
``open`` payment will become ``expired``. This could happen when a consumer decides not to make a payment after all, and
abandons it. The expiry time is different for each payment method.

.. note:: It is not a good idea to predict payment expiry. Best wait until your webhook is called and fetch the status
          as usual. This is the most reliable way to keep your system in sync with Mollie, also in the case of expiring
          payments.
