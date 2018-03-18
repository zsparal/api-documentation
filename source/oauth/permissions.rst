.. _oauth/permissions:

Mollie Connect: Permissions
===========================

Accessing merchant data
-----------------------
Your app may request a set of permissions, which allow access to various endpoints of the Mollie API. All currently
available permissions are listed below.

Permissions can be requested by redirecting the resource owner to the :ref:`Authorize endpoint <oauth2/authorize>` with
the requested permissions in the ``scope`` parameter.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``payments.read``
       | Payments API
     - View the merchant's payments.

   * - | ``payments.write``
       | Payments API
     - Create payments for the merchant. The received payment will be added to the merchant's balance.

   * - | ``refunds.read``
       | Refunds API
     - View the merchant's refunds.

   * - | ``refunds.write``
       | Refunds API
     - Refund the merchant's payments to consumers.

   * - | ``customers.read``
       | Customers API
     - View the merchant's customers.

   * - | ``customers.write``
       | Customers API
     - Manage the merchant's customers.

   * - | ``mandates.read``
       | Mandates API
     - View the merchant's mandates.

   * - | ``mandates.write``
       | Mandates API
     - Manage the merchant's mandates.

   * - | ``subscriptions.read``
       | Subscriptions API
     - View the merchant's subscriptions.

   * - | ``subscriptions.write``
       | Subscriptions API
     - Manage the merchant's subscriptions.

   * - | ``profiles.read``
       | Profiles API
     - View the merchant's website profiles.

   * - | ``profiles.write``
       | Profiles API
     - Manage the merchant's website profiles.

   * - | ``invoices.read``
       | Invoices API
     - View the merchant's invoices.

   * - | ``settlements.read``
       | Settlements API
     - View the merchant's settlements.

   * - | ``organizations.read``
       | Organizations API
     - View the merchant's organizational details.

   * - | ``organizations.write``
       | Organizations API
     - Change the merchant's organizational details.
