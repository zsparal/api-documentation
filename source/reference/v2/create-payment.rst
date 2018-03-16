.. _v2/payments-create:

Create payment
==============
``POST https://api.mollie.com/v2/payments``

Payment creation is elemental to the Mollie API: this is where most payment implementations start off. Note optional
parameters are accepted for certain payment methods.

To wrap your head around the payment process, an explanation and flow charts can be found in the :ref:`Overview <overview>`.

Payments are created by sending a `JSON document <https://www.json.org/>`_ to the endpoint. The document should contain an object with the
parameters listed below as keys and the values you want to use for the parameters as values for the object.

Parameters
----------
.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``amount``
    - ``object``
    - The amount that you want to charge. This object should have two keys: ``currency`` and ``value``.

      ``currency`` must be an `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code. The currencies
      supported depend on the payment methods that are enabled on your account.

      ``value`` must be a string containing the exact amount (decimals are not supported) you want to charge in the
      currency. Make sure to send the right amount of decimals.

      An example object would be::

        {"currency": "EUR", "value": "100.00"}

      This would create a €100.00 payment.


  * - ``description``
    - ``string``
    - The description of the payment you're creating. This will be shown to the consumer on their card or bank
      statement when possible, and in any exports you generate.

      We recommend you use the order number so that you can always link the payment to the order. This is particularly
      useful for bookkeeping.

  * - ``redirectUrl``
    - ``string``
    - `The URL the customer will be redirected to after the payment process. It could make sense for the ``redirectUrl``
      to contain a unique identifier – like your order ID – so you can show the right page referencing the order when
      your customer returns.

  * - ``webhookUrl``
    - ``string``
    - Set the webhook URL, where we will send payment status updates to.

      .. note::
        The ``webhookUrl`` must be reachable from Mollie's point of view. If you want to use webhook during
        development on ``localhost``, you must use a tool like
        `ngrok <https://lornajane.net/posts/2015/test-incoming-webhooks-locally-with-ngrok>`_ to have the webhooks
        delivered to your local machine.

  * - ``locale``
    - ``string``
    - Optional – Allow you to preset the language to be used in the payment screens shown to the consumer. Setting a
      locale is highly recommended and will greatly improve your conversion rate. When this parameter is omitted, the
      browser language will be used instead if supported by the payment method. You can provide any ISO 15897 locale,
      but our payment screen currently only support the following languages:

      Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

  * - ``method``
    - ``string``
    - Optional – Normally, a payment method selection screen is shown. However, when using this parameter, your customer
      will skip the selection screen and will be sent directly to the chosen payment method. The parameter enables you
      to fully integrate the payment method selection into your website, however note Mollie's country based conversion
      optimization is lost.

      Possible values: ``banktransfer`` ``belfius`` ``bitcoin`` ``creditcard`` ``directdebit`` ``giftcard`` ``ideal``
      ``inghomepay`` ``kbc`` ``mistercash`` ``paypal`` ``paysafecard`` ``sofort``.

  * - ``metadata``
    - ``mixed``
    - Optional – Provide any data you like, and we will save the data alongside the payment. Whenever you fetch the
      payment with our API, we'll also include the metadata. You can use up to approximately 1kB.

Payment method specific parameters
----------------------------------
If you specify the ``method`` parameter, optional parameters may be available for the payment method. If no method is
specified, you can still send the optional parameters and we will apply them when the consumer selects the relevant
payment method.

iDEAL
^^^^^
.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``issuer``
    - ``string``
    - Optional – An iDEAL issuer ID, for example ``ideal_INGBNL2A``. The returned payment URL will deep-link into the
      specific banking website (ING Bank, in this example). The full list of issuers can be retrieved via the Methods
      API.

Credit card
^^^^^^^^^^^

Bank transfer
^^^^^^^^^^^^^

KBC/CBC Payment Button
^^^^^^^^^^^^^^^^^^^^^^

SEPA Direct Debit
^^^^^^^^^^^^^^^^^

PayPal
^^^^^^

Bitcoin
^^^^^^^
.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``billingEmail``
    - ``string``
    - Optional – The email address of the customer. This is used when handling invalid transactions (wrong amount
      transferred, transfer of expired or cancelled payments, et cetera).

paysafecard
^^^^^^^^^^^

Gift cards
^^^^^^^^^^
