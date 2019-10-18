Styling Mollie Components
=========================

:doc:`Mollie Components <overview>` can be fully styled to ensure a smooth blend-in with your checkout.

Styling can be applied to Elements in the three states ``base``, ``valid`` and ``invalid``:

``base``
  The state of the Element when your customer has not entered any data yet or is entering data.

``valid``
  The state of the Element when your customer has entered valid data, such as a valid credit card number.

``invalid``
  The state of the Element when your customer entered invalid data, such as an expiry date in the past.

For each of these there is an set of properties you can use.

* ``backgroundColor`` of type ``color``
* ``color`` of type ``color``
* ``fontSize`` of type ``number``
* ``fontWeight`` of type ``string|number``
* ``letterSpacing`` of type ``number``
* ``lineHeight`` of type ``number``
* ``padding`` of type ``number number number number``
* ``paddingBottom`` of type ``number``
* ``paddingLeft`` of type ``number``
* ``paddingRight`` of type ``number``
* ``paddingTop`` of type ``number``
* ``textAlign`` of type ``string``
* ``textDecoration`` of type ``string``
* ``textTransform`` of type ``string``

Every property has one or more types. Multiple types are indicated by a ``|`` character. A property can also accept
space separated input such as ``padding``. We don't allow ``URL`` , ``http``, ``https`` and ``www``.

* ``string`` A valid string, spaces aren't allowed,
* ``number`` A valid CSS number with an optional unit ``px``, ``em`` or ``rem``.
* ``color`` We accept colors as ``#nnn``, ``#nnnnnn``, ``rgb(a)``, ``hsl(a)`` and ``transparent``,

We allow the following pseudo-classes. These will be autoprefixed and can be nested with the above listed properties.

* ``::placeholder``

Example
-------

Using styles with :ref:`components-mollie-create-element`:

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
        valid: {
          color: '#090',
        }
      }
    };

    var cardNumberEl = mollie.createElement('cardNumber', options)
