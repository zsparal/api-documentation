Cancel order line
=================
.. api-name:: Orders API
   :version: 2

.. endpoint::
   :method: DELETE
   :url: https://api.mollie.com/v2/orders/*orderId*/line/*lineId*

.. authentication::
   :api_keys: true
   :oauth: true

The order line can only be canceled while it's ``status`` field is either ``created`` or ``authorized``.
For more information about the status transitions please check our <link to guide here>.


Parameters
----------
Replace ``orderId`` in the endpoint URL by the order's ID, for example ``ord_8wmqcHMN4U`` and replace ``lineId`` in
the endpoint URL by the order line's ID, for example ``odl_dgtxyl``.

Response
--------
``204 No Content``

Example
-------

Request (curl)
^^^^^^^^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X DELETE https://api.mollie.com/v2/orders/ord_8wmqcHMN4U/line/odl_dgtxyl \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 204 No Content
