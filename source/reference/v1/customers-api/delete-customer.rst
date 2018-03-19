.. _v1/customers-delete:

Customers API v1: Delete customer
=================================
``DELETE`` ``https://api.mollie.com/v1/customers/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Delete a customer. All mandates and subscriptions created for this customer will be cancelled as well.

Parameters
----------
Replace ``id`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to delete a test mode customer.

Response
--------
``204 No Content``

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X DELETE https://api.mollie.com/v1/customers/cst_8wmqcHMN4U \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 204 No Content
