.. _v1/permissions-get:

Permissions API v1: Get permission
==================================

.. endpoint::
   :method: GET
   :url: https://api.mollie.com/v1/permissions/*id*

.. authentication::
   :api_keys: false
   :oauth: true

All API actions through OAuth are by default protected for privacy and/or money related reasons and therefore require
specific permissions. These permissions can be requested by apps during the OAuth authorization flow. The Permissions
resource allows the app to check whether an API action is (still) allowed by the authorization.

Parameters
----------
Replace ``id`` in the endpoint URL by the permission's ID, for example ``payments.read``. See
:ref:`Permissions <oauth/permissions>` for details about the available permissions.

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``resource``

       .. type:: string
          :required: true

     - Indicates the response contains a permission object. Will always contain ``permission`` for this endpoint.

   * - | ``id``

       .. type:: string
          :required: true

     - The permission's unique identifier, for example ``payments.read``. See
       :ref:`Permissions <oauth/permissions>` for details about the available permissions.

       Possible values: ``apikeys.read`` ``apikeys.write`` ``customers.read`` ``customers.write`` ``mandates.read``
       ``mandates.write`` ``organizations.read`` ``organizations.write`` ``payments.read`` ``payments.write``
       ``profiles.read`` ``profiles.write`` ``refunds.read`` ``refunds.write`` ``settlements.read``

   * - | ``description``

       .. type:: string
          :required: true

     - A short description of what the permission allows.

   * - | ``warning``

       .. type:: string
          :required: false

     - A mandatory warning message when necessary.

   * - | ``granted``

       .. type:: boolean
          :required: true

     - Whether this permission is granted to the app by the organization or not.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/permissions/payments.read \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "resource": "permission",
       "id": "payments.read",
       "description": "View your payments",
       "warning": null,
       "granted": true
   }
