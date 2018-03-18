.. _overview:

Welcome to Mollie's public API documentation!
=============================================

Mollie API: simple & powerful
-----------------------------
Use the Mollie API to integrate online payments by Mollie directly into your website or app. Mollie and your website
will communicate by sending HTTP requests back and forth.

This page provides an overview of the Mollie API. The topics in the chapter deal with a number of specific aspects of
the API. We recommend to read these topics entirely.

If possible it would be wise to leave communication at this level to our ready-made :ref:`Clients <clients>`. This
allows you to still be in control without reinventing the wheel.

.. _clients:

Clients, modules and plugins
----------------------------
Well begun is half done. Save time and build on solid foundations. Mollie API clients are available for
`PHP <https://github.com/mollie/mollie-api-php>`_, `Ruby <https://github.com/mollie/mollie-api-ruby>`_,
`Node.js <https://github.com/mollie/mollie-api-node>`_ and `Python <https://github.com/mollie/mollie-api-python>`_.

Of course we also provide modules and plugins for about every web shop software out there.

Payment methods
---------------
Mollie is always adding new payment methods. The Mollie API currently supports these payments methods:

* `Bancontact <https://www.mollie.com/en/payments/bancontact>`_
* `Bank transfer <https://www.mollie.com/en/payments/bank-transfer>`_
* `Belfius Pay Button <https://www.mollie.com/en/payments/belfius>`_
* `Bitcoin <https://www.mollie.com/en/payments/bitcoin>`_
* `Credit card <https://www.mollie.com/en/payments/credit-card>`_ (VISA, MasterCard, Maestro and American Express)
* `SEPA Direct Debit <https://www.mollie.com/en/payments/direct-debit>`_
* `Gift cards <https://www.mollie.com/en/payments/gift-cards>`_ (Webshop Giftcard, Podium Cadeaukaart, VVV Cadeaukaart,
  YourGift etc.)
* `iDEAL <https://www.mollie.com/en/payments/ideal>`_
* `ING Home'Pay <https://www.mollie.com/en/payments/ing-homepay>`_
* `KBC/CBC Payment Button <https://www.mollie.com/en/payments/kbc-cbc>`_
* `PayPal <https://www.mollie.com/en/payments/paypal>`_
* `paysafecard <https://www.mollie.com/en/payments/paysafecard>`_
* `SOFORT Banking <https://www.mollie.com/en/payments/sofort>`_

All of the payment methods you have enabled are – where relevant – shown to the consumer. You can enable payment methods
using the `Dashboard <https://www.mollie.com/dashboard>`_.

How does the Mollie API work?
-----------------------------
.. image:: guides/images/api-overview-flow@2x.png

#. A customer on your website decides to checkout.

#. Your website :ref:`creates a payment <v2/payments-create>` on the Mollie platform by calling the Mollie API with the
   amount, a payment description and a URL we should redirect the customer to after the payment is made.

   The API responds with the unique id and the ``_links.checkout`` URL for the newly created payment. Your website
   stores the ``id``, links it to the customer's order and redirects the customer to the URL in the ``checkout``
   property from the Mollie API response. This is the URL to the payment screen for this specific payment.

#. The customer reaches the :ref:`checkout <guides/checkout>`, chooses a payment method and makes the payment. This
   process is entirely taken care of by Mollie. You don't need to do anything here.

#. When the payment is made Mollie will call your webhook informing your website about the payment's status change. You
   should define one when creating the payment.

   In response to you webhook being called your website just needs to issue a ``200 OK`` status. From that response
   Mollie can tell that your processing the new status was successful – for any other response we keep trying.

#. Processing the webhook request your website fetches the payment status using the Mollie API. This fetched status
   serves to mark the order as paid, trigger fulfilment and send out an email confirmation to the customer.

#. At this point Mollie returns the visitor to your website using the ``redirectUrl`` specified when the payment was
   created. Your website knows the payment was successful and thanks the customer.

Connecting orders and payments
------------------------------
In the example above we suppose you will store the ``id`` that's unique to the payment in your order table. This way
your website is able to look-up the order for this payment when the webhook is triggered by Mollie. Your website is
keeping track of the payment, effectively bringing about the connection between order and payment. This approach is
easiest to grasp, which is why we use it in our example.

Alternatively you could ask Mollie to remember the unique identifier of your order by instructing the Mollie API to
store it in the payment's ``metadata``. You would provide it while creating the payment. In our example ``order_id``
would be a good candidate. Mollie stores the metadata for you, when you fetch the payment during processing the webhook
the metadata is included in the response. This is another way to connect orders and payments. We advise to use the
``metadata`` approach. This is the most popular approach and it's easiest to implement.

Overview
========
.. toctree::
   :hidden:

   Mollie API <self>
   security
   migrating-v1-to-v2

.. toctree::
   :maxdepth: 1
   :caption: Guides

   guides/authentication
   guides/handling-errors
   guides/pagination
   guides/webhooks
   guides/payment-status-changes
   guides/checkout
   guides/recurring
   guides/multi-currency
   guides/gift-cards
   guides/qr-codes

.. toctree::
   :maxdepth: 1
   :caption: Mollie Connect

   Overview <oauth/overview>
   Getting started <oauth/getting-started>
   Permissions <oauth/permissions>

API v1 Reference
================
.. toctree::
   :maxdepth: 1
   :caption: Payments API v1

   Create payment <reference/v1/payments-api/create-payment>
   Get payment <reference/v1/payments-api/get-payment>
   Cancel payment <reference/v1/payments-api/cancel-payment>
   List payments <reference/v1/payments-api/list-payments>

.. toctree::
   :maxdepth: 1
   :caption: Methods API v1

   Get payment method <reference/v1/methods-api/get-method>
   List payment methods <reference/v1/methods-api/list-methods>

.. toctree::
   :maxdepth: 1
   :caption: Issuers API v1

   Get issuer <reference/v1/issuers-api/get-issuer>
   List issuers <reference/v1/issuers-api/list-issuers>

.. toctree::
   :maxdepth: 1
   :caption: Refunds API v1

   Create refund <reference/v1/refunds-api/create-refund>
   Get refund <reference/v1/refunds-api/get-refund>
   Cancel refund <reference/v1/refunds-api/cancel-refund>
   List refunds <reference/v1/refunds-api/list-refunds>

.. toctree::
   :maxdepth: 1
   :caption: Chargebacks API v1

   Get chargeback <reference/v1/chargebacks-api/get-chargeback>
   List chargebacks <reference/v1/chargebacks-api/list-chargebacks>

API v2 Reference
================
.. toctree::
   :maxdepth: 1
   :caption: Payments API v2

   reference/v2/create-payment
   reference/v2/get-payment

Indices and tables
==================
* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
