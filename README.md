# Читай меня

## Описание

Настройки Firefox 38 ветки с длительным сроком поддержки ESR.

Задача настроек на этой странице - максимальная приватность (НЕ анонимность) и отключения лишнего функционала НЕ в ущерб удобству.

## Для анонимность есть
* [TorBrowser](https://www.torproject.org/index.html.en)
* А ещё лучше [Tails](https://tails.boum.org/) запущенный в [VirtualBox](https://www.virtualbox.org/wiki/Downloads) или с диска.
* [Whonix](https://www.whonix.org/)

## Файлы настроек профиля

[user.js](pref/user.js) - файл с настройками для Firefox, после его копирование в каталог профиля при запуске Firefox настройки из него будут установлены.

[userChrome.css](ui_css/userChrome.css) - стили преминяемые к элементам интерфейса Firefox. Для их преминения положите файл в каталог `profile\chrome\` и перезагрузите Firefox (если каталога нету создайте).

## Компоненты Firefox

Дополнения и функции настолько важные, что их можно выделить в отдельный пункт. Или выделенные в отдельные категории самой Mozilla.

**NOTE!** <br>
Проверку на вредоносность **проходят** только дополнения, словари, локализации, темы. То есть только то, что расположено на сайте [mozilla.org](mozilla.org). <br>
**Не проходят** проверку: стили, скрипты, bookmarklets, кнопки Custom Buttons. Их проверку нужно проводить **самостоятельно**. <br>
[userstyles.org](http://userstyles.org) не допускает стили со встроенными скриптами. (но в отличии от mozilla его репутация ниже)

#### 1. Пользовательские стили <br>
CSS стили можно применять к элементам интерфейса Firefox или к страницам сайтов. <br>
Много **готовых стилей** на http://userstyles.org <br>

**Для поиска элементов** интерфейса браузера и изменения их стиля: <br>
[DOM Inspector](https://addons.mozilla.org/en-us/firefox/addon/dom-inspector-6622/), 
[Element Inspector](https://addons.mozilla.org/en-Us/firefox/addon/element-inspector), 
[InspectorWidget](https://addons.mozilla.org/en-us/firefox/addon/inspectorwidget), 
[Stacked Inspector](https://addons.mozilla.org/en-US/firefox/addon/stacked-inspector)

**Ссылки:** <br>
[Уроки стилистики Firefox (CSS)](http://web.archive.org/web/20130928163532/https://forum.mozilla-russia.org/viewtopic.php?id=49078) <br>
[CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) - CSS реализованные в Firefox. <br>
[Mozilla CSS Extensions](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Mozilla_Extensions) - CSS специфичные для Firefox. <br>
[Using CSS flexible boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) - использования flexible способа верстки. <br>
[@keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes), [CSS Animatable](http://www.w3schools.com/cssref/css_animatable.asp) - анимация в CSS. <br>
[htmlbook.ru](http://htmlbook.ru/css) - неполный перевод о CSS на русский
###### 1.1 Дополнения для пользовательских стилей <br>
Дополнение могут предоставлять дополнительные правила для стилей.
<br>
[Stylish](https://addons.mozilla.org/en-us/firefox/addon/stylish) - позволяет менять интерфейс Firefox или любую сраницу с помощью CSS стилей. Дополнение для Stylish [Stylish-Custom](https://addons.mozilla.org/ru/firefox/addon/stylish-custom).
<br>
[User Style Manager](https://addons.mozilla.org/ru/firefox/addon/user-style-manager/)
<br>
###### 1.2 [Файлы конфигурации](http://www-archive.mozilla.org/unix/customizing.html) <br>
Существует два файла для css стилей.
<br>
[userChrome.css](http://kb.mozillazine.org/index.php?title=UserChrome.css) - для стилей интерфейса Firefox
<br>
[userContent.css](http://kb.mozillazine.org/UserContent.css) - для стилей страниц <br>
#### 2. Пользовательские скрипты <br>
Это [javascript](http://www.w3schools.com/js/) внедряемый на страницу. <br>
Например, можно изменить поведение кнопок, автоматизировать действия и т.д. <br>

**Ссылки:** <br>
[Список сайтов (репозиториев) с готовыми скриптами](http://wiki.greasespot.net/User_Script_Hosting) <br>
###### 2.1 Дополнения для пользовательских скриптов <br>
[Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey) - расширяет возможности стандартного javascript дополнительными функциями. Имеет удобный менеджер для управления скриптами. <br>
###### 2.2 Специальный конфигурационный файл mozilla.cfg <br>
Можно создать этот файл и прописать там скрит. Подробнее [тут](https://developer.mozilla.org/en-US/Firefox/Enterprise_deployment#Configuration) и [тут](https://mike.kaply.com/2012/03/16/customizing-firefox-autoconfig-files/) <br>
###### 2.3 [bookmarklets](https://support.mozilla.org/en-US/kb/bookmarklets-perform-common-web-page-tasks) <br>
Это javascript кода добавленный в закладки, он может встраиваться в страницу или запускаться по нажатию закладки. Поддерживается всеми браузерами. Для создания нужно написать код в месте, где находится ссылка. <br>
Основан на свойстве тега `a` в котором может находиться встроенный скрипт. <br>
``javascript:(function(){
	alert('Hello');
})()``
<br>
Репозиторий bookmarklets на который ссылается поддержка mozilla [marklets.com](http://marklets.com)
<br>
###### 2.4 CSS свойство [-moz-binding](https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-binding) <br>
Его можно прописать в пользовательском стиле. Через это свойство можно привязать .xml файл с кодом javascript, который исполнится. Это называется [XBL bindings](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Tutorial/Using_XBL_from_stylesheets)
```
/* css файл */
#alert-it { -moz-binding : url("somexbl.xml#alert-it"); }
```
```
/* xml файл */
<?xml version="1.0"?>
<bindings xmlns="http://www.mozilla.org/xbl">
<binding id="alert-it">
<content>
	<children />
</content>
<handlers>
	<handler event="mouseover" action="alert('Binding ok');"/>
</handlers>
</bindings>
```
```
/* Можно закодировать xml в base64 и вставить прямо в свойство */
-moz-binding: url("data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxiaW5kaW5ncyB4b...);
```
#### 3. [Themes](https://addons.mozilla.org/en-US/firefox/themes/) (ранее Personas) <br>
Легковесные темы. Хранятся в кэше браузера и при смене или очистке кэша подгружаются из интернета. <br>
#### 4. [Complete Themes](https://addons.mozilla.org/en-us/firefox/complete-themes/) (ранее просто Темы) <br>
Полноценные темы. Если темы не подходят, то смотрите в разделе версий более старые. Если цвета тем не совместимы с цветами фонов и надписей, то можно править через CSS или [Tab Mix Plus](https://addons.mozilla.org/en-us/firefox/addon/tab-mix-plus) <br>
[MicroFox for Firefox](https://addons.mozilla.org/ru/firefox/addon/microfox-for-firefox/) - компактная тема <br>
[Classic Compact](https://addons.mozilla.org/en-us/firefox/addon/classic-compact/) - ещё компактная <br>
[NASA Night Launch](https://addons.mozilla.org/en-us/firefox/addon/nasa-night-launch/) - одна из популярнейших тем
<br>
#### 5. [Custom Buttons](https://addons.mozilla.org/ru/firefox/addon/custom-buttons/)
Создание программируемых кнопок, не настолько функциональных, как дополнения, но имеющих больше прав чем пользовательские скрипты. Есть уникальные по функционалу кнопки, которым нет аналогов среди дополнений. <br>
#### 6. [Дополнения](https://addons.mozilla.org/en-US/firefox/) (или расширения) <br>
Куски кода на javascript и xml, которые встраиваются в сам Firefox. Это основное преимущество Firefox. Ими вы можете добавить практически любую функциональность или изменить внешний вид Firefox.

**Мои подборки:** <br>
* [То, что и так должно было быть в Firefox](addons/must_have.md)
* [Не обязательные, но делающие использование удобным](addons/good.md)
* [Инструменты позволяющие удобно искать, автоматизировать, просматривать и работать с другими типами данных](addons/instruments.md)
* [Для разработчика](addons/dev.md)

#### 7. [Словари проверки орфографии и дополнения для них](https://addons.mozilla.org/en-us/firefox/language-tools/) <br>
[Dictionary Switcher](https://addons.mozilla.org/en-us/firefox/addon/dictionary-switcher) <br>
[English-Russian dictionary](https://addons.mozilla.org/en-us/firefox/addon/english-russian-dict/) (совмещённый русский и английский)
<br>
#### 8. [Поисковые движки](https://addons.mozilla.org/en-US/firefox/search/?atype=4) и дополнения для них <br>
Это список поисковых систем в панеле поиска. <br>
[Моя поборка поисковых движков и сервисов](search/engines.md) <br>
[Add to Search Bar](https://addons.mozilla.org/en-us/firefox/addon/add-to-search-bar) - с его помощью можно добавить поисковые движки в список самому. <br>
и др.
<br>
#### 9. Плагины <br>
По сути отдельные программы от сторонних разработчиков. Если Firefox видит на странице содержимое обрабатываемое плагином и плагин установлен, то содержимое передаётся ему, он его обрабатывает и отображает. Также в качестве плагина могут быть кодеки. Или плагин может работать как прослойка между Firefox или другой программой (напр. плагин переводчика Lingoes). <br>

На сегодня плагины имеющие смысл:

* [Flash Player](https://www.adobe.com/ru/products/flashplayer/distribution3.html) - уже осталось очень мало сайтов, которые его используют и которым нет альтернатив. Но все же они есть.
* Встроенные кодек для видео OpenH264 Video Codec provided by Cisco Systems, Inc.
* Primetime Content Decryption Module provided by Adobe Systems, Incorporated - подгружается, необходим для воспроизведения защищенного видео в сетях вроде Netflix.
* В очень-очень редких случаях некоторые сайты не работают без Java плагина.

Всё остальное сторонние плагины можете смело отключать, если вы их ставили не специально.
<br>
#### 10. [Приложения](https://marketplace.firefox.com/) <br>
Программы на javascript + собственное API (расширяющее права и возможности javascript) от Mozilla + xml. Запускается на движке Firefox. Ничего стоящего пока там нет, можете не обращать внимание.
<br>
#### 11. [Services](https://activations.cdn.mozilla.net/en-US/) (интеграция с соц. сетями, [Social API](https://developer.mozilla.org/ru/docs/Social_API)) <br>
Некая интеграция с соц. сетями и некоторыми другими сервисами. Представляет собой белый список сайтов из которых вы можете добавить сервисы. Сами сервисы представляют собой страницы, которые вы можете открыть нажав на кнопку-самолетик в Firefox. Возможно ещё уведомления о событиях, рассылка приглашений на сервис друзьям и подобное. Ненужное излишество, которое полностью заменяется обычным входом в эти соц. сети.
<br>
#### 12. Встроенные [инструменты разработчика Firefox](https://developer.mozilla.org/ru/docs/Tools) <br>
Очень мощный инструмент (открывается из меню Firefox) с помощью которого можно искать ссылки на контент, менять стили страницы, снимать скриншот целой страницы и т.д. <br>
Часть инструментов может подгружаться и устанавливаться при их активации, как [WebIDE](https://developer.mozilla.org/ru/docs/Tools/WebIDE) для разработки приложений. <br>
А такие, как [Firefox OS Simulator](https://ftp.mozilla.org/pub/labs/fxos-simulator/) устанавливаются, как дополнения. <br>
В специальной сборке Firefox от Mozilla основанной на тестовой версии Firefox [Firefox Developer Edition](https://www.mozilla.org/ru/firefox/developer/) инструменты разработчика имеют более удобный интерфейс и возможно дополнительные возможности.
<br>
#### 13. [Профили](https://support.mozilla.org/en-US/kb/profiles-where-firefox-stores-user-data) <br>
Прифиль Firefox это каталог с разными файлами содержащими копию настроек Firefox. Там же расположен файлы кэша, настройки для различных сайтов, дополнения и вообще все файлы пользователя. Профили можно создавать, копировать, запускать (в том числе одновременно несколько). Путем копирования соответствующих файлов из профиля в профиль можно переносить настройки. Все файлы профиля описаны на страницах документации, вики и справки.
#### 14. [Локализации](https://addons.mozilla.org/en-us/firefox/language-tools/) <br>
Пакеты переводов на разные языки. Пункт появляется в меню дополнений. <br>
Для версии ESR внизу сайта есть пунки "версии", где можно подобрать подходящую. <br>
Для переключения интерфейса на другой язык нужно установить параметр: <br>
```general.useragent.locale``` = ```ru-RU``` - для русского <br>
```general.useragent.locale``` = ```en-US``` - для английского США

#### 15. [Pocket](https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox)

Будет описано.

#### 16. [Firefox Hello](https://www.mozilla.org/en-US/firefox/hello/)

Будет описано.

#### 17. [RSS и Atom ленты](https://support.mozilla.org/en-US/kb/live-bookmarks)

Будет описано.

#### 18. [Настройки Firefox](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) (about:config, prefs.js, user.js)

Будет описано.

## Файлы настроек приложения

[FirefoxPortable.ini](FirefoxPortable.ini) - файл от портативной версии Firefox, конфигурация запуска.

[channel-prefs.js](channel-prefs.js) - аналог user.js только для канала по которому идут обновления Firefox. (Установлен на esr канал.)
* release - обычный Firefox
* esr - с длительным сроком поддержки
* beta - кандидат в релиз
* aurora - тестовая перед beta
* nightly - ежедневные тестовые сборки
* default - нет обновлений

Файл должен лежать в каталоге приложения `Firefox\defaults\pref\`

## Ссылки

[LINKS.md](LINKS.md) - полезные ссылки.

