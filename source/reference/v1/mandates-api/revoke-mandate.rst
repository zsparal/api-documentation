.. _v1/mandates-revoke:

Mandates API v1: Revoke mandate
===============================
``DELETE`` ``https://api.mollie.com/v1/customers/*customerId*/mandates/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Revoke a customer's mandate. You will no longer be able to charge the consumer's bank account or credit card with this
mandate.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, and replace ``id`` by the mandate's ID. For example:
``/v1/customers/cst_stTC2WHAuS/mandates/mdt_pWUnw6pkBN``.

Response
--------
``204 No Content``

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X DELETE https://api.mollie.com/v1/customers/cst_stTC2WHAuS/mandates/mdt_pWUnw6pkBN \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 204 No Content
