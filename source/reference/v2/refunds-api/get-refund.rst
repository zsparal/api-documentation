.. _v2/refunds-get:

Get refund
==========
.. api-name:: Refunds API
   :version: 2

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v2/payments/*paymentId*/refunds/*id*

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve a single refund by its ID. Note the original payment's ID is needed as well.

If you do not know the original payment's ID, you can use the :ref:`List refunds <v2/refunds-list>` endpoint.

Parameters
----------
Replace ``paymentId`` in the endpoint URL by the payment's ID, and replace ``id`` by the refund's ID. For example:
``/v1/payments/tr_7UhSN1zuXS/refunds/re_4qqhO89gsT``.

Embedding of related resources
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
This endpoint allows for embedding additional information by appending the following values via the ``embed``
query string parameter.

* ``payment`` Include the :ref:`payment <v2/payments-get>` this refund was created for.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string

     - Indicates the response contains a refund object. Will always contain ``refund`` for this endpoint.

   * - | ``id``

       .. type:: string

     - The refund's unique identifier, for example ``re_4qqhO89gsT``.

   * - | ``amount``

       .. type:: amount object

     - The amount refunded to the consumer with this refund.

       .. list-table::
          :widths: auto

          * - | ``currency``

              .. type:: string

            - An `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code. The currencies supported depend on
              the payment methods that are enabled on your account.

          * - | ``value``

              .. type:: string

            - A string containing the exact amount that was refunded in the given currency.

   * - | ``settlementAmount``

       .. type:: amount object|null

     - The amount deducted from the settlement, in the settlement's currency.

       .. list-table::
          :widths: auto

          * - | ``currency``

              .. type:: string

            - The settlement currency, an `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code.

          * - | ``value``

              .. type:: string

            - A string containing the exact amount that was deducted for the refund from your account balance in the
              settlement currency. Note that this will be negative.

              If the refund is queued and in a different currency than the settlement currency, the settlement amount
              will be ``null`` as the exchange rates may change until the refund is finally executed.

   * - | ``description``

       .. type:: string

     - The description of the refund that may be shown to the consumer, depending on the payment method used.

   * - | ``status``

       .. type:: string

     - Since refunds may be delayed for certain payment methods, the refund carries a status field.

       Possible values:

       * ``queued`` The refund will be processed once you have enough balance. You can still cancel this refund.
       * ``pending`` The refund will be processed soon (usually the next business day). You can still cancel this
         refund.
       * ``processing`` The refund is being processed. Cancellation is no longer possible.
       * ``refunded`` The refund has been paid out to the consumer.
       * ``failed`` The refund has failed during processing.

   * - | ``createdAt``

       .. type:: datetime

     - The date and time the refund was issued, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``paymentId``

       .. type:: string

     - The unique identifier of the payment this refund was created for. For example: ``tr_7UhSN1zuXS``. The full
       payment object can be retrieved via the ``payment`` URL in the ``_links`` object.

   * - | ``_links``

       .. type:: object

     - An object with several URL objects relevant to the refund. Every URL object will contain an ``href`` and a
       ``type`` field.

       .. list-table::
          :widths: auto

          * - | ``self``

              .. type:: URL object

            - The API resource URL of the refund itself.

          * - | ``payment``

              .. type:: URL object

            - The API resource URL of the payment the refund belongs to.

          * - | ``settlement``

              .. type:: URL object

            - The API resource URL of the settlement this payment has been settled with. Not present if not yet settled.

          * - | ``documentation``

              .. type:: URL object

            - The URL to the refund retrieval endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/payments/tr_WDqYK6vllg/refunds/re_4qqhO89gsT \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

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
       "createdAt": "2018-03-14T17:09:02.0Z",
       "description": "Order",
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
               "href": "https://docs.mollie.com/reference/refunds/get",
               "type": "text/html"
           }
       }
   }
