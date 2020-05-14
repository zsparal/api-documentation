Integrating meal vouchers
=========================

.. note:: Meal vouchers are currently in a closed beta. When you are interesting in using this payment
          method, please reach out to us.

A meal voucher is a voucher for a meal given to employees as an employee benefit, allowing them to
eat at outside restaurants, typically for lunch. In many countries, meal vouchers had favorable tax
treatment. Vouchers are typically in the form of paper tickets but are gradually being replaced
by electronic vouchers in the form of a special payment card. It's possible to accept these cards
via Mollie.

Supported brands
----------------
At the moment, the following brands are supported by Mollie:

* Appetiz
* Cadeau Pass
* Chèque Déjeuner
* Eco Pass
* Lunch Pass
* Monizze
* PassRestaurant
* Swile

Contracting and settlement
--------------------------
In order to use meal vouchers as a payment method, you should have a contract with the owner of the
brand(s) you want to accept. For example, with Sodexo Belgium for Lunch Pass. Once you have a contract,
you can activate the brand via the `Mollie Dashboard <https://www.mollie.com/dashboard>`_`. Enter
your contract ID and enable the brand(s) of the brand owner(s) you want to provide.

In contrast to other payment methods such as iDEAL or credit card, Mollie does not handle settlement
on your behalf. Settlement is handled by the brand owner, like Sodexo Belgium.

Integration via the Orders API
------------------------------
Meal vouchers are only available as payment method via the :doc:`Orders API </reference/v2/orders-api/create-order>`
since meal vouchers can only be used for eligible products. Therefor you should include the ``category``
parameter for all your order lines. We will calculate the eligible amount based on this parameter.
If you do not specify the ``category`` for at least one order line, the meal voucher method will not
be available.

Canceled and abandoned payments
-------------------------------
If the customer cancels or abandons the payment after partially paying with one or more meal vouchers,
the amount paid with the vouchers will **not** be refunded due to the limitation set by the brand
issuers. You will still receive the money and should handle a refund by yourself.

Refunds
-------
You cannot perform any meal voucher refunds due to the limitation set by the brand issuers. However,
if another payment method was used during the checkout, you can refund the part paid with the other
payment method.
