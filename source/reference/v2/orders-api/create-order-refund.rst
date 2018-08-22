Create order refund
===================
.. api-name:: Orders API
   :version: 2

.. warning::
   This API is currently in private beta. If you are interested in participating, please contact your account manager at
   Mollie.

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v2/orders/*orderId*/refunds

.. authentication::
   :api_keys: true
   :oauth: true


When using the Orders API, refunds should be made against the order. When using e-invoicing payment methods such as
Klarna Pay later, this ensure that your customer will receive credit invoices with the correct product information on
them.

If the order line is still in the ``authorized`` status, it cannot be refunded. You should
:doc:`cancel it instead </reference/v2/orders-api/cancel-order-line>`. Order lines that are ``paid``, ``shipping`` or
``completed`` can be refunded.

For more details on how refunds work, see :doc:`Create Payment Refund API </reference/v2/refunds-api/create-refund>`.

Parameters
----------

Replace ``orderId`` in the endpoint URL by the order's ID, for example ``ord_8wmqcHMN4U``.

.. list-table::
   :widths: auto

   * - ``lines``

       .. type:: array
          :required: true

     - An array of objects containing the order line details you want to create a refund for. If you send an empty
       array, the entire order will be refunded.

       .. list-table::
          :widths: auto

          * - ``id``

              .. type:: string

            - The API resource token of the order line, for example: ``odl_jp31jz``.

          * - ``quantity``

              .. type:: int
                 :required: false

            - The number of items that should be refunded for this order line. When this parameter is omitted, the
              whole order line will be refunded.

              Must be less than the number of items already refunded for this order line.

              .. note:: At the moment, it is not possible to partially refund an order line if it has a discount.


   * - ``description``

       .. type:: string
          :required: false

     - The description of the refund you are creating. This will be shown to the consumer on their card or
       bank statement when possible. Max. 140 characters.

Response
--------
``201`` ``application/hal+json; charset=utf-8``

An refund object is returned, as described in :doc:`Get refund </reference/v2/refunds-api/get-refund>`.

Example
-------

Request (curl)
^^^^^^^^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X POST https://api.mollie.com/v2/orders/ord_stTC2WHAuS/refunds \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d '{
            "lines": [
                {
                    "id": "odl_dgtxyl",
                    "quantity": 1
                }
            ],
            "description": "Required quantity not in stock, refunding one photo book."
       }'
