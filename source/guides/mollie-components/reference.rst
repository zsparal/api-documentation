Mollie Components reference
===========================

The ``Mollie`` object is used to initialize :doc:`Mollie Components </guides/mollie-components/overview>`.

Mollie(profileId[, options])
----------------------------

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

          * - ``testmode``

              .. type:: boolean
                 :required: false

            - Set to ``true`` to enable test mode.

          * - ``styles``

              .. type:: styles object
                 :required: false

            - An object of all the styles a ref of the values you can find here. (Yet to be determined)

mollie.createToken()
--------------------
Calling the ``createToken`` method will receive a token if successful. This token must then be sent to your back end
where it can be passed as the ``cardToken`` parameter to the
:doc:`Create payment API </reference/v2/payments-api/create-payment>`.

This method has to be invoked from the ``submit`` event of your checkout form:

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    form.addEventListener('submit', e => {
      e.preventDefault();

      mollie.createToken('card', options).then(function(result) {
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


mollie.createElement(type[, options])
-------------------------------------

This will create the Elements which the shopper uses to enter the card holder data. After creating, the elements should
be mounted in your checkout.

You need to create four elements, one for each card holder data field.

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

            - Styling can be applied in three states ``base``, ``valid`` and ``invalid``. For each of these there is an range of properties you can use.
              
              * ``thing``
              * ``backgroundColor`` of type 'color',
              * ``color`` of type 'color',
              * ``fontSize`` of type 'number',
              * ``fontWeight`` of type 'string|number',
              * ``letterSpacing`` of type 'number',
              * ``lineHeight`` of type 'number',
              * ``padding`` of type 'number number number number',
              * ``paddingBottom`` of type 'number',
              * ``paddingLeft`` of type 'number',
              * ``paddingRight`` of type 'number',
              * ``paddingTop`` of type 'number',
              * ``textAlign`` of type 'number',
              * ``textDecoration`` of type 'string',
              * ``textTransform`` of type 'string',

              Every property has one or more types. Multiple types are indicated by a ``|`` character. A property can also accept space separated input such
              as ``padding``. We don't allow ``URL`` , ``http``, ``https`` and ``www``.

              * ``string`` A valid string, spaces aren't allowed,
              * ``number`` A valid CSS number with an optional unit``px``, ``em`` or ``rem``.
              * ``color`` We accept colors as ``hex(a)``, ``rgb(a)``, ``hsl(a)`` and ``transparent``,

              We allow the following pseudo-classes. These will be autoprefixed and can be nested with the above listed properties.

              * ``::placeholder``

Javascript
^^^^^^^^^^
.. code-block:: js
   :linenos:

    var options = {
                    styles : {
                      base: {
                        color: '#eee',
                        fontSize: '10px;',
                        padding: '10px 15px',
                        '::placeholder' : {
                          color: 'rgba(68, 68, 68, 0.2)',
                        }
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
                          color: '#eee',
                          fontSize: '10px;',
                          padding: '10px 15px',
                          '::placeholder' : {
                            color: 'rgba(68, 68, 68, 0.2)',
                          }
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

       .. type:: HTMLelement|string
          :required: true

     - An `HTMLElement <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement>`_ or a valid CSS Selector such as ``#id`` and ``.class``.

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
