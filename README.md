# EasyPopup Plugin #

This plugin can make your coding easier, because with its help you dont need to write javascript code to show the modal window. Check check the good-looking material design style, adaptive and cross-browser source.

[DEMO](http://plugins.etrange.eu/easypopup/demo.html)

![easypopup plugin](http://plugins.etrange.eu/easypopup/test-easypopup.gif)

## Required ##

*jQuery

## Browser Support 

Modern browser like Chrome, Safari, FireFox...etc.

## How to use ##

*Include jQuery and EasyPopup Plugin before closing tag </body>

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script type="text/javascript" src="js/easypopups.js"></script>

```

*Include CSS before closing tag </head>

```
<link rel="stylesheet" href="css/easypopups.css"/>
<link rel="stylesheet" href="css/easypopups-styles.css"/>

```

*Create a button and popup with special classes <b>easypopup-block</b> and <b>easypopup</b>, like this:

```
<a href="#popup-default" class="some-class">Button</a>

<div id="popup-default" class="easypopup-block easypopup">
    <h2>EasyPopup</h2>
    <p>It's very easy for using!</p>
</div>

```

Text in attribute href is the ID of your popup. <b>Important, popup ID and link ankor must be equal and start from 'popup-'</b>

Full code from example:

```
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

## Add effects ##

If you want to use animation effects like slideTop, use data- attributes <b>data-easypopup-in</b> and <b>data-easypopup-out</b>.
Parameters: slideleft, slideright, slidetop, slidebottom. By default: simple fade

```

<div id="popup-slidetop-hide" class="easypopup-block easypopup" data-easypopup-in="slidetop" data-easypopup-out="slidetop">
    <h2>EasyPopup to top</h2>
    <p>It's very easy for using!</p>
</div> 

```




