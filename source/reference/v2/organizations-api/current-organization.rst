.. _v2/organizations-me:

Get current organization
========================
.. api-name:: Organizations API
    :version: 2

.. endpoint::
    :method: GET
    :url: https://api.mollie.com/v2/organizations/me

.. authentication::
    :api_keys: false
    :oauth: true

Retrieve the currently authenticated organization.


Parameters
----------

No parameters applicable for this endpoint.


Response
--------
``200`` ``application/hal+json; charset=utf-8``

For the full list of fields, see :ref:`GET Organization endpoint <v2/organizations-get>`. Only ``_links`` is listed
here.

.. list-table::
   :widths: auto

   * - | ``_links``

       .. type:: object

     - An object with several URL objects relevant to the organization. Every URL object will contain an ``href`` and
       a ``type`` field.

       .. list-table::
          :widths: auto

          * - | ``self``

              .. type:: URL object

            - The API resource URL of the organization itself.

          * - | ``chargebacks``

              .. type:: URL object

            - The API resource URL where the organization's :ref:`chargebacks <v2/chargebacks-list>` can be retrieved.

          * - | ``customers``

              .. type:: URL object

            - The API resource URL where the organization's :ref:`customers <v2/customers-list>` can be retrieved.

          * - | ``invoices``

              .. type:: URL object

            - The API resource URL where the organization's :ref:`invoices <v2/customers-list>` can be retrieved.

          * - | ``payments``

              .. type:: URL object

            - The API resource URL where the organization's :ref:`payments <v2/payments-list>` can be retrieved.

          * - | ``profiles``

              .. type:: URL object

            - The API resource URL where the organization's :ref:`profiles <v2/customers-list>` can be retrieved.

          * - | ``refunds``

              .. type:: URL object

            - The API resource URL where the organization's :ref:`refunds <v2/refunds-list>` can be retrieved.

          * - | ``settlements``

              .. type:: URL object

            - The API resource URL where the organization's :ref:`settlements <v2/settlements-list>` can be retrieved.

          * - | ``documentation``

              .. type:: URL object

            - The URL to the payment method retrieval endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

       curl -X GET https://api.mollie.com/v2/organizations/me \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
        "resource": "organization",
        "id": "org_12345678",
        "name": "Mollie B.V.",
        "email": "info@mollie.com",
        "address": {
           "streetAndNumber" : "Keizersgracht 313",
           "postalCode": "1016 EE",
            "city": "Amsterdam",
            "country": "NL"
        },
        "registrationNumber": "30204462",
        "vatNumber": "NL815839091B01",
        "_links": {
            "self": {
                "href": "https://api.mollie.com/v2/organizations/me",
                "type": "application/hal+json"
            },
            "chargebacks": {
                "href": "https://api.mollie.com/v2/chargebacks",
                "type": "application/hal+json"
            },
            "customers": {
                "href": "https://api.mollie.com/v2/customers",
                "type": "application/hal+json"
            },
            "invoices": {
                "href": "https://api.mollie.com/v2/invoices",
                "type": "application/hal+json"
            },
            "payments": {
                "href": "https://api.mollie.com/v2/payments",
                "type": "application/hal+json"
            },
            "profiles": {
                "href": "https://api.mollie.com/v2/profiles",
                "type": "application/hal+json"
            },
            "refunds": {
                "href": "https://api.mollie.com/v2/refunds",
                "type": "application/hal+json"
            },
            "settlements": {
                "href": "https://api.mollie.com/v2/settlements",
                "type": "application/hal+json"
            },
            "documentation": {
                "href": "https://docs.mollie.com/reference/v2/organizations-api/current-organization",
                "type": "text/html"
            }
        }
    }
