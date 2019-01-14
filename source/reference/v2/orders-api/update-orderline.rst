Update order line
=================
.. api-name:: Orders API
   :version: 2

.. endpoint::
   :method: PATCH
   :url: https://api.mollie.com/v2/orders/*orderId*/lines/*orderlineId*

.. authentication::
   :api_keys: true
   :organization_access_tokens: true
   :oauth: true

This endpoint can be used to update the order line. Only the lines that belong to an order with status ``created``,
``pending`` or ``authorized`` can be updated.

When updating an order line that uses a *pay after delivery* method such as *Klarna Pay later*,
Klarna may decline the requested changes, resulting in an error response from the Mollie API.
The order remains intact, though the requested changes are not persisted.

Parameters
----------
Replace ``orderId`` in the endpoint URL by the order's ID, for example ``ord_pbjz8x``. And replace the
``orderlineId`` in the URL by the order line ID, for example ``odl_dgtxyl``

Please note that even though all parameters are optional, at least one of them needs to be provided
in the request.

.. list-table::
   :widths: auto

   * - ``name``

       .. type:: string
          :required: false

     - A description of the order line, for example *LEGO 4440 Forest Police Station*.

   * - ``imageUrl``

       .. type:: string
          :required: false

     - A link pointing to an image of the product sold.

   * - ``productUrl``

       .. type:: string
          :required: false

     - A link pointing to the product page in your web shop of the product sold.

Access token parameters
^^^^^^^^^^^^^^^^^^^^^^^
If you are using :doc:`organization access tokens </guides/authentication>` or are creating an
:doc:`OAuth app </oauth/overview>`, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to update a test mode order line.

Response
--------
``200`` ``application/hal+json``

An order object is returned, as described in
:doc:`Get order </reference/v2/orders-api/get-order>`.

Example
-------

.. code-block-selector::
   .. code-block:: bash
      :linenos:

      curl -X PATCH https://api.mollie.com/v2/orders/ord_pbjz8x/lines/odl_dgtxyl \
         -H "Content-Type: application/json" \
         -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
         -d '{
               "name": "LEGO 71043 Hogwarts™ Castle",
               "productUrl": "https://shop.lego.com/en-GB/product/Hogwarts-Castle-71043",
               "imageUrl": "https://sh-s7-live-s.legocdn.com/is/image//LEGO/71043_alt1?$main$"
         }'

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json

   {
        "resource": "order",
        "id": "ord_pbjz8x",
        "profileId": "pfl_URR55HPMGx",
        "method": "ideal",
        "amount": {
            "value": "1027.99",
            "currency": "EUR"
        },
        "status": "created",
        "isCancelable": true,
        "metadata": null,
        "createdAt": "2018-08-02T09:29:56+00:00",
        "expiresAt": "2018-08-30T09:29:56+00:00",
        "mode": "live",
        "locale": "nl_NL",
        "billingAddress": {
            "organizationName": "Mollie B.V.",
            "streetAndNumber": "Keizersgracht 313",
            "city": "Amsterdam",
            "region": "Noord-Holland",
            "postalCode": "1234AB",
            "country": "NL",
            "title": "Dhr",
            "givenName": "Piet",
            "familyName": "Mondriaan",
            "email": "piet@mondriaan.com",
            "phone": "+31208202070"
        },
        "orderNumber": "18475",
        "shippingAddress": {
            "organizationName": "Mollie B.V.",
            "streetAndNumber": "Keizersgracht 313",
            "postalCode": "1016 EE",
            "city": "Amsterdam",
            "country": "nl",
            "givenName": "Luke",
            "familyName": "Skywalker",
            "email": "luke@skywalker.com"
        },
       "redirectUrl": "https://example.org/redirect",
        "lines": [
            {
                "resource": "orderline",
                "id": "odl_dgtxyl",
                "orderId": "ord_pbjz8x",
                "name": "LEGO 71043 Hogwarts™ Castle",
                "sku": "5702016116977",
                "type": "physical",
                "status": "created",
                "metadata": null,
                "isCancelable": false,
                "quantity": 2,
                "quantityShipped": 0,
                "amountShipped": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "quantityRefunded": 0,
                "amountRefunded": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "quantityCanceled": 0,
                "amountCanceled": {
                    "value": "0.00",
                    "currency": "EUR"
                },
               "shippableQuantity": 0,
               "refundableQuantity": 0,
               "cancelableQuantity": 0,
                "unitPrice": {
                    "value": "399.00",
                    "currency": "EUR"
                },
                "vatRate": "21.00",
                "vatAmount": {
                    "value": "121.14",
                    "currency": "EUR"
                },
                "discountAmount": {
                    "value": "100.00",
                    "currency": "EUR"
                },
                "totalAmount": {
                    "value": "698.00",
                    "currency": "EUR"
                },
                "createdAt": "2018-08-02T09:29:56+00:00",
                "_links": {
                    "productUrl": {
                        "href": "https://shop.lego.com/en-GB/product/Hogwarts-Castle-71043",
                        "type": "text/html"
                    },
                    "imageUrl": {
                        "href": "https://sh-s7-live-s.legocdn.com/is/image//LEGO/71043_alt1?$main$",
                        "type": "text/html"
                    }
                }
            },
            {
                "resource": "orderline",
                "id": "odl_jp31jz",
                "orderId": "ord_pbjz8x",
                "name": "LEGO 42056 Porsche 911 GT3 RS",
                "sku": "5702015594028",
                "type": "physical",
                "status": "created",
                "metadata": null,
                "isCancelable": false,
                "quantity": 1,
                "quantityShipped": 0,
                "amountShipped": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "quantityRefunded": 0,
                "amountRefunded": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "quantityCanceled": 0,
                "amountCanceled": {
                    "value": "0.00",
                    "currency": "EUR"
                },
               "shippableQuantity": 0,
               "refundableQuantity": 0,
               "cancelableQuantity": 0,
                "unitPrice": {
                    "value": "329.99",
                    "currency": "EUR"
                },
                "vatRate": "21.00",
                "vatAmount": {
                    "value": "57.27",
                    "currency": "EUR"
                },
                "totalAmount": {
                    "value": "329.99",
                    "currency": "EUR"
                },
                "createdAt": "2018-08-02T09:29:56+00:00",
                "_links": {
                    "productUrl": {
                        "href": "https://shop.lego.com/nl-NL/Porsche-911-GT3-RS-42056",
                        "type": "text/html"
                    },
                    "imageUrl": {
                        "href": "https://sh-s7-live-s.legocdn.com/is/image/LEGO/42056?$PDPDefault$",
                        "type": "text/html"
                    }
                }
            }
        ],
        "_links": {
            "self": {
                "href": "https://api.mollie.com/v2/orders/ord_pbjz8x",
                "type": "application/hal+json"
            },
            "checkout": {
                "href": "https://www.mollie.com/payscreen/order/checkout/pbjz8x",
                "type": "text/html"
            },
            "documentation": {
                "href": "https://docs.mollie.com/reference/v2/orders-api/get-order",
                "type": "text/html"
            }
        }
   }
