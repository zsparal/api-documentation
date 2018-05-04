.. _v1/chargebacks-get:

Chargebacks API v1: Get chargeback
==================================
``GET`` ``https://api.mollie.com/v1/payments/*paymentId*/chargebacks/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve a single chargeback by its ID. Note the original payment's ID is needed as well.

If you do not know the original payment's ID, you can use the :ref:`chargebacks list endpoint <v1/chargebacks-list>`.

Parameters
----------
Replace ``paymentId`` in the endpoint URL by the payment's ID, and replace ``id`` by the chargeback's ID. For example:
``/v1/payments/tr_7UhSN1zuXS/chargebacks/chb_n9z0tp``.

Includes
^^^^^^^^
This endpoint allows you to include additional information by appending the following values via the ``include``
querystring parameter.

* ``payment`` Include the payment object in the response.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``id``
       | string
     - The chargeback's unique identifier, for example ``chb_n9z0tp``.

   * - | ``payment``
       | string, object
     - The ID of the payment this chargeback belongs to. If the payment include is requested, the ID will be replaced by
       a payment object as described in :ref:`Get payment <v1/payments-get>`.

   * - | ``amount``
       | decimal
     - The amount charged back.

   * - | ``chargebackDatetime``
       | datetime
     - The date and time the chargeback was issued, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - | ``reversedDatetime``
       | datetime
     - The date and time the chargeback was reversed if applicable, in
       `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/payments/tr_WDqYK6vllg/chargebacks/chb_n9z0tp \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "chargeback",
       "id": "chb_n9z0tp",
       "payment": "tr_WDqYK6vllg",
       "amount": "35.07",
       "chargebackDatetime": "2018-03-14T17:00:52.0Z",
       "reversedDatetime": null
   }
