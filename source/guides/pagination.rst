.. _guides/pagination:

Pagination
==========
Fetching all objects of a resource can be convenient. At the same time, returning too many objects at once can be
unpractical from a performance perspective. Doing so might be too much work for the Mollie API to generate, or for your
website to process.

For this reason the Mollie API only returns a subset of the requested set of objects. In other words, the Mollie API
chops the result of a certain API method call into pages you're able to programmatically scroll through.

Pagination in v2 API endpoints
------------------------------
The ``v2`` API endpoints use the so-called cursor pagination method. In short, this ensures the objects in a page do not
get shifted when a new object is created with the same account in the meantime.

TODO: Add documentation on v2 pagination.

Pagination in v1 API endpoints
------------------------------
.. warning:: This is documentation of an older API version.

Using the ``count`` parameter you can set the page size up to a maximum of 250 objects. The result will be paginated
accordingly, presuming your request would otherwise have resulted in more than ``count`` objects. The ``offset``
parameter lets you skip a certain number of objects before your page starts.

In order to enable you to easily page through the result, every response links to the next, the previous, the first and
the last page. The following overview lists all response fields:

Response object
^^^^^^^^^^^^^^^
.. list-table::
   :header-rows: 0
   :widths: auto

   * - ``totalCount``
     - ``integer``
     - The total number of objects available.

   * - ``offset``
     - ``integer``
     - The number of skipped objects as requested.

   * - ``count``
     - ``integer``
     - The number of objects found in data, which is either the requested number (with a maximum of 250) or the default
       number.

   * - ``data``
     - ``array``
     - The actual data you're looking for.

   * - ``links``
     - ``object|null``
     - Optional – Links to help navigate through the lists of objects, based on the given offset.

       .. list-table::
          :header-rows: 0
          :widths: auto

          * - ``previous``
            - ``string|null``
            - Optional – The previous set of objects, if available.

          * - ``next``
            - ``string|null``
            - Optional – The next set of objects, if available.

          * - ``first``
            - ``string|null``
            - Optional – The first set of objects, if available.

          * - ``last``
            - ``string|null``
            - Optional – The last set of objects, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/payments \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 280,
       "offset": 0,
       "count": 10,
       "data": [
           {
               "resource": "payment",
               "id": "tr_7UhSN1zuXS",
               "mode": "test",
               "createdDatetime": "2018-03-16T17:08:53.0Z",
               "status": "open",
               "expiryPeriod": "PT15M",
               "amount": "10.00",
               "description": "My first payment",
               "metadata": {
                   "order_id": "12345"
               },
               "locale": "nl",
               "profileId": "pfl_QkEhN94Ba",
               "links": {
                   "redirectUrl": "https://webshop.example.org/order/12345/"
               }
           },
           { ... },
           { ... }
       ],
       "links": {
           "first": "https://api.mollie.com/v1/payments?count=10&offset=0",
           "previous": null,
           "next": "https://api.mollie.com/v1/payments?count=10&offset=10",
           "last": "https://api.mollie.com/v1/payments?count=10&offset=270"
       }
   }
