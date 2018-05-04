.. _v1/invoices-get:

Invoices API v1: Get invoice
============================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/invoices/*id*

.. authentication::
   :api_keys: false
   :oauth: true

Retrieve details of an invoice, using the invoice's identifier.

If you want to retreive the details of an invoice by its invoice number, use the :ref:`list API <v1/invoices-list>` with
the ``reference`` parameter.

Parameters
----------
Replace ``id`` in the endpoint URL by the invoice ID, for example ``inv_FrvewDA3Pr``.

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``lines`` Include invoice details such as which products were invoiced.
* ``settlements`` Include settlements for which the invoice was created, if applicable.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string
          :required: true

     - Indicates the response contains an invoice object. Will always contain ``invoice`` for this endpoint.

   * - | ``id``

       .. type:: string
          :required: true

     - The invoice's unique identifier, for example ``inv_FrvewDA3Pr``.

   * - | ``reference``

       .. type:: string
          :required: true

     - The reference number of the invoice. An example value would be: ``2018.10000``.

   * - | ``vatNumber``

       .. type:: string
          :required: false

     - The VAT number to which the invoice was issued to (if applicable).

   * - | ``status``

       .. type:: string
          :required: true

     - Status of the invoice.

       Possible values:

       * ``open`` The invoice is not paid yet.
       * ``paid`` The invoice is paid.
       * ``overdue`` Payment of the invoice is overdue.

   * - | ``issueDate``

       .. type:: string
          :required: true

     - The invoice date in ``YYYY-MM-DD`` format.

   * - | ``paidDate``

       .. type:: string
          :required: false

     - The date on which the invoice was paid, in ``YYYY-MM-DD`` format. Only for paid invoices.

   * - | ``dueDate``

       .. type:: string
          :required: false

     - The date on which the invoice is due, in ``YYYY-MM-DD`` format. Only for due invoices.

   * - | ``amount``

       .. type:: object
          :required: true

     - The total amount of the invoice with and without VAT.

       .. list-table::
          :widths: auto

          * - | ``net``

              .. type:: decimal
                 :required: true

            - Total amount of the invoice excluding VAT.

          * - | ``vat``

              .. type:: decimal
                 :required: true

            - VAT amount of the invoice. Only for merchants registered in the Netherlands. For EU merchants, VAT will be
              shifted to recipient; article 44 and 196 EU VAT Directive 2006/112. For merchants outside the EU, no VAT
              will be charged.

          * - | ``gross``

              .. type:: decimal
                 :required: true

            - Total amount of the invoice including VAT.

   * - | ``lines``

       .. type:: array
          :required: true

     - Only available if you require this field to be included – The collection of products which make up the invoice.

       .. list-table::
          :widths: auto

          * - | ``period``

              .. type:: string
                 :required: true

            - The administrative period in ``YYYY-MM`` on which the line should be booked.

          * - | ``description``

              .. type:: string
                 :required: true

            - Description of the product.

          * - | ``count``

              .. type:: integer
                 :required: true

            - Number of products invoiced (usually number of payments).

          * - | ``vatPercentage``

              .. type:: decimal
                 :required: false

            - VAT percentage rate that applies to this product.

          * - | ``amount``

              .. type:: decimal
                 :required: true

            - Amount excluding VAT.

   * - | ``settlements``

       .. type:: array
          :required: true

     - Only available if you require this field to be included – An array of :ref:`settlements <v1/settlements-get>`
       that were invoiced on this invoice. You need the ``settlements.read`` permission for this field.

   * - | ``links``

       .. type:: object
          :required: true

     - Useful URLs to related resources.

       .. list-table::
          :widths: auto

          * - | ``pdf``

              .. type:: string
                 :required: true

            - The URL to the PDF version of the invoice. The URL will expire after 60 minutes.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET "https://api.mollie.com/v1/invoice/inv_xBEbP9rvAq?include=lines" \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource":"invoice",
       "id":"inv_xBEbP9rvAq",
       "reference":"2016.10000",
       "vatNumber":"NL001234567B01",
       "status":"open",
       "issueDate":"2016-08-31",
       "dueDate":"2016-09-14",
       "amount": {
           "net":"45.00",
           "vat":"9.45",
           "gross":"54.45"
       },
       "lines":[
           {
               "period":"2016-09",
               "description":"iDEAL transactiekosten",
               "count":100,
               "vatPercentage":21,
               "amount":"45.00"
           }
       ],
       "links": {
           "pdf":"https://www.mollie.com/merchant/download/invoice/sbd9gu/52981a39788e5e0acaf71bbf570e941f"
       }
   }
