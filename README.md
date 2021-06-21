# Service Worker Example with an offline OpenFin Application

A simple service worker example

### What you get:

* Service worker that caches html,css,js files
* Service worker caches the response (json) of a fetch call.
* offlineAccess for unavailable application manifest.


#### Getting started:

### Testing offlineAccess (application manifest)

Your application must be set with: `"offlineAccess": true` (example app.json is set with this property)

- To test `offlineAccess`, launch the repository (`npm install && npm start`).
- Close the application / end OpenFinRVM.exe process.
- Rename the `app.json` file to `app1.json` (denoting a missing/unavailable application manifest)
- Launch the application from the shortcut on the desktop (Shortcut name: `OFFLINE APP`)

Expected behaviour:

- Application launches a cached version of the app.json from `C:\Users\<Username>\AppData\Local\OpenFin\apps\OpenfinPOC-TEST_`.
	
### Testing offlineAccess with service worker.


`npm install && npm start`

1) Right click in application and open devtools (inspect).

2) You should be able to see console messages that show the files being cached.

3) Put the application offline by navigating to the network tab and select offline.

4) Reload the application and you should be able to see the same time and date from the last cache.

#### Resources

- Collection of working, practical examples of using service workers in modern web sites.: https://serviceworke.rs/
- Further reading on service workers: https://developers.google.com/web/fundamentals/primers/service-workers/
