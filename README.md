ODLL: Open Data List Lite
=============
ODLL: "Rymes with Yodel"

A tiny Node.js/Meteor.js app to allow anyone to add a known open data set to a list, and let others comment on it. To prevent spam, Facebook/Twitter/Github login is required.

Meant to solve the problem of a Code for America Brigade wanting to list known data sets (but not host them) without setting up something like CKAN. Designed to be single-purpose, mobile-friendly (Responive), and have live updating (via Meteor.js).

testing/demo site: http://odll.meteor.com

[Meteor](http://meteor.com) is an extensive web framework on top of Node.js, for writing live, modern, web apps quickly; and is quite different from what you might be used to in other rapid development frameworks like MVC-style and scaffold-based systems. Before trying to get this to work, you may want to watch screencasts at http://meteor.com/screencast

Setup for Local Development (Mac or GNU/Linux)
===========================
* `curl https://install.meteor.com | sh`
* clone this repo to your machine
* inside the repo folder, type meteor to launch local server
* browse to localhost:3000 by default
* any editing you do will auto refresh in browser
* debug using the JavaScript console in your browser
* go dive into [Meteor documentation](http://docs.meteor.com/)

Setup for Local Development (Windows)
===========================
* Official Windows support for Meteor is still pending, but they have a port that tends to lag a little behind the main release at http://win.meteor.com/. I haven't tested it yet, but it should work with our repo.

Options for Deploying a Meteor App
===========================
* Details in the docs at http://docs.meteor.com/#deploying
* Push to free meteor.com hosting using meteor command-line. I wouldn't use this for production since I doubt it has a SLA, but great for quick testing with friends.
* Heroku supports meteor apps, with a bit more setup.
* Roll your own. Meh.

We're Here to Help
=====================
* Bret Fisher - bret@codeforamerica.org - [@BretFisher](http://twitter.com/BretFisher)
* find a few of us on [IRC (freenode)](webchat.freenode.net/?channels=codeforamerica&uio=d4) in #codeforamerica (BretFisher, kmcurry, and others I can't remember handles for)
* Search or post to our [Google Group](https://groups.google.com/a/codeforamerica.org/forum/#!forum/hrva-brigade) for the local "Brigade" 