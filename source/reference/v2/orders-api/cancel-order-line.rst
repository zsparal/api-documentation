Cancel order line
=================
.. api-name:: Orders API
   :version: 2

.. warning::
   This API is currently in private beta. If you are interested in participating, please contact your account manager at
   Mollie.

.. endpoint::
   :method: DELETE
   :url: https://api.mollie.com/v2/orders/*orderId*/lines/*lineId*

.. authentication::
   :api_keys: true
   :oauth: true

An order line can only be canceled while its ``status`` field is either ``created`` or ``authorized``. You should
cancel an order line if you don't intend to ship it.

If the order line is ``paid`` or already ``completed``, you should create a refund instead.

For more information about the status transitions please check our :doc:`order status changes guide </orders/status-changes>`.

Parameters
----------
Replace ``orderId`` in the endpoint URL by the order's ID, for example ``ord_8wmqcHMN4U`` and replace ``lineId`` in
the endpoint URL by the order line's ID, for example ``odl_dgtxyl``.

.. list-table::
   :widths: auto

   * - ``quantity``

       .. type:: int
          :required: false

     - The number of items that should be canceled for this order line. When this parameter is omitted, the
       whole order line will be canceled. When part of the line has been shipped, it will cancel the remainder and the
       order line will be completed.

       Must be less than the number of items already shipped or canceled for this order line.

       .. note:: At the moment, it is not possible to partially cancel an order line if it has a discount.

Response
--------
``204 No Content``

Example
-------

Request (curl)
^^^^^^^^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X DELETE https://api.mollie.com/v2/orders/ord_8wmqcHMN4U/lines/odl_dgtxyl \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Request (PHP)
^^^^^^^^^^^^^
.. code-block:: php
   :linenos:

     <?php
     $mollie = new \Mollie\Api\MollieApiClient();
     $mollie->setApiKey("test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM");

     $order = $mollie->orders->get("ord_8wmqcHMN4U");
     $order->cancelLine("odl_dgtxyl");
     $updatedOrder = $mollie->orders->get($order->id);

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 204 No Content
