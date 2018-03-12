.. _overview:

Welcome to Mollie B.V's public API documentation!
=================================================

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
* `Gift cards <https://www.mollie.com/en/payments/gift-cards>`_ (Webshop Giftcard, Podium Cadeaukaart, VVV Cadeaukaart, YourGift etc.)
* `iDEAL <https://www.mollie.com/en/payments/ideal>`_
* `ING Home'Pay <https://www.mollie.com/en/payments/ing-homepay>`_
* `KBC/CBC Payment Button <https://www.mollie.com/en/payments/kbc-cbc>`_
* `PayPal <https://www.mollie.com/en/payments/paypal>`_
* `paysafecard <https://www.mollie.com/en/payments/paysafecard>`_
* `SOFORT Banking <https://www.mollie.com/en/payments/sofort>`_

All of the payment methods you have enabled are – where relevant – shown to the consumer. You can enable payment methods
using the `Dashboard <https://www.mollie.com/dashboard>`_.


.. toctree::
   :hidden:

   Mollie API<self>
   security
   migrating-v1-to-v2

.. toctree::
   guides/authentication
   guides/handling-errors
   guides/payment-status-changes
   guides/multicurrency
   guides/giftcards
   :maxdepth: 1
   :caption: Guides

.. toctree::
   :caption: Mollie Connect

.. toctree::
   :maxdepth: 1
   :caption: API v1 Reference

.. toctree::
   reference/v2/create-payment
   reference/v2/get-payment
   :maxdepth: 1
   :caption: API v2 Reference

Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
