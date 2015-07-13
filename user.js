//############### >> Опции для Firefox 38 ESR << ################

/*
 * Закомментированные опции мало вожны для приватности (не анонимности)
 * или сильно ломают нормальную работу сайтов или функций
 *
 * некоторые устаревшие настройки тут есть, так как иногда они
 * оказываются рабочими хотя не должны
*/

//******************************************************************************
//******************************** Связано с медиа

/*
 * Отключить проприетарный модуль для просмотра защищенного видео (EME)
 * Должно быть достаточно первой опции, но на случай всякий отключаем все.
 *
 * перестанут работать проприетарные сервисы продажи защищенного видео
 */
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
user_pref("media.eme.apiVisible", false);
user_pref("media.gmp-eme-adobe.enabled", false);

/*
 * Ждать пока пользователь не нажмёт кнопку "играть" для html5 video
 * Для ВСТРОЕННОГО плеера.
 */
user_pref("media.autoplay.enabled", false);

/*
 * Отключить передачу сайтам информации о статистике
 * воспроизведения видео (кол-во пропущенных/отрендеренных кадров, etc).
 */
user_pref("media.video_stats.enabled", false);

/*
 * Отключить функции WebRTC и PeerConnection. Она позволяет определить IP за NAT.
 * После отключения не будет работать видеосвязь.
 */
//user_pref("media.peerconnection.enabled", false);

//******************************************************************************
//******************************** Неявный сбор статистики и утечки данных

/*
 * Использовать локаль из general.useragent.locale, а не установленную в ОС.
 */
user_pref("intl.locale.matchOS", false);

/*
 * Принимать куки только с посещаемого сайта.
 * (не принимать от других, 3-их сторон)
 * Могут быть проблемы с некоторыми сайтами, но очень редко.
 */
user_pref("network.cookie.cookieBehavior", 1);

/*
 * Посылать DNS запросы для соединений через прокси socks
 * через это же прокси, а не в обход.
 */
user_pref("network.proxy.socks_remote_dns", true);

/*
 * Отключение предзагрузки ресурсов.
 */
user_pref("network.prefetch-next", false);

/*
 * Отключение предзагрузки dns ресурсов.
 */
user_pref("network.dns.disablePrefetch", true);

/*
 * Отключаем ещё один вид предзагрузки "прогрев соединения".
 */
user_pref("network.http.speculative-parallel-limit", 0);

/*
 * Отключить неприватный SPDY.
 */
user_pref("network.http.spdy.enabled", false);

/*
 * Отключить отслеживание и запоминание запросов
 * на загрузку при посещении страницы. Тоже вид предзагрузки.
 */
user_pref("network.predictor.enabled", false);

/*
 * Отключает передачу браузером информации о времени начала и окончания загрузки страницы.
 * Анализ этих данных позволяет определить факт использования прокси-сервера.
 *
 * если отключено
 * некоторые сайты будут отображаться лишь частично, то есть прекратится догрузка
 * превьюшек например к видео на странице
 * или вовсе прекратится подгрузка бесконечной страницы.
 */
//user_pref("dom.enable_performance", false);

//******************************************************************************
//******************************** Отключение официального сбора данных


/*
 * Отключить функцию. Отправлять сайтам заголовок "не следить за мной"
 * некоторые сайты его игнорируют, ускоряет загрузку
 * страниц, уменьшает трафик.
 * Список возможно подгружается?
 */
user_pref("privacy.donottrackheader.enabled", false);

/*
 * Отключить репорты от плагинов.
 */
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

/*
 * Отключить передачу оценок опроса Advocacy/heartbeat.
 */
user_pref("browser.selfsupport.url", "");

/*
 * Отключить отправку сведений о загружаемых файлах в google для выявления вредоносных файлов.
 */
user_pref("browser.safebrowsing.downloads.enabled", false);

/*
 * Отключение функции Safe Browsing (от Mozilla)
 * не скачивать чёрный список и не использовать его для проверки загрузок.
 */
user_pref("browser.safebrowsing.malware.enabled", false);

/*
 * Отключить защиту от фишинга.
 * Не скачивать чёрный список и не использовать его для проверки загрузок.
 */
user_pref("browser.safebrowsing.enabled", false);

/*
 * Отключение сбора телеметрии.
 */
user_pref("toolkit.telemetry.enabled", false);

/*
 * Отключение отправки состояния браузера healthreport.
 */
user_pref("datareporting.healthreport.uploadEnabled", false);

/*
 * Отключить healthreport.
 */
user_pref("datareporting.healthreport.service.enabled", false);

