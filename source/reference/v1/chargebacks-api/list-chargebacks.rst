.. _v1/chargebacks-list:

Chargebacks API v1: List chargebacks
====================================
``GET`` ``https://api.mollie.com/v1/chargebacks``

``GET`` ``https://api.mollie.com/v1/payments/*paymentId*/chargebacks``

Authentication: :ref:`API keys <guides/authentication>`. :ref:`OAuth access tokens <oauth/overview>`

Retrieve all received chargebacks. If the payment-specific endpoint is used, only chargebacks for that specific payment
are returned.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
When using the payment-specific endpoint, replace ``paymentId`` in the endpoint URL by the payment's ID, for example
``tr_7UhSN1zuXS``.

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``offset``
       | integer
     - Optional – The number of chargebacks to skip.

   * - | ``count``
       | integer
     - Optional – The number of chargebacks to return (with a maximum of 250).

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``payment`` For each chargeback, include the payment it belongs to.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``totalCount``
       | integer
     - The total number of chargebacks available.

   * - | ``offset``
       | integer
     - The number of skipped chargebacks as requested.

   * - | ``count``
       | integer
     - The number of chargebacks found in data, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``
       | array
     - An array of chargebacks objects as described in :ref:`Get chargeback <v1/chargebacks-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of chargebacks, based on the given offset.

       .. list-table::
          :header-rows: 0
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of chargebacks, if available.

          * - | ``next``
              | string
            - Optional – The next set of chargebacks, if available.

          * - | ``first``
              | string
            - Optional – The first set of chargebacks, if available.

          * - | ``last``
              | string
            - Optional – The last set of chargebacks, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/payments/tr_7UhSN1zuXS/chargebacks \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 3,
       "offset": 0,
       "count": 3,
       "data": [
           {
               "resource": "chargeback",
               "id": "chb_n9z0tp",
               "payment": "tr_WDqYK6vllg",
               "amount": "35.07",
               "chargebackDatetime": "2018-03-14T17:00:53.0Z",
               "reversedDatetime": null
           },
           { ... },
           { ... }
       ]
   }
