Submit onboarding data
======================
.. api-name:: Onboarding API
   :version: 2

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v2/onboarding/me

.. authentication::
   :api_keys: false
   :organization_access_tokens: true
   :oauth: true

Submit data that will be prefilled in the merchant's onboarding. Please note that the data you submit will only be
processed when the :doc:`onboarding status </reference/v2/onboarding-api/get-onboarding-status>` is ``needs-data``.

.. note:: Information that the merchant has entered in their dashboard will not be overwritten.

Parameters
----------
Please note that even though all parameters are optional, at least one of them needs to be provided in the request.

.. list-table::
   :widths: auto

   * - ``organization``

       .. type:: object
          :required: false

     - Data of the organization you want to provide.

       .. list-table::
          :widths: auto

          * - ``name``

              .. type:: string
                 :required: false

            - Name of the organization.

          * - ``address``

              .. type:: address object
                 :required: false

            - Address of the organization.

              .. list-table::
                 :widths: auto

                 * - ``streetAndNumber``

                     .. type:: string
                        :required: false

                   - The street name and house number of the organization.

                 * - ``postalCode``

                     .. type:: string
                        :required: false

                   - The postal code of the organization.

                 * - ``city``

                     .. type:: string
                        :required: false

                   - The city of the organization.

                 * - ``country``

                     .. type:: string
                        :required: false

                   - TThe country of the address in `ISO 3166-1 alpha-2 <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>`_ format.

          * - ``registrationNumber``

              .. type:: string
                 :required: false

            - The Chamber of Commerce registration number of the company.

          * - ``vatNumber``

              .. type:: string
                 :required: false

            - The VAT number of the company.

   * - ``profile``

       .. type:: object
          :required: false

     - Data of the payment profile you want to provide.

       .. list-table::
          :widths: auto

          * - ``name``

              .. type:: string
                 :required: false

            - The profile’s name should reflect the tradename or brand name of the profile’s website or application.

          * - ``url``

              .. type:: string
                 :required: false

            - The URL to the profile’s website or application. The URL should start with ``https://`` or ``http://``.

          * - ``email``

              .. type:: string
                 :required: false

            - The email address associated with the profile’s tradename or brand.

          * - ``description``

              .. type:: string
                 :required: false

            - A description of what kind of goods and/or products will be offered via the payment profile.

          * - ``phone``

              .. type:: string
                 :required: false

            - The phone number associated with the profile’s trade name or brand. Must be in the `E.164 <https://en.wikipedia.org/wiki/E.164>`_ format. For example ``+31208202070``.

          * - ``categoryCode``

              .. type:: integer
                 :required: false

            - The industry associated with the profile’s tradename or brand.

              Possible values:

              * ``4121`` Travel, rental and transportation
              * ``5192`` Books, magazines and newspapers
              * ``5399`` General merchandise
              * ``5499`` Food and drinks
              * ``5533`` Automotive Products
              * ``5641`` Children Products
              * ``5651`` Clothing & Shoes
              * ``5732`` Electronics, computers and software
              * ``5735`` Entertainment
              * ``5815`` Digital services
              * ``5944`` Jewelry & Accessories
              * ``5977`` Health & Beauty products
              * ``6012`` Financial services
              * ``7299`` Personal services
              * ``7999`` Events, festivals and recreation
              * ``8398`` Charity and donations
              * ``0`` Other

Example
-------
.. code-block-selector::
   .. code-block:: bash
      :linenos:

      curl -X POST https://api.mollie.com/v2/onboarding/me \
           -H "Content-Type: application/json" \
           -H "Authorization: Bearer access_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM" \
           -d '{
                   "organization": {
                      "name": "Mollie B.V.",
                      "address": {
                         "streetAndNumber": "Keizersgracht 313",
                         "postalCode": "1018 EE",
                         "city": "Amsterdam",
                         "country": "NL"
                      },
                      "registrationNumber": "30204462",
                      "vatNumber": "NL815839091B01"
                   },
                   "profile": {
                      "name": "Mollie",
                      "website": "https://www.mollie.com",
                      "email": "info@mollie.com",
                      "phone": "+31208202070",
                      "categoryCode": 6012
                   }
               }'

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 204 No Content
