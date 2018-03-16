.. _v2/payment-get:

Get payment
===========

``GET https://api.mollie.com/v2/payments/*id*``

Retrieve a single payment object by its payment token.

.. note:: We call your webhook when the :ref:`payment status changes <payment-status-changes>`, so there's no need
          to poll this endpoint for status changes.

Parameters
----------

Replace ``id`` in the endpoint URL by the payment's ID, for example ``tr_7UhSN1zuXS``.


Mollie Connect/OAuth parameters
-------------------------------

If you are creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is available. You must pass this as a
parameter in the query string if you want to retrieve a payment that was created in test mode.

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``testmode``
    - ``string``
    - Set this to ``true`` to get a payment made in test mode. If you omit this parameter, you can only retrieve live mode payments.

Response
--------

``200 application/hal+json; charset=utf-8``

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``resource``
    - ``string``
    - Indicates the response contains a payment object.

      **Possible values**: ``payment``.

  * - ``id``
    - ``string``
    - The identifier uniquely referring to this payment. Mollie assigns this identifier at payment creation time.
      For example ``tr_7UhSN1zuXS``. Its ID will always be used by Mollie to refer to a certain payment.

  * - ``mode``
    - ``string``
    - The mode used to create this payment. Mode determines whether a payment is *real* (live mode) or a *test* payment.

  * - ``createdAt``
    - ``datetime``
    - The payment's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

  * - ``status``
    - ``string``
    - The payment's status. Please refer to the documentation regarding statuses for more info about which statuses occur at what point.

  * - ``canBeCancelled``
    - ``boolean``
    - Optional – Whether or not the payment can be cancelled.

  * - ``paidAt``
    - ``datetime``
    - Optional – The date and time the payment became paid, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format. This parameter is omitted if the payment isn't completed (yet).

  * - ``cancelledAt``
    - ``datetime``
    - Optional – The date and time the payment was cancelled, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format. This parameter is omitted if the payment isn't cancelled (yet).

  * - ``expiredAt``
    - ``datetime``
    - Optional – The date and time the payment was expired, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format. This parameter is omitted if the payment did not expire (yet).

  * - ``failedAt``
    - ``datetime``
    - Optional – The date and time the payment failed, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format. This parameter is omitted if the payment did not fail (yet).

  * - ``amount``
    - ``object``
    - An object consisting of two properties: ``currency``, which is a `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code, and ``value``. For example:

      .. code-block:: json

           {
               "currency": "USD",
               "amount": "1.00"
           }

      This represents US $1.00. Note that both are a ``string``.

  * - ``amountRefunded``
    - ``object``
    - Optional Only available when refunds are available for this payment – The total amount that is already refunded. For some payment methods, this amount may be higher than the payment amount, for example to allow reimbursement of the costs for a return shipment to the customer. Note that this follows the same formatting as the ``amount`` property.

  * - ``amountRemaining``
    - ``object``
    - Only available when refunds are available for this payment – The remaining amount that can be refunded. Note that this follows the same formatting as the ``amount`` property.

  * - ``description``
    - ``string``
    - A short description of the payment. The description is visible in the Dashboard and will be shown on the customer's bank or card statement when possible.

  * - ``method``
    - ``string|null``
    - The payment method used for this payment, either forced on creation by specifying the ``method`` parameter, or chosen by the customer on our payment method selection screen.

      If the payment is only partially paid with a gift card, the method remains ``giftcard``.

      **Possible values**: ``banktransfer`` ``belfius`` ``bitcoin`` ``creditcard`` ``directdebit`` ``giftcard`` ``ideal`` ``inghomepay`` ``kbc`` ``mistercash`` ``paypal`` ``paysafecard`` ``sofort``

  * - ``metadata``
    - ``mixed``
    - The optional metadata you provided upon payment creation. Metadata can be used to link an order to a payment.

  * - ``locale``
    - ``string``
    - Optional – The customer's locale, either forced on creation by specifying the locale parameter, or detected by us during checkout. Will be a full locale, for example ``nl_NL``.

  * - ``countryCode``
    - ``string``
    - Optional – The customer's `ISO 3166-1 alpha-2 <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>`_ country code, detected by us during checkout. For example: ``BE``.

  * - ``profileId``
    - ``string``
    - The identifier referring to the profile this payment was created on. For example, ``pfl_QkEhN94Ba``.

  * - ``settlementId``
    - ``string``
    - Optional – The identifier referring to the settlement this payment was settled with. For example, ``stl_BkEjN2eBb``.

  * - ``customerId``
    - ``string``
    - If a customer was specified upon payment creation, the customer's token will be available here as well. For example, ``cst_XPn78q9CfT``.

  * - ``sequenceType``
    - ``string``
    - This field indicates the position of the payment in a recurring stream. Learn more about the ``sequenceType`` parameter.

      **Possible values**: ``oneoff``, ``first`` or ``recurring``.

  * - ``mandateId``
    - ``string``
    - Only available for recurring payments – If the payment is a recurring payment, this field will hold the ID of the mandate used to authorize the recurring payment.

  * - ``subscriptionId``
    - ``string``
    - Only available for recurring payments – When implementing the Subscriptions API, any recurring charges resulting from the subscription will hold the ID of the subscription that triggered the payment.

  * - ``failureReason``
    - ``string``
    - Only available for failed Bancontact and credit card payments. – A textual description of the failure reason.

      **Possible values**: ``invalid_card_number`` ``invalid_cvv`` ``invalid_card_holder_name`` ``card_expired`` ``invalid_card_type`` ``refused_by_issuer`` ``insufficient_funds`` ``inactive_card``

  * - ``webhookUrl``
    - ``string``
    - Optional – The URL Mollie will call as soon an important status change takes place.

  * - ``redirectUrl``
    - ``string|null``
    - Optional – The URL the customer will be redirected to after completing or cancelling the payment process. Is ``null`` for recurring payments

  * - ``applicationFee``
    - ``object|null``
    - Optional – The application fee, if the payment was created with one.


Payment method specific parameters
----------------------------------

If you specify the ``method`` parameter, optional parameters may be available for the payment method. If no method is
specified, you can still send the optional parameters and we will apply them when the consumer selects the relevant
payment method.

Bancontact
^^^^^^^^^^

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - Optional – only for paid payments. An object with various Bancontact details.

      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardNumber``     |``string``      | The last four digits of the card number.                                   |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardFingerprint``|``string``      | Unique alphanumeric representation of card, usable for identifying         |
      |                   |                | returning customers.                                                       |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``qrCode``         |``object``      | A QR code that can be scanned by the mobile Bancontact application. This   |
      |                   |                | enables the desktop to mobile feature.                                     |
      +-------------------+----------------+----------------------------------------------------------------------------+

Bank transfer
^^^^^^^^^^^^^

Belfius Pay Button
^^^^^^^^^^^^^^^^^^

.. note:: Note that this information is only available one banking day after the payment has been completed.

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - Optional – only for paid payments. An object with the consumer bank account details.

      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerName``   |``string``|Only available if the payment has been completed – The consumer's name.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerAccount``|``string``|Only available if the payment has been completed – The consumer's IBAN.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerBic``    |``string``|Only available if the payment has been completed – ``GKCCBEBB``                  |
      +-------------------+----------+---------------------------------------------------------------------------------+



Bitcoin
^^^^^^^

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - An object with the Bitcoin transaction details details.

      +-------------------+----------+--------------------------------------------------------------------------------------+
      |``bitcoinAddress`` |``string``|Only available if the payment has been completed – The bitcoin address the            |
      |                   |          |bitcoins were transferred to..                                                        |
      +-------------------+----------+--------------------------------------------------------------------------------------+
      |``bitcoinAmount``  |``object``|The amount transferred in BTC. An object consisting of two properties:                |
      |                   |          |``currency`` (always``XBT``), and ``value``. For example:                             |
      |                   |          |                                                                                      |
      |                   |          |.. code-block:: json                                                                  |
      |                   |          |                                                                                      |
      |                   |          |      {                                                                               |
      |                   |          |          "currency": "XBT",                                                          |
      |                   |          |          "value": "0.87034846"                                                       |
      |                   |          |      }                                                                               |
      |                   |          |                                                                                      |
      |                   |          |Note that both are a ``string``.                                                      |
      +-------------------+----------+--------------------------------------------------------------------------------------+
      |``bitcoinUri``     |``string``|Optional – Only available if the payment has not been finalized. An URI that is       |
      |                   |          |understood by Bitcoin wallet clients and will cause such clients to prepare           |
      |                   |          |the transaction. Follows the                                                          |
      |                   |          |`BIP 21 URI scheme <https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki>`_.|
      +-------------------+----------+--------------------------------------------------------------------------------------+
      |``qrCode``         |``object``|Only available when explicitly included, and when the payment has not been            |
      |                   |          |finalized – A QR code that can be scanned by Bitcoin wallet clients and will          |
      |                   |          |cause such clients to prepare the transaction.                                        |
      +-------------------+----------+--------------------------------------------------------------------------------------+

Credit card
^^^^^^^^^^^

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - Optional – only for paid payments. An object with various credit card details.

      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardHolder``     |``string``      |The card holder's name.                                                     |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardNumber``     |``string``      | The last four digits of the card number.                                   |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardFingerprint``|``string``      | Unique alphanumeric representation of card, usable for identifying         |
      |                   |                | returning customers.                                                       |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardAudience``   |``string|null`` | Not always available. – The card's target audience.                        |
      |                   |                | **Possible values**: ``consumer`` ``business`` ``null``.                   |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardLabel``      |``string|null`` | The card's label. Note that not all labels can be acquired through Mollie. |
      |                   |                | **Possible values**: ``American Express`` ``Carta Si`` ``Carte Bleue``     |
      |                   |                | ``Dankort`` ``Diners Club`` ``Discover`` ``JCB Laser`` ``Maestro``         |
      |                   |                | ``Mastercard`` ``Unionpay`` ``Visa`` ``null``                              |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardCountryCode``|``string|null`` |The `ISO 3166-1 alpha-2 <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>`_|
      |                   |                |country code of the country the card was issued in. For example: ``BE``.    |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``cardSecurity``   |``string|null`` | Only available if the payment succeeded. – The payment's security type.    |
      |                   |                | **Possible values**: ``normal`` ``3dsecure``                               |
      +-------------------+----------------+----------------------------------------------------------------------------+
      |``feeRegion``      |``string``      | Only available if the payment succeeded. – The fee region for the payment. |
      |                   |                | see your credit card addendum for details. ``intra-eu`` for consumer cards |
      |                   |                | from the EU, and ``other`` for all other cards.                            |
      +-------------------+----------------+----------------------------------------------------------------------------+

Gift cards
^^^^^^^^^^

todo

iDEAL
^^^^^

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - Optional – only for paid payments. An object with the consumer bank account details.

      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerName``   |``string``|Only available if the payment has been completed – The consumer's name.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerAccount``|``string``|Only available if the payment has been completed – The consumer's IBAN.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerBic``    |``string``|Only available if the payment has been completed – The consumer's bank's BIC.    |
      +-------------------+----------+---------------------------------------------------------------------------------+

ING Home'Pay
^^^^^^^^^^^^

.. note:: Note that this information is only available one banking day after the payment has been completed.

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - Optional – only for paid payments. An object with the consumer bank account details.

      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerName``   |``string``|Only available if the payment has been completed – The consumer's name.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerAccount``|``string``|Only available if the payment has been completed – The consumer's IBAN.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerBic``    |``string``|Only available if the payment has been completed – ``BBRUBEBB``                  |
      +-------------------+----------+---------------------------------------------------------------------------------+

KBC/CBC Payment Button
^^^^^^^^^^^^^^^^^^^^^^

.. note:: Note that this information is only available one banking day after the payment has been completed.

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - Optional – only for paid payments. An object with the consumer bank account details.

      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerName``   |``string``|Only available if the payment has been completed – The consumer's name.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerAccount``|``string``|Only available if the payment has been completed – The consumer's IBAN.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerBic``    |``string``|Only available if the payment has been completed – The consumer's bank's BIC.    |
      +-------------------+----------+---------------------------------------------------------------------------------+

PayPal
^^^^^^

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - An object with PayPal details.

      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerName``   |``string``|The consumer's first and last name.                                              |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerAccount``|``string``|The consumer's email address.                                                    |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``paypalReference``|``string``|PayPal's reference for the transaction, for instance ``9AL35361CF606152E``.      |
      +-------------------+----------+---------------------------------------------------------------------------------+

paysafecard
^^^^^^^^^^^

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - An object with paysafecard details.

      +---------------------+----------+-------------------------------------------------------------------------------+
      |``customerReference``|``string``|The consumer identification supplied when the payment was created.             |
      +---------------------+----------+-------------------------------------------------------------------------------+

SEPA Direct Debit
^^^^^^^^^^^^^^^^^
todo

SOFORT Banking
^^^^^^^^^^^^^^

.. list-table::
  :header-rows: 0
  :widths: auto

  * - ``details``
    - ``object|null``
    - Optional – only for paid payments. An object with the consumer bank account details.

      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerName``   |``string``|Only available if the payment has been completed – The consumer's name.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerAccount``|``string``|Only available if the payment has been completed – The consumer's IBAN.          |
      +-------------------+----------+---------------------------------------------------------------------------------+
      |``consumerBic``    |``string``|Only available if the payment has been completed – The consumer's bank's BIC.    |
      +-------------------+----------+---------------------------------------------------------------------------------+

