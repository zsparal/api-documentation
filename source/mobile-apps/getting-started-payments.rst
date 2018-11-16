Getting started with Payments in your App
=========================================

Accepting payments in your App can improve orders from mobile devices. In this guide we'll show you a basic example of
integrating Mollie Payments in your iOS or Android App.

.. note:: We don't give support on integrating Mollie Connect in apps. When you start working on integrating Mollie
          Connect in your App, we assume that you have enough knowledge to do it by yourself.

Keep the Guidelines of the platform you're developing on in mind!
-----------------------------------------------------------------
Every platform has it's own guidelines for accepting of rejecting Apps in the App Store or Marketplace. We're focussing
on the two major platforms; Apple with iOS and Google with Android.

iOS
^^^
Apple is very strict when it comes to following the guidelines. They have an mandatory review what means that your app
must be reviewed by Apple before it can be downloaded from the App Store. All the *rules* for iOS Apps can be found in
the `App Store Review Guidelines <https://developer.apple.com/app-store/review/guidelines/#payments>`_ under the section
**Payments**.

The conclusion: you're not allowed to use an external payment service (like Mollie) if you offering digital goods or
services, it's only allowed for physical goods. Ignoring this guideline will delay your App review and may trigger a
rejection.

Android
^^^^^^^
Google is somewhat looser when it comes to checking Apps before they can be downloaded. However, Google also has a
number of guidelines for its Google Play store what you can found in the
`Google Play Developer Policy <https://play.google.com/about/monetization-ads/payments/>`_. They hold random checks to
verify that Apps comply with the guidelines. We recommend that you follow these.

Summary: You must use Google Play In-app Billing in any case, except:

* Payment is solely for physical products
* Payment is for digital content that may be consumed outside of the app itself (e.g. songs that can be played on other
  music players).

Step 1: Create a Payment-creation file on your server
-----------------------------------------------------
Because you don't want to add your API-keys in your app, for safety purposes, you need to create a file on your server
what you App can all to create the payment. You'll need an API-key for this what you can find in your
`Dashboard <https://www.mollie.com/dashboard/developers/api-keys>`_. You'll find examples in other languages in the
:doc:`Create payment reference </reference/v2/payments-api/create-payment>`.

.. code-block:: php
      :linenos:

      <?php
      $mollie = new \Mollie\Api\MollieApiClient();
      $mollie->setApiKey("live_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM");
      $payment = $mollie->payments->create([
            "amount" => [
                  "currency" => "EUR",
                  "value" => $_POST['amountValue'],
            ],
            "description" => $_POST['description'],
            "redirectUrl" => "mollie-app://payment-return",
            "webhookUrl" => "https://webshop.example.org/payments/webhook/",
            "metadata" => [
                  "order_id" => "12345",
            ],
      ]);

      return $payment->getCheckoutUrl();

Step 2: Make your App accepting the Redirect URL
------------------------------------------------
Since we specified the custom URL scheme iOS or Android should know that the URL scheme belongs to your App.

iOS
^^^
Go to your ``Info.plist`` file. Right click any blank area and select ``Add Row`` to create a new key.

.. image:: images/ios-scheme_plist-1@2x.png

You’ll be prompted to select a key from a drop-down menu. Scroll to the bottom and select ``URL types``. This creates
an array item. You can further click the disclosure icon to expand it and you need to select ``Item 0``. Expand that
row as well and you should see ``URL identifier``. Double-click the value field and fill in your identifier. Most of the
time will this be the same as your bundle ID, e.g. ``com.mollie.MollieApp``. Click on the plus-button next to ``Item 0``
and choose ``URL Schemes`` from the drop-down menu. Expand the ``URL Schemes`` row and another ``Item 0`` will show up.
Type in the value-field the scheme you want to handle, in our case ``mollie-app``.

.. image:: images/ios-scheme_plist-2@2x.png

Android
^^^^^^^
Open your ``AndroidManifest.xml`` file. Decide for what activity you want to support the URL scheme and add the following
code inside your ``<activity>`` object. Replace ``android:scheme`` with your URL scheme and ``android:host`` with the
commando, in our example ``payment-return``.

.. code-block:: xml
      :linenos:

        <intent-filter>
            <data
                android:host="payment-return"
                android:scheme="mollie-app" />
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
        </intent-filter>

Step 3: Call your server and open the Checkout URL
--------------------------------------------------
To initiate a payment from your app you need to call the file you've created in step 1 and open the browser with the
Checkout URL you'll receive.

iOS
^^^

