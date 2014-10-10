##How to use this project

* Check out the code
* Install NodeJS

Nodejs install instructions for Debian/Ubuntu-based systems
```
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```

For other operating systems and distributions see: https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager. On OSX you want to use the homebrew variant (homebrew is awsome and you want to have it anyway. :))w

Make sure your nodejs is >= 0.10.x
npm (Node Package Manager) should come with the latest nodejs versions.

* Install grunt-cli and bower
```
sudo npm install -g grunt-cli
sudo npm install -g bower

cd $project-folder

npm install
bower install
```

Use ```grunt serve``` to start production environment. Grunt will start a webserver on port 9000, watch any changes in the filesystem, compile the CSS, check JavaScript for erorrs and reload all connected browsers.
Use ```grunt build``` to prepare for distribution/production. It will minify JS, CSS, HTML, optimize images, build updated HTML, create a specialized build of modernizr, and much more. In short: It'll optimize the whole project into the ```dist``` directory.
Coyp the contents of the ```dist``` directory to the production server.