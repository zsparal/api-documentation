.. _v1/subscriptions-get:

Subscriptions API v1: Get subscription
======================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/customers/*customerId*/subscriptions/*id*

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve a subscription by its ID and its customer's ID.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, and replace ``id`` by the subscription's ID. For
example ``/v1/customers/cst_8wmqcHMN4U/subscriptions/sub_rVKGtNd6s3``.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to retrieve a test mode subscription.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string
          :required: true

     - Indicates the response contains a subscription object. Will always contain ``subscription`` for this endpoint.

   * - | ``id``

       .. type:: string
          :required: true

     - The identifier uniquely referring to this subscription. Mollie assigns this identifier at subscription creation
       time. For example ``sub_rVKGtNd6s3``.

   * - | ``customerId``

       .. type:: string
          :required: true

     - The customer's unique identifier, for example ``cst_8wmqcHMN4U``.

   * - | ``mode``

       .. type:: string
          :required: true

     - The mode used to create this subscription. Mode determines whether the subscription's payments are real or test
       payments.

       Possible values: ``live`` ``test``

   * - | ``createdDatetime``

       .. type:: datetime
          :required: true

     - The subscription's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``status``

       .. type:: string
          :required: true

     - The subscription's current status, depends on whether the customer has a pending, valid or invalid mandate.

       Possible values: ``pending`` ``active`` ``cancelled`` ``suspended`` ``completed``

   * - | ``amount``

       .. type:: decimal
          :required: true

     - The constant amount that is charged with each subscription payment.

   * - | ``times``

       .. type:: integer
          :required: true

     - Total number of charges for the subscription to complete.

   * - | ``interval``

       .. type:: string
          :required: true

     - Interval to wait between charges, for example ``1 month`` or ``14 days``.

       Possible values: ``... months`` ``... weeks`` ``... days``

   * - | ``startDate``

       .. type:: date
          :required: true

     - The start date of the subscription in ``YYYY-MM-DD`` format.

   * - | ``description``

       .. type:: string
          :required: true

     - The description specified during subscription creation. This will be included in the payment description along
       with the charge date in ``YYYY-MM-DD`` format.

   * - | ``method``

       .. type:: string
          :required: false

     - The payment method used for this subscription, either forced on creation or ``null`` if any of the
       customer's valid mandates may be used.

       Possible values: ``creditcard`` ``directdebit`` ``null``

   * - | ``cancelledDatetime``

       .. type:: datetime
          :required: true

     - The subscription's date and time of cancellation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``links``

       .. type:: object
          :required: true

     - An object with URLs important to the subscription.

       .. list-table::
          :widths: auto

          * - | ``webhookUrl``

              .. type:: string
                 :required: true

            - The URL Mollie will call as soon a payment status change takes place.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/customers/cst_stTC2WHAuS/subscriptions/sub_rVKGtNd6s3 \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "subscription",
       "id": "sub_rVKGtNd6s3",
       "customerId": "cst_stTC2WHAuS",
       "mode": "live",
       "createdDatetime": "2016-06-01T12:23:34.0Z",
       "status": "active",
       "amount": "25.00",
       "times": 4,
       "interval": "3 months",
       "description": "Quarterly payment",
       "method": null,
       "cancelledDatetime": null,
       "links": {
           "webhookUrl": "https://webshop.example.org/payments/webhook"
       }
   }
