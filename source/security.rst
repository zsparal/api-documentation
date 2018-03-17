.. _security:

Security
========

Maximum safety and usability
----------------------------
How does Mollie create an API that's maximally safe while being as easy to implement for developers as possible? By not
giving in to the reflex of stacking equivalent safety measures and by not sending sensitive information when it's not
required.

Secure connection required
--------------------------
Mollie uses the API-key as :ref:`means of authentication <authentication>` and requires HTTPS connections to guarantee
security. This means the Mollie API can only be accessed through the secure ``https`` protocol. All of the API clients
we publish use HTTPS.

End-to-end safety on the transport level is guaranteed by the HTTPS-requirement. No need to encrypt the data itself
again.

HTTPS mitigates *packet sniffing* and *timing & replay attacks*. Thanks to HTTPS, data exchanged between Mollie and the
merchant is protected and guaranteed to be authentic. HTTPS implements *hashed signatures*, *nonces* and other tried and
tested cryptographic safeties.

*Man-in-the-middle attacks* are prevented by strictly checking the HTTPS-certificate used on
``https://api.mollie.com/``. If the client detects a fake certificate – let's say because of a hacked DNS-server – no
connection will be set up.

What about the webhooks?
------------------------
The :ref:`webhooks <guides/webhooks>` are secured by HTTPS too, even if the merchant's hosting service is not using
HTTPS. This is because the webhook requests – which Mollie sends out to communicate
:ref:`status changes <guides/payment-status-changes>` – simply don't contain sensitive information. Your webhook-script
will always have to :ref:`fetch the object <v2/payments-get>` in order to know its status, and this can only be done
using an HTTPS-secured connection. Here too, the fact ``https://api.mollie.com/`` can only be reached using HTTPS forces
merchant-sites that don't use HTTPS into security.

What's left?
------------
An API that's so convenient you'll :ref:`integrate <overview>` it just for kicks. Make sure you enjoy yourself because
you'll be done in no time.
