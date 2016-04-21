# EasyPopup Plugin #

Данный плагин способен упростить процесс создания попапов, ведь для вывода модального окна, тебе больше не понадобиться писать скрипты и стили. В коробке лежит каскадная одёжка в популярном Material Design. Смотри [DEMO](http://plugins.etrange.eu/easypopup/demo.html) и убедить в этом сам!

![easypopup plugin gif](https://github.com/Dzvonkevich/Easy-Popup/blob/master/test-easypopup.gif)

## Как подключить ##

1. Прежде всего подключи библиотеку jQuery, затем JS-файл плагина. 
Важно! Скрипты подключай перед закрывающим тегом BODY

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script type="text/javascript" src="js/easypopups.min.js"></script>

</body>
</html>
```

2. Подключаем каскадные таблицы перед закрывающим тегом HEAD

```
<link rel="stylesheet" href="css/easypopups.css"/> <!-- Обязательно -->
<link rel="stylesheet" href="css/easypopups-styles.css"/> <!-- Необязательно. Стили для оформления -->
```

3. Создай анкор. В качестве атрибута href укажи #popup-xxx, где xxx - любое слово латиницей. Затем создай блок, которой будет попапом и присвой ему ID с атрибутом popup-xxx (то же значение, что и в анкоре, но без решётки). 

```
<a href="#popup-default">Button</a>

<div id="popup-default">
    <h2>EasyPopup</h2>
    <p>It's very easy for using!</p>
</div>
```

Итак, что получилось:

```
<!doctype html>
<html>
<head>
    <title>EasyPopup Demo</title>
    <link rel="stylesheet" href="css/easypopups.css"/>
    <link rel="stylesheet" href="css/easypopups-styles.css"/>
</head>
<body>

<a href="#popup-default">Button</a>

<div id="popup-default">
    <h2>EasyPopup</h2>
    <p>It's very easy for using!</p>
</div>   

<script type="text/javascript" src="js/vendor/jquery.js"></script>
<script type="text/javascript" src="js/easypopups.min.js"></script>
</body>
</html>

```

## Визуальные эффекты ##

Для того, чтобы добавить эффекты нужно прописать в тег твоего попапа следующие параметры: data-easypopup-in="название-эффекта" и data-easypopup-out="название-эффекта". Список эффектов, которые можно использовать:

* slidein/slideout - стоят по умолчанию, для появления и исчезновения;
* slideleft;
* slideright;
* slidetop;
* slidebottom;

```

<div id="popup-xxx" data-easypopup-in="slidetop" data-easypopup-out="slidetop">
    <h2>EasyPopup to top</h2>
    <p>It's very easy for using!</p>
</div> 

```
Протестировать можно [здесь](http://plugins.etrange.eu/easypopup/demo.html).

## Пошаговое появление попапов ##

С EasyPopup можно создать полноценный диалог с пользователем. Достаточно лишь в попапе создать анкор, которы будет ссылаться на нужный тебе попап. Протестировать можно [по этой ссылке](http://plugins.etrange.eu/easypopup/demo.html).

## Поддержка браузерами ##

Все популятные браузеры. На IE даже не пробовал.




