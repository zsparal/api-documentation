.. _v1/profiles-delete:

Profiles API v1: Delete profile
===============================
``DELETE`` ``https://api.mollie.com/v1/profiles/*id*``

Authentication: :ref:`OAuth access tokens <oauth/overview>`

This endpoint enables profile deletions, rendering the profile unavailable for further API calls and transactions.

Parameters
----------
Replace ``id`` in the endpoint URL by the payment profile's ID, for example ``pfl_v9hTwCvYqw``.

Response
--------
``204 No Content``

Example
-------

Request
^^^^^^^
.. code-block:: bash

   curl -X DELETE https://api.mollie.com/v1/profiles/pfl_v9hTwCvYqw \
       -H "Authorization: Bearer access_Wwvu7egPcJLLJ9Kb7J632x8wJ2zMeJ"

Response
^^^^^^^^
.. code-block:: http

   HTTP/1.1 204 No Content
