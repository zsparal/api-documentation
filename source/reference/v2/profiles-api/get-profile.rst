Get profile
===========
.. api-name:: Profiles API
   :version: 2

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v2/profiles/*id*

.. authentication::
   :api_keys: false
   :organization_access_tokens: true
   :oauth: true

Retrieve details of a profile, using the profile's identifier.

Parameters
----------
Replace ``id`` in the endpoint URL by the profile's ID, for example ``pfl_v9hTwCvYqw``.

Response
--------
``200`` ``application/json``

.. parameter:: resource
   :type: string

   Indicates the response contains a profile object. Will always contain ``profile`` for this endpoint.

.. parameter:: id
   :type: string

   The identifier uniquely referring to this profile, for example ``pfl_v9hTwCvYqw``.

.. parameter:: mode
   :type: string

   Indicates whether the profile is in test or production mode.

   Possible values:

   * ``live``: The profile is verified.
   * ``test``: The profile has not been verified yet and can only be used to create test payments.

.. parameter:: name
   :type: string

   The profile's name, this will usually reflect the trade name or brand name of the profile's website or application.

.. parameter:: website
   :type: string

   The URL to the profile's website or application.

.. parameter:: email
   :type: string

   The email address associated with the profile's trade name or brand.

.. parameter:: phone
   :type: phone number

   The phone number associated with the profile's trade name or brand.

.. parameter:: businessCategory
   :type: string

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

.. parameter:: status
   :type: string

   The profile status determines whether the profile is able to receive live payments.

   Possible values:

   * ``unverified``: The profile has not been verified yet and can only be used to create test payments.
   * ``verified``: The profile has been verified and can be used to create live payments and test payments.
   * ``blocked``: The profile is blocked and can thus no longer be used or changed.

.. parameter:: review
   :type: object

   The presence of a review object indicates changes have been made that have not yet been approved by Mollie. Changes
   to test profiles are approved automatically, unless a switch to a live profile has been requested. The review object
   will therefore usually be ``null`` in test mode.

   .. parameter:: status
      :type: string

      The status of the requested profile changes.

      Possible values:

      * ``pending``: The changes are pending review. We will review your changes soon.
      * ``rejected``: We have reviewed and rejected your changes.

.. parameter:: createdAt
   :type: datetime

   The profile's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

.. parameter:: _links
   :type: object

   An object with several URL objects relevant to the profile. Every URL object will contain an ``href`` and a ``type``
   field.

   .. parameter:: self
      :type: URL object

      The API resource URL of the profile itself.

   .. parameter:: dashboard
      :type: URL object

      Direct link to the profile in the Mollie Dashboard.

   .. parameter:: chargebacks
      :type: URL object

      The API resource URL of the chargebacks that belong to this profile.

   .. parameter:: methods
      :type: URL object

      The API resource URL of the methods that are enabled for this profile.

   .. parameter:: payments
      :type: URL object

      The API resource URL of the payments that belong to this profile.

   .. parameter:: refunds
      :type: URL object

      The API resource URL of the refunds that belong to this profile.

   .. parameter:: checkoutPreviewUrl
      :type: URL object

      The Checkout preview URL. You need to be logged in to access this page.

   .. parameter:: documentation
      :type: URL object

      The URL to the profile retrieval endpoint documentation.

Example
-------
.. code-block-selector::
   .. code-block:: bash
      :linenos:

      curl -X GET https://api.mollie.com/v2/profiles/pfl_v9hTwCvYqw \
         -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

   .. code-block:: php
      :linenos:

      <?php
      $mollie = new \Mollie\Api\MollieApiClient();
      $mollie->setAccessToken("access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ");
      $profile = $mollie->profiles->get("pfl_v9hTwCvYqw");

   .. code-block:: python
      :linenos:

      from mollie.api.client import Client

      mollie_client = Client()
      mollie_client.set_access_token('access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ')

      profile = mollie_client.profiles.get('pfl_v9hTwCvYqw')

   .. code-block:: ruby
      :linenos:

      require 'mollie-api-ruby'

      Mollie::Client.configure do |config|
        config.api_key = 'access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ'
      end

      profile = Mollie::Profile.get('pfl_v9hTwCvYqw')

Response
^^^^^^^^
.. code-block:: none
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json

   {
       "resource": "profile",
       "id": "pfl_v9hTwCvYqw",
       "mode": "live",
       "name": "My website name",
       "website": "https://www.mywebsite.com",
       "email": "info@mywebsite.com",
       "phone": "+31208202070",
       "businessCategory": "OTHER_MERCHANDISE",
       "status": "verified",
       "review": {
           "status": "pending"
       },
       "createdAt": "2018-03-20T09:28:37+00:00",
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/profiles/pfl_v9hTwCvYqw",
               "type": "application/hal+json"
           },
           "dashboard": {
               "href": "https://www.mollie.com/dashboard/org_123456789/settings/profiles/pfl_v9hTwCvYqw",
               "type": "text/html"
           },
           "chargebacks": {
               "href": "https://api.mollie.com/v2/chargebacks?profileId=pfl_v9hTwCvYqw",
               "type": "application/hal+json"
           },
           "methods": {
               "href": "https://api.mollie.com/v2/methods?profileId=pfl_v9hTwCvYqw",
               "type": "application/hal+json"
           },
           "payments": {
               "href": "https://api.mollie.com/v2/payments?profileId=pfl_v9hTwCvYqw",
               "type": "application/hal+json"
           },
           "refunds": {
               "href": "https://api.mollie.com/v2/refunds?profileId=pfl_v9hTwCvYqw",
               "type": "application/hal+json"
           },
           "checkoutPreviewUrl": {
               "href": "https://www.mollie.com/payscreen/preview/pfl_v9hTwCvYqw",
               "type": "text/html"
           },
           "documentation": {
               "href": "https://docs.mollie.com/reference/v2/profiles-api/create-profile",
               "type": "text/html"
           }
       }
   }
