.. _v1/customers-create-payment:

Customers API v1: Create customer payment
=========================================

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v1/customers/*customerId*/payments

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

.. note:: This endpoint is a shortcut for :ref:`creating a payment <v1/payments-create>` with a ``customerId``
          parameter.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

This endpoint accepts the same parameters as the :ref:`Create payment <v1/payments-create>` endpoint. For recurring
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
``201`` ``application/json; charset=utf-8``

A payment object is returned, as described in :ref:`Get payment <v1/payments-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X POST https://api.mollie.com/v1/customers/cst_8wmqcHMN4U/payments \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d "amount=10.00" \
       -d "description=My first payment" \
       -d "redirectUrl=https://webshop.example.org/order/12345/"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 201 Created
   Content-Type: application/json; charset=utf-8

   {
       "resource": "payment",
       "id": "tr_7UhSN1zuXS",
       "mode": "test",
       "createdDatetime": "2018-03-16T14:36:44.0Z",
       "status": "open",
       "expiryPeriod": "PT15M",
       "amount": "10.00",
       "description": "My first payment",
       "metadata": null,
       "locale": "nl_NL",
       "profileId": "pfl_QkEhN94Ba",
       "customerId": "cst_8wmqcHMN4U",
       "links": {
           "paymentUrl": "https://www.mollie.com/payscreen/select-method/7UhSN1zuXS",
           "redirectUrl": "https://webshop.example.org/order/12345/"
       }
   }
