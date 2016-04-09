# EasyPopup Plugin #

This plugin can make your coding easier , because it robs you of the need to write javascript code to show the model window

[DEMO](http://plugins.etrange.eu/easypopup/demo.html)

## Required

*jQuery

## Browser Support 

Modern browser like Chrome, Safari, FireFox...etc.

## How to use ##

1. Include jQuery and EasyPopup Plugin before closing tag </body>

```
#!html

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script type="text/javascript" src="js/easypopups.js"></script>

```
2. Include CSS before closing tag </head>

```
#!html

<link rel="stylesheet" href="css/easypopups.css"/>
<link rel="stylesheet" href="css/easypopups-styles.css"/>

```
3. Create a button and popup with spacial classes <b>easypopup-block</b> and <b>easypopup</b>, like this:

```
#!html

<a href="#popup-default" class="some-class">Button</a>

<div id="popup-default" class="easypopup-block easypopup">
    <h2>EasyPopup</h2>
    <p>It's very easy for using!</p>
</div>

```
Text in attribute href is the ID of your popup. <b>Important, popup ID and link ankor must be equal and start from 'popup-'</b>

Full code from example:

```
#!html

<!doctype html>
<html>
<head>
    <title>EasyPopup Demo</title>
    <link rel="stylesheet" href="css/easypopups.css"/>
    <link rel="stylesheet" href="css/easypopups-styles.css"/>
</head>
<body>

<a href="#popup-default" class="some-class">Button</a>

<div id="popup-default" class="easypopup-block easypopup">
    <h2>EasyPopup</h2>
    <p>It's very easy for using!</p>
</div>   

<script type="text/javascript" src="js/vendor/jquery.js"></script>
<script type="text/javascript" src="js/easypopups.js"></script>
</body>
</html>

```


