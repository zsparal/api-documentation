Mollie.js
=========
.. api-name:: Mollie JavaScript SDK
   :version: 1

.. endpoint::
   :url: https://js.mollie.com/v1/mollie.js

Mollie's browser-side JavaScript library is called ``Mollie.js``. You can use it to offer a more deeply embedded
checkout experience. See the guides on :doc:`Mollie Components </components/overview>` and on
:doc:`building your own checkout </payments/build-your-own-checkout>` for more information.

The ``Mollie`` object is used to initialize Mollie Components. ``Component`` objects each reference an embeddable
checkout component, such as a credit card number field or a credit card expiry date field.

.. _components-mollie-constructor:

Mollie(profileId[, options])
----------------------------
.. parameter:: profileId
   :type: string
   :condition: required

   Your profile ID, for example ``pfl_3RkSN1zuPE``.

.. parameter:: options
   :type: options object
   :condition: optional

   Any options you want to set. E.g. ``{ locale: "nl_NL"}``

   .. parameter:: locale
      :type: string
      :condition: optional

      Allows you to preset the language to be used. When this parameter is not provided, the browser language will be
      used instead. If we also not support the browser language then it will be shown in English. We recommend you
      provide the language tag, since this is usually more accurate.

      Possible values: ``en_US`` ``nl_NL`` ``nl_BE`` ``fr_FR`` ``fr_BE`` ``de_DE`` ``de_AT`` ``de_CH`` ``es_ES``
      ``ca_ES`` ``pt_PT`` ``it_IT`` ``nb_NO`` ``sv_SE`` ``fi_FI`` ``da_DK`` ``is_IS`` ``hu_HU`` ``pl_PL`` ``lv_LV``
      ``lt_LT``

   .. parameter:: testmode
      :type: boolean
      :condition: optional

      Set to ``true`` to enable test mode. Test tokens will be recognizable by the ``test`` suffix, e.g.
      `tkn_123abctest`.

.. _components-mollie-create-token:

mollie.createToken()
--------------------
Calling the ``createToken`` method will receive a token if successful. This token must then be sent to your back end
where it can be passed as the ``cardToken`` parameter to the
:doc:`Create Payment API </reference/v2/payments-api/create-payment>`.

This method has to be invoked from the ``submit`` event of your checkout form:

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    form.addEventListener('submit', e => {
      e.preventDefault();

      mollie.createToken().then(function(result) {
        // Handle the result this can be either result.token or result.error.
      });
    });

ES6
^^^
.. code-block:: js
   :linenos:

   form.addEventListener('submit', async e => {
     e.preventDefault();

     const { token, error } = await mollie.createToken();
   });

.. _components-mollie-create-component:

mollie.createComponent(type[, options])
---------------------------------------
This will create the Components which the shopper uses to enter the card holder data. After creating, the components
should be mounted in your checkout.

You need to create four components, one for each card holder data field.

.. parameter:: type
   :type: string
   :condition: required

   The ``createComponent`` method will create an component ready to be mounted.

   Possible values: ``"cardHolder"`` ``"cardNumber"`` ``"verificationCode"`` ``"expiryDate"``

.. parameter:: options
   :type: options object
   :condition: optional

   The options you want to give to Mollie Components. E.g. ``{ styles: fontSize: "10px"}``

   .. parameter:: styles
      :type: styles object
      :condition: optional

      See :doc:`Styling Mollie Components </components/styling>`.

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    var options = {
                    styles : {
                      base: {
                        color: '#eee',
                        fontSize: '10px',
                        '::placeholder' : {
                          color: 'rgba(68, 68, 68, 0.2)',
                        }
                      }
                    }
                  }

    var cardNumberEl = mollie.createComponent('cardNumber', options)

ES6
^^^
.. code-block:: js
   :linenos:

    const options = {
                      styles : {
                        base: {
                          color: '#eee',
                          fontSize: '10px',
                          '::placeholder' : {
                            color: 'rgba(68, 68, 68, 0.2)',
                          }
                        }
                      }
                    }

    const cardNumberEl = mollie.createComponent('cardNumber', options)

Component methods
=================
.. _components-mollie-component-mount:

component.mount(targetElement)
------------------------------
Adds the component to the DOM, meaning it will become visible for the user from this point onwards.

.. code-block:: HTML
   :linenos:

    <label for="card" >Card label</label>
    <div id="card"></div>

.. parameter:: targetElement
   :type: HTMLElement|string
   :condition: required

   An `HTMLElement <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement>`_ or a valid CSS Selector such as
   ``#id`` and ``.class``.

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

component.addEventListener(event, callback)
-------------------------------------------
Components can listen to several ``events``. The callback receives an object with all the related information.

.. parameter:: event
   :type: string
   :condition: required

   Subscribe to the event that are emitted by Mollie js.

   Possible values: ``"blur"`` ``"focus"`` ``"change"``

.. parameter:: callback
   :type: function
   :condition: required

   A function that will be called whenever the event is been emitted.

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    var callback = function(event) { console.log('We need a real world example here', event.type) }
    cardNumberEl.addEventListener('change', callback);

ES6
^^^
.. code-block:: js
   :linenos:

    const callback = (event)=> { console.log('We need a real world example here', event.type) }
    cardNumberEl.addEventListener('change', callback);

component.unmount()
-------------------
Removes the component from the DOM. Note that state — such as input values — is not preserved when re-mounting.

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
