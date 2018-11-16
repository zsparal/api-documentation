Getting started with Mollie Connect in your App
===============================================

Mollie Connect makes it possible to login and authorize directly from your app. Make sure to keep the security risk in
mind while integrating Mollie Connect. For iOS example we only show Swift snippets while for Android we show both Java
and Kotlin snippets.

.. note:: We don't give support on integrating Mollie Connect in apps. When you start working on integrating Mollie
          Connect in your App, we assume that you have enough knowledge to do it by yourself.

Step 1: Create an OAuth App
---------------------------
The first step is to `register your app in your Dashboard <https://www.mollie.com/dashboard/developers/applications>`_.
You'll need to provide an App Name, description, and Redirect URL. The Redirect URL can be a custom App Scheme to redirect
back to your App immediately. To make this possible you should specify this in your App's manifest. In the following examples
we want to use ``mollie-app://authorize`` as Redirect URL.

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
commando, in our example ``authorize``.

.. code-block:: xml
      :linenos:

        <intent-filter>
            <data
                android:host="authorize"
                android:scheme="mollie-app" />
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
        </intent-filter>

Step 3: Create a server-side file for Access-tokens
---------------------------------------------------
For safety-reasons you don't want the Client Secret inside your app. Therefor you should create a file on your server
that converts the authentication code (what you get from the OAuth authorize-screen) to an actual Access-token what you
can call the Mollie API with. Make sure the line between your app and your server is **secure and not accessable for someone
else except your app**. Please see the :doc:`OAuth documentation </reference/oauth2/tokens>` how to set this up.

Step 4: Let your App open the authorization page
------------------------------------------------
Let's assume that you put a login button in your app that needs to open the Mollie OAuth flow. Add the following code to
your button's action.

iOS
^^^
.. code-block:: swift
      :linenos:

      @IBAction func loginButtonClicked() {
            let authorizeLink = "https://www.mollie.com/oauth2/authorize?client_id=xxx&state=xxx&scope=payments.read&response_type=code&approval_prompt=auto";
            UIApplication.shared.open(NSURL(string: authorizeLink)! as URL)
      }

Android (Java)
^^^^^^^^^^^^^^
.. code-block:: java
      :linenos:

      private void onClick(View v) {
            String authorizeLink = "https://www.mollie.com/oauth2/authorize?client_id=xxx&state=xxx&scope=payments.read&response_type=code&approval_prompt=auto";
            Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(authorizeLink));
            startActivity(browserIntent);
      }

Android (Kotlin)
^^^^^^^^^^^^^^^^
.. code-block:: kotlin
      :linenos:

      button.setOnClickListener {
            val browserIntent = Intent(android.content.Intent.ACTION_VIEW)
            String authorizeLink = "https://www.mollie.com/oauth2/authorize?client_id=xxx&state=xxx&scope=payments.read&response_type=code&approval_prompt=auto";
            browserIntent.data = Uri.parse(authorizeLink)
            startActivity(browserIntent);
      }

Step 5: Handle the redirect
---------------------------
Either when the merchant accepts or denies the authorization, we'll return him/her to your app via the Redirect URL. You
should tell the App what to do with the data in the response.

iOS
^^^
Open your ``AppDelegate.swift`` file and add the ``application(_:open:options)`` method. Split out the host into an array
so you can access the data that we return. Your method should return ``true`` to let the device know that you can handle
the request.

.. code-block:: swift
      :linenos:

      func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {
        if (url.host! == "authorize") {
            let queryItems = URLComponents(url: url, resolvingAgainstBaseURL: false)?.queryItems
            let error = queryItems?.filter({$0.name == "error"}).first
            if (error?.value?.isEmpty)! {
                let code = queryItems?.filter({$0.name == "code"}).first
                let authenticationCode = error?.value!

                // Do stuff with the authenticationCode
            } else {
                // Do something with the deny
            }

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
                  String error = uri.getQueryParameter("error");

                  if (error !== null) {
                        String authenticationCode = uri.getQueryParameter("code");

                        // Do stuff with the authenticationCode
                  } else {
                        // Do something with deny
                  }
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
                  val error: String? = data.getQueryParameter("error")

                  if (error !== null) {
                        val authorizationCode = data.getQueryParameter("code")

                        // Do stuff with the authenticationCode
                  } else {
                        // Do something with deny
                  }
            }
      }
