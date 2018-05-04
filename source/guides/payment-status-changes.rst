.. _guides/payment-status-changes:

Payment status changes
======================

Every possible payment status
-----------------------------
Depending on what happens payments go through a number of statuses. On this page we will first simply list and explain
them. Then we will show you how the statuses are connected.

``open``
    The payment has been created, but nothing else has happened yet. This is not a status Mollie will call your
    :ref:`webhook <guides/webhooks>` for.

``canceled``
    Your customer has canceled the payment. This is a definitive status. Mollie will call your webhook when this status
    is reached.

    .. note:: In the ``v1`` API, this status was misspelled as ``cancelled``. This has been rectified in later versions.

``pending``
    This is a temporary status that can occur when the actual payment process has been started, but it's not complete
    yet. Nothing really needs to happen on your end when this status occurs. Mollie will not call your webhook when this
    status occurs.

``expired``
    The payment has expired, e.g. your customer has abandoned the payment.

    For some payment methods like ``banktransfer`` it can take a few days for this status to
    occur. This status is definitive and we will call your webhook when it occurs. How much time it takes for a payment
    to expire depends on the payment method. We explain this in more detail below.

``failed``
    The payment has failed and cannot be completed with a different payment method.

``paid``
    This status occurs whenever a payment is successfully paid. When this status occurs we will call your webhook.

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
 
Expiry times per payment method
------------------------------
iDEAL / paysafecard / SEPA Direct Debit All     of these payment methods have the same expiry time of 15 minutes.
Credit card    Payments of this payment method have an expiry time of about 30 minutes.
Bitcoin / Bancontact / SOFORT Banking / KBC/CBC Payment Button    Payments of these payment methods have expiry times of about one hour.
Belfius Pay Button / ING Home'Pay    Payments of these payment methods have expiry times of about 3 hours.
PayPal    Payments of these payment methods expire the next business day at 09:00 AM.
Bank transfer    12(+2) days. A payment by banktransfer the consumer must make manually. By wiring a certain amount into our account and using a certain payment reference we register the incoming payment. Mollie checks for these payments on a daily basis.
Some days can pass before it becomes clear a payment has been made. That's why a payment of the payment method banktransfer will not expire until 12 days have passed. One or two days can be added to this if 12 days after payment creation is a Sunday or a Saturday.
It's possible to set an alternative expiry date for bank transfer payments by using the ``dueDate parameter`` during payment creation.
