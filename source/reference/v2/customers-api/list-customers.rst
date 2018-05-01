.. _v2/customers-list:

Customers API v2: List customers
================================
``GET`` ``https://api.mollie.com/v2/customers``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve all customers created.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``from``
       | string
     - Optional – Offset the result set to the customer with this ID. The customer with this ID is included in the
       result set as well.

   * - | ``limit``
       | integer
     - Optional – The number of customers to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto
    
   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to list test mode customers.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``count``
       | integer
     - The number of customers found in ``_embedded``, which is either the requested number (with a maximum of 250) or
       the default number.

   * - | ``_embedded``
       | object
     - The object containing the queried data.

       .. list-table::
          :widths: auto

          * - | ``customers``
              | array
            - An array of customer objects as described in :ref:`Get customer <v2/customers-get>`.

   * - | ``_links``
       | object
     - Links to help navigate through the lists of customers. Every URL object will contain an ``href`` and a ``type``
       field.

       .. list-table::
          :widths: auto

          * - | ``self``
              | URL object
            - The URL to the current set of customers.

          * - | ``previous``
              | URL object
            - Optional – The previous set of customers, if available.

          * - | ``next``
              | URL object
            - Optional – The next set of customers, if available.

          * - | ``documentation``
              | URL object
            - The URL to the customers list endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v2/customers \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "count": 3,
       "_embedded": {
           "subscriptions": [
               {
                   "resource": "customer",
                   "id": "cst_kEn1PlbGa",
                   "mode": "test",
                   "name": "Customer A",
                   "email": "customer@example.org",
                   "locale": "nl_NL",
                   "metadata": null,
                   "recentlyUsedMethods": [
                       "creditcard",
                       "ideal"
                   ],
                   "createdAt": "2018-04-06T13:23:21.0Z",
                   "_links": {
                       "self": {
                           "href": "https://api.mollie.com/v2/customers/cst_kEn1PlbGa",
                           "type": "application/hal+json"
                       },
                       "documentation": {
                           "href": "https://www.mollie.com/en/docs/reference/customers/get",
                           "type": "text/html"
                       }
                   }
               },
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/customers",
               "type": "application/hal+json"
           },
           "previous": null,
           "next": {
               "href": "https://api.mollie.com/v2/customers?from=cst_stTC2WHAuS",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/customers/list",
               "type": "text/html"
           }
       }
   }
