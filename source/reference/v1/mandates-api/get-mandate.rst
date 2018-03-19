.. _v1/mandates-get:

Mandates API v1: Get mandate
============================
``GET`` ``https://api.mollie.com/v1/customers/*customerId*/mandates/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve a mandate by its ID and its customer's ID. The mandate will either contain IBAN or credit card details,
depending on the type of mandate.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, and replace ``id`` by the mandate's ID. For example
``/v1/customers/cst_8wmqcHMN4U/mandates/mdt_pWUnw6pkBN``.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to retrieve a test mode mandate.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``
       | string
     - Indicates the response contains a mandate object. Will always contain ``mandate`` for this endpoint.

   * - | ``id``
       | string
     - The identifier uniquely referring to this mandate. Mollie assigns this identifier at mandate creation time. For
       example ``mdt_pWUnw6pkBN``.

   * - | ``status``
       | string
     - The status of the mandate. Please note that a status can be ``pending`` for subscription mandates when there is
       no first payment. See our :ref:`subscription guide <guides/recurring/charging-periodically>`.

       Possible values: ``valid`` ``pending`` ``invalid``

   * - | ``method``
       | string
     - Payment method of the mandate.

       Possible values: ``directdebit`` ``creditcard``

   * - | ``customerId``
       | string
     - The customer's unique identifier, for example ``cst_3RkSN1zuPE``.

   * - | ``details``
       | object
     - The mandate detail object contains different fields per payment method.

       For direct debit mandates, the following details are returned:

       .. list-table::
          :widths: auto

          * - | ``consumerName``
              | string
            - The account holder's name.

          * - | ``consumerAccount``
              | string
            - The account holder's IBAN.

          * - | ``consumerBic``
              | string
            - The account holder's bank's BIC.

       For credit card mandates, the following details are returned:

       .. list-table::
          :widths: auto

          * - | ``cardHolder``
              | string
            - The credit card holder's name.

          * - | ``cardNumber``
              | string
            - The last four digits of the credit card number.

          * - | ``cardLabel``
              | string
            - The credit card's label. Note that not all labels can be processed through Mollie.

              Possible values: ``American Express`` ``Carta Si`` ``Carte Bleue`` ``Dankort`` ``Diners Club``
              ``Discover`` ``JCB`` ``Laser`` ``Maestro`` ``Mastercard`` ``Unionpay`` ``Visa`` ``null``

          * - | ``cardFingerprint``
              | string
            - Unique alphanumeric representation of the credit card, usable for identifying returning customers.

          * - | ``cardExpiryDate``
              | date
            - Expiry date of the credit card in ``YYYY-MM-DD`` format.

   * - | ``mandateReference``
       | string
     - Optional – The mandate's custom reference, if this was provided when creating the mandate.

   * - | ``signatureDate``
       | string
     - Optional – The signature date of the mandate in ``YYYY-MM-DD`` format.

   * - | ``createdDatetime``
       | datetime
     - The mandate's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/customers/cst_4qqhO89gsT/mandates/mdt_h3gAaD5zP \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "mandate",
       "id": "mdt_h3gAaD5zP",
       "status": "valid",
       "method": "creditcard",
       "customerId": "cst_4qqhO89gsT",
       "details": {
           "cardHolder": "John Doe",
           "cardNumber": "1234",
           "cardLabel": "Mastercard",
           "cardFingerprint": "fHB3CCKx9REkz8fPplT8N4nq",
           "cardExpiryDate": "2016-03-31"
       },
       "createdDatetime": "2016-04-13T11:32:38.0Z"
   }
