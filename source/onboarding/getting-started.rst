Onboard your customers at Mollie
================================
This guide section will help you with the process of getting your customers onboarded at Mollie. From the first OAuth permission
to sending data about your customer, all steps will be covered.

We are using the concept of a new customer but you can use the Onboarding APIs also for existing merchants that have
already an account at Mollie.

Prerequisites
-------------
In order to onboard your customers at Mollie using our hosted onboarding you will need to `turn on hosted onboarding
<https://www.mollie.com/dashboard/settings/hosted-onboarding>`_ in your Mollie account.

You can provide a logo, name and description for the app that will be created. Similar to creating an app in your Mollie
account.

This page will display the Client ID and secret needed for the steps below.

Step 1: Setting up the authorization
---------------------------------------------------

Similar to the :doc:`Mollie Connect </oauth/overview>` guide we will need to acquire authorization for the
Mollie account your customer creates or logs into.

This can be achieved by following the steps in the :doc:`Mollie Connect getting started </reference/oauth2/getting-started>`
documentation. Only we will be using the Client Id and secret provided by the `hosted onboarding settings
<https://www.mollie.com/dashboard/settings/hosted-onboarding>`_.

The permission scopes we need for hosted onboarding in order to board merchants and create payments for them are:

.. list-table::
   :widths: auto

   * - | ``payments.write``
       | Payments API
     - Create payments for the merchant. The received payment will be added to the merchant's balance.

   * - | ``organizations.read``
       | Organizations API
     - View the merchant's organizational details.

   * - | ``organizations.write``
       | Organizations API
     - Change the merchant's organizational details.

   * - | ``onboarding.read``
       | Onboarding API
     - View the merchant's onboarding status.

   * - | ``onboarding.write``
       | Onboarding API
     - Submit onboarding data for the merchant.



Step 2: Customer signs up and gives authorization
-------------------------------------------------
Once you redirected your customer to the authorize URL he or she will be served a welcome screen from Mollie.
This will inform the customer that your application is using Mollie to create payments and show the logo you've
configured in the `hosted onboarding settings <https://www.mollie.com/dashboard/settings/hosted-onboarding>`_.

When the customer continues they will be served a signup form. After signing up, the the OAuth permission screen will be
shown and your customer should give your app permission to view their onboarding status and submitting data.

.. image:: ../oauth/images/oauth-permission-onboarding@2x.png

Step 3: Customer returns from authorization
-------------------------------------------
The customer will then be returned to the redirect URL provided in the `hosted onboarding settings
<https://www.mollie.com/dashboard/settings/hosted-onboarding>`_.

With successful authorization a query string will be added to this URL, for example:
https://www.yourapp.com/payments/settings?code=bvS9VpCVbvBrQVfSdG9F3aNtWszdQn

First you will need to generate the oAuth access tokens for this customer using the
:doc:`Generate tokens endpoint </reference/oauth2/generate-tokens>` and store them in your database for use.

Now that we have the oAuth access token we can use this to already provide some data about your customer

Now that we have the oAuth access token with permission to view the onboarding status you can check in what stage your
customer is at Mollie. Use the :doc:`Get onboarding status endpoint </reference/v2/onboarding-api/get-onboarding-status>`
to do this.

In the response you will also find the hosted onboarding URL. We recommend sending your customer to that URL right away
when the status returned is ``needs-data``. This should only be done once after authorization is given.


Step 4: Your customer is completing the first part of onboarding
----------------------------------------------------------------
When you send the customer to the hosted onboarding we will show only a minimized version where they can provide the
details about their business.

This is divided into 2 parts, basic information (company information, stakeholders and website) and additional
information (company document, ID document and bank verification).

When they've completed the first part they are ready to accept payments but we can not settle them on their bank account
yet. We serve them a screen asking them if they want to return to your application or continue providing details to also
be allowed to get settlements.

When they return to your application you can call the :doc:`Get onboarding status endpoint
</reference/v2/onboarding-api/get-onboarding-status>` to get the current status.

In this stage the status will be ``needs-data`` but the ``canReceivePayments`` flag is turned on.

You can then start creating payments for your customer.

Step 5: Allow the customer to do the second part of onboarding
--------------------------------------------------------------

Even though your customer is ready to receive payments. By calling the :doc:`Get onboarding status endpoint
</reference/v2/onboarding-api/get-onboarding-status>` you can see from the response they still can not receive
settlements by checking the `canReceiveSettlements` flag.

When this is the case you should create a button for providing additional information which you should send to the
hosted onboarding URL from the status API response.

When they complete the second part of onboarding Mollie will do some automatic or manual checks and turn on settlements.
This can take up to 1-2 business days so when calling the :doc:`Get onboarding status endpoint
</reference/v2/onboarding-api/get-onboarding-status>` you will receive the status ``in-review``.

In that case it would be nice to communicate this to your customer until it becomes status ``completed``.


.. warning:: Customers who were rejected as a merchant of Mollie, for any reason, will be deactivated. Therefore it is not
             possible anymore to get access via OAuth what makes it impossible to get the onboarding status from that
             moment on.