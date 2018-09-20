Migrating from Payments API to the Orders API
=============================================

If you have chosen Orders, you can use this guide to migrate from the v2 Payments API to the Orders
API. If you are migrating from the v1 Payments API please first review the
:doc:`v2 migration guide </payments/migrating-v1-to-v2>` as the Orders API is very similar to the v2
Payments API.

Why use orders?
---------------
* *Pay after delivery* payment methods like *Klarna Pay later* or *Klarna Slice it* are only
  available when using the :doc:`Create Order API </reference/v2/orders-api/create-order>`.
* Some payment methods communicate the order lines to the customer in the hosted payment pages or in an
  invoice.
* The order can also be inspected in the dashboard, where individual order lines can be shipped,
  refunded or canceled. This can also be done by using the API.

Differences and similarities
----------------------------
To create a payment in the order API the :doc:`Create order </reference/v2/orders-api/create-order>`
API needs to be used.

The `Create payment` and `Create order` APIs are very similar. Both support the
following parameters: ``amount``, ``redirectUrl``, ``webhookUrl``, ``locale``, ``method`` and
``metadata``.  For orders, ``locale`` is a *required* parameter.

For orders, there is no ``description`` field. The Payment description will be automatically created
by Mollie and will contain the order number, your profile’s name and your profile’s website.

If you specify a payment method using the ``method`` API parameter the ``payment`` parameter can be
used to supply additional :ref:`payment parameters <payment-parameters>`. For example the iDEAL
issuer can be specified using the following JSON body payload:

.. code-block:: json
   :linenos:

   {
       "orderNumber": "1337",
       "method": "ideal",
       "payment": {
           "issuer": "ideal_INGBNL2A"
       }
   }

Additional parameters are required to be able to create an order: ``orderNumber``, ``lines`` and
``billingAddress``. The ``lines`` parameter should be an array of :ref:`order lines <order-lines-details>`
describing the actual order contents. The ``billingAddress`` should contain the address of the
person who will be billed for the order amount.

+------------------------+--------------------------------------------+------------------------------------------------+
|                        | Payments API                               | Orders API                                     |
+========================+============================================+================================================+
| ``amount``             | *Identical between Payments API and Orders API.*                                            |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``redirectUrl``        | *Identical between Payments API and Orders API.*                                            |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``webhookUrl``         | See :doc:`/payments/status-changes`.       | Orders have two flows: authorized and paid. See|
|                        |                                            | :doc:`/orders/status-changes`.                 |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``locale``             | Recommended in Payments API.               | Required for Orders API.                       |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``method``             | Does not support *pay after delivery*      | Supports *Klarna Pay later* and *Klarna Slice  |
|                        | payment methods.                           | it*.                                           |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``metadata``           | *Identical between Payments API and Orders API.*                                            |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``description``        | Required for Payments API.                 | Not available.                                 |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``orderNumber``        | Not available.                             | Required for Orders API.                       |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``lines``              | Not available.                             | :ref:`Specify <order-lines-details>` the       |
|                        |                                            | products sold in the order.                    |
+------------------------+--------------------------------------------+------------------------------------------------+
| ``billingAddress``     | Optional for Payments API.                 | Required for Orders API. Has several new       |
|                        |                                            | fields.                                        |
+------------------------+--------------------------------------------+------------------------------------------------+

When the order is created the response will contain a ``checkout`` URL just like in the payments API:

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

Your customer should be redirected to this URL to complete the order payment.

Note that this link has a longer expiry period than a payment checkout URL. The exact expiry time can be retrieved from
the ``expiresAt`` property in the API response.

Receiving status updates
------------------------
Just like in the payments API you can specify a ``webhookUrl`` that will be used by Mollie to
inform your back office when the status of an order has changed. You can then use the Mollie API to
:doc:`retrieve the order status </reference/v2/orders-api/get-order>`.

Shipping
--------
Contrary to the payments API an order is not automatically completed after the customer pays using
the checkout URL. It needs to be shipped. This can be done using the
:doc:`Create Shipment API </reference/v2/shipments-api/create-shipment>` or directly from the `Mollie Dashboard <https://www.mollie.com/dashboard/>`_.

If needed, you can create multiple shipments per order. In the shipment you specify the order lines that are to be
shipped.

For *pay after delivery* payment methods, shipping is required to ensure you will be settled. Also note that for those
methods the customer will receive an invoice per shipment.

Refunding
---------
Refunding works almost the same as in the payments API. You will have to use the
:doc:`Create order refund </reference/v2/orders-api/create-order-refund>` endpoint and specify which
order lines are to be refunded. If no lines are specified the whole order will be refunded.
