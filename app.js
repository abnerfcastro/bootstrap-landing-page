/*!
 * app.js
 * 
 * Copyright(c) 2017 @project-name
 * Author: @author
 * Date: @date
 */

//  Load environment variables inside .env file
require('dotenv').config();

var express = require('express');
var path = require('path');

var app = express();

// Setting app properties
app.set('env', process.env.NODE_ENV);
app.set('port', process.env.PORT);

if (app.get('env') === 'development') {
    // Apply these middlewares in development env
    console.log("Environment: " + app.get('env'));

    // Serve files from client folder in dev environment. Use minified versions in production.
    app.use(express.static(path.join(__dirname, 'client')));
}

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
    console.log('Server has started on port ' + app.get('port'));
});