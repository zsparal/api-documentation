Create shipment
===============
.. api-name:: Shipments API
   :version: 2

.. warning::
   This API is currently in private beta. If you are interested in participating, please contact your account manager at
   Mollie.

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v2/orders/*orderId*/shipments

.. authentication::
   :api_keys: true
   :oauth: true

In addition to the Orders API, the create shipment can be used to ship order lines.
When using *Klarna Pay later* this is mandatory for the amount to be captured.

Parameters
----------
.. list-table::
   :widths: auto

   * - ``orderLineShipments``

       .. type:: array
          :required: true

     - An array of objects containing the order line tokens you want to create a shipment for

       .. list-table::
          :widths: auto

          * - ``orderLineToken``

              .. type:: string

            - The API resource token of the order line, for example: ``odl_jp31jz``


Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with :doc:`Mollie Connect/OAuth </oauth/overview>`, the only mandatory extra parameter is the
``profileId`` parameter. With it, you can specify which profile the shipment belongs to. Organizations can have multiple
profiles for each of their websites. See :doc:`Profiles API </reference/v2/profiles-api/get-profile>` for more
information.

.. list-table::
   :widths: auto

   * - ``profileId``

       .. type:: string
          :required: true

     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to make this order a test shipment.

Response
--------
``201`` ``application/hal+json; charset=utf-8``

A shipment object is returned, as described in :doc:`Get shipment </reference/v2/shipments-api/get-shipment>`.

Example
-------

Request (curl)
^^^^^^^^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X POST https://api.mollie.com/v2/orders/ord_kEn1PlbGa/shipments \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d '{
            "orderLineShipments": [
                {
                    "orderLineToken": "odl_dgtxyl"
                },
                {
                    "orderLineToken": "odl_jp31jz"
                }
            ]
        }'
