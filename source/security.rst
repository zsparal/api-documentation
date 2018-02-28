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
Mollie uses the API-key as means of authentication and requires SSL connections to guarantee security. This means the
Mollie API can only be accessed through the secure ``https`` protocol. All of the API clients we publish use SSL.

End-to-end safety on the transport level is guaranteed by the SSL-requirement. No need to encrypt the data itself again.

SSL mitigates packet sniffing and timing & replay attacks. Thanks to SSL, data exchanged between Mollie and the merchant
is protected and guaranteed to be authentic. SSL implements hashed signatures, nonces and other tried and tested
cryptographic safeties.

Man-in-the-middle attacks are prevented by strictly checking the SSL-certificate used on ``https://api.mollie.com/``. If
the client detects a fake certificate – let's say because of hacked DNS-server – no connection will be set up. Sorry,
hack failed.

What about the webhooks?
------------------------
The webhooks are covered too, even if the merchant's hosting service is not using SSL. This is because the webhook
requests – which Mollie sends out to communicate status changes – simply don't contain sensitive information. Your
webhook-script will always have to fetch in order to know its status and this can only be done using an SSL-secured
connection. Here too, the fact ``https://api.mollie.com/`` can only be reached using SSL also forces merchant-sites that
don't use SSL into security.

What's left?
------------
An API that's so convenient you'll :ref:`integrate <overview>` it just for kicks. Make sure you enjoy yourself because you'll be done in
no time.