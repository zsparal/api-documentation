.. _v1/settlements-get:

Settlements API v1: Get settlement
==================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/settlements/*id*

.. authentication::
   :api_keys: false
   :oauth: true

Successful payments are collected into *settlements*, which are then paid out according to your account's payout
schedule. By retrieving a single settlement, you can check which payments were paid out with it, when the settlement
took place, and what invoice reference was used for it.

Settlements will be transferred to your bank account with a ``reference``, for example ``1182161.1506.02``. You can use
the :ref:`List settlements <v1/settlements-list>` endpoint to look up a settlement by reference.

Parameters
----------
Replace ``id`` in the endpoint URL by the settlement's ID, for example ``stl_jDk30akdN``.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string
          :required: true

     - Indicates the response contains a settlement object. Will always contain ``settlement`` for this endpoint.

   * - | ``id``

       .. type:: string
          :required: true

     - The settlement's unique identifier, for example ``stl_jDk30akdN``.

   * - | ``reference``

       .. type:: string
          :required: true

     - The settlement's bank reference, as found on your invoice and in your Mollie account.

   * - | ``createdDatetime``

       .. type:: string
          :required: true

     - The date on which the settlement was created, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``settlementDatetime``

       .. type:: string
          :required: true

     - The date on which the settlement was settled, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.
       When requesting the :ref:`open settlement <v1/settlements-get-open>` or
       :ref:`next settlement <v1/settlements-get-next>` the return value is ``null``.

   * - | ``status``

       .. type:: string
          :required: true

     - The status of the settlement.

       Possible values:

       * ``open`` The settlement has not been closed yet.
       * ``pending`` The settlement has been closed and is being processed.
       * ``paidout`` The settlement has been paid out.
       * ``failed`` The settlement could not be paid out.

   * - | ``amount``

       .. type:: decimal
          :required: true

     - The total amount in EUR paid out with this settlement.

   * - | ``periods``

       .. type:: object
          :required: true

     - This object is a collection of Period objects, which describe the settlement by month in full detail.

       Please note the periods are sorted by date. For example, the field may contain an object called ``2018``, which
       contains a Period object called ``03``. The Period object fields are listed below.

       .. list-table::
          :widths: auto

          * - | ``revenue``

              .. type:: array
                 :required: true

            - An array of Revenue objects containing the total revenue for each payment method during this period. Each
              object has the following fields.

              .. list-table::
                 :widths: auto

                 * - | ``description``

                     .. type:: string
                        :required: true

                   - A description of the revenue subtotal.

                 * - | ``amount``

                     .. type:: object
                        :required: true

                   - The received subtotal for this payment method, further divided in ``net`` (excludes VAT), ``vat``,
                     and ``gross`` (includes VAT).

                 * - | ``count``

                     .. type:: integer
                        :required: true

                   - The number of payments received for this payment method.

                 * - | ``method``

                     .. type:: string
                        :required: true

                   - The payment method ID, if applicable.

          * - | ``costs``

              .. type:: array
                 :required: true

            - An array of Cost objects, describing the fees withheld for each payment method during this period. Each
              object has the following fields.

              .. list-table::
                 :widths: auto

                 * - | ``description``

                     .. type:: string
                        :required: true

                   - A description of the subtotal.

                 * - | ``amount``

                     .. type:: object
                        :required: true

                   - The paid costs for this payment method, further divided in ``net`` (excludes VAT), ``vat``, and
                     ``gross`` (includes VAT).

                 * - | ``count``

                     .. type:: integer
                        :required: true

                   - The number of times costs were made for this payment method.

                 * - | ``rate``

                     .. type:: object
                        :required: true

                   - The service rates, further divided into ``fixed`` and ``variable`` costs.

                 * - | ``method``

                     .. type:: string
                        :required: true

                   - The payment method ID, if applicable.

   * - | ``paymentIds``

       .. type:: array
          :required: true

     - A list of all :ref:`payment IDs <v1/payments-get>` that are included in the settlement. You can use this to fully
       reconcile the settlement with your back office.

   * - | ``refundIds``

       .. type:: array
          :required: true

     - A list of all :ref:`refund IDs <v1/refunds-get>` that are included in the settlement. You can use this to fully
       recocnile the settlement with your back office.

   * - | ``chargebackIds``

       .. type:: array
          :required: true

     - A list of all :ref:`chargeback IDs <v1/chargebacks-get>` that are included in the settlement. You can use this to
       fully recocnile the settlement with your back office.

   * - | ``links``

       .. type:: object
          :required: true

     - An object with URLs to related resources.

       .. list-table::
          :widths: auto

          * - | ``payments``

              .. type:: string
                 :required: true

            - URL to retrieve all payments included in the settlement.

          * - | ``refunds``

              .. type:: string
                 :required: true

            - URL to retrieve all refunds included in the settlement.

          * - | ``chargebacks``

              .. type:: string
                 :required: true

            - URL to retrieve all chargebacks included in the settlement.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/settlements/stl_jDk30akdN \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "settlement",
       "id": "stl_jDk30akdN",
       "reference": "1234567.1511.03",
       "createdDatetime": "2015-11-06T06:00:01.0Z",
       "settledDatetime": "2015-11-06T09:41:44.0Z",
       "amount": "39.75",
       "periods": {
           "2015": {
               "11": {
                   "revenue": [
                       {
                           "description": "iDEAL",
                           "method": "ideal",
                           "count": 6,
                           "amount": {
                               "net": "86.1000",
                               "vat": null,
                               "gross": "86.1000"
                           }
                       },
                       {
                           "description": "Refunds iDEAL",
                           "method": "refund",
                           "count": 2,
                           "amount": {
                               "net": "-43.2000",
                               "vat": null,
                               "gross": "-43.2000"
                           }
                       }
                   ],
                   "costs": [
                       {
                           "description": "iDEAL",
                           "method": "ideal",
                           "count": 6,
                           "rate": {
                               "fixed": "0.3500",
                               "percentage": null
                           },
                           "amount": {
                               "net": "2.1000",
                               "vat": "0.4410",
                               "gross": "2.5410"
                           }
                       },
                       {
                           "description": "Refunds iDEAL",
                           "method": "refund",
                           "count": 2,
                           "rate": {
                               "fixed": "0.2500",
                               "percentage": null
                           },
                           "amount": {
                               "net": "0.5000",
                               "vat": "0.1050",
                               "gross": "0.6050"
                           }
                       }
                   ]
               }
           }
       },
       "paymentIds": [
           "tr_PBHPvA2ViG",
           "tr_GAHivPBVP2",
           "tr_2VBPiPvGAH",
           "tr_2iHGBvPPVA",
           "tr_VPH2iPGvAB",
           "tr_AGPVviP2BH"
       ],
       "refundIds": [
           "re_PvGHiV2BPA",
           "re_APBiGPH2vV"
       ],
       "links": {
           "payments": "https://api.mollie.com/v1/settlements/stl_jDk30akdN/payments",
           "refunds": "https://api.mollie.com/v1/settlements/stl_jDk30akdN/refunds",
           "chargebacks": "https://api.mollie.com/v1/settlements/stl_jDk30akdN/chargebacks"
       }
   }
