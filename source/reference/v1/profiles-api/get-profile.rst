Get profile
===========
.. api-name:: Profiles API
   :version: 1

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/profiles/*id*

.. authentication::
   :api_keys: false
   :organization_access_tokens: true
   :oauth: true

Retrieve details of a payment profile, using the profile's identifier.

Parameters
----------
Replace ``id`` in the endpoint URL by the payment profile's ID, for example ``pfl_v9hTwCvYqw``.

Response
--------
``200`` ``application/json``

.. list-table::
   :widths: auto

   * - ``resource``

       .. type:: string

     - Indicates the response contains a payment profile object. Will always contain ``profile`` for this endpoint.

   * - ``id``

       .. type:: string

     - The identifier uniquely referring to this payment profile, for example ``pfl_3RkSN1zuPE``.

   * - ``mode``

       .. type:: string

     - Indicates whether the payment profile is in test or production mode.

       Possible values: ``live`` ``test``

   * - ``name``

       .. type:: string

     - The payment profile's name, this will usually reflect the tradename or brand name of the profile's website or
       application.

   * - ``website``

       .. type:: string

     - The URL to the profile's website or application.

   * - ``email``

       .. type:: string

     - The email address associated with the profile's tradename or brand.

   * - ``phone``

       .. type:: string

     - The phone number associated with the profile's tradename or brand.

   * - ``categoryCode``

       .. type:: integer

     - The industry associated with the profile's tradename or brand.

       Possible values:

       * ``5399`` General merchandise
       * ``5732`` Electronics, computers, and software
       * ``4121`` Travel, rental, and transportation
       * ``6012`` Financial services
       * ``5499`` Food and drinks
       * ``7999`` Events, festivals, and recreation
       * ``5192`` Books, magazines, and newspapers
       * ``7299`` Personal services
       * ``8398`` Charity and donations
       * ``0`` Other

   * - ``status``

       .. type:: string

     - The profile status determines whether the payment profile is able to receive live payments.

       Possible values:

       * ``unverified`` The profile has not been verified yet and can only be used to create test payments.
       * ``verified`` The profile has been verified and can be used to create live payments and test payments.
       * ``blocked`` The profile is blocked and can thus no longer be used or changed.

   * - ``review``

       .. type:: object

     - The presence of a review object indicates changes have been made that have not yet been approved by Mollie.
       Changes to test profiles are approved automatically, unless a switch to a live profile has been requested. The
       review object will therefore usually be ``null`` in test mode.

       .. list-table::
          :widths: auto

          * - ``status``

              .. type:: string

            - The status of the requested profile changes.

              Possible values:

              * ``pending`` The changes are pending review. We will review your changes soon.
              * ``rejected`` We've reviewed and rejected your changes.

   * - ``createdDatetime``

       .. type:: datetime

     - The payment profile's date and time of creation, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

   * - ``updatedDatetime``

       .. type:: datetime

     - The date and time of the payment profile's last edit, in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_
       format.

   * - ``links``

       .. type:: object

     - Useful URLs to related resources.

       .. list-table::
          :widths: auto

          * - ``apikeys``

              .. type:: string

            - The URL to the nested :doc:`API keys resource </reference/v1/profiles-api/list-keys>`.

          * - ``checkoutPreviewUrl``

              .. type:: string

            - The Checkout preview URL. You need to be logged in to access this page.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/profiles/pfl_v9hTwCvYqw \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json

   {
       "resource": "profile",
       "id": "pfl_8tv5FmWcn4",
       "mode": "live",
       "name": "My website name",
       "website": "https://www.mywebsite.com",
       "email": "info@mywebsite.com",
       "phone": "31123456789",
       "categoryCode": 5399,
       "status": "unverified",
       "review": {
           "status": "pending"
       },
       "createdDatetime": "2018-03-16T18:46:21.0Z",
       "updatedDatetime": "2018-03-16T18:46:21.0Z",
       "links": {
           "apikeys": "https://api.mollie.com/v1/profiles/pfl_8tv5FmWcn4/apikeys",
           "checkout": "https://www.mollie.com/payscreen/preview/pfl_8tv5FmWcn4"
       }
   }
