.. _v1/chargebacks-list:

Chargebacks API v1: List chargebacks
====================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/chargebacks


.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/payments/*paymentId*/chargebacks

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve all received chargebacks. If the payment-specific endpoint is used, only chargebacks for that specific payment
are returned.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
When using the payment-specific endpoint, replace ``paymentId`` in the endpoint URL by the payment's ID, for example
``tr_7UhSN1zuXS``.

.. list-table::
   :widths: auto

   * - | ``offset``

       .. type:: integer
          :required: false

     - The number of chargebacks to skip.

   * - | ``count``

       .. type:: integer
          :required: false

     - The number of chargebacks to return (with a maximum of 250).

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``payment`` For each chargeback, include the payment it belongs to.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``

       .. type:: integer
          :required: true

     - The total number of chargebacks available.

   * - | ``offset``

       .. type:: integer
          :required: true

     - The number of skipped chargebacks as requested.

   * - | ``count``

       .. type:: integer
          :required: true

     - The number of chargebacks found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``

       .. type:: array
          :required: true

     - An array of chargebacks objects as described in :ref:`Get chargeback <v1/chargebacks-get>`.

   * - | ``links``

       .. type:: object
          :required: false

     - Links to help navigate through the lists of chargebacks, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``

              .. type:: string
                 :required: false

            - The previous set of chargebacks, if available.

          * - | ``next``

              .. type:: string
                 :required: false

            - The next set of chargebacks, if available.

          * - | ``first``

              .. type:: string
                 :required: false

            - The first set of chargebacks, if available.

          * - | ``last``

              .. type:: string
                 :required: false

            - The last set of chargebacks, if available.

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
           { },
           { }
       ]
   }
