.. _v1/customers-get:

Customers API v1: Get customer
==============================
``GET`` ``https://api.mollie.com/v1/customers/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve a single customer by its ID.

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
     - Optional – Set this to ``true`` to retrieve a test mode customer.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``
       | string
     - Indicates the response contains a customer object. Will always contain ``customer`` for this endpoint.

   * - | ``id``
       | string
     - The customer's unique identifier, for example ``cst_vsKJpSsabw``.

   * - | ``mode``
       | string
     - The mode used to create this customer. Mode determines whether a customer is *real* (live mode) or a *test*
       customer.

       Possible values: ``live`` ``test``

   * - | ``name``
       | string
     - The full name of the customer as provided when the customer was created.

   * - | ``email``
       | string
     - The email address of the customer as provided when the customer was created.

   * - | ``locale``
       | string
     - Allows you to preset the language to be used in the payment screens shown to the consumer. If this parameter was
       not provided when the customer was created, the browser language will be used instead in the payment flow (which
       is usually more accurate).

       Possible values: ``en_US`` ``de_AT`` ``de_CH`` ``de_DE`` ``es_ES`` ``fr_BE`` ``fr_FR`` ``nl_BE`` ``nl_NL``

   * - | ``metadata``
       | object
     - Data provided during the customer creation in JSON notation.

   * - | ``recentlyUsedMethods``
       | array
     - Payment methods that the customer recently used for payments.

       Possible array values: ``banktransfer`` ``belfius`` ``bitcoin`` ``creditcard`` ``directdebit`` ``giftcard``
       ``ideal`` ``inghomepay`` ``kbc`` ``mistercash`` ``paypal`` ``paysafecard`` ``sofort``

   * - | ``createdDatetime``
       | datetime
     - The customer record's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/customers/cst_kEn1PlbGa \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

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
   }
