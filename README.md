# A simple Express-React example


# Private URL shortener

A lot of companies often share links on promotional material, and quite often, these links can be long and difficult to type. And displaying a long link on printed media pretty much guarantees that no one will bother to type it in.

Companies can use third-party URL shorteners like bit.ly, but a lot of companies decide to buy a short domain themselves, because custom short URLs are very useful when sharing posts on social media, by preserving company branding.

For example, Verge uses the short domain `vrge.co/<SHORTCODE>` to shorten `theverge.com` URLs.



## Basic requirements



To install Node, follow [instructions on the official website](https://nodejs.org/en/), or just google it.

To install all dependencies


    $ cd functions
    $ npm install



Function folder contains a simple script with a function named `shorten`, which accepts a string `url` and an integer `length`. 


1.  The function returns a _shortcode_ of the given length.
2.  The return will only include numbers (0-9) and letters (a-z, A-Z).
3.  Repeated calls with the same URL return the same _shortcode_. There's no point in generating a new code for the same URL.



## Back-end in express.js

To install all dependencies


    $ cd backend_express
    $ npm install

`backend_express` contains a simple Express server that has two end-points:

1.  `POST /shortcodes` to shorten a given URL, and...
2.  `GET /shortcodes/[SHORTCODE]` that returns the URL corresponding to a short-code.




## FrontEnd


To install all dependencies


    $ cd react_frontEnd
    $ npm install


`react_frontEnd` contains a front-end built with React. It contains text inputs, submit buttons, and `div`-s to display generated shortcodes and retrieved URLs.


1.  Filling in an input with a URL, and clicking the submit button will display the resulting shortcode in the corresponding output `div`.
3.  Filling in an input with the shortcode, and clicking the submit button will display the original URL in the corresponding output `div`

