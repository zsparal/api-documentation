.. _v2/subscriptions-get:

Subscriptions API v2: Get subscription
======================================
``GET`` ``https://api.mollie.com/v2/customers/*customerId*/subscriptions/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve a subscription by its ID and its customer's ID.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, and replace ``id`` by the subscription's ID. For
example ``/v2/customers/cst_8wmqcHMN4U/subscriptions/sub_rVKGtNd6s3``.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to retrieve a test mode subscription.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``
       | string
     - Indicates the response contains a subscription object. Will always contain ``subscription`` for this endpoint.

   * - | ``id``
       | string
     - The identifier uniquely referring to this subscription. Mollie assigns this identifier at subscription creation
       time. For example ``sub_rVKGtNd6s3``.

   * - | ``customerId``
       | string
     - The customer's unique identifier, for example ``cst_8wmqcHMN4U``.

   * - | ``mode``
       | string
     - The mode used to create this subscription. Mode determines whether the subscription's payments are real or test
       payments.

       Possible values: ``live`` ``test``

   * - | ``createdAt``
       | datetime
     - The subscription's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``status``
       | string
     - The subscription's current status, depends on whether the customer has a pending, valid or invalid mandate.

       Possible values: ``pending`` ``active`` ``canceled`` ``suspended`` ``completed``

   * - | ``amount``
       | object
     - The constant amount that is charged with each subscription payment, e.g.
       ``{"currency":"EUR", "value":"10.00"}`` for a €10.00 subscription.

       .. list-table::
          :widths: auto

          * - | ``currency``
              | string
            - The `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code.

          * - | ``value``
              | string
            - A string containing the exact amount of the payment in the given currency.

   * - | ``times``
       | integer
     - Total number of charges for the subscription to complete.

   * - | ``interval``
       | string
     - Interval to wait between charges, for example ``1 month`` or ``14 days``.

       Possible values: ``... months`` ``... weeks`` ``... days``

   * - | ``startDate``
       | date
     - The start date of the subscription in ``YYYY-MM-DD`` format.

   * - | ``description``
       | string
     - The description specified during subscription creation. This will be included in the payment description along
       with the charge date in ``YYYY-MM-DD`` format.

   * - | ``method``
       | string
     - Optional – The payment method used for this subscription, either forced on creation or ``null`` if any of the
       customer's valid mandates may be used.

       Possible values: ``creditcard`` ``directdebit`` ``null``

   * - | ``canceledAt``
       | datetime
     - Optional – The subscription's date and time of cancellation, in
       `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format. This parameter is omitted if the payment is not
       canceled (yet).

   * - | ``webhookUrl``
       | string
     - The URL Mollie will call as soon a payment status change takes place.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/customers/cst_stTC2WHAuS/subscriptions/sub_rVKGtNd6s3 \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json

   {
       "resource": "subscription",
       "id": "sub_rVKGtNd6s3",
       "customerId": "cst_stTC2WHAuS",
       "mode": "live",
       "createdAt": "2016-06-01T12:23:34+00:00",
       "status": "active",
       "amount": {
           "value": "25.00",
           "currency": "EUR"
       },
       "times": 4,
       "interval": "3 months",
       "description": "Quarterly payment",
       "method": null,
       "webhookUrl": "https://webshop.example.org/payments/webhook",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/customers/cst_stTC2WHAuS/subscriptions/sub_rVKGtNd6s3",
               "type": "application/hal+json"
           },
           "customer": {
               "href": "https://api.mollie.com/v2/customers/cst_stTC2WHAuS",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/subscriptions/get",
               "type": "text/html"
           }
       }
   }
