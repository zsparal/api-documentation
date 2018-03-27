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
   guides/common-data-types

.. toctree::
   :maxdepth: 1
   :caption: Mollie Connect

   Overview <oauth/overview>
   Getting started <oauth/getting-started>
   Permissions <oauth/permissions>

Payments
========
.. toctree::
   :maxdepth: 1
   :caption: Payments API

   Create payment <reference/v2/payments-api/create-payment>
   Get payment <reference/v2/payments-api/get-payment>
   Cancel payment <reference/v2/payments-api/cancel-payment>
   List payments <reference/v2/payments-api/list-payments>

.. toctree::
   :maxdepth: 1
   :caption: Methods API

   Get payment method <reference/v2/methods-api/get-method>
   List payment methods <reference/v2/methods-api/list-methods>

.. toctree::
   :maxdepth: 1
   :caption: Issuers API

   Get issuer <reference/v1/issuers-api/get-issuer>
   List issuers <reference/v1/issuers-api/list-issuers>

.. toctree::
   :maxdepth: 1
   :caption: Refunds API

   Create refund <reference/v2/refunds-api/create-refund>
   Get refund <reference/v2/refunds-api/get-refund>
   Cancel refund <reference/v2/refunds-api/cancel-refund>
   List refunds <reference/v2/refunds-api/list-refunds>

.. toctree::
   :maxdepth: 1
   :caption: Chargebacks API

   Get chargeback <reference/v2/chargebacks-api/get-chargeback>
   List chargebacks <reference/v2/chargebacks-api/list-chargebacks>

Recurring
=========
.. toctree::
   :maxdepth: 1
   :caption: Customers API

   Create customer <reference/v1/customers-api/create-customer>
   Get customer <reference/v1/customers-api/get-customer>
   Update customer <reference/v1/customers-api/update-customer>
   Delete customer <reference/v1/customers-api/delete-customer>
   List customers <reference/v1/customers-api/list-customers>
   Create customer payment <reference/v1/customers-api/create-customer-payment>
   List customer payments <reference/v1/customers-api/list-customer-payments>

.. toctree::
   :maxdepth: 1
   :caption: Mandates API

   Create mandate <reference/v1/mandates-api/create-mandate>
   Get mandate <reference/v1/mandates-api/get-mandate>
   Revoke mandate <reference/v1/mandates-api/revoke-mandate>
   List mandates <reference/v1/mandates-api/list-mandates>

.. toctree::
   :maxdepth: 1
   :caption: Subscriptions API

   Create subscription <reference/v1/subscriptions-api/create-subscription>
   Get subscription <reference/v1/subscriptions-api/get-subscription>
   Revoke subscription <reference/v1/subscriptions-api/cancel-subscription>
   List subscriptions <reference/v1/subscriptions-api/list-subscriptions>

Mollie Connect
==============
.. toctree::
   :maxdepth: 1
   :caption: Connect API

   Authorize <reference/oauth2/authorize>
   Tokens <reference/oauth2/tokens>

.. toctree::
   :maxdepth: 1
   :caption: Permissions API

   Get permission <reference/v1/permissions-api/get-permission>
   List permissions <reference/v1/permissions-api/list-permissions>

.. toctree::
   :maxdepth: 1
   :caption: Organizations API

   Get organization <reference/v1/organizations-api/get-organization>

.. toctree::
   :maxdepth: 1
   :caption: Profiles API

   Create profile <reference/v1/profiles-api/create-profile>
   Get profile <reference/v1/profiles-api/get-profile>
   Update profile <reference/v1/profiles-api/update-profile>
   Delete profile <reference/v1/profiles-api/delete-profile>
   List profiles <reference/v1/profiles-api/list-profiles>
   Get API key <reference/v1/profiles-api/get-key>
   Reset API key <reference/v1/profiles-api/reset-key>
   List API keys <reference/v1/profiles-api/list-keys>

.. toctree::
   :maxdepth: 1
   :caption: Settlements API

   Get settlement <reference/v1/settlements-api/get-settlement>
   Get next settlement <reference/v1/settlements-api/get-next-settlement>
   Get open settlement <reference/v1/settlements-api/get-open-settlement>
   List settlements <reference/v1/settlements-api/list-settlements>
   List settlement payments <reference/v1/settlements-api/list-settlement-payments>
   List settlement refunds <reference/v1/settlements-api/list-settlement-refunds>
   List settlement chargebacks <reference/v1/settlements-api/list-settlement-chargebacks>

.. toctree::
   :maxdepth: 1
   :caption: Invoices API

   Get invoice <reference/v1/invoices-api/get-invoice>
   List invoices <reference/v1/invoices-api/list-invoices>

Deprecated APIs
===============
.. toctree::
   :maxdepth: 1
   :caption: Payments API v1 (deprecated)

   Create payment <reference/v1/payments-api/create-payment>
   Get payment <reference/v1/payments-api/get-payment>
   Cancel payment <reference/v1/payments-api/cancel-payment>
   List payments <reference/v1/payments-api/list-payments>

.. toctree::
   :maxdepth: 1
   :caption: Refunds API v1 (deprecated)

   Create refund <reference/v1/refunds-api/create-refund>
   Get refund <reference/v1/refunds-api/get-refund>
   Cancel refund <reference/v1/refunds-api/cancel-refund>
   List refunds <reference/v1/refunds-api/list-refunds>

.. toctree::
   :maxdepth: 1
   :caption: Chargebacks API v1 (deprecated)

   Get chargeback <reference/v1/chargebacks-api/get-chargeback>
   List chargebacks <reference/v1/chargebacks-api/list-chargebacks>

.. toctree::
   :maxdepth: 1
   :caption: Methods API v1 (deprecated)

   Get chargeback <reference/v1/methods-api/get-method>
   List chargebacks <reference/v1/methods-api/list-methods>

Indices and tables
==================
* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
