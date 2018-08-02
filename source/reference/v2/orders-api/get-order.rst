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
Replace ``id`` in the endpoint URL by the customer's ID, for example ``ord_8wmqcHMN4U``.

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

     - Indicates the response contains a customer object. Will always contain ``order`` for this endpoint.

   * - ``id``

       .. type:: string

     - The order's unique identifier, for example ``ord_vsKJpSsabw``.

   * - ``profileId``

       .. type:: string

     - The profile the order was created on, for example ``pfl_v9hTwCvYqw``.

   * - ``mode``

       .. type:: string

     - The mode used to create this customer. Mode determines whether a customer is *real* (live mode) or a *test*
       customer.

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
       "resource": "customer",
       "id": "cst_kEn1PlbGa",
       "mode": "test",
       "name": "Customer A",
       "email": "customer@example.org",
       "locale": "nl_NL",
       "metadata": null,
       "createdAt": "2018-04-06T13:23:21.0Z",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/customers/cst_kEn1PlbGa",
               "type": "application/hal+json"
           },
           "mandates": {
               "href": "https://api.mollie.dev/v2/customers/cst_kEn1PlbGa/mandates",
               "type": "application/hal+json"
           },
           "subscriptions": {
               "href": "https://api.mollie.dev/v2/customers/cst_kEn1PlbGa/subscriptions",
               "type": "application/hal+json"
           },
           "payments": {
               "href": "https://api.mollie.dev/v2/customers/cst_kEn1PlbGa/payments",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://docs.mollie.com/reference/v2/customers-api/get-customer",
               "type": "text/html"
           }
       }
   }
