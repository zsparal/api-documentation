.. _v1/subscriptions-list:

List subscriptions
==================
.. api-name:: Subscriptions API
   :version: 1

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/customers/*customerId*/subscriptions

.. authentication::
   :api_keys: true
   :oauth: true

Retrieve all subscriptions of a customer.

Parameters
----------
Replace ``customerId`` in the endpoint URL by the customer's ID, for example ``cst_8wmqcHMN4U``.

.. list-table::
   :widths: auto

   * - | ``offset``

       .. type:: integer
          :required: false

     - The number of subscriptions to skip.

   * - | ``count``

       .. type:: integer
          :required: false

     - The number of subscriptions to return (with a maximum of 250).

Mollie Connect/OAuth parameters
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
If you're creating an app with Mollie Connect/OAuth, the only mandatory extra parameter is the ``profileId`` parameter.
With it, you can specify for which profile you want to retrieve subscriptions. Organizations can have multiple profiles
for each of their websites. See :ref:`Profiles API <v1/profiles-get>` for more information.

.. list-table::
    :widths: auto

   * - | ``profileId``

       .. type:: string
          :required: true

     - The payment profile's unique identifier, for example ``pfl_3RkSN1zuPE``. This field is mandatory.

   * - | ``testmode``

       .. type:: boolean
          :required: false

     - Set this to ``true`` to retrieve test mode subscriptions.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``

       .. type:: integer

     - The total number of subscriptions available.

   * - | ``offset``

       .. type:: integer

     - The number of skipped subscriptions as requested.

   * - | ``count``

       .. type:: integer

     - The number of subscriptions found in ``data``, which is either the requested number (with a maximum of 250) or
       the default number.

   * - | ``data``

       .. type:: array

     - An array of subscription objects as described in :ref:`Get subscription <v1/subscriptions-get>`.

   * - | ``links``

       .. type:: object

     - Links to help navigate through the lists of subscriptions, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``

              .. type:: string

            - The previous set of subscriptions, if available.

          * - | ``next``

              .. type:: string

            - The next set of subscriptions, if available.

          * - | ``first``

              .. type:: string

            - The first set of subscriptions, if available.

          * - | ``last``

              .. type:: string

            - The last set of subscriptions, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/customers/cst_8wmqcHMN4U/subscriptions \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 3,
       "offset": 0,
       "count": 3,
       "data": [
           {
               "resource": "subscription",
               "id": "sub_rVKGtNd6s3",
               "customerId": "cst_8wmqcHMN4U",
               "mode": "live",
               "createdDatetime": "2016-06-01T12:23:34.0Z",
               "status": "active",
               "amount": "25.00",
               "times": 4,
               "interval": "3 months",
               "description": "Quarterly payment",
               "method": null,
               "cancelledDatetime": null,
               "links": {
                   "webhookUrl": "https://webshop.example.org/payments/webhook"
               }
           }
           { },
           { }
       ]
   }
