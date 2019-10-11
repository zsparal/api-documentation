Mollie.JS Reference guide
=========================


Add Mollie.JS to your project
-----------------------------
Always start by including mollie.js in to your project. Make sure it's been loaded from *https://js.mollie.com* and not from anywhere else.

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
        <script src="https://js.mollie.com/v1/"></script>
      </body>
    </html>

Using Mollie.JS object.
-----------------------
After the script is loaded you can use the ``Mollie(profileId[, options])`` function. This will return 
an object that you may use. You need the ``profile_id`` of your organization. This can be found in the `Profiles <https://www.mollie.com/dashboard/settings/profiles>`_  
settings in the dashboard. A profile id looks like ``pfl_test12345678`` and are bound to a website profile. Your profile key can be found in the URL.

.. note:: Be aware the profile id is *not* your API key nor your development API Key. Your API key is private and should never be used in a browser context.

Mollie(profileId[, options])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. list-table::
   :widths: auto

   * - ``profileId``

       .. type:: string
          :required: true

     - Your profile id ``pfl_test12345678``.

   * - ``options``

       .. type:: options object
          :required: false

     - The options you want to give to Mollie.js. E.g. ``{ locale: "nl_NL"}`` 

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
Calling the ``createToken`` will receive a token if successful. This token can be safely send to the server and used to create a payment via an API call. (TODO: see link to api create payment docs)


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


mollie.createElement(element[, options])
----------------------------------------
.. list-table::
   :widths: auto

   * - ``element``

       .. type:: element type
          :required: true

     - The createElement method will create an element ready to be mounted. 

       Possible values: ``cardNumber`` ``verificationCode`` ``expiryDate``

   * - ``options``

       .. type:: options object
          :required: false

     - The options you want to give to mollie JS. E.g. ``{ styles: fontSize: "10px"}``

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

    var cardNumberEl =  mollie.createElement('cardNumber', options)

ES6
^^^
.. code-block:: js
   :linenos:

    const options = {
                      styles : {
                        base: {
                          fontSize: '10px;
                        }
                      }
                    }

    const cardNumberEl =  mollie.createElement('cardNumber', options)

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

Elements can listen to several ``events``. This will be emitted by Mollie.js. The callback receives an object with all the related information.

.. list-table::
   :widths: auto

   * - ``event``

       .. type:: event type
          :required: true

     - Subscribe to the event that are emitted by Mollie js.

       Possible values: ``blur`` ``focus`` ``change``

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
Removes the element from the DOM. Note that state—such as input values—is not preserved when re-mounting.

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

