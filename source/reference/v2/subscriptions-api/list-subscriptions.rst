.. _v2/subscriptions-list:

Subscriptions API v2: List subscriptions
========================================
``GET`` ``https://api.mollie.com/v2/customers/*customerId*/subscriptions``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

Retrieve all subscriptions of a customer.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

.. list-table::
   :widths: auto

   * - | ``from``
       | string
     - Optional – Offset the result set to the subscription with this ID. The subscription with this ID is included
       in the result set as well.

   * - | ``limit``
       | integer
     - Optional – The number of subscriptions to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the only mandatory extra parameter is the ``profileId`` parameter.
With it, you can specify for which profile you want to retrieve subscriptions. Organizations can have multiple profiles
for each of their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
    :widths: auto

   * - | ``profileId``
       | string
     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``
       | boolean
     - Optional – Set this to ``true`` to retrieve test mode subscriptions.

Response
--------
``200`` ``application/hal+json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``count``
       | integer
     - The number of subscriptions found in ``_embedded``, which is either the requested number (with a maximum of 250)
       or the default number.

   * - | ``_embedded``
       | object
     - The object containing the queried data.

       .. list-table::
          :widths: auto

          * - | ``subscriptions``
              | array
            - An array of subscription objects as described in :ref:`Get subscription <v2/subscriptions-get>`.

   * - | ``_links``
       | object
     - Links to help navigate through the lists of subscriptions. Every URL object will contain an ``href`` and a
       ``type`` field.

       .. list-table::
          :widths: auto

          * - | ``self``
              | URL object
            - The URL to the current set of subscriptions.

          * - | ``previous``
              | URL object
            - Optional – The previous set of subscriptions, if available.

          * - | ``next``
              | URL object
            - Optional – The next set of subscriptions, if available.

          * - | ``documentation``
              | URL object
            - The URL to the subscriptions list endpoint documentation.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v2/customers/cst_8wmqcHMN4U/subscriptions \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/hal+json

   {
       "count": 3,
       "_embedded": {
           "subscriptions": [
               {
                   "resource": "subscription",
                   "id": "sub_rVKGtNd6s3",
                   "customerId": "cst_8wmqcHMN4U",
                   "mode": "live",
                   "createdAt": "2018-06-01T12:23:34+00:00",
                   "status": "active",
                   "amount": {
                       "value": "25.00",
                       "currency": "EUR"
                   },
                   "times": 4,
                   "interval": "3 months",
                   "description": "Quarterly payment",
                   "method": null,
                   "webhookUrl": "https://webshop.example.org/subscriptions/webhook",
                   "_links": {
                       "self": {
                           "href": "https://api.mollie.com/v2/customers/cst_stTC2WHAuS/subscriptions/sub_rVKGtNd6s3",
                           "type": "application/hal+json"
                       },
                       "customer": {
                           "href": "https://api.mollie.com/v2/customers/cst_stTC2WHAuS",
                           "type": "application/hal+json"
                       }
                   }
               },
               { },
               { }
           ]
       },
       "_links": {
           "self": {
               "href": "https://api.mollie.com/v2/customers/cst_stTC2WHAuS/subscriptions",
               "type": "application/hal+json"
           },
           "previous": null,
           "next": {
               "href": "https://api.mollie.com/v2/customers/cst_stTC2WHAuS/subscriptions?from=sub_mnfbwhMfvo",
               "type": "application/hal+json"
           },
           "documentation": {
               "href": "https://www.mollie.com/en/docs/reference/subscriptions/list",
               "type": "text/html"
           }
       }
   }
