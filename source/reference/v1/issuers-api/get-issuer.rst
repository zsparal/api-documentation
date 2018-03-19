.. _v1/issuers-get:

Issuers API v1: Get issuer
==========================
``GET`` ``https://api.mollie.com/v1/issuers/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve a payment method issuer by its issuer identifier.

The Issuers API only supports iDEAL.

Parameters
----------
Replace ``id`` in the endpoint URL by the issuer's ID, for example ``ideal_ABNANL2A``.

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the ``testmode`` parameter is also available.

.. list-table::
   :widths: auto

   * - | ``testmode``
       | boolean
     - Optional – Set this to true to only retrieve the issuer if it is available in test mode.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``
       | string
     - Indicates the response contains an issuer object. Will always contain ``issuer`` for this endpoint.

   * - | ``id``
       | string
     - The identifier uniquely referring to this issuer. When supplying this ID as the ``issuer`` parameter during
       :ref:`payment creation <v1/payments-create>`, the issuer selection screen is skipped.

   * - | ``name``
       | string
     - The full name of the issuer, for example 'ABN AMRO'.

   * - | ``method``
       | string
     - The :ref:`payment method <v1/methods-list>` this issuer belongs to.

       Possible values: ``ideal``

   * - | ``image``
       | object
     - URLs of images representing the payment method issuer.

       .. list-table::
          :widths: auto

          * - | ``normal``
              | string
            - The URL for an issuer icon of 55x37 pixels.

          * - | ``bigger``
              | string
            - The URL for an issuer icon of 110x74 pixels.

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X GET https://api.mollie.com/v1/issuers/ideal_ABNANL2A \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "issuer",
       "id": "ideal_ABNANL2A",
       "name": "ABN AMRO",
       "method": "ideal",
       "image": {
           "normal": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ABNANL2A.png",
           "bigger": "https://www.mollie.com/images/checkout/v2/ideal-issuer-icons/ABNANL2A%402x.png"
       }
   }
