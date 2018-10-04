Enable payment method on current
================================
.. api-name:: Profiles API
   :version: 2

.. endpoint::
   :method: POST
   :url: https://api.mollie.com/v2/profiles/me/methods/*method*

.. authentication::
   :api_keys: true
   :oauth: false

Enable a payment method on the authenticated Profile to use it with payments.

.. note:: Not all payment methods can be enabled via this API call. The API will return an error when this is the case
          with a link to the Mollie Dashboard.

Parameters
----------
Replace ``method`` in the endpoint URL by the method's ID you want to activate, for example ``bancontact``. There is no
need to set body parameters in this ``POST``
request.

Response
--------
An objects of ``method`` will be returned as described in :doc:`Get method </reference/v2/methods-api/get-method>`.

Example (method that can be enabled)
------------------------------------
Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/profiles/me/methods/bancontact \
       -H "Authorization: Bearer live_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 201 Created
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

Example (method that can not be enabled)
----------------------------------------
Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/profiles/me/methods/creditcard \
       -H "Authorization: Bearer live_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 422 Unprocessable Entity
   Content-Type: application/hal+json; charset=utf-8

   {
       "status": 422,
       "title": "Unprocessable Entity",
       "detail": "Can not activate 'creditcard' via the API. Please go to the dashboard to enable this payment method.",
       "_links": {
            "dashboard": {
                   "href": "https://www.mollie.com/dashboard/settings/profiles/pfl_v9hTwCvYqw/payment-methods",
                   "type": "text/html"
            },
            "documentation": {
                   "href": "https://docs.mollie.com/guides/handling-errors",
                   "type": "text/html"
            }
       }
   }
