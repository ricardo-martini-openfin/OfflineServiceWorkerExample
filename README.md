# Service Worker Example with an offline OpenFin Application

A simple service worker example

### What you get:

* Service worker that caches html,css,js files
* Service worker caches the response (json) of a fetch call.


#### Getting started:

Set your application manifest with:

"offlineAccess": true
	
### Running
	npm install && npm start

1) Right click in application and open devtools (inspect)

2) You should be able to see console messages that show the files being cached.

3) Put the application offline by navigating to the network tab and select offline.

4) Reload the application and you should be able to see the same time and date from the last cache.

#### Resources

- Collection of working, practical examples of using service workers in modern web sites.: https://serviceworke.rs/
- Further reading on service workers: https://developers.google.com/web/fundamentals/primers/service-workers/
