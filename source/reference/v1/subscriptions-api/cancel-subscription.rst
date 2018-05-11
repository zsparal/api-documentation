.. _v1/subscriptions-cancel:

Cancel subscription
===================
.. api-name:: Subscriptions API
   :version: 1

.. warning:: This is the documentation of the v1 API. The documentation for canceling subscriptions in the new v2 API
             can be found :ref:`here <v2/subscriptions-cancel>`. For more information on the v2 API, refer to our
             :ref:`v2 migration guide <migrate-to-v2>`.

.. endpoint::
   :method: DELETE
   :url: https://api.mollie.com/v1/customers/*customerId*/subscriptions/*id*

.. authentication::
   :api_keys: true
   :oauth: true

A subscription can be canceled any time by calling ``DELETE`` on the resource endpoint.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, and replace ``id`` by the subscription's ID. For
example: ``/v1/customers/cst_stTC2WHAuS/subscriptions/sub_rVKGtNd6s3``.

Response
--------
``204 No Content``

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X DELETE https://api.mollie.com/v1/customers/cst_stTC2WHAuS/subscriptions/sub_rVKGtNd6s3 \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 204 No Content
