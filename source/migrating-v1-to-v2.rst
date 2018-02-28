Migrating from v1 to v2
=======================

Why upgrade to v2?
----------------------

The Mollie API ``v2`` offers some compelling new features compared to the older ``v1`` API:

* Fully supports multi-currency, e.g. you can create payments in non ``EUR`` currencies.
* Improved support for accessing large sets of objects, now uses cursor based pagination instead of count and offset
  based pagination.

Changes in v2
-------------

Amount changes
^^^^^^^^^^^^^^

All amounts in the API are passed as a map containing both a ``currency`` and a ``value`` property, for example::

 {
   "amount": {
     "currency": "EUR",
     "value": "10.00"
   }
 }

This would mean an amount of €10.00.

Note that if you specify an amount, you must specify the correct number of decimals. We strongly recommend sending
``value`` as a string.

All amounts returned in the ``v2`` API will use this format.

Status field changes
^^^^^^^^^^^^^^^^^^^^

The statuses ``paidout``, ``refunded`` and ``charged_back`` have been removed.

If you want to see if a payment has been paid out, it will contain the ``settlementId`` property.

If you want to see if a payment has any refunds, the payment will have the ``refunds`` key in the ``_links`` property,
which will point you to the refunds resource where you can view the refund details.

If you want to see if a payment has any chargebacks, the payment will have the ``chargebacks`` key in the ``_links``
property, which will point you to the chargeback resource where you can view the refund details.

Renamed fields
^^^^^^^^^^^^^^

* ``cancelledDatetime`` has been renamed to ``cancelledAt``.
* ``createdDatetime`` has been renamed to ``createdAt``.
* ``expiredDatetime`` has been renamed to ``expiredAt``.
* ``failedDatetime`` has been renamed to ``failedAt``.
* ``paidDatetime`` has been renamed to ``paidAt``.
* ``recurringType`` has been renamed to ``sequenceType``.

Locale changes
^^^^^^^^^^^^^^

Only full locales with both the language and the country code are supported, e.g. `nl_NL`.