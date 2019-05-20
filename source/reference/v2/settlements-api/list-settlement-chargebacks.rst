List settlement chargebacks
===========================
.. api-name:: Settlements API
   :version: 2

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v2/settlements/*settlementId*/chargebacks

.. authentication::
   :api_keys: false
   :organization_access_tokens: true
   :oauth: true

Retrieve all chargebacks included in a settlement.

Parameters
----------
Replace ``settlementId`` in the endpoint URL by the settlement's ID, for example ``stl_jDk30akdN``.

This endpoint is an alias of the :doc:`List chargebacks </reference/v2/chargebacks-api/list-chargebacks>` endpoint. All
parameters for that endpoint can be used here as well.

Response
--------
``200`` ``application/hal+json``

This endpoint is an alias of the :doc:`List chargebacks </reference/v2/chargebacks-api/list-chargebacks>` endpoint. The
response is therefore the exact same.

Example
-------

Request
^^^^^^^
.. code-block-selector::
   .. code-block:: bash
      :linenos:

      curl -X GET https://api.mollie.com/v2/settlements/stl_jDk30akdN/chargebacks \
          -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

   .. code-block:: php
      :linenos:

      <?php
      $mollie = new \Mollie\Api\MollieApiClient();
      $mollie->setAccessToken("access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ");
      
      $settlement = $mollie->settlements->get("stl_jDk30akdN");
      $chargebacks = $settlement->chargebacks();

   .. code-block:: ruby
      :linenos:

      require 'mollie-api-ruby'

      Mollie::Client.configure do |config|
        config.api_key = 'access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ'
      end

      settlement = Mollie::Settlement.open

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json

   {
       "count": 3,
       "_embedded": {
           "chargebacks": [
               {
                   "resource": "chargeback",
                   "id": "chb_n9z0tp",
                   "amount": {
                       "currency": "USD",
                       "value": "43.38"
                   },
                   "settlementAmount": {
                       "currency": "EUR",
                       "value": "-37.14"
                   },
                   "createdAt": "2018-03-14T17:00:52.0Z",
                   "reversedAt": null
                   "paymentId": "tr_WDqYK6vllg",
                   "settlementId": "stl_jDk30akdN",
                   "_links": {
                       "self": {
                           "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg/chargebacks/chb_n9z0tp",
                           "type": "application/hal+json"
                       },
                       "payment": {
                           "href": "https://api.mollie.com/v2/payments/tr_WDqYK6vllg",
                           "type": "application/hal+json"
                       },
                       "documentation": {
                           "href": "https://docs.mollie.com/reference/v2/chargebacks-api/get-chargeback",
                           "type": "text/html"
                       }
                   }
               }
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/settlements/stl_jDk30akdN/chargebacks",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://docs.mollie.com/reference/v2/chargebacks-api/list-chargebacks",
               "type": "text/html"
           }
       }
   }
