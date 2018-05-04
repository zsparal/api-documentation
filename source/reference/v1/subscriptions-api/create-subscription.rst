.. _v1/subscriptions-create:

Subscriptions API v1: Create subscription
=========================================
``POST`` ``https://api.mollie.com/v1/customers/*customerId*/subscriptions``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

With subscriptions, you can schedule recurring payments to take place at regular intervals.

For example, by simply specifying an ``amount`` and an ``interval``, you can create an endless subscription to charge a
monthly fee, until the consumer cancels their subscription.

Or, you could use the ``times`` parameter to only charge a limited number of times, for example to split a big
transaction in multiple parts.

A few example usages:

* ``amount=5 interval="2 weeks"`` Your consumer will be charged €5 once every two weeks.
* ``amount=20 interval="1 day" times=5`` Your consumer will be charged €20 every day, for five consecutive days.
* ``amount=10 interval="1 month" startDate="2018-04-30"`` Your consumer will be charged €10 on the last day of each
  month, starting in April 2018.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example
``/v1/customers/cst_8wmqcHMN4U/subscriptions``.

.. list-table::
   :widths: auto

   * - | ``amount``
       | decimal
     - The amount in EUR that you want to charge with each subscription payment, e.g. ``100.00`` if you would want to
       charge €100.00 every time.

   * - | ``times``
       | integer
     - Optional – Total number of charges for the subscription to complete. Leave empty for an ongoing subscription.

   * - | ``interval``
       | string
     - Interval to wait between charges, for example ``1 month`` or ``14 days``.

       Possible values: ``... months`` ``... weeks`` ``... days``

   * - | ``startDate``
       | date
     - Optional – The start date of the subscription in ``YYYY-MM-DD`` format. This is the first day on which your
       customer will be charged. When this parameter is not provided, the current date will be used instead.

   * - | ``description``
       | string
     - A description unique per subscription . This will be included in the payment description along with the charge
       date in ``YYYY-MM-DD`` format.

   * - | ``method``
       | string
     - Optional – The payment method used for this subscription, either forced on creation or ``null`` if any of the
       customer's valid mandates may be used.

       Possible values: ``creditcard`` ``directdebit`` ``null``

   * - | ``webhookUrl``
       | string
     - Optional – Use this parameter to set a webhook URL for all subscription payments.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the only mandatory extra parameter is the ``profileId`` parameter.
With it, you can specify to which profile the subscription belongs. Organizations can have multiple profiles for each of
their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
   :widths: auto

   * - | ``profileId``
       | string
     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to create a test mode subscription.

Response
--------
``201`` ``application/json; charset=utf-8``

A subscription object is returned, as described in :ref:`Get subscription <v1/subscriptions-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X POST https://api.mollie.com/v1/customers/cst_stTC2WHAuS/subscriptions \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d "amount=25.00" \
       -d "times=4" \
       -d "interval=3 months" \
       -d "description=Quarterly payment" \
       -d "webhookUrl=https://webshop.example.org/payments/webhook/"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 201 Created
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
           "webhookUrl": "https://webshop.example.org/payments/webhook/"
       }
   }
