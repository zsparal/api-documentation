Create payment link
===================
.. api-name:: Payment links API
   :version: 2

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v2/payment-links

.. authentication::
   :api_keys: true
   :organization_access_tokens: true
   :oauth: true

With the Payment links API you can generate payment links that can be shared with your customer, the payment link will redirect your customer to the payment page where they can complete there payment. Payment links can be useful to send on the invoice too your customer.

Once a payment link has been created, you can share the URL in the ``_links.paymentLink`` property from the response.

Parameters
----------
.. list-table::
   :widths: auto

   * - ``description``

       .. type:: string
          :required: true

     - The description of the payment link you are creating. This will be shown to your customer on their card or bank
       statement when possible.

   * - .. param-name:: amount

       .. type:: amount object
          :required: true

     - The amount that you want to charge, e.g. ``{"currency":"EUR", "value":"1000.00"}`` if you would want to charge
       €1000.00.

       .. list-table::
          :widths: auto

          * - .. param-name:: currency

              .. type:: string
                 :required: true

            - An `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code. The :doc:`currencies supported
              </payments/multicurrency>` depend on the payment methods that are enabled on your account.

          * - ``value``

              .. type:: string
                 :required: true

            - A string containing the exact amount you want to charge in the given currency. Make sure to send the right
              amount of decimals and omit the thousands separator. Non-string values are not accepted.

   * - ``webhookUrl``

       .. type:: string
          :required: false

     - Set the webhook URL, where we will send payment link status updates to.

       .. note:: The ``webhookUrl`` is optional, but without a webhook you will miss out on important status changes about your payment link.

Response
--------
``201`` ``application/hal+json``

A payment link object is returned, as described in :doc:`/reference/v2/payment-links-api/get-payment-link`.

Example
-------
.. code-block-selector::
   .. code-block:: bash
      :linenos:

      curl -X POST https://api.mollie.com/v2/payment-links \
         -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
         -d "amount[currency]=EUR" \
         -d "amount[value]=24.95" \
         -d "description=Bicycle tires" \
         -d "webhookUrl=https://webshop.example.org/payment-links/webhook/"

Response
^^^^^^^^
.. code-block:: none
   :linenos:

   HTTP/1.1 201 Created
   Content-Type: application/hal+json

   {
       "resource": "paymentLink",
       "id": "pl_4Y0eZitmBnQ6IDoMqZQKh",
       "mode": "test",
       "createdAt": "2021-03-20T09:13:37+00:00",
       "paidAt": null,
       "updatedAt": null,
       "amount": {
           "value": "24.95",
           "currency": "EUR"
       },
       "description": "Bicycle tires",
       "webhookUrl": "https://webshop.example.org/payment-links/webhook/",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payment-links/pl_4Y0eZitmBnQ6IDoMqZQKh",
               "type": "application/json"
           },
           "paymentLink": {
               "href": "https://useplink.com/payment/4Y0eZitmBnQ6IDoMqZQKh/",
               "type": "text/html"
           },
           "documentation": {
               "href": "https://docs.mollie.com/reference/v2/payment-links-api/create-payment-link",
               "type": "text/html"
           }
       }
   }
