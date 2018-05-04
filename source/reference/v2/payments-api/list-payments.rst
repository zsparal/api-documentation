.. _v2/payments-list:

Payments API v2: List payments
==============================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v2/payments

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve all payments created with the current payment profile, ordered from newest to oldest.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``from``

       .. type:: string
          :required: false

     - Offset the result set to the payment with this ID. The payment with this ID is included in the result
       set as well.

   * - | ``limit``

       .. type:: integer
          :required: false

     - The number of payments to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the following parameters are also available. With the ``profileId``
parameter, you can specify which profile you want to look at when listing payments. If you omit the ``profileId``
parameter, you will get all payments on the organization. Organizations can have multiple profiles for each of their
websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
   :widths: auto

   * - | ``profileId``

       .. type:: string
          :required: false

     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``.

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to true to only retrieve payments made in test mode. By default, only live payments are
       returned.

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``settlement`` Include the settlement a payment belongs to, when available.
* ``details.qrCode`` Include a :ref:`QR code <guides/qr-codes>` object for each payment that supports it. Only available
  for iDEAL, Bitcoin, Bancontact and bank transfer payments.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``count``

       .. type:: integer
          :required: true

     - The number of payments found in ``_embedded``, which is either the requested number (with a maximum of 250) or
       the default number.

   * - | ``_embedded``

       .. type:: object
          :required: true

     - The object containing the queried data.

       .. list-table::
          :widths: auto

          * - | ``payments``

              .. type:: array
                 :required: true

            - An array of payment objects as described in :ref:`Get payment <v2/payments-get>`.

   * - | ``_links``

       .. type:: object
          :required: true

     - Links to help navigate through the lists of payments. Every URL object will contain an ``href`` and a ``type``
       field.

       .. list-table::
          :widths: auto

          * - | ``self``

              .. type:: URL object
                 :required: true

            - The URL to the current set of payments.

          * - | ``previous``

              .. type:: URL object
                 :required: false

            - The previous set of payments, if available.

          * - | ``next``

              .. type:: URL object
                 :required: false

            - The next set of payments, if available.

          * - | ``documentation``

              .. type:: URL object
                 :required: true

            - The URL to the payments list endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/payments?limit=5 \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "count": 5,
       "_embedded": {
           "payments": [
               {
                   "resource": "payment",
                   "id": "tr_7UhSN1zuXS",
                   "mode": "test",
                   "createdAt": "2018-02-12T11:58:35.0Z",
                   "expiresAt": "2018-02-12T12:13:35.0Z",
                   "status": "open",
                   "isCancelable": false,
                   "amount": {
                       "value": "75.00",
                       "currency": "GBP"
                   },
                   "description": "test",
                   "method": "ideal",
                   "metadata": null,
                   "details": null,
                   "profileId": "pfl_QkEhN94Ba",
                   "redirectUrl": "https://webshop.example.org/order/12345/",
                   "_links": {
                       "checkout": {
                           "href": "https://www.mollie.com/paymentscreen/issuer/select/ideal/7UhSN1zuXS",
                           "type": "text/html"
                       },
                       "self": {
                           "href": "https://api.mollie.com/v2/payments/tr_7UhSN1zuXS",
                           "type": "application/hal+json"
                       }
                   }
               },
               { },
               { },
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/payments?limit=5",
               "type": "application/hal+json"
           },
           "previous": null,
           "next": {
               "href": "https://api.mollie.com/v2/payments?from=tr_SDkzMggpvx&limit=5",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/payments/list",
               "type": "text/html"
           }
       }
   }
