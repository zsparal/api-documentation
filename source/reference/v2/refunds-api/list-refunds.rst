.. _v2/refunds-list:

Refunds API v2: List refunds
============================
``GET`` ``https://api.mollie.com/v2/refunds``

``GET`` ``https://api.mollie.com/v2/payments/*paymentId*/refunds``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve all refunds. If the payment-specific endpoint is used, only refunds for that specific payment are returned.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
When using the payment-specific endpoint, replace ``paymentId`` in the endpoint URL by the payment's ID, for example
``tr_7UhSN1zuXS``.

.. list-table::
   :widths: auto

   * - | ``from``
       | string
     - Optional – Offset the result set to the refund with this ID. The refund with this ID is included in the result
       set as well.

   * - | ``limit``
       | integer
     - Optional – The number of refunds to return (with a maximum of 250).

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``count``
       | integer
     - The number of refunds found in ``_embedded``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``_embedded``
       | object
     - The object containing the queried data.

       .. list-table::
          :widths: auto

          * - | ``refunds``
              | array
            - An array of refund objects as described in :ref:`Get refund <v2/refunds-get>`.

   * - | ``_links``
       | object
     - Links to help navigate through the lists of refunds. Every URL object will contain an ``href`` and a ``type``
       field.

       .. list-table::
          :widths: auto

          * - | ``self``
              | object
            - The URL to the current set of refunds.

          * - | ``previous``
              | object
            - Optional – The previous set of refunds, if available.

          * - | ``next``
              | object
            - Optional – The next set of refunds, if available.

          * - | ``documentation``
              | object
            - The URL to the refunds list endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/payments/tr_7UhSN1zuXS/refunds \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "count": 5,
       "_embedded": {
           "refunds": [
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
                           "href": "https://www.mollie.com/en/docs/reference/refunds/get",
                           "type": "text/html"
                       }
                   }
               },
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payments/tr_7UhSN1zuXS/refunds?limit=5",
               "type": "application/hal+json"
           },
           "previous": null,
           "next": {
               "href": "https://api.mollie.com/v2/payments/tr_7UhSN1zuXS/refunds?from=re_APBiGPH2vV&limit=5",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/refunds/list",
               "type": "text/html"
           }
       }
   }
