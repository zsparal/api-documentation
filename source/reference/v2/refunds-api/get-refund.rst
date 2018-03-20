.. _v2/refunds-get:

Refunds API v2: Get refund
==========================
``GET`` ``https://api.mollie.com/v1/payments/*paymentId*/refunds/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve a single refund by its ID. Note the original payment's ID is needed as well.

If you do not know the original payment's ID, you can use the :ref:`refunds list endpoint <v1/refunds-list>`.

Parameters
----------
Replace ``paymentId`` in the endpoint URL by the payment's ID, and replace ``id`` by the refund's ID. For example:
``/v1/payments/tr_7UhSN1zuXS/refunds/re_4qqhO89gsT``.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``
       | string
     - Indicates the response contains a refund object. Will always contain ``refund`` for this endpoint.

   * - | ``id``
       | string
     - The refund's unique identifier, for example ``re_4qqhO89gsT``.

   * - | ``amount``
       | object
     - The amount refunded to the consumer with this refund.

       .. list-table::
          :widths: auto

          * - | ``currency``
              | string
            - An `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code. The currencies supported depend on
              the payment methods that are enabled on your account.

          * - | ``value``
              | string
            - A string containing the exact amount that was refunded in the given currency.

   * - | ``description``
       | string
     - The description of the refund that may be shown to the consumer, depending on the payment method used.

   * - | ``status``
       | string
     - Since refunds may be delayed for certain payment methods, the refund carries a status field.

       Possible values:

       * ``queued`` The refund will be processed once you have enough balance. You can still cancel this refund.
       * ``pending`` The refund will be processed soon (usually the next business day). You can still cancel this
         refund.
       * ``processing`` The refund is being processed. Cancellation is no longer possible.
       * ``refunded`` The refund has been paid out to the consumer.
       * ``failed`` The refund has failed during processing.

   * - | ``createdAt``
       | datetime
     - The date and time the refund was issued, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``paymentId``
       | string
     - The payment profile's unique identifier, for example ``tr_7UhSN1zuXS``.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/payments/tr_WDqYK6vllg/refunds/re_4qqhO89gsT \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "resource": "refund",
       "id": "re_4qqhO89gsT",
       "amount": {
           "currency": "EUR",
           "value": "5.95"
       },
       "status": "pending",
       "createdAt": "2018-03-14T17:09:02.0Z"
       "description: "Order",
       "paymentId": "tr_WDqYK6vllg",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg/refunds/re_4qqhO89gsT",
               "type": "application/hal+json"
           },
           "payment": {
               "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/refunds/get",
               "type": "text/html"
           }
       }
   }
