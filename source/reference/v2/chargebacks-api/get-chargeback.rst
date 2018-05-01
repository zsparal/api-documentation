.. _v2/chargebacks-get:

Chargebacks API v2: Get chargeback
==================================
``GET`` ``https://api.mollie.com/v2/payments/*paymentId*/chargebacks/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve a single chargeback by its ID. Note the original payment's ID is needed as well.

If you do not know the original payment's ID, you can use the :ref:`chargebacks list endpoint <v2/chargebacks-list>`.

Parameters
----------
Replace ``paymentId`` in the endpoint URL by the payment's ID, and replace ``id`` by the chargeback's ID. For example:
``/v2/payments/tr_7UhSN1zuXS/chargebacks/chb_n9z0tp``.

Embedding of related resources
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
This endpoint allows for embedding additional information by appending the following values via the ``embed``
query string parameter.

* ``payment`` Include the :ref:`payment <v2/payments-get>` this chargeback was issued for.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``id``
       | string
     - The chargeback's unique identifier, for example ``chb_n9z0tp``.

   * - | ``amount``
       | amount object
     - The amount charged back by the consumer.

       .. list-table::
          :widths: auto

          * - | ``currency``
              | string
            - An `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code.

          * - | ``value``
              | string
            - A string containing the exact amount that was charged back in the given currency.

   * - | ``settlementAmount``
       | amount object
     - The amount deducted from the settlement, in the settlement's currency.

       .. list-table::
          :widths: auto

          * - | ``currency``
              | string
            - The settlement currency, an `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code.

          * - | ``value``
              | string
            - A string containing the exact amount that was deducted for the chargeback from your account balance in the
              settlement currency. Note that this will be negative.

   * - | ``createdAt``
       | datetime
     - The date and time the chargeback was issued, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``reversedAt``
       | datetime
     - The date and time the chargeback was reversed if applicable, in
       `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``paymentId``
       | string
     - The unique identifier of the payment this chargeback was issued for. For example: ``tr_7UhSN1zuXS``. The full
       payment object can be retrieved via the ``payment`` URL in the ``_links`` object.

   * - | ``_links``
       | object
     - An object with several URL objects relevant to the chargeback. Every URL object will contain an ``href`` and a
       ``type`` field.

       .. list-table::
          :widths: auto

          * - | ``self``
              | URL object
            - The API resource URL of the chargeback itself.

          * - | ``payment``
              | URL object
            - The API resource URL of the payment this chargeback belongs to.

          * - | ``documentation``
              | URL object
            - The URL to the chargeback retrieval endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/payments/tr_WDqYK6vllg/chargebacks/chb_n9z0tp \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "resource": "chargeback",
       "id": "chb_n9z0tp",
       "amount": {
           "currency": "USD",
           "value": "43.38"
       },
       "settlementAmount": {
           "currency": "EUR",
           "value": "35.07"
       },
       "createdAt": "2018-03-14T17:00:52.0Z",
       "reversedAt": null
       "paymentId": "tr_WDqYK6vllg",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg/chargebacks/chb_n9z0tp",
               "type": "application/hal+json"
           },
           "payment": {
               "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/chargebacks/get",
               "type": "text/html"
           }
       }
   }
