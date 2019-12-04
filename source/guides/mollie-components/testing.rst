Testing Mollie Components
=========================

**Mollie Components** can be tested during implementation with the regular :doc:`test mode <../testing>`.

First, you will have to initialize the :ref:`components-mollie-constructor` constructor with your profile ID and
the ``testmode`` option:

.. code-block:: js
   :linenos:

   var mollie = Mollie('pfl_3RkSN1zuPE', { locale: 'nl_NL', testmode: true });

Then, you can implement the remainder of Mollie Components as specified in :doc:`our guide <overview>`. You can use the
**Test API key** instead of the Live API key when :doc:`creating the Payment </reference/v2/payments-api/create-payment>`.

Card numbers for testing
------------------------

You can use these cards for testing, with any CVV or expiry date.

+------------------+---------------------+
| Brand            | Card number         |
+==================+=====================+
| American Express | 3456 789012 34564   |
+------------------+---------------------+
| Mastercard       | 5436 0310 3060 6378 |
+------------------+---------------------+
| VISA             | 4242 4242 4242 4242 |
+------------------+---------------------+

Testing failures
----------------

Of course testing the happy path only is not sufficient and you should :doc:`handle errors <handling-errors>` as well.

This can be done by passing `magic amounts` when creating the payment. Pass one of these amounts to trigger a failure 
condition in test mode:

.. tabularcolumns:: |L|R|

+------------------------------+--------------+
| Failure reason to trigger    | Magic amount |
+==============================+==============+
| ``invalid_card_number``      |   € 1,001.00 |
+------------------------------+--------------+
| ``invalid_cvv``              |   € 1,002.00 |
+------------------------------+--------------+
| ``invalid_card_holder_name`` |   € 1,003.00 |
+------------------------------+--------------+
| ``card_expired``             |   € 1,004.00 |
+------------------------------+--------------+
| ``invalid_card_type``        |   € 1,005.00 |
+------------------------------+--------------+
| ``refused_by_issuer``        |   € 1,006.00 |
+------------------------------+--------------+
| ``insufficient_funds``       |   € 1,007.00 |
+------------------------------+--------------+
| ``inactive_card``            |   € 1,008.00 |
+------------------------------+--------------+
| ``possible_fraud``           |   € 1,009.00 |
+------------------------------+--------------+
| ``authentication_failed``    |   € 1,010.00 |
+------------------------------+--------------+