Минимальны джентльменский набор дополнений, стилей и настроек

#### Дополнения

[FindBar Tweak](https://addons.mozilla.org/ru/firefox/addon/findbar-tweak) - удобный поиск по странице с отметками найденного на полосе прокрутки.
<br>
[Add to Search Bar](https://addons.mozilla.org/RU/firefox/addon/add-to-search-bar) - добавления любой строки в панель поиска.
<br>
[Advanced Locationbar](https://addons.mozilla.org/ru/firefox/addon/advanced-locationbar) - быстрый переход по частям ссылки в адресной строке. Удобно для перехода на главную страницу.
<br>
[Classic Theme Restorer](https://addons.mozilla.org/ru/firefox/addon/classicthemerestorer) - настройка оформления. Можно уменьшить панели и кнопки.
<br>
[Muter](https://addons.mozilla.org/Ru/firefox/addon/muter) - выключение звука от браузера. Нужно только, если в системе нету микшера звука.
<br>
[Resurrect Pages](https://addons.mozilla.org/ru/firefox/addon/resurrect-pages) - можно быстро получить ссылки на страницу в веб архиве и кэше поисковиков.
<br>
[Tab Mix Plus](https://addons.mozilla.org/ru/firefox/addon/tab-mix-plus) - управление поведением вкладок. Можно установить принудительный одноконный режим (всё только во вкладках). Функция перезагрузки вкладки по таймеру, переименование вкладок, горячие клавиши, множество функций.
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
[ContextMenuPlus](https://addons.mozilla.org/ru/firefox/addon/contextmenuplus) - копирование текста без форматирования, имени ссылки и др.
<br>
[ExportHTMLFolder](https://addons.mozilla.org/RU/firefox/addon/exporthtmlfolder) - экспорт отдельных каталогов закладок.
<br>
[FlashGot Mass Downloader](https://addons.mozilla.org/ru/firefox/addon/flashgot) - выбор стороннего менеджера загрузки файлов. Поиск ссылок на видео.
<br>
[Greasemonkey](https://addons.mozilla.org/ru/firefox/addon/greasemonkey) - менеджер пользовательских скриптов javascript.
<br>
[NoSquint](https://addons.mozilla.org/ru/firefox/addon/nosquint) - удобное управление масштабом страницы и отдельно масштабом текста.
<br>
[User Agent Overrider](https://addons.mozilla.org/ru/firefox/addon/user-agent-overrider) - можно притворяться мобильной версией Firefox чтобы смотреть видео на некоторых сайтах без Flash Player.

#### Стили

1. Создать файл ```profile\chrome\userChrome.css``` в кодировке ```UTF-8```
2. Скопировать туда код и перезапустить браузер:

```
@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);
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
7. Отключить отправку хэш суммы в интернет сервисы для анализа на вредоносность ```browser.safebrowsing.downloads.enabled = false```, ```browser.safebrowsing.downloads.remote.enabled = false```
8. Включить в настройках ```прокси``` DNS запросы через прокси (не в обход настроек прокси). На русском она называется "Удалённый DNS". Можно и через страницу настроек: ```network.proxy.socks_remote_dns = true```
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
```dom.ipc.plugins.flash.subprocess.crashreporter.enabled = false```, ```dom.ipc.plugins.reportCrashURL = false```
18. Использовать локаль из ```general.useragent.locale```, а не установленную в ОС:
```intl.locale.matchOS = false``` (если нужно обмануть сайт представившись мобильным Firefox, то эта настройка улучшит обман)
19. Чтобы не подгружалась реклама на страницу новой вкладки и не отправлялась статистика о её эффективности поставьте ей пустую страницу (иконка шестеренки в углу).
20. Чтобы домашняя страница не собирала статистику поставьте в настройках домашнюю страницу: ```about:blank```
21. Отключает автоматическое открытие вкладки с описанием изменений в новой версии после обновления.
```
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_override_url", "");
```
22. Отключает приветственную страницу при первом запуске браузера с новым профилем.
```
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
```
23. Отключает список рекомендуемых тем в Customize -> Themes.
```user_pref("lightweightThemes.recommendedThemes", "");```
24. Открывать попапы во вкладках вместо отдельных окон.
```user_pref("browser.link.open_newwindow.restriction", 0);```
25. Запрещает попапам, скриптам отключать элементы окон браузера.
```
user_pref("dom.allow_scripts_to_close_windows", false);
user_pref("dom.disable_window_move_resize", true);
user_pref("dom.disable_window_flip", true);
user_pref("dom.disable_window_status_change", true);
user_pref("dom.disable_window_open_feature.close", true);
user_pref("dom.disable_window_open_feature.location", true);
user_pref("dom.disable_window_open_feature.menubar", true);
user_pref("dom.disable_window_open_feature.minimizable", true);
user_pref("dom.disable_window_open_feature.personalbar", true);
user_pref("dom.disable_window_open_feature.resizable", true);
user_pref("dom.disable_window_open_feature.scrollbars", true);
user_pref("dom.disable_window_open_feature.status", true);
user_pref("dom.disable_window_open_feature.titlebar", true);
user_pref("dom.disable_window_open_feature.toolbar", true);
```
26. Отключает угадывание доменного имени при помощи подстановки www и разных TLD.
```user_pref("browser.fixup.alternate.enabled", false);```
27. Отключает сбор статистики производительности декодирования HTML5-видео (посмотреть их можно в Show Statistics контекстного меню плеера).
```user_pref("media.video_stats.enabled", false);```
28. Отключает Resource Timing API (получение информации о том, с какой скоростью обрабатываются элементы сайта).
```user_pref("dom.enable_resource_timing", false);```
29. Отключает передачу браузером информации о времени начала и окончания загрузки страницы.
```user_pref("dom.enable_performance", false);```
30. Отключает появляющееся раз в 6 месяцев окно с предложением оставить отзыв о работе Hello.
```
user_pref("loop.feedback.dateLastSeenSec", 1446595200); // 2015-11-04, 00:00 UTC
user_pref("loop.feedback.periodSec", 630720000); // 20 лет
user_pref("loop.feedback.formURL", "");
```
31. Отключает автообновление встроенного кодека. Хорошо бы иногда его включать, чтобы обновить. На выбор. (Можно менять в настройках плагинов)
```
user_pref("media.gmp-gmpopenh264.autoupdate", false);
```
32. Запрещает сайтам обращение к локальной машине, что позволило бы им анализировать список открытых портов. Подсмотрено у разработчиков Tor (https://trac.torproject.org/projects/tor/ticket/10686).
Возможны проблемы при обращении на адреса типа http://127.0.0.1:631, используемые для конфигурации принтеров через CUPS и прочих устройств:
```
user_pref("network.proxy.no_proxies_on", "");
```
33. Отключает автоматическое копирование выделенного текста в буфер обмена (только для Linux-билдов).
```user_pref("clipboard.autocopy", false);```
34. Не устанавливайте темы, они кривые, а легковесные могут и обновление проверять.
35. Установить ```browser.search.showOneOffButtons = false``` иначе названий поисковиков в панели поиска не будет и вам придется запоминать иконки.
36. Отключает показ AMO при входе в Add-ons Manager на вкладку Get Add-ons, лучше устанавливайте дополнения через сайт https://addons.mozilla.org/en-US/firefox/ <br>
```user_pref("extensions.webservice.discoverURL", "");```

#### Управление

**Note!** Некоторые дополнения могут блокировать или менять стандартные сочетания клавиш.

1. Выделять куски ссылок или элементов которые перетаскиваются можно с зажатым ```alt``` (не работает если копирование блокировано скриптами или на блок с текстом наложен сверху прозрачный блок)
2. Вызвать блокированное меню по правой кнопке мыши можно с зажатым ```shift```
3. Сохранить страницу в виде изображения можно поставив галочку в настройках панели разработчика. (```ctrl``` + ```shift``` + ```I```)
4. Вызвать скрытую панель меню можно нажав ```alt```
5. Чтобы клонировать вкладку протащите её с зажатым ```ctrl```
6. Чтобы обновить вкладку нажмите ```F5```
7. Каретка на любом содержимом сайта включается и выключается по ```F7``` (не работает если копирование блокировано скриптами или на блок с текстом наложен сверху прозрачный блок)
8. Чтобы открыть адрес или результаты поиска в новой вкладке нажмите ```alt``` + ```enter```
9. Чтобы открыть новую вкладку зажмите ```ctrl``` и кликните по ссылке, работает и на закладках
10. Если значка для управления установленным дополнением не видно ни в панели значков, ни на открытых панелях, то проверьте скрытые панели (откройте их). Панели можно открыть/закрыть кликнув правой кнопкой мыши по любой панели (не текстовому полю или значку)
11. Закрыть вкладку можно средней кнопкой мыши
12. Если в Firefox сохранено несколько паролей, то кликнув 2 раза по текстовой строке можно выбрать любой из них
13. Выбрать в каком каталоге сохранится закладка можно 2 раза кликнув по звездочке
14. Кликнув правой кнопкой мыши по стрелкам вперед/назад можно сразу перейти на любую страницу из истории переходов
15. Нажав ```ctrl``` + ```F``` можно открыть панель поиска по странице
16. Найти ссылку на любое проигрываемое видео/аудио можно через раздел "Сеть" в панели разработчика: ```ctrl``` + ```shift``` + ```I```
17. Старайтесь не набирать важный текст в текстовых полях, используйте блокнот, а затем копируйте текст