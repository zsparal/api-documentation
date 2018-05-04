.. _guides/multi-currency:

Multi-currency
==============
Mollie offers payments in non-EUR currencies via its ``v2`` APIs. This allows your shoppers outside of the
Eurozone to pay in their own currency. The payments will be settled to your account in ``EUR``. Mollie will take care of
the conversion. You can retrieve the settlement amount via the API or view it in your
`Dashboard <https://www.mollie.com/dashboard>`_.

When creating a payment in a non-EUR currency, we will immediately give you the amount we will settle in the API
response.

Creating payments, refunds or subscriptions in a different currency than ``EUR`` is only possible via the ``v2`` API.
Review the :ref:`Payments API reference <v2/payments-create>` for more information.

Supported currencies
--------------------
For PayPal, `all currencies supported by PayPal <https://developer.paypal.com/docs/classic/api/currency_codes/>`_ are
also supported by Mollie.

Support for other currencies than ``EUR`` varies per payment method.

==================== ======== ===================
Currency             ISO code  Payment methods
==================== ======== ===================
Australian dollar    ``AUD``  PayPal, credit card
Bulgarian lev        ``BGN``  Credit card
Canadian dollar      ``CAD``  PayPal, credit card
Swiss franc          ``CHF``  PayPal, credit card
Czech koruna         ``CZK``  PayPal, credit card
Danish krone         ``DKK``  PayPal, credit card
Euro                 ``EUR``  All payment methods
British pound        ``GBP``  PayPal, credit card
Hong Kong dollar     ``HKD``  PayPal, credit card
Croatian kuna        ``HRK``  Credit card
Hungarian forint     ``HUF``  PayPal, credit card
Israeli new shekel   ``ILS``  PayPal, credit card
Icelandic króna      ``ISK``  Credit card
Japanese yen         ``JPY``  PayPal, credit card
Mexican peso         ``MXN``  PayPal
Norwegian krone      ``NOK``  PayPal
New Zealand dollar   ``NZD``  PayPal
Philippine piso      ``PHP``  PayPal
Polish złoty         ``PLN``  PayPal, credit card
Romanian leu         ``RON``  Credit card
Russian ruble        ``RUB``  PayPal
Singapore dollar     ``SGD``  PayPal
Swedish krona        ``SEK``  PayPal, credit card
New Taiwan dollar    ``TWD``  PayPal
Thai baht            ``THB``  PayPal
United States dollar ``USD``  PayPal, credit card
==================== ======== ===================
