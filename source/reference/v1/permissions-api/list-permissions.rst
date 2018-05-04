.. _v1/permissions-list:

Permissions API v1: List permissions
====================================
``GET`` ``https://api.mollie.com/v1/permissions``

Authentication: :ref:`OAuth access tokens <oauth/overview>`

List all permissions available with the current OAuth access token.

Parameters
----------
.. list-table::
   :widths: auto

   * - | ``offset``
       | integer
     - Optional – The number of permissions to skip.

   * - | ``count``
       | integer
     - Optional – The number of permissions to return (with a maximum of 250).

Response
--------
``200`` ``application/json; charset=utf-8``

.. list-table::
   :widths: auto

   * - | ``totalCount``
       | integer
     - The total number of permissions available.

   * - | ``offset``
       | integer
     - The number of skipped permissions as requested.

   * - | ``count``
       | integer
     - The number of permissions found in ``data``, which is either the requested number (with a maximum of 250) or the
       default number.

   * - | ``data``
       | array
     - An array of permission objects as described in :ref:`Get permission <v1/permissions-get>`.

   * - | ``links``
       | object
     - Optional – Links to help navigate through the lists of permissions, based on the given offset.

       .. list-table::
          :widths: auto

          * - | ``previous``
              | string
            - Optional – The previous set of permissions, if available.

          * - | ``next``
              | string
            - Optional – The next set of permissions, if available.

          * - | ``first``
              | string
            - Optional – The first set of permissions, if available.

          * - | ``last``
              | string
            - Optional – The last set of permissions, if available.

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X GET https://api.mollie.com/v1/permissions \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 200 OK
   Content-Type: application/json; charset=utf-8

   {
       "totalCount": 9,
       "offset": 0,
       "count": 9,
       "data": [
           {
               "resource": "permission",
               "id": "payments.read",
               "description": "View your payments",
               "warning": null,
               "granted": true
           },
           { },
           { }
       ],
       "links": {
           "first": "https://api.mollie.com/v1/permissions?count=10&offset=0",
           "previous": null,
           "next": "https://api.mollie.com/v1/permissions?count=10&offset=10",
           "last": "https://api.mollie.com/v1/permissions?count=10&offset=20"
       }
   }
