.. _v1/customers-list:

Customers API v1: List customers
================================
``GET`` ``https://api.mollie.com/v1/customers``

Authentication: :ref:`API keys <guides/authentication>`. :ref:`OAuth access tokens <oauth/overview>`

Retrieve all customers created.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``offset``
       | integer
     - Optional – The number of customers to skip.

   * - | ``count``
       | integer
     - Optional – The number of customers to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :header-rows: 0
   :widths: auto
    
   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to list test mode customers.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :header-rows: 0
   :widths: auto

   * - | ``totalCount``
       | integer
     - The total number of customers available.

   * - | ``offset``
       | integer
     - The number of skipped customers as requested.

   * - | ``count``
       | integer
     - The number of customers found in data, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``
       | array
     - An array of customers objects as described in :ref:`Get customer <v1/customers-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of customers, based on the given offset.

       .. list-table::
          :header-rows: 0
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of customers, if available.

          * - | ``next``
              | string
            - Optional – The next set of customers, if available.

          * - | ``first``
              | string
            - Optional – The first set of customers, if available.

          * - | ``last``
              | string
            - Optional – The last set of customers, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/customers \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

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
           { ... },
           { ... }
       ]
   }