//******************************************************************************
//******************************** API

/*
 * Отключить API вибромотора.
 */
user_pref("dom.vibrator.enabled", false);

/*
 * Отключить API геолокации.
 */
user_pref("geo.enabled", false);

/*
 * Отключить API сенсоров.
 * Возможность сбора через браузер информации с сенсоров устройства.
 */
user_pref("device.sensors.enabled", false);

/*
 * Отключить API батареи.
 * Сайт может получить уровень заряда батареи устройства.
 */
user_pref("dom.battery.enabled", false);

/*
 * Отключает Gampad API.
 * По информации о контроллере и кодам необычных клавишь можно составить отпечаток.
 */
user_pref("dom.gamepad.enabled", false);

//******************************************************************************
//******************************** Опасное для приватности поведение интерфейса Firefox
//** Например, вызывающие подгрузку данных из сети или искажение данных

/*
 * Отключить возможность отслеживания статей и видео при помощи сервиса Pocket.
 * pocket в ESR версии 38 нету, но на всякий случай.
 */
user_pref("browser.pocket.enabled", false);

/*
 * Отключить поисковые предложения для незавершенных запросов.
 */
user_pref("browser.search.suggest.enabled", false);

/*
 * Отключить блокирования трекинга (список для него подгружается).
 */
user_pref("privacy.trackingprotection.enabled", false);
user_pref("browser.trackingprotection.updateURL", "");
user_pref("browser.trackingprotection.gethashURL", "");

/*
 * Отключить автообновление.
 */
user_pref("app.update.enabled", false);

/*
 * Отключить автообновление списка поисковиков.
 */
user_pref("browser.search.update", false);

/*
 * Отключить "тихое" (без предупреждение) автообновление.
 */
user_pref("app.update.silent", false);

/*
 * Отключить показ всплывающих уведомлений с предложением перевести страницу.
 * Перевод осуществляется через сервис Microsoft Translator.
 * По умолчанию отключено.
 */
user_pref("browser.translation.ui.show", false);
user_pref("browser.translation.detectLanguage", true);

/*
 * Отключаем авто очистку скачанных файлов, если антивирус нашёл в нём вирус.
 * Возможно настройка устарела.
 */
user_pref("browser.download.antivirus.dontclean", true);

/*
 * Игнорировать значения «off» атрибута «autocomplete»
 * у текстовых полей форм (<input type=«text» autocomplete=«off»>).
 */
user_pref("signon.overrideAutocomplete", true);

/*
 * Отключить показ информации о найденных обновлениях для дополнений
 * при старте браузера.
 * (возможно устарела)
 */
user_pref("extensions.update.notifyUser", false);

/*
 * Блокировать все всплывающие окна вызываемые плагинами.
 * Например при установленной настройке "Кликнуть для воспроизведения"
 * на сайтах, где используется плагин выскакивает сообщение:
 * 	"Разрешить для www.example.com to запуск плагина adobe flash?"
 */
user_pref("privacy.popups.disable_from_plugins", 3);

/*
 * Отключить показ всплывающего предупреждение об отсутствии требуемого
 * для элементов страницы плагина.
 * Возможно устарело.
 */
user_pref("plugin.default_plugin_disabled", true);

/*
 * Отключить уведомления пользователя об обновлениях плагинов.
 */
user_pref("plugins.update.notifyUser", false);

/*
 * Отключить создание скриншотов диалов на диске (файлов).
 */
user_pref("browser.pagethumbnails.capturing_disabled", true);

/*
 * Отключить "Информационное сообщение про сайт about:newtab".
 */
user_pref("browser.newtabpage.introShown", false);

/*
 * Отключить перехват событий копирование через контекстное меню
 * и замену копируемого текста сайтом или его изменение.
 */
user_pref("dom.event.clipboardevents.enabled", false);

/*
 * Отключаем подгрузку данных в галерею дополнений.
 */
user_pref("extensions.getAddons.cache.enabled", false);

/*
 * Отключаем загрузку информации о изменениях в Firefox при обновлении.
 */
user_pref("browser.startup.homepage_override.mstone", "ignore");

/*
 * Удаляем адрес по которому подгружаются данные на домашнюю страничку.
 */
user_pref("browser.aboutHomeSnippets.updateUrl", "");

/*
 * Отключаем интеграцию с соц. сетями.
 */
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.toast-notifications.enabled", false);

/*
 * Воспроизводить медиа через плагины только по клику на содержимое.
 */
user_pref("plugins.click_to_play", true);

/*
 * Устанавливаем стартовую страницу пустой.
 */
