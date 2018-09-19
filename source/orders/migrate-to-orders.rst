Migrating from the v2 Payments API to the Orders API
====================================================

If you have chosen Orders, you can use this guide to migrate from the v2 Payments API to the Orders
API. If you are migrating from the v1 Payments API please first review the
:doc:`v2 migration guide </payments/migrating-v1-to-v2>`.

Differences and similarities
----------------------------
To create a payment in the order API the :doc:`create order </reference/v2/orders-api/create-order>`
endpoint needs to be used.

The `create payment` and `create order` API endpoints are very similar. Both support the
following parameters: ``amount``, ``redirectUrl``, ``webhookUrl``, ``locale``, ``method`` and
``metadata``.  Note that for orders ``locale`` is a **required** parameter.

If you specify a payment method using the ``method`` API parameter the ``payment`` parameter can be
used to supply additional :ref:`payment parameters <payment-parameters>`. For example the iDEAL
issuer can be specified using the following JSON body payload:

.. code-block:: json
   :linenos:

   {
       "payment": {
           "issuer": "ideal_INGBNL2A"
       }
   }


The orders API allows for two additional **Pay after delivery** payment methods:
**Klarna Pay later** (``klarnapaylater``) and **Klarna Slice it** (``klarnasliceit``).
These methods are not available in the payment API as these methods require order details.
Note that **Klarna Slice it** is not available in all regions.

Additional parameters are required to be able to create an order: ``orderNumber``, ``lines`` and
``billingAddress``. The ``lines`` parameter should be an array of :ref:`order lines <order-lines-details>`
describing the actual order contents. The ``billingAddress`` should contain the address of the
person who will be billed for the order amount. Some payment methods also require a date of birth of
the person who placed the order. When omitted the customer can be asked to enter this in the checkout
process.

When the order is created the API response will contain a `checkout` URL just like in the payments API:

.. code-block:: json
   :linenos:

    {
        "_links": {
            "checkout": {
                "href": "https://www.mollie.com/payscreen/order/checkout/pbjz8x",
                "type": "text/html"
            }
        }
    }

The customer should be redirected to this URL to complete the order payment. Note that this link has
a longer expiry period than a payment checkout URL. The exact expiry time can be retrieved from the
`expiresAt` property in the API response.

Shipping
--------
Contrary to the payments API an order is not automatically completed after the customer pays using
the checkout URL. It needs to be shipped. This can be done using the
:doc:`Create Shipment API </reference/v2/shipments-api/create-shipment>` or in the dashboard.
You can create multiple shipments per order.  In the shipment you specify the order lines that are
to be shipped. For some payment methods shipping is required to ensure you will be settled.
Also note that for those methods the customer will receive an invoice per shipment.

Receiving updates
-----------------
Just like in the payments API you can specify a ``webhookUrl`` that will be used by Mollie to
inform your back office when the status of an order has changed. You can then use the Mollie API to
:doc:`retrieve the order status </reference/v2/orders-api/get-order>`.

Refunding
---------
Refunding works almost the same as in the payments API. You will have to use the
:doc:`Create order refund </reference/v2/orders-api/create-order-refund>` endpoint and specify which
order lines are refunded. If no lines are specified the whole order will be refunded.







