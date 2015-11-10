Минимальны джентльменский набор дополнений, стилей и настроек

#### Дополнения

[FindBar Tweak](https://addons.mozilla.org/ru/firefox/addon/findbar-tweak) - удобный поиск по странице с отметками найденного на полосе прокрутки.
<br>
[Add to Search Bar](https://addons.mozilla.org/RU/firefox/addon/add-to-search-bar) - добавления любой строки в панель поиска.
<br>
[Advanced Locationbar](https://addons.mozilla.org/ru/firefox/addon/advanced-locationbar) - быстрый переход по частям ссылки в адресной строке. Удобно для перехода на главную страниц.
<br>
[Classic Theme Restorer](https://addons.mozilla.org/ru/firefox/addon/classicthemerestorer) - настройка оформления. Можно уменьшить панели и кнопки.
<br>
[Muter](https://addons.mozilla.org/Ru/firefox/addon/muter) - выключение звука от браузера. Нужно только, если в системе нету микшера звука.
<br>
[Resurrect Pages](https://addons.mozilla.org/ru/firefox/addon/resurrect-pages) - можно быстро получить ссылки на страницу в веб архиве и кэше поисковиков.
<br>
[Tab Mix Plus](https://addons.mozilla.org/ru/firefox/addon/tab-mix-plus) - управление поведением вкладок. Можно установить принудительный одноконный режим (всё только во вкладках).
<br>
[Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab) - вкладки вертикально в виде дерева.
<br>
[TryAgain](https://addons.mozilla.org/ru/firefox/addon/tryagain) - если страница недоступна пытается грузить её снова. Ссылки на сервисы через которые можно проверить не доступна страница только у вас или у всех.
<br>
[uBlock Origin](https://addons.mozilla.org/ru/firefox/addon/ublock-origin) - блокировка рекламы и сбора статистики.
<br>
[UnMHT](https://addons.mozilla.org/ru/firefox/addon/unmht) - сохранение страницы одним файлом в формате .mht. Сохраняются и скрипты. На выбор: можно отключить диалоги во время сохранения.
<br>
[FoxyProxy Standard](https://addons.mozilla.org/ru/firefox/addon/foxyproxy-standard) - быстрое и удобное управление прокси.
<br>
[ContextMenuPlus](https://addons.mozilla.org/ru/firefox/addon/contextmenuplus) - копирование текста без форматирования, копирования имени ссылки и др.
<br>
[ExportHTMLFolder](https://addons.mozilla.org/RU/firefox/addon/exporthtmlfolder) - экспорт отдельных каталогов закладок.
<br>
[FlashGot Mass Downloader](https://addons.mozilla.org/ru/firefox/addon/flashgot) - выбор стороннего менеджера загрузки файлов. Поиск ссылок на видео.
<br>
[Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey) - менеджер пользовательских скриптов javascript.
<br>
[NoSquint](https://addons.mozilla.org/ru/firefox/addon/nosquint) - удобное управление масштабом страницы и отдельно масштаба текста.
<br>
[User Agent Overrider](https://addons.mozilla.org/ru/firefox/addon/user-agent-overrider) - можно претворяться мобильной версией Firefox чтобы смотреть видео на некоторых сайтах без Flash Player.

#### Стили

1. Создать файл ```profile\chrome\userChrome.css``` в кодировке ```UTF-8```
2. Скопировать туда код и перезапустить браузер:

```
@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);
/* Tree Style Tab Tabs Color busy/unload/(un)read/selected */
/* Change of normal tabs */
.tabbrowser-tab,
.tabbrowser-tab *
{
   color: black !important;
   font-weight: 900 !important;
   text-shadow: 1px 1px 2px white, 0 0 1em white !important;
}
/* Change of pending (unload) tabs */
.tabbrowser-tab[pending="true"],
.tabbrowser-tab[pending="true"] *
{
   color: #88C3F7 !important;
   font-weight: 900 !important;
   text-shadow: 1px 1px 1px black, 0 0 1em white !important;
}
/* Change of unread tabs */
.tabbrowser-tab[unread="true"],
.tabbrowser-tab[unread="true"] *
{
   color: #FF8CB4 !important;
   font-weight: 900 !important;
   text-shadow: 1px 1px 2px black, 0 0 1em white !important;
}
/* Change of active tab */
.tabbrowser-tab[selected="true"],
.tabbrowser-tab[selected="true"] *
{
   color: white !important;
   font-weight: 900 !important;
   text-shadow: 0px 0px 0px white, 0 0 1em white !important;
}
/* Change of loading/reloading tab */
.tabbrowser-tab[busy],
.tabbrowser-tab[busy] *
{
   color: #F4F14B !important;
   font-weight: 900 !important;
   text-shadow: 1px 1px 2px black, 0 0 1em white !important;
}
/* Search and address bar text size */
.urlbar-input-box,
.searchbar-textbox,
#MMSearchTBTextbox
{
  font-size: 14.5px !important;
}

/* Hide useless certificate information */
#identity-icon-label,
#identity-icon-country-label {
  display:none !important;
}
```

#### Настройки

0. Настройки вида ```мой.параметр.подпараметр = значение``` можно найти на странице ```about:config```
1. Отключить в настройках сбор телеметрии, защиту от вредоносных доменов и авто обновления.
2. Включить запрос места сохранения файла при загрузке.
3. Отключить аппаратное ускорение: ```layers.acceleration.disabled = false```
4. Если есть лаги или падения браузера отключить асинхронную анимацию: ```layers.offmainthreadcomposition.enabled = false```
5. Если Firefox даже не запускается, то создать файл ```profile/user.js``` в кодировке ```UTF-8``` с кодом:
```
user_pref("layers.acceleration.disabled", false);
user_pref("layers.offmainthreadcomposition.enabled", false);
```
6. Отключить выделение пробела за словом по двойному клику на слове: ```layout.word_select.eat_space_to_next_word = false```
7. Отключить отправку хэш суммы в интернет сервисы для анализа на вредоносность ```browser.safebrowsing.downloads.enabled = false```
8. Включить в настройках ```прокси``` DNS запросы через прокси (не в обход настроек прокси). На русском она называется "Удалённый DNS". Можно и через страницу настроек: ```network.proxy.socks_remote_dns```
9. Отключить передачу сайтам информации о уровне заряда батареи ```dom.battery.enabled = false```
10. Отключить возможность сбора сайтами информации с сенсоров устройства ```device.sensors.enabled = false```
11. Отключение медленный просмотра pdf в браузере:
```pdfjs.disabled = true```,
```pdfjs.enableWebGL = false```
12. Отвечает за переход к позиции на странице при клике по scroll бару (полосе прокрутки) левой кнопкой мыши. Ставим моментальный переход: ```ui.scrollToClick = 1```
13. Отключить предупреждение сайтом о закрытии вкладки с важной информацией. Сообщение "Вы действительно хотите уйти с этого сайта?": ```dom.disable_beforeunload = true```
14. Этот параметр отвечает за задержку перед открытием подменю. Убираем задержку:
```ui.submenuDelay = 0```
15. Отключить API геолокации. Отключает геолокацию через сервисы Гугла с присвоением клиентскому компьютеру уникального идентификатора и передачей в Гугл информации о близлежащих точках доступа Wi-Fi:
```
geo.enabled = false
geo.wifi.logging.enabled = false
geo.wifi.uri = ""
geo.wifi.scan = false
geo.cell.scan = false
geo.wifi.timeToWaitBeforeSending = 630720000
```
16. Отключить передачу оценок опроса Advocacy/heartbeat: ```browser.selfsupport.url = ""```
17. Отключить репорты от плагинов:
```dom.ipc.plugins.flash.subprocess.crashreporter.enabled = false```
18. Использовать локаль из ```general.useragent.locale```, а не установленную в ОС:
```intl.locale.matchOS = false``` (если нужно обмануть сайт представившись мбильным Firefox, то эта настройка улучшит обман)

#### Управление

1. Выделять куски ссылок или элементов которые перетаскиваются можно с зажатым ```alt```
2. Вызвать блокированное меню по правой кнопке мыши можно с зажатым ```shift```
3. Сохранить страницу в виде изображения можно через настройки панели разработчика.
4. Вызвать скрутую панель меню можно нажав ```alt```
