.. _v1/subscriptions-cancel:

Subscriptions API v1: Cancel subscription
=========================================

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

   curl -X DELETE https://api.mollie.com/v1/customers/cst_stTC2WHAuS/subscriptions/sub_rVKGtNd6s3 \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 204 No Content
