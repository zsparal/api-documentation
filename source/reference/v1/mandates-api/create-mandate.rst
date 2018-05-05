.. _v1/mandates-create:

Create mandate
==============
.. api-name:: Mandates API
   :version: 1

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v1/customers/*customerId*/mandates

.. authentication::
   :api_keys: true
   :oauth: true

Create a mandate for a specific customer. Mandates allow you to charge a customer's credit card or bank account
recurrently.

It is only possible to create mandates for IBANs with this endpoint. To create mandates for credit cards, have your
customers perform a :ref:`'first payment' <guides/recurring/first-payment>` with their credit card.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example ``/v1/customers/cst_8wmqcHMN4U/mandates``.

.. list-table::
   :widths: auto

   * - | ``method``

       .. type:: string
          :required: true

     - Payment method of the mandate.

       Possible values: ``directdebit``

   * - | ``consumerName``

       .. type:: string
          :required: true

     - The consumer's name.

   * - | ``consumerAccount``

       .. type:: string
          :required: true

     - The consumer's IBAN.

   * - | ``consumerBic``

       .. type:: string
          :required: true

     - The consumer's bank's BIC.

   * - | ``signatureDate``

       .. type:: date
          :required: false

     - The date when the mandate was signed in ``YYYY-MM-DD`` format.

   * - | ``mandateReference``

       .. type:: date
          :required: false

     - A custom mandate reference.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to create a test mode mandate.

Response
--------
``201`` ``application/json; charset=utf-8``

A mandate object is returned, as described in :ref:`Get mandate <v1/mandates-get>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X POST https://api.mollie.com/v1/customers/cst_stTC2WHAuS/mandates \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
       -d "method=directdebit" \
       -d "consumerName=Customer A" \
       -d "consumerAccount=NL53INGB0000000000" \
       -d "consumerBic=INGBNL2A" \
       -d "signatureDate=2016-05-01" \
       -d "mandateReference=YOUR-COMPANY-MD13804"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 201 Created
   Content-Type: application/json; charset=utf-8

   {
       "resource": "mandate",
       "id": "mdt_pWUnw6pkBN",
       "status": "valid",
       "method": "directdebit",
       "customerId": "cst_stTC2WHAuS",
       "details": {
           "consumerName": "Customer A",
           "consumerAccount": "NL53INGB0000000000",
           "consumerBic": "INGBNL2A"
       },
       "mandateReference": "YOUR-COMPANY-MD13804",
       "createdDatetime": "2016-04-30T22:00:00.0Z"
   }
