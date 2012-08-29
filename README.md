CasperJS Exercises
==================

Initial Setup
-------------
* Install [PhantomJS](http://phantomjs.org/download.html)
* Run the PhantomJS [Hello, World](http://code.google.com/p/phantomjs/wiki/QuickStart) code to make sure everything's working; you can also start a PhantomJS console by running `phantomjs` and entering the quickstart commands manually
* Install [CasperJS](http://casperjs.org/installation.html)
* Run the CasperJS [Google Scraping example](http://casperjs.org/quickstart.html)

Exercise 1
----------
* Modify Phantom's [follow.js example](https://github.com/subelsky/casperjs_exercises/blob/master/js/examples/follow.js) to display
the Twitter followers from the [@bmorejs](https://twitter.com/bmorejs) and your own account (if any).

* Observe the amount of control you have over the browser, but then see how cumbersome writing code like this would be for a more
complex scraping application.

* Run Casper's [googlelinks.js example](https://github.com/subelsky/casperjs_exercises/blob/master/js/examples/googlelinks.js) with your own
search terms (like your name).

Exercise 2
----------
* Rewrite the `follow.js` code to run with Casper.

* Modify `googlelinks.js` or `follow.js` to take a screenshot of the results page and save as a `png` file using Casper's [capture method](http://casperjs.org/api.html#casper.capture).

Exercise 3
----------
* Write a basic site availability tester for one of your current projects using Casper's [Tester module](http://casperjs.org/api.html#tester.assert).
Check out [this example](https://github.com/n1k0/casperjs/blob/master/samples/googletesting.js) for inspiration.

Extra Credit Exploration
---------------------------
* Install the Casper `__utils__` bookmarklet from [here](http://casperjs.org/api.html#client-utils) and try experimenting with `__utils__` helpers,
especially [`getElementByXpath`](http://casperjs.org/api.html#clientutils.getElementByXPath) and [`mouseEvent`](http://casperjs.org/api.html#clientutils.mouseEvent).

* Try using PhantomJS as a websniffer to measure the perform of one of your current web projects,
[as demonstrated by Ilya Grigorik](http://www.igvita.com/2012/08/28/web-performance-power-tool-http-archive-har/).

* Write a CasperJS version of [this Mechanize webscraper](https://github.com/subelsky/baltimore_property).
