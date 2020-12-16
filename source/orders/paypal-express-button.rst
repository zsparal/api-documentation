Integrating PayPal Express Checkout button
==========================================

The PayPal Express Checkout button gives your consumers another way to pay, and it complements your
existing PayPal payment flow. It will provide an one-click solution without the need for asking the
billing and shipping addresses. This allows you to place the button on any page in your webshop, like
the product page.

The button
----------
We recommend you to use the button we provide in the `Mollie Resources <https://www.mollie.com/en/resources>`_
pack. This button is familiar for the consumer and improves the conversion. Of course its also possible
to design and use your own button.

Account requirements
--------------------
The button can be used when your account is fully setup at PayPal and Mollie. Make sure that your
account is a `PayPal Business account <https://www.paypal.com/us/webapps/mpp/referral/paypal-business-account2>`_
and that you linked your PayPal-account to Mollie as described in our
`help center article <https://help.mollie.com/hc/en-us/articles/213856625>`_.

Integration steps for the Orders API
------------------------------------
Using the button with the Orders API is simple, you can use your existing integration with only
some small tweaks. You can use the following steps as a guideline for the basic integration:

#. Place the button on the intended page, like a product page.

#. Your website :doc:`creates an order </reference/v2/orders-api/create-order>` via the Orders API.
   Make sure you set the method to ``paypal`` so that the ``billingAdress`` field is not required.

   .. warning:: The ``billingAddress`` stays required for every other method. If you set another
                method, or not method at all, your request will result in an HTTP status code
                ``422 Unprocessable Entity``.

#. Redirect your consumer to the ``checkout`` URL which you can find in the response of the Create Order
   API. He or she will select the address where the product(s) needs to be send to and completes the
   payment.

#. Mollie will receive the address from PayPal and adds it to the order. The consumer will be redirected
   back to your website while we call your webhook to inform you about the latest order state.

#. You can get the shipping address by calling the :doc:`Get order API </reference/v2/orders-api/get-order>`
   and finish your order to ship the product(s).
