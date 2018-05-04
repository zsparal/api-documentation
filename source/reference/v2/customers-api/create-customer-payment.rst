.. _v2/customers-create-payment:

Customers API v2: Create customer payment
=========================================

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v2/customers/*customerId*/payments

.. authentication::
   :api_keys: true
   :oauth: true

Creates a payment for the customer.

Linking customers to payments enables a number of
`Mollie Checkout <https://www.mollie.com/en/checkout>`_ features, including:

* Keeping track of payment preferences for your customers.
* Enabling your customers to charge a previously used credit card with a single click.
* Improved payment insights in your dashboard.
* :ref:`Recurring payments <guides/recurring>`.

.. note:: This endpoint is a shortcut for :ref:`creating a payment <v2/payments-create>` with a ``customerId``
          parameter.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

This endpoint accepts the same parameters as the :ref:`Create payment <v2/payments-create>` endpoint. For recurring
payments, the following parameters have notable differences in comparison to regular payments:

.. list-table::
   :widths: auto

   * - | ``recurringType``

       .. type:: string
          :required: false

     - Enables recurring payments. If set to ``first``, a first payment for the customer is created, allowing
       the customer to agree to automatic recurring charges taking place on their account in the future. If set to
       ``recurring``, the customer's card is charged automatically.

   * - | ``amount``

       .. type:: decimal
          :required: true

     - If the ``recurringType`` parameter is set to ``first`` then the minimal amount is €0.01 for iDEAL, credit card
       and Belfius Pay Button, €0.02 for Bancontact, or €0.10 for SOFORT Banking.

   * - | ``redirectUrl``

       .. type:: string
          :required: true

     - If the ``recurringType`` parameter is set to ``recurring``, this parameter is ignored. Since the payment will
       take place without customer interaction, a redirect is not needed.

Response
--------
``201`` ``application/hal+json; charset=utf-8``

A payment object is returned, as described in :ref:`Get payment <v2/payments-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X POST https://api.mollie.com/v2/customers/cst_8wmqcHMN4U/payments \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -H "Content-Type: application/json" \
       -d \
       "{
           \"amount\": {\"currency\":\"EUR\", \"value\":\"10.00\"},
           \"description\": \"My first payment\",
           \"redirectUrl\": \"https://webshop.example.org/order/12345/\",
           \"webhookUrl\": \"https://webshop.example.org/payments/webhook/\"
       }"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 201 Created
   Content-Type: application/hal+json; charset=utf-8

   {
       "resource": "payment",
       "id": "tr_7UhSN1zuXS",
       "mode": "test",
       "createdAt": "2018-03-20T09:13:37+00:00",
       "amount": {
           "value": "10.00",
           "currency": "EUR"
       },
       "description": "My first payment",
       "method": null,
       "metadata": {
           "order_id": "12345"
       },
       "status": "open",
       "isCancelable": false,
       "expiresAt": "2018-03-20T09:28:37+00:00",
       "details": null,
       "profileId": "pfl_QkEhN94Ba",
       "customerId": "cst_8wmqcHMN4U",
       "sequenceType": "oneoff",
       "redirectUrl": "https://webshop.example.org/order/12345/",
       "webhookUrl": "https://webshop.example.org/payments/webhook/",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payments/tr_7UhSN1zuXS",
               "type": "application/json"
           },
           "checkout": {
               "href": "https://www.mollie.com/payscreen/select-method/7UhSN1zuXS",
               "type": "text/html"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/payments/create",
               "type": "text/html"
           }
       }
   }
