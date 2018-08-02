Get order
=========
.. api-name:: Orders API
   :version: 2

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v2/orders/*id*

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve a single order by its ID.

Parameters
----------
Replace ``id`` in the endpoint URL by the order's ID, for example ``ord_8wmqcHMN4U``.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with :doc:`Mollie Connect/OAuth </oauth/overview>`, the ``testmode`` parameter is also
available.

.. list-table::
   :widths: auto

   * - ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to retrieve a test mode order.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - ``resource``

       .. type:: string

     - Indicates the response contains an order object. Will always contain ``order`` for this endpoint.

   * - ``id``

       .. type:: string

     - The order's unique identifier, for example ``ord_vsKJpSsabw``.

   * - ``profileId``

       .. type:: string

     - The profile the order was created on, for example ``pfl_v9hTwCvYqw``.

   * - ``mode``

       .. type:: string

     - The mode used to create this order.

       Possible values: ``live`` ``test``

   * - ``amount``

       .. type:: amount object

     - The total amount of the order, including VAT and discounts.

   * - ``amountCaptured``

       .. type:: amount object

     - The amount captured, thus far.

   * - ``amountRefunded``

       .. type:: amount object

     - The total amount refunded, thus far.

   * - ``status``

       .. type:: string

     - The status of the order. One of the following values:

       * ``created``
       * ``paid``
       * ``authorized``
       * ``canceled``
       * ``refunded``
       * ``shipping``
       * ``completed``
       * ``void``

       See Order status changes for details on the orders' statuses.

   * - ``billingAddress``

       .. type:: object

     - The person and the address the order is billed too. See below.

   * - ``consumerDateOfBirth``

       .. type:: date
          :required: false

     - The date of birth of your customer, if available.

   * - ``orderNumber``

       .. type:: string

     - Your order number that was used when creating the order.

   * - ``shippingAddress``

       .. type:: object

     - The person and the address the order is billed too. See below.

   * - ``locale``

       .. type:: string

     - Allows you to preset the language to be used in the hosted payment pages shown to the consumer. If this parameter was
       not provided when the customer was created, the browser language will be used instead in the payment flow (which
       is usually more accurate).

       Possible values: ``en_US`` ``nl_NL`` ``nl_BE`` ``fr_FR`` ``fr_BE`` ``de_DE`` ``de_AT`` ``de_CH`` ``es_ES``
       ``ca_ES`` ``pt_PT`` ``it_IT`` ``nb_NO`` ``sv_SE`` ``fi_FI`` ``da_DK`` ``is_IS`` ``hu_HU`` ``pl_PL`` ``lv_LV``
       ``lt_LT``

   * - ``metadata``

       .. type:: object

     - Data provided during the order creation.

   * - ``createdAt``

       .. type:: datetime

     - The order's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - ``_links``

       .. type:: object

     - An object with several URL objects relevant to the customer. Every URL object will contain an ``href`` and a
       ``type`` field.

       .. list-table::
          :widths: auto

          * - ``self``

              .. type:: URL object

            - The API resource URL of the customer itself.

          * - ``documentation``

              .. type:: URL object

            - The URL to the customer retrieval endpoint documentation.

Order lines
^^^^^^^^^^^

Addresses
^^^^^^^^^

Example
-------

Request (curl)
^^^^^^^^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/orders/ord_kEn1PlbGa \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
        "resource": "order",
        "id": "ord_pbjz8x",
        "profileId": "pfl_URR55HPMGx",
        "amount": {
            "value": "2.00",
            "currency": "EUR"
        },
        "status": "created",
        "merchantData": null,
        "createdAt": "2018-08-02T09:29:56+00:00",
        "mode": "live",
        "billingAddress": {
            "streetAndNumber": "Keizersgracht 313",
            "postalCode": "1016 EE",
            "city": "Amsterdam",
            "country": "nl",
            "givenName": "Luke",
            "familyName": "Skywalker",
            "email": "luke@skywalker.com"
        },
        "shippingAddress": {
            "streetAndNumber": "Keizersgracht 313",
            "postalCode": "1016 EE",
            "city": "Amsterdam",
            "country": "nl",
            "givenName": "Luke",
            "familyName": "Skywalker",
            "email": "luke@skywalker.com"
        },
        "orderlines": [
            {
                "resource": "orderline",
                "id": "odl_dgtxyl",
                "orderId": "ord_pbjz8x",
                "name": null,
                "reference": null,
                "type": null,
                "status": "created",
                "quantity": "1",
                "quantityUnit": null,
                "unitPrice": {
                    "value": "1.00",
                    "currency": "EUR"
                },
                "taxRate": null,
                "totalTaxAmount": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "totalAmount": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "merchantData": null,
                "createdAt": "2018-08-02T09:29:56+00:00",
                "_links": {
                    "self": {
                        "href": "https://api.mollie.com/v2/orders/ord_pbjz8x/orderlines/odl_dgtxyl",
                        "type": "application/hal+json"
                    }
                }
            },
            {
                "resource": "orderline",
                "id": "odl_jp31jz",
                "orderId": "ord_pbjz8x",
                "name": null,
                "reference": null,
                "type": null,
                "status": "created",
                "quantity": "1",
                "quantityUnit": null,
                "unitPrice": {
                    "value": "1.00",
                    "currency": "EUR"
                },
                "taxRate": null,
                "totalTaxAmount": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "totalAmount": {
                    "value": "0.00",
                    "currency": "EUR"
                },
                "merchantData": null,
                "createdAt": "2018-08-02T09:29:56+00:00",
                "_links": {
                    "self": {
                        "href": "https://api.mollie.com/v2/orders/ord_pbjz8x/orderlines/odl_jp31jz",
                        "type": "application/hal+json"
                    }
                }
            }
        ],
        "_links": {
            "self": {
                "href": "https://api.mollie.com/v2/orders/ord_pbjz8x",
                "type": "application/hal+json"
            },
            "documentation": {
                "href": "https://docs.mollie.com/reference/v2/orders-api/get-order",
                "type": "text/html"
            }
        }
    }

