Integrating payments in mobile apps
===================================

This guide will help you to integrate Mollie in a mobile app for devices such as mobile phones and tables. Several
factors should be considered, such as legal, security and technical considerations.

Legal considerations
--------------------

Some app stores place limitations on the any payment mechanism that does not use the app store's billing APIs.

For example, in the `Apple App Store <https://developer.apple.com/app-store/review/guidelines/#payments>`_ you may only
use external payment methods such as provided by Mollie for selling physical goods, not for digital goods or services.

Consult your app store's terms and conditions to get the exact limitations that apply to your situation.

Additionally, some payment methods place limitations on how they can be embedded in a WebView. For example, the iDEAL
style guide disallows hiding the URL of the issuer's hosted payment pages and forbids placing the payment in a WebView, since that
allows your app to inject code into the banking pages.

Security considerations
-----------------------

Note that your app is distributed to and executed on mobile devices after being installed from an app store. Since
you do not control the mobile device, you should not ship API keys inside the app. If the app is installed on a rooted
device, any keys in the app can easily be extracted by an attacker. Even on a non-rooted device, the keys could be
stolen by a MITM proxy server.

In principle, you should consider the device your app is installed on untrusted. To make matters even worse, API keys
shipped with your app cannot be reset, since that will break all installed apps.

Hence, any communication with the Mollie APIs must not be done by the app but by a trusted back end service under your
control. This service should authenticate your app, perform any needed API calls with Mollie and forward any information
needed by your app such as the checkout URL to the app.

Technical considerations
------------------------

Integrating with other mobile apps
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Your customers will expect your app to play nice with the apps they use for making payments from their mobile device,
such as the banking apps of iDEAL issuers or the Bancontact app.

These apps will often use custom URL schemes which you will need to take extra precautions with to make sure they
trigger the apps to open.

When your customer finishes the payment using the app, the banking app won't know how to return to your app. You will
need to use your custom scheme to return to your app after the payment.

Note that this is usually handled correctly if you open the checkout URL in the app's default browser instead of a
WebView.

Webhooks
^^^^^^^^

Webhooks cannot be sent to mobile devices, and the payment status is not always known when your customer returns to the
app so you cannot rely on checking on the customer's return.

You should receive the web hook on a trusted back end service, which then sends a silent push notification to the app.
The app can then show the appropriate messages.

