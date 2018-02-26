Authentication
==============

What data do I need?
--------------------
The first thing you need is a `website profile <https://www.mollie.com/dashboard/settings/profiles>`_. Each website
profile has a *Live API key* and a *Test API key*. Use these keys to:

* Show the Mollie API it is really you.
* Select the website profile the intended communication with the Mollie API relates to.
* Specify whether you're testing or working with real payments.

The API key must be sent along with each API request, by providing it in the HTTP call's ``Authorization`` header. If
one of our default API clients is used, the client will offer a ``setApiKey`` method that will allow you to easily
configure the required header.

While building and testing your integration you should use the *Test API key*. This will cause your code to
(automatically) only create test payments. Test payments come with a fake payment screen that allows you to select
whether your test payments are successful or not without spending actual money. This way you can easily test and
rehearse different scenarios that will occur later on when you switch to real payments. After your testing is done you
go live by using the Live API key instead of the Test API key. Going live (or going back to testing) is as easy as
changing keys. Nothing else needs to change.

Of course it's very important to keep any API-keys **secure**. Do not ever share them. However, if a key leaks you can
always regenerate it. Don't forget to apply new keys to your code. Until you do your integration will not work.

Apart from the payment screen and the fact that test payments are created instead of real ones, the Mollie API behaves
the same way regardless of whether the Test API key or the Live API key is used. Because of this, there won't be any
technical surprises upon going live. Make a note: don't forget to start using the Live API key when your site goes
public or your customers could be getting a free ride.

The Mollie REST API
-------------------
The API implements a **Representational state transfer** (REST) architecture. Sounds technical but it's really quite easy.
It mostly breaks down to HTTP-methods ``GET``, ``POST``, ``PUT`` and ``DELETE`` matching the operations to read, update,
create and delete.

REST also implies a nice and clean structure for URLs or endpoints. This means you can reach any part of the Mollie API
on ``https://api.mollie.com/v1/`` adding the name of the resource you want to interact with.

Example
-------
At the top of documentation pages you can select a platform like PHP, Ruby, Python or cURL. Any code examples on the
page will be shown for that platform.

Any API action you want to execute requires a valid Test API key or Live API key. In order to show you how
authentication works we use the GET method on the payments Resource. This method fetches a payment, but that's not
really important here. Focus on how the API-key is involved.

In the example below we're using the Test API Key ``test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM``. The response shows a result
for a retrieved payment with the fictional id ``tr_WDqYK6vllg``.::

    curl -X GET https://api.mollie.com/v1/payments/tr_WDqYK6vllg \
      -H "Authorization: Bearer test_dHar4XY7LxsDOtmnkVtjNVWXLSlXsM"

Response
--------
The response will be JSON.::

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8

    {
        "resource": "payment",
        "id": "tr_WDqYK6vllg",
        "mode": "test",
        "createdDatetime": "2018-02-26T11:52:37.0Z",
        "status": "paid",
        "paidDatetime": "2014-09-05T14:37:35.0Z",
        "amount": "35.07",
        "description": "Order 33",
        "method": "ideal",
        "metadata": {
            "order_id": "33"
        },
        "details": {
            "consumerName": "Hr E G H K\u00fcppers en\/of MW M.J. K\u00fcppers-Veeneman",
            "consumerAccount": "NL53INGB0618365937",
            "consumerBic": "INGBNL2A"
        },
        "locale": "nl",
        "profileId": "pfl_QkEhN94Ba",
        "links": {
            "webhookUrl": "https://webshop.example.org/payments/webhook",
            "redirectUrl": "https://webshop.example.org/order/33/"
        }
    }