Минимальны джентльменский набор дополнений, стилей и настроек для **release** версии

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
<br>
[NoScript](https://addons.mozilla.org/ru/firefox/addon/noscript) - можно отключить видео/аудио на сайтах, что в дороге при дорогом и медленном трафике сотовых операторов сильно помогает. Скрипты конечно нужно включить, без них сегодня половина сайтов работать не будет. Если на некоторых сайтах будет тормозить отключите обнаружение XSS атак.
<br>
[ImgLikeOpera](https://addons.mozilla.org/ru/firefox/addon/imglikeopera) - можно отключить изображения, подгружать только выбранные, видеть только те, что уже загрузились ранее. Нужен в дороге при дорогом и медленном трафике сотовых операторов.
<br>
[Edit Bookmark Plus](https://addons.mozilla.org/en-US/firefox/addon/edit-bookmark-plus) - при добавлении закладок меню закладок запоминает состояние. Это избавляет от множества лишних действий.

#### Настройки

**Note!** Тут не описано отключения всяких хитрых предзагрузок данных, они остаются на совести Mozilla. Не описано и отключение функций, которое на 100% сломает не мало сайтов. Не описано отключение функций через которые сделать что-то плохое пользователю очень трудно.
* Настройки вида ```мой.параметр.подпараметр = значение``` можно найти на странице ```about:config```
* Отключить в настройках сбор телеметрии, защиту от вредоносных доменов и авто обновления.
* Отключить показ предложений при вводе в строку поиска (отправляет ваши данные во время ввода)
* В закладки Firefox компания в целях рекламы может добавить подписки RSS и Atom на новости в качестве рекламы. Проверьте их и удалите.
* Включить запрос места сохранения файла при загрузке.
* Отключить аппаратное ускорение: ```layers.acceleration.disabled = true```
* Если есть лаги или падения браузера отключить асинхронную анимацию: ```layers.offmainthreadcomposition.enabled = false```
* Если Firefox даже не запускается, то создать файл ```profile/user.js``` в кодировке ```UTF-8``` с кодом:
```
user_pref("layers.acceleration.disabled", true);
user_pref("layers.offmainthreadcomposition.enabled", false);
```
* Отключить выделение пробела за словом по двойному клику на слове: ```layout.word_select.eat_space_to_next_word = false```
* Отключить отправку хэш суммы в интернет сервисы для анализа на вредоносность ```browser.safebrowsing.downloads.enabled = false```, ```browser.safebrowsing.downloads.remote.enabled = false```
* Включить в настройках ```прокси``` DNS запросы через прокси (не в обход настроек прокси). На русском она называется "Удалённый DNS". Можно и через страницу настроек: ```network.proxy.socks_remote_dns = true```
* Отключить передачу сайтам информации о уровне заряда батареи ```dom.battery.enabled = false```
* Отключить возможность сбора сайтами информации с сенсоров устройства ```device.sensors.enabled = false```
* Отключение медленный просмотра pdf в браузере:
```pdfjs.disabled = true```,
```pdfjs.enableWebGL = false```
* Отвечает за переход к позиции на странице при клике по scroll бару (полосе прокрутки) левой кнопкой мыши. Ставим моментальный переход: ```ui.scrollToClick = 1```
* Отключить предупреждение сайтом о закрытии вкладки с важной информацией. Сообщение "Вы действительно хотите уйти с этого сайта?": ```dom.disable_beforeunload = true```
* Этот параметр отвечает за задержку перед открытием подменю. Убираем задержку:
```ui.submenuDelay = 0```
* Отключить API геолокации. Отключает геолокацию через сервисы Гугла с присвоением клиентскому компьютеру уникального идентификатора и передачей в Гугл информации о близлежащих точках доступа Wi-Fi:
```
geo.enabled = false
geo.wifi.logging.enabled = false
geo.wifi.uri = ""
geo.wifi.scan = false
geo.cell.scan = false
geo.wifi.timeToWaitBeforeSending = 630720000
```
* Отключить передачу оценок опроса Advocacy/heartbeat: ```browser.selfsupport.url = ""```
* Отключить репорты от плагинов:
```dom.ipc.plugins.flash.subprocess.crashreporter.enabled = false```, ```dom.ipc.plugins.reportCrashURL = false```
* Использовать локаль из ```general.useragent.locale```, а не установленную в ОС:
```intl.locale.matchOS = false``` (если нужно обмануть сайт представившись мобильным Firefox, то эта настройка улучшит обман)
* Чтобы не подгружалась реклама на страницу новой вкладки и не отправлялась статистика о её эффективности поставьте ей пустую страницу (иконка шестеренки в углу).
* Чтобы домашняя страница не собирала статистику поставьте в настройках домашнюю страницу: ```about:blank```
* Отключает автоматическое открытие вкладки с описанием изменений в новой версии после обновления.
```
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_override_url", "");
```
* Отключает приветственную страницу при первом запуске браузера с новым профилем.
```
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
```
* Отключает список рекомендуемых тем в Customize -> Themes. (подгружает лишние данные)
```user_pref("lightweightThemes.recommendedThemes", "");```
* Открывать попапы во вкладках вместо отдельных окон.
```user_pref("browser.link.open_newwindow.restriction", 0);```
* Запрещает попапам, скриптам отключать элементы окон браузера.
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
* Отключает угадывание доменного имени при помощи подстановки www и разных TLD.
```user_pref("browser.fixup.alternate.enabled", false);```
* Отключает сбор статистики производительности декодирования HTML5-видео (посмотреть их можно в Show Statistics контекстного меню плеера).
```user_pref("media.video_stats.enabled", false);```
* Отключает Resource Timing API (получение информации о том, с какой скоростью обрабатываются элементы сайта).
```user_pref("dom.enable_resource_timing", false);```
* Отключает передачу браузером информации о времени начала и окончания загрузки страницы.
```user_pref("dom.enable_performance", false);```
* Отключает появляющееся раз в 6 месяцев окно с предложением оставить отзыв о работе Hello.
```
user_pref("loop.feedback.dateLastSeenSec", 1446595200); // 2015-11-04, 00:00 UTC
user_pref("loop.feedback.periodSec", 630720000); // 20 лет
user_pref("loop.feedback.formURL", "");
```
* Отключает автообновление встроенного кодека. Хорошо бы иногда его включать, чтобы обновить. На выбор. (Можно менять в настройках плагинов)
```
user_pref("media.gmp-gmpopenh264.autoupdate", false);
```
* Запрещает сайтам обращение к локальной машине, что позволило бы им анализировать список открытых портов. Подсмотрено у разработчиков Tor (https://trac.torproject.org/projects/tor/ticket/10686).
Возможны проблемы при обращении на адреса типа http://127.0.0.1:631, используемые для конфигурации принтеров через CUPS и прочих устройств:
```
user_pref("network.proxy.no_proxies_on", "");
```
* Отключает автоматическое копирование выделенного текста в буфер обмена (только для Linux-билдов).
```user_pref("clipboard.autocopy", false);```
* Не устанавливайте темы, они кривые, а легковесные могут и обновление проверять.
* Установить через дополнение ```Classic Theme Restorer``` иначе названий поисковиков в панели поиска не будет и вам придется запоминать иконки.
* Отключает показ AMO при входе в Add-ons Manager на вкладку Get Add-ons, лучше устанавливайте дополнения через сайт https://addons.mozilla.org/en-US/firefox/ (подгружает лишние данные) <br>
```user_pref("extensions.webservice.discoverURL", "");```

#### Управление

**Обратите внимание на эту подборку!** Некоторые сочетания клавиш заменяют дополнения! <br>
**Note!** Некоторые дополнения могут блокировать или менять стандартные сочетания клавиш.

* Выделять куски ссылок или элементов которые перетаскиваются можно с зажатым ```alt``` (не работает если копирование блокировано скриптами или на блок с текстом наложен сверху прозрачный блок)
* Вызвать блокированное меню по правой кнопке мыши можно с зажатым ```shift```
* Сохранить страницу в виде изображения можно поставив галочку в настройках панели разработчика. (```ctrl``` + ```shift``` + ```I```)
* Вызвать скрытую панель меню можно нажав ```alt```
* Чтобы клонировать вкладку протащите её с зажатым ```ctrl```
* Чтобы обновить вкладку нажмите ```F5```
* Каретка на любом содержимом сайта включается и выключается по ```F7``` (не работает если копирование блокировано скриптами или на блок с текстом наложен сверху прозрачный блок)
* Чтобы открыть адрес или результаты поиска в новой вкладке нажмите ```alt``` + ```enter```
* Чтобы открыть новую вкладку зажмите ```ctrl``` и кликните по ссылке, работает и на закладках
* Если значка для управления установленным дополнением не видно ни в панели значков, ни на открытых панелях, то проверьте скрытые панели (откройте их). Панели можно открыть/закрыть кликнув правой кнопкой мыши по любой панели (не текстовому полю или значку)
* Закрыть вкладку можно средней кнопкой мыши
* Если в Firefox сохранено несколько паролей, то кликнув 2 раза по текстовой строке для ввода логина можно выбрать любой из них
* Выбрать в каком каталоге сохранится закладка можно 2 раза кликнув по звездочке. Либо нажав ```ctrl``` + ```D```
* Кликнув правой кнопкой мыши по стрелкам вперед/назад можно сразу перейти на любую страницу из истории переходов
* Нажав ```ctrl``` + ```F``` можно открыть панель поиска по странице
* Найти ссылку на любое проигрываемое видео/аудио можно через раздел "Сеть" в панели разработчика: ```ctrl``` + ```shift``` + ```I```
* Старайтесь не набирать важный текст в текстовых полях, используйте блокнот, а затем копируйте текст
* Выделять таблицы можно с зажатым ```ctrl``` + ```Правая Клавиша Мыши```