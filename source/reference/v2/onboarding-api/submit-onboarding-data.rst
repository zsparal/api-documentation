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

.. parameter:: organization
   :type: object
   :condition: optional

   Data of the organization you want to provide.

   .. parameter:: name
      :type: string
      :condition: optional

      Name of the organization.

   .. parameter:: address
      :type: address object
      :condition: optional

      Address of the organization.

      .. parameter:: streetAndNumber
         :type: string
         :condition: optional

         The street name and house number of the organization.

      .. parameter:: postalCode
         :type: string
         :condition: optional

         The postal code of the organization.

      .. parameter:: city
         :type: string
         :condition: optional

         The city of the organization.

      .. parameter:: country
         :type: string
         :condition: optional

         The country of the address in `ISO 3166-1 alpha-2 <https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2>`_ format.

   .. parameter:: registrationNumber
      :type: string
      :condition: optional

      The Chamber of Commerce registration number of the company.

   .. parameter:: vatNumber
      :type: string
      :condition: optional

      The VAT number of the company, if based in the European Union. The VAT number will be checked with the
      `VIES <http://ec.europa.eu/taxation_customs/vies/>`_ service by Mollie.

   .. parameter:: vatRegulation
      :type: string
      :condition: optional

      The organization's VAT regulation, if based in the European Union. Either ``shifted`` (VAT is shifted) or
      ``dutch`` (Dutch VAT rate) is accepted.

