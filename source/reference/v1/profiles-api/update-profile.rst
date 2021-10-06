Update profile
==============
.. api-name:: Profiles API
   :version: 1

.. warning:: The v1 API has been deprecated. The v1 API will be supported for the foreseeable future, at least until
             July 2023. However, new features will only be added to the v2 API.

             The documentation for updating profiles in the new v2 API can be found
             :doc:`here </reference/v2/profiles-api/update-profile>`. For more information on the v2 API, refer to our
             :doc:`v2 migration guide </payments/migrating-v1-to-v2>`.

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v1/profiles/*id*

.. authentication::
   :api_keys: false
   :organization_access_tokens: false
   :oauth: true

In order to process payments, you need to create a website profile. A website profile can easily be created via the
Dashboard manually. However, the Mollie API also allows automatic profile creation via the Profiles API.

A profile's API keys can be set up with this API as well.

Parameters
----------
Replace ``id`` in the endpoint URL by the payment profile's ID, for example ``pfl_v9hTwCvYqw``.

.. parameter:: name
   :type: string
   :condition: required

   The profile's new name.

.. parameter:: website
   :type: string
   :condition: required

   The new URL to the profile's website or application. The URL should start with ``https://`` or ``http://``.

.. parameter:: email
   :type: string
   :condition: required

   The new email address associated with the profile's trade name or brand.

.. parameter:: phone
   :type: string
   :condition: required

   The new phone number associated with the profile's trade name or brand.

.. parameter:: businessCategory
   :type: string
   :condition: optional

   The new industry associated with the profile's trade name or brand.

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

   The new industry identifier associated with the profile's trade name or brand.

   .. warning:: This parameter is deprecated and will be removed in 2022. Please use the ``businessCategory`` parameter
                instead.

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

.. parameter:: mode
   :type: string
   :condition: optional

   The new profile mode. Note switching from test to production mode will trigger a verification process where we review
   the payment profile.

   Possible values: ``live`` ``test``

Response
--------
``200`` ``application/json``

The updated profile object is returned, as described in :doc:`Get profile </reference/v1/profiles-api/get-profile>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X POST https://api.mollie.com/v1/profiles/pfl_v9hTwCvYqw \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ" \
       -d "name=My website name - Update 1" \
       -d "website=https://www.mywebsite2.com" \
       -d "email=info@mywebsite2.com" \
       -d "phone=31123456789" \
       -d "businessCategory=OTHER_MERCHANDISE"

Response
^^^^^^^^
.. code-block:: none
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json

   {
       "resource": "profile",
       "id": "pfl_v9hTwCvYqw",
       "mode": "live",
       "name": "My website name - Update 1",
       "website": "https://www.mywebsite2.com",
       "email": "info@mywebsite2.com",
       "phone": "31123456789",
       "businessCategory": "OTHER_MERCHANDISE",
       "status": "verified",
       "review": {
           "status": "pending"
       },
       "createdDatetime": "2018-03-16T23:44:03.0Z",
       "updatedDatetime": "2018-03-17T01:47:46.0Z",
       "links": {
           "apikeys": "https://api.mollie.com/v1/profiles/pfl_v9hTwCvYqw/apikeys"
       }
   }
