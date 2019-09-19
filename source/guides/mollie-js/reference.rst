Reference
=========


Add Mollie.JS to your project
*****************************
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
        <script src="https://js.mollie.com/public/mollie.js"></script>
      </body>
    </html>

Get started with Mollie.JS 
**************************
After loading the ``mollie.js`` script you can use the global ``Mollie(profileId[, options])`` this will create 
an object. You need the ``profile_id`` of your organization. This can be found in the `Profiles <https://www.mollie.com/dashboard/settings/profiles>`_  
settings in the dashboard. A profile id looks like ``pfl_test12345678`` and are bound to a website profile.

.. note:: Be aware the profile id is *not* your development api_key.

The global `Mollie` method will accept two arguments, these are documented below

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

     - The options you want to give to mollie JS. E.g. ``{ locale: "nl_NL"}`` 

       .. list-table::
          :widths: auto

          * - ``locale``

              .. type:: string
                 :required: false

            - Allows you to preset the language to be used in the Javascript. When this 
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
^^^^^^^^^^^^^^^^^^^^
With ``createToken`` method you can make a request to receive a token. This token can be safely send to your server and used to create a payment via an API call. (TODO: see link to api create payment docs)

.. list-table::
   :widths: auto

   * - ``element``

       .. type:: element type
          :required: true

     - The createElement method will create an element ready to be mounted. 

       Possible values: ``card`` ``cardNumber`` ``verificationCode`` ``expiryDate``

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
----------
.. code-block:: js
   :linenos:

    var options = { 
                    styles : {
                      base: {
                        fontSize: '10px;
                      }
                    }
                  }

    var cardEl =  mollie.createElement('card', options)

ES6
---
.. code-block:: js
   :linenos:

    const options = { 
                      styles : {
                        base: {
                          fontSize: '10px;
                        }
                      }
                    }
    
    const cardEl =  mollie.createElement('card', options)




Javascript
----------
.. code-block:: js
   :linenos:

    var mollie =  Mollie('pfl_test12345678', {locale: 'nl_NL', styles: { backgroundColor: '#ff00ff' } }])

ES6
---
.. code-block:: js
   :linenos:

    const mollie =  Mollie('pfl_test12345678', {locale: 'nl_NL', styles: { backgroundColor: '#ff00ff' } }])

mollie.createElement(element[, options])
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
.. list-table::
   :widths: auto

   * - ``element``

       .. type:: element type
          :required: true

     - The createElement method will create an element ready to be mounted. 

       Possible values: ``card`` ``cardNumber`` ``verificationCode`` ``expiryDate``

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
----------
.. code-block:: js
   :linenos:

    var options = { 
                    styles : {
                      base: {
                        fontSize: '10px;
                      }
                    }
                  }

    var cardEl =  mollie.createElement('card', options)

ES6
---
.. code-block:: js
   :linenos:

    const options = { 
                      styles : {
                        base: {
                          fontSize: '10px;
                        }
                      }
                    }
    
    const cardEl =  mollie.createElement('card', options)

Element methods
===============

element.mount(targetElement)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Mounts an element to the DOM.  This means you need to setup your dom accordingly HTML standards. 

.. code-block:: HTML
   :linenos:

    <label for="card" >Card label</div>
    <div id="card"></div>

.. list-table::
   :widths: auto

   * - ``targetElement``

       .. type:: domElement
          :required: true

     - Valid HTML ``ID`` or ``class`` that's in the DOM when the mount method is been called.

Javascript
----------
.. code-block:: js
   :linenos:

    cardEl.mount('#card');

ES6
---
.. code-block:: js
   :linenos:

    cardEl.mount('#card');

element.on(event, callback)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Elements can listen to several ``events``. This will be emitted by mollie je. The callback recieves an object with all the related information.

.. list-table::
   :widths: auto

   * - ``event``

       .. type:: event type
          :required: true

     - Subscribe to the event that are emitted by mollie js.

       Possible values: ``blur`` ``focus`` ``change``

   * - ``callback``

       .. type:: function
          :required: true

     - A function that will be called whenever the event is been emitted. 


Javascript
----------
.. code-block:: js
   :linenos:

    var callback = function(event) { console.log('We need a real world example here', event.type) }
    cardEl.on('change', callback);

ES6
---
.. code-block:: js
   :linenos:

    const callback = (event)=> { console.log('We need a real world example here', event.type) }
    cardEl.on('change', callback);

element.unmount()
^^^^^^^^^^^^^^^^^
Whenever you want to remove all of the intance of the element you can use `unmount` method. By calling it the element will also be removed from the DOM.


Javascript
----------
.. code-block:: js
   :linenos:

    cardEl.unmount();

ES6
---
.. code-block:: js
   :linenos:

    cardEl.unmount();

