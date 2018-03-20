.. _guides/common-data-types:

Common data types
=================
To keep things simple, the Mollie API endpoints will always attempt to use the same structure when representing certain
value objects.

The API references lists the data type used for each field and parameter of every endpoint. This guide contains a list
of all data types used, along with an explanation of the way these data types are structured.

Amount object
-------------
In v2 endpoints, an amount object is always represented as follows.

.. list-table::
   :widths: auto

   * - | ``currency``
       | string
     - An `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_ currency code.

   * - | ``value``
       | string
     - A string containing the exact amount in the given currency.

Date
----
A string representing a date in ``YYYY-MM-DD`` format.

Datetime
--------
A string representing a date and time in `ISO 8601 <https://en.wikipedia.org/wiki/ISO_8601>`_ format.

QR code object
--------------
The QR code object represents an image of a QR code.

.. list-table::
   :widths: auto

   * - | ``height``
       | integer
     - Height of the image in pixels.

   * - | ``width``
       | integer
     - Width of the image in pixels.

   * - | ``src``
       | string
     - The URI you can use to display the QR code. Note that we can send both data URIs as well as links to HTTPS
       images. You should support both.

URL object
----------
In v2 endpoints, URLs are commonly represented as objects with an ``href`` and ``type`` field.

.. list-table::
   :widths: auto

   * - | ``href``
       | string
     - The actual URL string.

   * - | ``type``
       | string
     - The content type of the page or endpoint the URL points to.
