.. _v1/customers-list:

Customers API v1: List customers
================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/customers

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve all customers created.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``offset``

       .. type:: integer
          :required: false

     - The number of customers to skip.

   * - | ``count``

       .. type:: integer
          :required: false

     - The number of customers to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to list test mode customers.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``

       .. type:: integer
          :required: true

     - The total number of customers available.

   * - | ``offset``

       .. type:: integer
          :required: true

     - The number of skipped customers as requested.

   * - | ``count``

       .. type:: integer
          :required: true

     - The number of customers found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``

       .. type:: array
          :required: true

     - An array of customers objects as described in :ref:`Get customer <v1/customers-get>`.

   * - | ``links``

       .. type:: object
          :required: false

     - Links to help navigate through the lists of customers, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``

              .. type:: string
                 :required: false

            - The previous set of customers, if available.

          * - | ``next``

              .. type:: string
                 :required: false

            - The next set of customers, if available.

          * - | ``first``

              .. type:: string
                 :required: false

            - The first set of customers, if available.

          * - | ``last``

              .. type:: string
                 :required: false

            - The last set of customers, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/customers \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 3,
       "offset": 0,
       "count": 3,
       "data": [
           {
               "resource": "customer",
               "id": "cst_vsKJpSsabw",
               "mode": "test",
               "name": "Customer A",
               "email": "customer@example.org",
               "locale": "nl_NL",
               "metadata": null,
               "recentlyUsedMethods": [
                   "creditcard",
                   "ideal"
               ],
               "createdDatetime": "2016-04-06T13:23:21.0Z"
           },
           { },
           { }
       ]
   }
