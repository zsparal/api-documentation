Activate payment method
=======================
.. api-name:: Profiles API
   :version: 2

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v2/profiles/*id*/methods/*method*

.. authentication::
   :api_keys: false
   :oauth: true

Turn on a payment method on a specific Profile to use it.

Parameters
----------
Replace ``id`` in the endpoint URL by the profile's ID, for example ``pfl_v9hTwCvYqw`` and ``method`` with the name of
the method you want to activate, for example ``bancontact``. There is no need to set body parameters in this ``POST``
request.

Response
--------
An objects of ``method`` will be returned as described in :doc:`Get method </reference/v2/methods-api/get-method>`.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/profiles/pfl_v9hTwCvYqw/methods/bancontact \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json; charset=utf-8

   {
       "resource": "method",
       "id": "bancontact",
       "description": "Bancontact",
       "image": {
           "size1x": "https://mollie.dev/external/icons/payment-methods/bancontact.png",
           "size2x": "https://mollie.dev/external/icons/payment-methods/bancontact%402x.png",
           "svg": "https://mollie.dev/external/icons/payment-methods/bancontact.svg"
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.dev/v2/methods/bancontact",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://docs.mollie.com/reference/v2/profiles-api/activate-method",
               "type": "text/html"
           }
       }
   }
