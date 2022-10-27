Balance API
===========

.. raw:: html
   
   <span class="api-name__beta">BETA</span>

Via the Balance API you can integrate your Mollie balance into your bookkeeping. 
Balance reporting is time based, these APIs explain all mutations to the Mollie balance in a specific timeframe.
All possible mutations to the Mollie balance are included.
Instead of downloading reports every month, you can now have it fully integrated into your bookkeeping software.

Where the Settlements API allows you to integrate all information regarding receiving payouts from Mollie, 
the Balance API retrieves all information that has influence on your money to be paid out, even prior to the actual settlement. 

You can get information about all your available balances, all transactions that
have occurred per balance in a certain timeframe and a summary of every
mutation (aggregates) per balance in a certain timeframe. All data is available from July 1st 2022.

For more information please refer to 
`knowledge base <https://help.mollie.com/hc/en-us/sections/360004882219-Accounting>`_.


Endpoints
---------
.. endpoint-card::
   :name: Get balance
   :method: GET
   :url: /v2/balances/*balanceId*
   :ref: /reference/v2/balances-api/get-balance

   Retrieve details of a specific balance.

.. endpoint-card::
   :name: Get primary balance
   :method: GET
   :url: /v2/balances/primary
   :ref: /reference/v2/balances-api/get-primary-balance

   Retrieve details of the primary balance.

.. endpoint-card::
   :name: List balances
   :method: GET
   :url: /v2/balances
   :ref: /reference/v2/balances-api/list-balances

   Retrieve all the organization's balances, including the primary balance, ordered from newest to oldest.

.. endpoint-card::
   :name: Get balance report
   :method: GET
   :url: /v2/balances/*balanceId*/report
   :ref: /reference/v2/balances-api/get-balance-report

   Retrieve a summarized report for all movements on a specific balance within a given timeframe.

.. endpoint-card::
   :name: Get primary balance report
   :method: GET
   :url: /v2/balances/primary/report
   :ref: /reference/v2/balances-api/get-primary-balance

   Retrieve a summarized report for all movements on the primary balance within a given timeframe.

.. endpoint-card::
   :name: List balance transactions
   :method: GET
   :url: /v2/balances/*balanceId*/transactions
   :ref: /reference/v2/balances-api/list-balance-transactions

   Retrieve a list of all the movements on a specific balance.

.. endpoint-card::
   :name: List primary balance transactions
   :method: GET
   :url: /v2/balances/primary/transactions
   :ref: /reference/v2/balances-api/list-primary-balance-transactions

   Retrieve a list of all the movements on the primary balance.