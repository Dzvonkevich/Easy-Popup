# EasyPopup Plugin #

Данный плагин способен упростить процесс создания попапов, ведь для вывода модального окна, тебе больше не понадобиться писать скрипты и стили. В коробке лежит каскадная одёжка в популярном Material Design. Смотри [DEMO](http://plugins.etrange.eu/easypopup/demo.html) и убедить в этом сам!

![easypopup plugin gif](http://plugins.etrange.eu/easypopup/test-easypopup.gif)

## Как подключить ##

* Прежде всего подключи библиотеку jQuery, затем JS-файл плагина. 
Важно! Скрипты подключай перед закрывающим тегом BODY

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.9/angular.min.js"></script>
<script type="text/javascript" src="js/easypopups.min.js"></script>

</body>
</html>
```

* Подключаем каскадные таблицы перед закрывающим тегом HEAD

```
<link rel="stylesheet" href="css/easypopups.css"/> <!-- Обязательно -->
<link rel="stylesheet" href="css/easypopups-styles.css"/> <!-- Необязательно. Стили для оформления -->
```

* Создай анкор или тег button. Для анкора качестве атрибута href укажи #popup-xxx, а для тега button - создай атрибут data-easypopup-href со значением popup-xxx. Обрати внимание, что xxx - любое слово латиницей

* Затем присвой модальному окну ID с атрибутом popup-xxx (то же значение, что и в анкоре или button, но без решётки).

```
<a href="#popup-default">Button</a>
<!-- или -->
<button data-easypopup-href="popup-default">Button</button>

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
<!-- или -->
<button data-easypopup-href="popup-default">Button</button>

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

## Стилизация ##

Если по каким либо причинам тебе не подходит коробочное решение дизайна (может не нравиться или в дизайн сайта не вписывается), тогда ты можешь в ручную стилизировать плагин, без добавления своих классов. Плагин генерирует следующие классы:

* <b>.easypopup-block</b> - вид модального окна. Ему задавай ширину, пэддинги, фон, тень и прочее;
* <b>.easypopup-close</b> - крестик в верхнем правом углу;
* <b>.easypopup-black</b> - затемнённый фон.
* <b>.easypopup-hide</b> - данный класс ты можешь добавить в ручную, если хочешь закрывать окно кнопкой из этого же окна. 

## Поддержка браузерами ##

Все популятные браузеры. На IE даже не пробовал.