.. parameter:: profile
   :type: object
   :condition: optional

   Data of the payment profile you want to provide.

   .. parameter:: name
      :type: string
      :condition: optional

      The profile name should reflect the trade name or brand name of the profile's website or application.

   .. parameter:: url
      :type: string
      :condition: optional

      The URL to the profile's website or application. The URL must be compliant to
      `RFC3986 <https://tools.ietf.org/html/rfc3986>`_ with the exception that we only accept URLs with ``http://`` or
      ``https://`` schemes and domains that contain a TLD. URLs containing an ``@`` are not allowed.

   .. parameter:: email
      :type: string
      :condition: optional

      The email address associated with the profile's trade name or brand.

   .. parameter:: description
      :type: string
      :condition: optional

      A description of what kind of goods and/or products will be offered via the payment profile.

   .. parameter:: phone
      :type: string
      :condition: optional

      The phone number associated with the profile's trade name or brand. Must be in the
      `E.164 <https://en.wikipedia.org/wiki/E.164>`_ format. For example ``+31208202070``.

   .. parameter:: businessCategory
      :type: string
      :condition: optional

      The industry associated with the profile's trade name or brand.

      Possible values:

      * Animal Services

        * ``PET_SHOPS`` Pet Shops, Pet Food, and Supplies
        * ``VETERINARY_SERVICES`` Veterinary services

      * Building Services

        * ``AC_AND_HEATING_CONTRACTORS`` A/C and heating contractors
        * ``CARPENTRY_CONTRACTORS`` Carpentry contractors
        * ``ELECTRICAL_CONTRACTORS`` Electrical contractors
        * ``EQUIPMENT_TOOLS_FURNITURE_RENTAL_LEASING`` Equipment, tools or furniture rental/leasing
        * ``GENERAL_CONTRACTORS`` General contractors
        * ``SPECIAL_TRADE_CONTRACTORS`` Special trade contractors

      * Charity and Donations

        * ``CHARITY_AND_DONATIONS`` Charity and Donations
        * ``FUNDRAISING_CROWDFUNDING_SOCIAL_SERVICE`` Fundraising, crowdfunding and social service organizations

      * Digital Products

        * ``APPS`` Apps
        * ``BOOKS_MEDIA_MOVIES_MUSIC`` Books, media, movies, music
        * ``GAMES`` Games
        * ``SOFTWARE_AND_SUBSCRIPTIONS`` Software and subscriptions

      * Education

        * ``CHILD_CARE_SERVICES`` Child care services
        * ``COLLEGES_UNIVERSITIES`` Colleges or universities
        * ``ELEMENTARY_SECONDARY_SCHOOLS`` Elementary or secondary schools
        * ``OTHER_EDUCATIONAL_SERVICES`` Other educational services
        * ``VOCATIONAL_SCHOOLS_TRADE_SCHOOLS`` Vocational schools or trade schools

      * Entertainment and Recreation

        * ``AMUSEMENT_PARKS`` Amusement Parks, Circuses, Carnivals, and Fortune Tellers
        * ``EVENT_TICKETING`` Event ticketing
        * ``GAMING_ESTABLISHMENTS`` Gaming establishments, incl. billiards, pool, bowling, arcades
        * ``MOVIE_THEATRES`` Movie theatres
        * ``MUSICIANS_BANDS_ORCHESTRAS`` Musicians, bands, or orchestras
        * ``ONLINE_GAMBLING`` Online gambling
        * ``OTHER_ENTERTAINMENT_RECREATION`` Other entertainment and recreation
        * ``SPORTING_RECREATIONAL_CAMPS`` Sporting and Recreational Camps
        * ``SPORTS_FORECASTING`` Sports forecasting or prediction services

      * Financial Services

        * ``CREDIT_COUNSELLING_REPAIR`` Credit counselling or credit repair
        * ``DIGITAL_WALLETS`` Digital wallets
        * ``INVESTMENT_SERVICES`` Investment services
        * ``MONEY_SERVICES`` Money services or transmission
        * ``MORTGAGES_INSURANCES_LOANS_FINANCIAL_ADVICE`` Mortgages, insurances, loans and financial advice
        * ``SECURITY_BROKERS_DEALERS`` Security brokers or dealers
        * ``TRUST_OFFICES`` Trust offices
        * ``VIRTUAL_CRYPTO_CURRENCIES`` Virtual currencies and crypto currencies

      * Food and Drink

        * ``CATERERS`` Caterers (prepare and delivery)
        * ``FAST_FOOD_RESTAURANTS`` Fast food restaurants
        * ``FOOD_PRODUCT_STORES`` Grocery stores, supermarkets and food product stores
        * ``RESTAURANTS_NIGHTLIFE`` Restaurants, nightlife & other on-premise consumption

      * Lodging and Hospitality

        * ``BOAT_RENTALS_LEASING`` Boat Rentals and Leasing
        * ``CRUISE_LINES`` Cruise lines
        * ``LODGING`` Hotels, Motels, Resorts, Inns and other lodging and hospitality
        * ``PROPERTY_RENTALS_CAMPING`` Property rentals / Camping

      * Marketplaces

        * ``MARKETPLACES`` Marketplaces

      * Medical Services

        * ``DENTAL_EQUIPMENT_SUPPLIES`` Dental, lab and/or ophthalmic equipment and supplies
        * ``DENTISTS_ORTHODONTISTS`` Dentists and orthodontists
        * ``MEDICAL_SERVICES`` Doctors, physicians and other medical services
        * ``DRUG_PHARMACIES_PRESCRIPTION`` Drug Stores, pharmacies and prescription medicine
        * ``MEDICAL_DEVICES`` Medical devices
        * ``MEDICAL_ORGANIZATIONS`` Medical organizations
        * ``MENTAL_HEALTH_SERVICES`` Mental health services
        * ``NURSING`` Nursing or personal care facilities and assisted living
        * ``OPTICIANS_EYEGLASSES`` Opticians and eyeglasses

      * Membership Organizations

        * ``SOCIAL_ASSOCIATIONS`` Civic, fraternal, or social associations
        * ``MEMBERSHIP_FEE_BASED_SPORTS`` Gyms, membership fee based sports
        * ``OTHER_MEMBERSHIP_ORGANIZATIONS`` Other membership organizations

      * Personal Services

        * ``ADULT_CONTENT_SERVICES`` Adult content or services
        * ``COUNSELING_SERVICES`` Counseling services
        * ``DATING_SERVICES`` Dating services
        * ``HEALTH_BEAUTY_SPAS`` Health and beauty spas
        * ``LANDSCAPING_SERVICES`` Landscaping services
        * ``LAUNDRY_DRYCLEANING_SERVICES`` Laundry or (dry)cleaning services
        * ``MASSAGE_PARLOURS`` Massage parlours
        * ``OTHER_PERSONAL_SERVICES`` Other personal services
        * ``PHOTOGRAPHY_STUDIOS`` Photography Studios
        * ``SALONS_BARBERS`` Salons or barbers

      * Political Organizations

        * ``POLITICAL_PARTIES`` Political parties

      * Professional Services

        * ``ACCOUNTING_AUDITING_BOOKKEEPING_TAX_PREPARATION_SERVICES`` Accounting, auditing, bookkeeping and tax preparation services
        * ``ADVERTISING_SERVICES`` Advertising Services
        * ``CLEANING_MAINTENANCE_JANITORIAL_SERVICES`` Cleaning and maintenance, janitorial services
        * ``COMPUTER_REPAIR`` Computer repair
        * ``CONSULTANCY`` Consultancy
        * ``SECURITY_SERVICES`` Detective/protective agencies, security services
        * ``DIRECT_MARKETING`` Direct marketing
        * ``FUNERAL_SERVICES`` Funeral services and crematories
        * ``GOVERNMENT_SERVICES`` Government services
        * ``HOSTING_VPN_SERVICES`` Hosting and VPN services
        * ``INDUSTRIAL_SUPPLIES_NOT_ELSEWHERE_CLASSIFIED`` Industrial supplies, not elsewhere classified
        * ``LEGAL_SERVICES_ATTORNEYS`` Legal Services and Attorneys
        * ``MOTION_PICTURES_DISTRIBUTION`` Motion picture / video tape production and/or distribution
        * ``OTHER_BUSINESS_SERVICES`` Other business services
        * ``PRINTING_PUBLISHING`` Printing and publishing
        * ``REAL_ESTATE_AGENTS`` Real Estate Agents
        * ``SANITATION_POLISHING_SPECIALTY_CLEANING`` Sanitation, polishing and specialty cleaning
        * ``OFFICE_SUPPLIES`` Stationery / Office supplies
        * ``TESTING_LABORATORIES_NOT_MEDICAL`` Testing laboratories (not medical)
        * ``TRAINING_AND_COACHING`` Training and Coaching
        * ``UTILITIES`` Utilities

      * Religious Organizations

        * ``RELIGIOUS_ORGANIZATIONS`` Religious organizations

      * Retail

        * ``CLOTHING_SHOES_ACCESSORIES`` (Sports) clothing, shoes and accessories
        * ``COMMERCIAL_ART`` Art Dealers, Galleries, (commercial) Photography and Graphics
        * ``BEAUTY_PRODUCTS`` Beauty products
        * ``BOOKS_PERIODICALS_NEWSPAPERS`` Books, Periodicals and Newspapers
        * ``HOME_IMPROVEMENT`` Building, home improvement and equipment
        * ``GIFTS_SHOPS`` Cards, gifts, novelty and souvenir shops
        * ``CBD_MARIJUANA_PRODUCTS`` CBD/Marijuana (related) products
        * ``COFFEE_SHOPS`` Coffee shops / grow shops
        * ``CONVENIENCE_STORES`` Convenience Stores, Specialty Markets, Health Food Stores
        * ``GIFT_CARDS`` Credits, vouchers, gift cards (excl. SIM cards) for Non-Financial Institutions
        * ``EROTIC_TOYS`` Erotic toys
        * ``FLORISTS`` Florists, florist supplier
        * ``FUEL_DEALERS`` Fuel dealers (i.e. oil, pertroleum)
        * ``FURNITURE_FURNISHINGS_EQUIPMENT_STORES`` Furniture, Home Furnishings and Equipment Stores
        * ``GAME_TOY_HOBBY_SHOPS`` Game, Toy and Hobby Shops
        * ``OUTDOOR_EQUIPMENT`` Garden and outdoor equipment
        * ``HOME_ELECTRONICS`` Home electronics & (personal) computers
        * ``HOUSEHOLD_APPLIANCE_STORES`` Household appliance stores
        * ``JEWELRY_WATCH_CLOCK_AND_SILVERWARE_STORES_UNDER_1000`` Jewelry, Watch, Clock, and Silverware Stores (<1000 euro)
        * ``MUSIC_STORES`` Music Stores, Instruments and Records
        * ``OTHER_MERCHANDISE`` Other merchandise
        * ``LIQUOR_STORES`` Package Stores--Beer, Wine, and Liquor
        * ``PAID_TELEVISION_RADIO`` Paid television or radio services (cable/satellite)
        * ``PRECIOUS_STONES_METALS_JEWELRY_OVER_1000`` Precious Stones, Metals, Watches and Jewelry (>1000 euro)
        * ``REPAIR_SHOPS`` Repair shops and related services, not elsewhere classified
        * ``SECOND_HAND_STORES`` Second hand / used merchandise stores
        * ``SPORTING_GOODS_SPECIALTY_RETAIL_SHOPS`` Sporting Goods Stores, Miscellaneous and Specialty Retail Shops
        * ``SUPPLEMENTS_STORES`` Supplements, nutrition, vitamin stores
        * ``TELECOM_EQUIPMENT`` Telecom equipment (i.e. chargers, phones)
        * ``TELECOM_SERVICES`` Telecom services (incl. (anonymous) SIM cards)
        * ``TOBACCO_PRODUCTS`` Tobacco, cigars, e-cigarettes and related products
        * ``TRADERS_DIAMONDS`` Traders in diamonds
        * ``TRADERS_GOLD`` Traders in gold
        * ``WEAPONS_AMMUNITION`` Weapons or ammunition

      * Transportation

        * ``COMMUTER_TRANSPORTATION`` Commuter transportation
        * ``COURIER_SERVICES`` Courier services and Freight forwarders
        * ``OTHER_TRANSPORTATION_SERVICES`` Other transportation services
        * ``RIDESHARING`` Taxis, limos and ridesharing

      * Travel Services

        * ``TRAVEL_SERVICES`` Travel agencies, tour operators and other traval services

      * Vehicles

        * ``AUTOMOTIVE_PARTS_ACCESSORIES`` Auto(motive) parts and accessories
        * ``CAR_TRUCK_COMPANIES`` Auto and truck sales and service dealers and leasing companies
        * ``AUTOMOTIVE_SERVICES`` Automotive services
        * ``BICYCLE_PARTS_SHOPS_SERVICE`` Bicycle (parts) shops and service
        * ``CAR_BOAT_CAMPER_MOBILE_HOME_DEALER`` Car, boat, camper, mobile Home dealer
        * ``CAR_RENTALS`` Car rentals
        * ``MOTORCYCLE_PARTS_SHOPS_AND_DEALERS`` Motorcycle (parts) shops and dealers

   .. parameter:: categoryCode
      :type: integer
      :condition: optional

      .. warning:: This parameter is deprecated and will be removed in 2022. Please use the ``businessCategory`` parameter
                   instead.

      The industry associated with the profile's trade name or brand.

      Possible values:

      * ``5192`` Books, magazines and newspapers
      * ``5262`` Marketplaces, crowdfunding, donation platforms
      * ``5399`` General merchandise
      * ``5499`` Food and drinks
      * ``5533`` Automotive Products
      * ``5641`` Children Products
      * ``5651`` Clothing & Shoes
      * ``5712`` Home furnishing
      * ``5732`` Electronics, computers and software
      * ``5734`` Hosting/VPN services
      * ``5735`` Entertainment
      * ``5815`` Credits/vouchers/giftcards
      * ``5921`` Alcohol
      * ``5944`` Jewelry & Accessories
      * ``5945`` Hobby, Toy, and Game Shops
      * ``5977`` Health & Beauty products
      * ``6012`` Financial services
      * ``6051`` Crypto currency
      * ``7299`` Consultancy
      * ``7922`` Events, conferences, concerts, tickets
      * ``7997`` Gyms, membership fee based sports
      * ``7999`` Travel, rental and transportation
      * ``8111`` Lawyers and legal advice
      * ``8299`` Advising/coaching/training
      * ``8398`` Charity and donations
      * ``8699`` Political parties
      * ``9399`` Government services
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
                         "streetAndNumber": "Keizersgracht 126",
                         "postalCode": "1015 CW",
                         "city": "Amsterdam",
                         "country": "NL"
                      },
                      "registrationNumber": "30204462",
                      "vatNumber": "NL815839091B01"
                   },
                   "profile": {
                      "name": "Mollie",
                      "url": "https://www.mollie.com",
                      "email": "info@mollie.com",
                      "phone": "+31208202070",
                      "businessCategory": "MONEY_SERVICES"
                   }
               }'

   .. code-block:: php
      :linenos:

      <?php
      $mollie = new \Mollie\Api\MollieApiClient();
      $mollie->setAccessToken("access_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM");

      $mollie->onboarding->submit([
          "organization" => [
              "name" => "Mollie B.V.",
              "address" => [
                 "streetAndNumber" => "Keizersgracht 126",
                 "postalCode" => "1015 CW",
                 "city" => "Amsterdam",
                 "country" => "NL",
              ],
              "registrationNumber" => "30204462",
              "vatNumber" => "NL815839091B01",
          ],
          "profile" => [
              "name" => "Mollie",
              "url" => "https://www.mollie.com",
              "email" => "info@mollie.com",
              "phone" => "+31208202070",
              "businessCategory": "MONEY_SERVICES",
          ],
      ]);

   .. code-block:: python
      :linenos:

      from mollie.api.client import Client

      mollie_client = Client()
      mollie_client.set_access_token('access_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM')

      onboarding = mollie_client.onboarding.create(
          'me',
          data={
              'organization': {
                  'name': 'Mollie B.V.',
                  'address': {
                      'streetAndNumber': 'Keizersgracht 126',
                      'postalCode': '1015 CW',
                      'city': 'Amsterdam',
                      'country': 'NL',
                  },
                  'registrationNumber': '30204462',
                  'vatNumber': 'NL815839091B01',
              },
              'profile': {
                  'name': 'Mollie',
                  'url': 'https://www.mollie.com',
                  'email': 'info@mollie.com',
                  'phone': '+31208202070',
                  'businessCategory': 'MONEY_SERVICES',
              },
          },
      )

   .. code-block:: ruby
      :linenos:

      Mollie::Client.configure do |config|
        config.api_key = 'test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM'
      end

      Mollie::Onboarding.submit(
        organization: {
          name: "Mollie B.V.",
          address: {
             streetAndNumber: "Keizersgracht 126",
             postalCode: "1015 CW",
             city: "Amsterdam",
             country: "NL"
          },
          registrationNumber: "30204462",
          vatNumber: "NL815839091B01"
        },
        profile: {
          name: "Mollie",
          url: "https://www.mollie.com",
          email: "info@mollie.com",
          phone: "+31208202070",
          businessCategory: "MONEY_SERVICES"
        }
      )

Response
^^^^^^^^
.. code-block:: none
   :linenos:

   HTTP/1.1 204 No Content
