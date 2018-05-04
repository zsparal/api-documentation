.. _v1/customers-update:

Customers API v1: Update customer
=================================

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v1/customers/*id*

.. authentication::
   :api_keys: true
   :oauth: true

Update an existing customer.

Parameters
----------
Replace ``id`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

.. list-table::
   :widths: auto

   * - | ``name``

       .. type:: string
          :required: false

     - The full name of the customer.

   * - | ``email``

       .. type:: string
          :required: false

     - The email address of the customer.

   * - | ``locale``

       .. type:: string
          :required: false

     - Allows you to preset the language to be used in the payment screens shown to the consumer. When this
       parameter is not provided, the browser language will be used instead in the payment flow (which is usually more
       accurate).

       Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

   * - | ``metadata``

       .. type:: object
          :required: false

     - Provide any data you like in JSON notation, and we will save the data alongside the customer. Whenever
       you fetch the customer with our API, we'll also include the metadata. You can use up to 1kB of JSON.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to update a test mode customer.

Response
--------
``200`` ``application/json; charset=utf-8``

A customer object is returned, as described in :ref:`Get customer <v1/customers-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X POST https://api.mollie.com/v1/customers/cst_8wmqcHMN4U \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d "name=Customer A" \
       -d "email=customer@example.com"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "customer",
       "id": "cst_8wmqcHMN4U",
       "mode": "test",
       "name": "Customer A",
       "email": "customer@example.com",
       "locale": "nl_NL",
       "metadata": null,
       "recentlyUsedMethods": [],
       "createdDatetime": "2016-04-06T13:10:19.0Z"
   }
