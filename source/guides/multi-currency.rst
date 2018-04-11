.. _guides/multi-currency:

Multi-currency
==============
Mollie offers payments in non-EUR currencies via its ``v2`` APIs. This allows your shoppers outside of the
Eurozone to pay in their own currency. The payments will be settled to your account in ``EUR``. Mollie will take care of
the conversion. You can retrieve the settlement amount via the API or view it in your
`Dashboard <https://www.mollie.com/dashboard>`_.

When creating a payment in a non-EUR currency, we will immediately give you the amount we will settle in the API
response.

Creating payments in a different currency than ``EUR`` is only possible via the ``v2`` API. Review the
:ref:`Payments API reference <v2/payments-create>` for more information.

Supported currencies
--------------------
Support for other currencies than ``EUR`` varies per payment method.

* For PayPal, `all currencies supported by PayPal <https://developer.paypal.com/docs/classic/api/currency_codes/>`_ are
  also supported by Mollie.
* For credit card, the list of supported currencies will be added here soon.
