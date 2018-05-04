.. _v1/organizations-get:

Organizations API v1: Get organization
======================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/organizations/*id*

.. authentication::
   :api_keys: false
   :oauth: true

Organizations reflect the legal entities associated with the Mollie account. Payments, Refunds, Profiles, Settlements,
all belong to an Organization, therefore it's often referred to as *Resource Owner*. The Organizations resource contains
basic information about the legal entity, as well as insight into the activation statuses of payment methods for
example. Mollie performs identity verification and business intent validation before accepting organizations and
transferring payments to them, in order to protect buyers.

Parameters
----------
Replace ``id`` in the endpoint URL by a full organization ID like ``org_1234567`` or use the ``me`` alias.

If you're an official Mollie Reseller, you can retrieve the organizations that you have signed up.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string
          :required: true

     - Indicates the response contains an organization object. Will always contain ``organization`` for this endpoint.

   * - | ``id``

       .. type:: string
          :required: true

     - The identifier uniquely referring to this organization, for example ``org_1234567``.

   * - | ``name``

       .. type:: string
          :required: true

     - The organization's official name.

   * - | ``email``

       .. type:: string
          :required: true

     - The email address of the organization.

   * - | ``address``

       .. type:: string
          :required: true

     - The address where the organizations is established.

   * - | ``postalCode``

       .. type:: string
          :required: true

     - The postal code of where the organization is established.

   * - | ``city``

       .. type:: string
          :required: true

     - The name of the city where the organization is established.

   * - | ``country``

       .. type:: string
          :required: true

     - The name of the country where the organization is established.

   * - | ``countryCode``

       .. type:: string
          :required: true

     - The two-letter code of the country where the organization is established.

   * - | ``registrationType``

       .. type:: string
          :required: true

     - National or international registration type of the organization's legal entity.

   * - | ``registrationNumber``

       .. type:: string
          :required: true

     - Registration number of the organization's legal entity.

   * - | ``registrationDatetime``

       .. type:: datetime
          :required: true

     - Registration date of the organization's legal entity.

   * - | ``vatNumber``

       .. type:: string
          :required: false

     - The organization's VAT number. You can use this for invoicing
       :ref:`application fees <oauth/application-fees>`, for example.

   * - | ``verifiedDatetime``

       .. type:: datetime
          :required: true

     - Date on which Mollie's verification of this organization completed successfully.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/organizations/org_1234567 \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "organization",
       "id": "org_1234567",
       "name": "Mollie B.V.",
       "email": "info@mollie.com",
       "address": "Keizersgracht 313",
       "postalCode": "1016EE",
       "city": "Amsterdam",
       "country": "Netherlands",
       "countryCode": "NL",
       "registrationType": "bv",
       "registrationNumber": "30204462",
       "registrationDatetime": "2004-04-01T09:41:00.0Z",
       "vatNumber": "NL123456789B01",
       "verifiedDatetime": "2007-06-29T09:41:00.0Z"
   }
