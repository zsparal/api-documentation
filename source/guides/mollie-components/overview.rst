Mollie Components overview
==========================

*Mollie Components* is a set of Javascript APIs that allow you to add the fields needed for credit card payments to your
own checkout, in a way that is fully PCI-DSS SAQ-A compliant.

At a high level, it works by using a Javascript API to add fields to your checkout that the consumer will use to enter
their credit card details, such as their card number.

When the checkout is submitted, Mollie Components will exchange the card data for a ``cardToken`` which you can use with
the :doc:`Create payment API </reference/v2/payments-api/create-payment>`. The API will then return a
``_links.checkout`` where the consumer can do the 3-D Secure authentication. After that, the payment will be completed.

Add our Javascript to your project
----------------------------------

Always start by including ``mollie.js`` in to your project. Make sure it's been loaded from ``https://js.mollie.com`` and
not from anywhere else. It should be added just before the ``</body>`` tag.

Example of integrating the script
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: html
   :linenos:

    <html>
      <head>
        <title>My Checkout</title>
      </head>
      <body>
        <!-- Your HTML  --->
        <script src="https://js.mollie.com/v1/mollie.js"></script>
      </body>
    </html>

Using Mollie.JS object.
-----------------------
After the script is loaded you can use the ``Mollie(profileId[, options])`` function. This will return 
an object that you may use. You need the Profile Id of the website profile that you want to use.
This can be found in the `Profiles <https://www.mollie.com/dashboard/settings/profiles>`_ settings in the Dashboard.

.. note:: Be aware the Profile Id is *not* your API key. Your API key is private and should never be used in a browser
          context.

Mollie(profileId[, options])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. list-table::
   :widths: auto

   * - ``profileId``

       .. type:: string
          :required: true

     - Your Profile Id, for example ``pfl_3RkSN1zuPE``.

   * - ``options``

       .. type:: options object
          :required: false

     - Any options you want to set. E.g. ``{ locale: "nl_NL"}``

       .. list-table::
          :widths: auto

          * - ``locale``

              .. type:: string
                 :required: false

            - Allows you to preset the language to be used. When this 
              parameter is not provided, the browser language will be used instead. We recommend you
              provide the language tag because this is usually more accurate.

              Possible values: ``en_US`` ``nl_NL`` ``nl_BE`` ``fr_FR`` ``fr_BE`` ``de_DE`` ``de_AT`` ``de_CH`` ``es_ES``
              ``ca_ES`` ``pt_PT`` ``it_IT`` ``nb_NO`` ``sv_SE`` ``fi_FI`` ``da_DK`` ``is_IS`` ``hu_HU`` ``pl_PL`` ``lv_LV``
              ``lt_LT``

          * - ``styles``

              .. type:: styles object 
                 :required: false

            - An object of all the styles a ref of the values you can find here. (Yet to be determined)

mollie.createToken()
--------------------
Calling the ``createToken`` method will receive a token if successful. This token must then be sent to your back end
where it can be passed as the ``cardToken`` parameter to the
:doc:`Create payment API </reference/v2/payments-api/create-payment>`.

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    mollie.createToken('card', options).then(function(result) {
      // Handle the result this can be either result.token or result.error.
    })

ES6
^^^
.. code-block:: js
   :linenos:

   // Inside a async function (e.g. submit handler)
   const {token, error } = await mollie.createToken()


mollie.createElement(type[, options])
----------------------------------------
.. list-table::
   :widths: auto

   * - ``type``

       .. type:: string
          :required: true

     - The ``createElement`` method will create an element ready to be mounted.

       Possible values: ``"cardHolder"`` ``"cardNumber"`` ``"verificationCode"`` ``"expiryDate"``

   * - ``options``

       .. type:: options object
          :required: false

     - The options you want to give to Mollie Components. E.g. ``{ styles: fontSize: "10px"}``

       .. list-table::
          :widths: auto

          * - ``styles``

              .. type:: style object
                  :required: false

            - An object of all the styles a ref of the values you can find here. (Yet to be determined)

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    var options = {
                    styles : {
                      base: {
                        fontSize: '10px;'
                      }
                    }
                  }

    var cardNumberEl = mollie.createElement('cardNumber', options)

ES6
^^^
.. code-block:: js
   :linenos:

    const options = {
                      styles : {
                        base: {
                          fontSize: '10px;'
                        }
                      }
                    }

    const cardNumberEl = mollie.createElement('cardNumber', options)

Element methods
===============

element.mount(targetElement)
----------------------------

Adds the element to the DOM, meaning it will become visible for the user from this point onwards.

.. code-block:: HTML
   :linenos:

    <label for="card" >Card label</div>
    <div id="card"></div>

.. list-table::
   :widths: auto

   * - ``targetElement``

       .. type:: domElement
          :required: true

     - Valid CSS Selector such as ``ID`` and ``class``.

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    cardNumberEl.mount('#card');

ES6
^^^
.. code-block:: js
   :linenos:

    cardNumberEl.mount('#card');

element.on(event, callback)
---------------------------

Elements can listen to several ``events``. The callback receives an object with all the related information.

.. list-table::
   :widths: auto

   * - ``event``

       .. type:: string
          :required: true

     - Subscribe to the event that are emitted by Mollie js.

       Possible values: ``"blur"`` ``"focus"`` ``"change"``

   * - ``callback``

       .. type:: function
          :required: true

     - A function that will be called whenever the event is been emitted.


Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    var callback = function(event) { console.log('We need a real world example here', event.type) }
    cardNumberEl.on('change', callback);

ES6
^^^
.. code-block:: js
   :linenos:

    const callback = (event)=> { console.log('We need a real world example here', event.type) }
    cardNumberEl.on('change', callback);

element.unmount()
-----------------
Removes the element from the DOM. Note that state — such as input values — is not preserved when re-mounting.

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    cardNumberEl.unmount();

ES6
^^^
.. code-block:: js
   :linenos:

    cardNumberEl.unmount();

