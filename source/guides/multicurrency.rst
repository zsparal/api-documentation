.. _multi-currency:

Multi currency
==============

Mollie offers payments in non-EUR currencies via it's ``v2`` APIs. This allows you to serve shoppers outside of the
Eurozone in their own currencies.  The payments will be settled to your account in ``EUR``. Mollie will take care of the
conversion. You can retrieve the settlement amount via the API or view it in your `Dashboard <https://www.mollie.com/dashboard>`_.

Creating payments in another currency than ``EUR`` is only possible via the ``v2`` API. Review the reference guide on
:ref:`Create Payment <v2/payment-create>` to learn how.

Supported currencies
--------------------

Support for other currencies than ``EUR`` varies per payment method.

* For PayPal, `all currencies supported by PayPal <https://developer.paypal.com/docs/classic/api/currency_codes/>`_ are
  also supported by Mollie.
* For credit card, Mollie supports charging shoppers in ... (todo)