.. code-block:: swift
      :linenos:

      func startPayment(order: Order) {
            let parameters = ["amountValue": "25.00", "description": "Order 12345"]
            let url        = URL(string: "https://www.thisismylink.com/api/create-payment")!
            let session    = URLSession.shared

            var request        = URLRequest(url: url)
            request.httpMethod = "POST"

            do {
                  request.httpBody = try JSONSerialization.data(withJSONObject: parameters, options: .prettyPrinted)
            } catch let error {
                  print(error.localizedDescription)
            }

            let task = session.dataTask(with: request as URLRequest, completionHandler: { data, response, error in

                  guard error == nil else {
                        return
                  }

                  guard let data = data else {
                        return
                  }

                  do {
                        UIApplication.shared.open(NSURL(string: response)! as URL)
                  } catch let error {
                        print(error.localizedDescription)
                  }
            })
            task.resume()
      }

Android
^^^^^^^
We use the `OkHttp <https://github.com/square/okhttp>`_ library in this example. Therefor, add the following line to
your Project's ``build.gradle`` file:

.. code-block:: http
   :linenos:

   compile 'com.squareup.okhttp3:okhttp:3.5.0'

**Java**

.. code-block:: java
    :linenos:

    private void startPayment() {
        OkHttpClient client = new OkHttpClient();

        RequestBody requestBody = new MultipartBody.Builder()
            .setType(MultipartBody.FORM)
            .addFormDataPart("amountValue", "25.00")
            .addFormDataPart("description", "order 12345)
            .build();

        Request request = new Request.Builder()
            .url("https://www.thisismylink.com/api/create-payment")
            .post(requestBody)
            .build();

        try {
            response = client.newCall(request).execute();
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (response == null || !response.isSuccessful()) {
            Log.w("Create Payment", "HTTPS-call failed");
        } else {
            Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(response.body().string()));
            startActivity(browserIntent);
        }
    }

**Kotlin**

.. code-block:: kotlin
    :linenos:

    private fun startPayment() {
        OkHttpClient client = new OkHttpClient();

        RequestBody requestBody = new MultipartBody.Builder()
            .setType(MultipartBody.FORM)
            .addFormDataPart("amountValue", "25.00")
            .addFormDataPart("description", "order 12345)
            .build();

        Request request = new Request.Builder()
            .url("https://www.thisismylink.com/api/create-payment")
            .post(requestBody)
            .build();

        try {
            response = client.newCall(request).execute();
        } catch (e: IOException) {
            e.printStackTrace();
        }

        if (response === null || !response.isSuccessful()) {
            Log.w("Create Payment", "HTTPS-call failed");
        } else {
            val browserIntent = Intent(android.content.Intent.ACTION_VIEW)
            browserIntent.data = Uri.parse(response.body().string())
            startActivity(browserIntent);
        }
    }

Step 4: Handle the redirect
---------------------------
We return the customer back to your App after the payment is paid or canceled. You should tell the App what to do with
this request.

iOS
^^^
Open your ``AppDelegate.swift`` file and add the ``application(_:open:options)`` method. Split out the host into an array
so you can access the data that we return. Your method should return ``true`` to let the device know that you can handle
the request.

.. code-block:: swift
      :linenos:

      func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
        if (url.host! == "payment-return") {
            let queryItems = URLComponents(url: url, resolvingAgainstBaseURL: false)?.queryItems
            let paymentId = queryItems?.filter({$0.name == "id"}).first

            // Optional: Do stuff with the payment ID

            return true;
        }

        return false;
      }

Android
^^^^^^^
Open the class that you have specified in your ``AndroidManifest.xml`` as handler for the URL scheme. And should add the
handling code in the ``onCreate`` method.

**Java**

.. code-block:: java
      :linenos:

      public void onCreate(Bundle savedInstanceState)
      {
            super.onCreate(savedInstanceState);

            //...

            Intent intent = getIntent();
            if (Intent.ACTION_VIEW.equals(intent.getAction())) {
                  Uri uri = intent.getData();
                  String paymentId = uri.getQueryParameter("id");

                  // Optional: Do stuff with the payment ID
            }
      }

**Kotlin**

.. code-block:: kotlin
      :linenos:

      override fun onCreate(savedInstanceState: Bundle){
            super.onCreate(saveInstanceState)

            // ...

            val action: String? = intent?.action
            if (action === android.content.Intent.ACTION_VIEW) {
                  val data: Uri? = intent?.data
                  val paymentId: String? = data.getQueryParameter("id")

                  // Optional: Do stuff with the payment ID
            }
      }
