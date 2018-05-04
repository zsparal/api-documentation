.. _v2/refunds-cancel:

Refunds API v2: Cancel refund
=============================
``DELETE`` ``https://api.mollie.com/v2/payments/*paymentId*/refunds/*id*``

Authentication: :ref:`API keys <guides/authentication>`, :ref:`OAuth access tokens <oauth/overview>`

For certain payment methods, like iDEAL, the underlying banking system will delay refunds until the next day. Until that
time, refunds may be canceled manually in your Mollie account, or automatically by using this endpoint.

The refund can only be canceled while the refund's ``status`` field is either ``queued`` or ``pending``. See
:ref:`Get refund <v2/refunds-get>` for more information.

Parameters
----------
Replace ``paymentId`` in the endpoint URL by the payment's ID, and replace ``id`` by the refund's ID. For example:
``/v2/payments/tr_7UhSN1zuXS/refunds/re_4qqhO89gsT``.

Response
--------
``204 No Content``

Example
-------

Request
^^^^^^^
.. code-block:: bash
   :linenos:

   curl -X DELETE https://api.mollie.com/v2/payments/tr_WDqYK6vllg/refunds/re_4qqhO89gsT \
       -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
^^^^^^^^
.. code-block:: http
   :linenos:

   HTTP/1.1 204 No Content
