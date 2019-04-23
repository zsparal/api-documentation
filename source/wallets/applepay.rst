Apple Pay
=========

**Apple Pay** is a digital wallet service by Apple Inc. that allows shoppers to make purchases with credit or debit cards
stored on their Apple devices.

.. note:: Apple Pay is only available in a `limited number of countries
          <https://www.apple.com/ios/feature-availability/#apple-pay>`_. This limitation applies to the shopper's
          country and not the merchant's.

Accepting Apple Pay via Mollie
------------------------------

In order to accept Apple Pay via Mollie, you need:

#. The payment method `credit card <https://www.mollie.com/creditcard>`_ must be enabled on your website profile;
#. You must enable Apple Pay on your website profile in the Dashboard.

Shoppers using an Apple device with Apple Pay configured will automatically be offered Apple Pay in the :doc:`Mollie
Checkout </guides/checkout>`. Additionally, limited support for integrating Apple Pay in your own checkout is available.

Using the Mollie Checkout
-------------------------

If you are using the Mollie Checkout and the :doc:`Create Payment API </reference/v2/payments-api/create-payment>`
without the ``method`` parameter, the Apple Pay button will be shown in the checkout during method selection:

.. note :: add picture here

Integrating in your own check out
---------------------------------

At the moment, only limited support for integrating Apple Pay in your own checkout is available.

First, you must indicate to the :doc:`List Methods API </reference/v2/methods-api/list-methods>` which wallets you
support in your checkout by adding the ``includeWallets=applepay`` parameter.

.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/methods?includeWallets=applepay \
      -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

If Apple Pay is enabled on the website profile, a method with the id ``applepay`` will be returned in the list of
payment methods.

.. note :: Apple Pay should only be shown if it is available on the device, hence the need to indicate your support.

Then, during checkout, you should check if the Apple Pay method is available on the shopper's device by using the
``canMakePayments`` method on the ``window.ApplePaySession`` object. For more details, see the `article by Apple
<https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api/checking_for_apple_pay_availability>`_.

.. code-block:: javascript
   :linenos:

   if (window.ApplePaySession && window.ApplePaySession.canMakePayments()) {
     // Add ApplePay to the method selection in your checkout
   }

Finally, when the shopper selects Apple Pay from your method selection, you should use the Create Payment API to create
a payment with the ``method`` parameter set to ``applepay`` and redirect the shopper to the ``_links.checkout`` URL
returned.

When the shopper authorizes the payment, a payment with the method ``creditcard`` will be created. We will then call your
:doc:`webhook </guides/webhooks>` and redirect the shopper back to your webshop as normal.