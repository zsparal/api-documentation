.. _v1/invoices-list:

Invoices API v1: List invoices
==============================
``GET`` ``https://api.mollie.com/v1/invoices``

Authentication: :ref:`OAuth access tokens <oauth/overview>`

Retrieve all invoices on the account. Optionally filter on year or invoice number.

The results are paginated. See :ref:`pagination <guides/pagination>` for more information.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``reference``
       | string
     - Optional – Use this parameter to filter for an invoice with a specific invoice number / reference. An example
       reference would be ``2018.10000``.

   * - | ``year``
       | integer
     - Optional – Use this parameter to filter for invoices from a specific year (e.g. ``2018``).

   * - | ``offset``
       | integer
     - Optional – The number of payment profiles to skip.

   * - | ``count``
       | integer
     - Optional – The number of payment profiles to return (with a maximum of 250).

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``lines`` Include invoice details such as which products were invoiced.
* ``settlements`` Include settlements for which the invoices were created, if applicable.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``
       | integer
     - The total number of invoices available.

   * - | ``offset``
       | integer
     - The number of skipped invoices as requested.

   * - | ``count``
       | integer
     - The number of invoices found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``
       | array
     - An array of invoice objects as described in :ref:`Get invoice <v1/invoices-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of invoices, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of invoices, if available.

          * - | ``next``
              | string
            - Optional – The next set of invoices, if available.

          * - | ``first``
              | string
            - Optional – The first set of invoices, if available.

          * - | ``last``
              | string
            - Optional – The last set of invoices, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET "https://api.mollie.com/v1/invoices?include=lines" \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount":1,
       "offset":0,
       "count":1,
       "data":[
           {
               "resource":"invoice",
               "id":"inv_xBEbP9rvAq",
               "reference":"2017.10000",
               "vatNumber":"NL001234567B01",
               "status":"open",
               "issueDate":"2017-08-31",
               "dueDate":"2017-09-14",
               "amount": {
                   "net":"45.00",
                   "vat":"9.45",
                   "gross":"54.45"
               },
               "lines":[
                   {
                       "period":"2017-09",
                       "description":"Transaction costs iDEAL",
                       "count":100,
                       "vatPercentage":21,
                       "amount":"29.00"
                   }
               ],
               "links": {
                   "pdf":"https://www.mollie.com/merchant/download/invoice/sbd9gu/52981a39788e5e0acaf71bbf570e941f"
               }
           }
       ]
   }
