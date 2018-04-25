.. _v2/chargebacks-list:

Chargebacks API v2: List chargebacks
====================================
``GET`` ``https://api.mollie.com/v2/payments/*paymentId*/chargebacks``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve all received chargebacks. If the payment-specific endpoint is used, only chargebacks for that specific payment
are returned.

The results are not paginated.

Parameters
----------
When using the payment-specific endpoint, replace ``paymentId`` in the endpoint URL by the payment's ID, for example
``tr_7UhSN1zuXS``.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``count``
       | integer
     - The number of chargebacks found in ``_embedded``.

   * - | ``_embedded``
       | object
     - The object containing the queried data.

       .. list-table::
          :widths: auto

          * - | ``chargebacks``
              | array
            - An array of chargeback objects as described in :ref:`Get chargeback <v2/chargebacks-get>`.

   * - | ``_links``
       | object
     - Links related to the lists of chargebacks. Every URL object will contain an ``href`` and a ``type``
       field.

       .. list-table::
          :widths: auto

          * - | ``self``
              | object
            - The URL to the current set of chargebacks.

          * - | ``documentation``
              | object
            - The URL to the chargebacks list endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/payments/tr_7UhSN1zuXS/chargebacks \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "count": 3,
       "_embedded": {
           "chargebacks": [
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
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payments/tr_7UhSN1zuXS/chargebacks",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/chargebacks/list",
               "type": "text/html"
           }
       }
   }
