.. _v2/settlements-get:

Settlements API v2: Get settlement
==================================
``GET`` ``https://api.mollie.com/v2/settlements/*id*``

Authentication: :ref:`OAuth access tokens <oauth/overview>`

Successful payments are collected into *settlements*, which are then paid out according to your account's payout
schedule. By retrieving a single settlement, you can check which payments were paid out with it, when the settlement
took place, and what invoice reference was used for it.

Settlements will be transferred to your bank account with a ``reference``, for example ``1182161.1506.02``. You can use
the :ref:`List settlements <v2/settlements-list>` endpoint to look up a settlement by reference.

Parameters
----------
Replace ``id`` in the endpoint URL by the settlement's ID, for example ``stl_jDk30akdN``.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``
       | string
     - Indicates the response contains a settlement object. Will always contain ``settlement`` for this endpoint.

   * - | ``id``
       | string
     - The settlement's unique identifier, for example ``stl_jDk30akdN``.

   * - | ``reference``
       | string
     - The settlement's bank reference, as found on your invoice and in your Mollie account.

   * - | ``createdAt``
       | string
     - The date on which the settlement was created, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``settledAt``
       | string
     - The date on which the settlement was settled, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.
       When requesting the :ref:`open settlement <v2/settlements-get-open>` or
       :ref:`next settlement <v2/settlements-get-next>` the return value is ``null``.

   * - | ``status``
       | string
     - The status of the settlement.

       Possible values:

       * ``open`` The settlement has not been closed yet.
       * ``pending`` The settlement has been closed and is being processed.
       * ``paidout`` The settlement has been paid out.
       * ``failed`` The settlement could not be paid out.

   * - | ``amount``
       | amount object
     - The total amount paid out with this settlement.

       .. list-table::
          :widths: auto

          * - | ``currency``
              | string
            - The `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code.

          * - | ``value``
              | string
            - A string containing the exact amount of the settlement in the given currency.

   * - | ``periods``
       | object
     - This object is a collection of Period objects, which describe the settlement by month in full detail.

       Please note the periods are sorted by date. For example, the field may contain an object called ``2018``, which
       contains a Period object called ``03``. The Period object fields are listed below.

       .. list-table::
          :widths: auto

          * - | ``revenue``
              | array
            - An array of revenue objects containing the total revenue for each payment method during this period. Each
              object has the following fields.

              .. list-table::
                 :widths: auto

                 * - | ``description``
                     | string
                   - A description of the revenue subtotal.

                 * - | ``amountNet``
                     | amount object
                   - The net total of received funds for this payment method (excludes VAT).

                 * - | ``amountVat``
                     | amount object
                   - The VAT amount applicable to the revenue.

                 * - | ``amountGross``
                     | amount object
                   - The gross total of received funds for this payment method (includes VAT).

                 * - | ``count``
                     | integer
                   - The number of payments received for this payment method.

                 * - | ``method``
                     | string
                   - The payment method ID, if applicable.

          * - | ``costs``
              | array
            - An array of Cost objects, describing the fees withheld for each payment method during this period. Each
              object has the following fields.

              .. list-table::
                 :widths: auto

                 * - | ``description``
                     | string
                   - A description of the subtotal.

                 * - | ``amountNet``
                     | amount object
                   - The net total costs for this payment method (excludes VAT).

                 * - | ``amountVat``
                     | amount object
                   - The VAT amount applicable to the costs.

                 * - | ``amountGross``
                     | amount object
                   - The gross total costs for this payment method (includes VAT).

                 * - | ``count``
                     | integer
                   - The number of times costs were made for this payment method.

                 * - | ``rate``
                     | object
                   - The service rates, further divided into ``fixed`` and ``percentage`` costs.

                     .. list-table::
                        :widths: auto

                        * - | ``fixed``
                            | amount object
                          - An amount object describing the fixed costs.

                        * - | ``variable``
                            | string
                          - A string describing the variable costs as a percentage.

                 * - | ``method``
                     | string
                   - The payment method ID, if applicable.

   * - | ``_links``
       | object
     - An object with several URL objects relevant to the settlement. Every URL object will contain an ``href`` and a
       ``type`` field.

       .. list-table::
          :widths: auto

          * - | ``self``
              | URL object
            - The API resource URL of the settlement itself.

          * - | ``payments``
              | URL object
            - The API resource URL of the payments that are included in this settlement.

          * - | ``refunds``
              | URL object
            - The API resource URL of the refunds that are included in this settlement.

          * - | ``chargebacks``
              | URL object
            - The API resource URL of the chargebacks that are included in this settlement.

          * - | ``documentation``
              | URL object
            - The URL to the settlement retrieval endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/settlements/stl_jDk30akdN \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "resource": "settlement",
       "id": "stl_jDk30akdN",
       "reference": "1234567.1804.03",
       "createdDatetime": "2018-04-06T06:00:01.0Z",
       "settledDatetime": "2018-04-06T09:41:44.0Z",
       "amount": {
           "currency": "EUR",
           "value": "39.75"
       },
       "periods": {
           "2018": {
               "4": {
                   "revenue": [
                       {
                           "description": "iDEAL",
                           "method": "ideal",
                           "count": 6,
                           "amountNet": {
                               "currency": "EUR",
                               "value": "86.1000"
                           },
                           "amountVat": null,
                           "amountGross": {
                               "currency": "EUR",
                               "value": "86.1000"
                           }
                       },
                       {
                           "description": "Refunds iDEAL",
                           "method": "refund",
                           "count": 2,
                           "amountNet": {
                               "currency": "EUR",
                               "value": "-43.2000"
                           },
                           "amountVat": null,
                           "amountGross": {
                               "currency": "EUR",
                               "value": "43.2000"
                           }
                       }
                   ],
                   "costs": [
                       {
                           "description": "iDEAL",
                           "method": "ideal",
                           "count": 6,
                           "rate": {
                               "fixed": {
                                   "currency": "EUR",
                                   "value": "0.3500"
                               },
                               "percentage": null
                           },
                           "amountNet": {
                               "currency": "EUR",
                               "value": "2.1000"
                           },
                           "amountVat": {
                               "currency": "EUR",
                               "value": "0.4410"
                           },
                           "amountGross": {
                               "currency": "EUR",
                               "value": "2.5410"
                           }
                       },
                       {
                           "description": "Refunds iDEAL",
                           "method": "refund",
                           "count": 2,
                           "rate": {
                               "fixed": {
                                   "currency": "EUR",
                                   "value": "0.2500"
                               },
                               "percentage": null
                           },
                           "amountNet": {
                               "currency": "EUR",
                               "value": "0.5000"
                           },
                           "amountVat": {
                               "currency": "EUR",
                               "value": "0.1050"
                           },
                           "amountGross": {
                               "currency": "EUR",
                               "value": "0.6050"
                           }
                       }
                   ]
               }
           }
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/settlements/next",
               "type": "application/hal+json"
           },
           "payments": {
               "href": "https://api.mollie.com/v2/settlements/stl_jDk30akdN/payments",
               "type": "application/hal+json"
           },
           "refunds": {
               "href": "https://api.mollie.com/v2/settlements/stl_jDk30akdN/refunds",
               "type": "application/hal+json"
           },
           "chargebacks": {
               "href": "https://api.mollie.com/v2/settlements/stl_jDk30akdN/chargebacks",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/settlements/next",
               "type": "text/html"
           }
       }
   }