user_pref("browser.startup.homepage", "about:blank");

/*
 * Отключаем автоматическое копирование выделенного текста.
 */
user_pref("clipboard.autocopy", false);

/*
 * Отключить поиск из адресной строки.
 */
user_pref("keyword.enabled", false);

/*
 * Отключает сообщение о устаревших плагинах:
 * "Некоторые плагины, используемые на этой странице устарели" (или подобное).
 */
user_pref("plugins.hide_infobar_for_outdated_plugin", true);

/*
 * Перед обновлением дополнений Firefox будет спрашивать у пользователя разрешения.
 */
user_pref("extensions.update.autoUpdateDefault", false);

/*
 * Отключить знакомство с новинками.
 */
user_pref("browser.uitour.enabled", false);

/*
 * Отключить диалы (как кнопка вверху справа).
 */
user_pref("browser.newtabpage.enabled", false);

/*
 * Не спрашивать о импорте информации из других браузеров при создании нового профиля.
 */
user_pref("profile.confirm_automigration", false);

/*
 * Отключить автоматический поиск обновлений дополнений.
 */
user_pref("extensions.update.enabled", false);

/*
 * Отключение просмотра pdf в браузере.
 */
user_pref("pdfjs.disabled", true);

/*
 * Устанавливаем размер кэша в 0.
 * К тому же это защищает от составления отпечатка ETag
 */
user_pref("browser.cache.disk.capacity", 0);

//******************************************************************************
//******************************** Поведение интерфейса Firefox

/*
 * Включаем показ префикса http:// в адресной строке.
 */
user_pref("browser.urlbar.trimURLs", false);

/*
 * Отключить предупреждение при открытии вкладок.
 */
user_pref("browser.tabs.warnOnOpen", false);

/*
 * Отключить предупреждение при выходе из браузера.
 */
user_pref("browser.warnOnQuit", false);

/*
 * Отключить предупреждение о закрытии нескольких вкладок.
 */
user_pref("browser.tabs.warnOnClose", false);

/*
 * Отключить предупреждение о закрытии нескольких вкладок "закрыть остальные".
 */
user_pref("browser.tabs.warnOnCloseOtherTabs", false);

/*
 * Отключить предупреждение перед открытием about:config
 */
user_pref("general.warnOnAboutConfig", false);

/*
 * Отвечает за переход к позиции на странице при клике по scroll бару (полосе прокрутки) левой кнопкой мыши.
 * Ставим моментальный переход.
 */
user_pref("ui.scrollToClick", 1);

/*
 * Включаем проверку правописания во всех полях ввода, а не только в месте ввода.
 */
user_pref("layout.spellcheckDefault", 2);

/*
 * Задержка перед установкой дополнения.
 * Ставим в 0.
 */
user_pref("security.dialog_enable_delay", 0);

/*
 * Отключаем выделение пробела справа при двойном клике на слово.
 */
user_pref("layout.word_select.eat_space_to_next_word", false);

/*
 * Отключить закрытие браузера при закрытии последней вкладки.
 */
user_pref("browser.tabs.closeWindowWithLastTab", false);

/*
 * Открывать вкладки вместо новых окон, открывать все ссылки в вкладках.
 */
user_pref("browser.link.open_newwindow.restriction", 0);

/*
 * Отключить показ сообщения "вы хотите установить плагин, нужный для отображения этой страницы?".
 */
user_pref("plugins.hideMissingPluginsNotification", false);

/*
 * Отключить предупреждение о необходимости Flash плеера, если на сайте есть содержимое использующее его.
 * Всплывающие меню: "Для проигрывание нужен...".
 */
user_pref("plugins.notifyMissingFlash", false);

/*
 * Отключить предупреждение сайтом о закрытии вкладки с важной информацией.
 * Сообщение "Вы действительно хотите уйти с этого сайта?".
 */
user_pref("dom.disable_beforeunload", true);

/*
 * Спрашивать для каждого файла отдельно куда сохранять.
 */
user_pref("browser.download.useDownloadDir", false);

/*
 * Классический вид страницы ошибки соединения.
 */
user_pref("browser.xul.error_pages.enabled", true);

/*
 * Классический вид страницы ошибки сертификата.
 */
user_pref("browser.xul.error_pages.expert_bad_cert", true);

/*
 * Возвращает строку поиска к прежнему виду.
 */
user_pref("browser.search.showOneOffButtons", false);


/*
 * Отключение проверки является ли Firefox браузером по умолчанию.
 */
user_pref("browser.shell.checkDefaultBrowser", false);