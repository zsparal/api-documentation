.. _oauth/application-fees:

Application fees
================
With **Application fees**, you can split a payment between a platform and connected merchant accounts.

An example use case is a ticketing platform that charges a fee per successful payment to each connected theatre. In this
case, each theatre has an account with Mollie with the ticketing platform's app authorized to create payments on their
behalf.

The ticketing platform can add an application fee to each payment. When the payment is successful, the fee specified in
the application fee is transferred from the theatre's account to the platforms account.

Mollie will then collect and settle the application fees to the ticketing platform.

.. note:: As Mollie only handles the money and does not provide any services to the theaters, the ticketing platform is
   responsible for invoicing the theatres and handling VAT.

Enabling application fees
-------------------------
In order to enable charging application fees with your app, you must first register to become an app developer. Then,
contact our support department to have charging application fees on your account enabled.

How to create an application fee
--------------------------------
Application fees are created by passing additional parameters to the :ref:`Create Payment API <v2/payments-create>`:

.. list-table::
   :widths: auto

   * - | ``amount``

       .. type:: amount object
          :required: true

     - The :ref:`amount <amount-object>` that the app wants to charge, e.g. ``{"currency":"EUR", "value":"10.00"}}``
       if the app would want to charge €10.00.

   * - | ``description``

       .. type:: string
          :required: true

     - The description of the application fee. This will appear on settlement reports to the merchant and to you.



Multi currency
--------------
Application fees are supported on all payments regardless of currency. However, the application fee itself must always
be created in ``EUR``. For example, you can charge a €1.00 application fee on a US$10.00 payment.
