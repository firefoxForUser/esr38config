# Читай меня

#### Описание

Настройки Firefox 38 ветки с длительным сроком поддержки ESR.

Задача настроек на этой странице - максимальная приватность (НЕ анонимность) и отключения лишнего функционала НЕ в ущерб удобству.

#### Для анонимность есть
* [TorBrowser](https://www.torproject.org/index.html.en)
* А ещё лучше [Tails](https://tails.boum.org/) запущенный в [VirtualBox](https://www.virtualbox.org/wiki/Downloads) или с диска.
* [Whonix](https://www.whonix.org/)

#### Файлы настроект приложения

[FirefoxPortable.ini](FirefoxPortable.ini) - файл от портативной версии Firefox, конфигурация запуска.

[channel-prefs.js](channel-prefs.js) - аналог user.js только для канала по которому идут обновления Firefox. (Установлен на esr канал.)
* release - обычный Firefox
* esr - с длительным сроком поддержки
* beta - кандидат в релиз
* aurora - тестовая перед beta
* nightly - ежедневные тестовые сборки
* default - нет обновлений

Файл должен лежать в каталоге приложения `Firefox\defaults\pref\`

#### Файлы настроек профиля

[user.js](pref/user.js) - файл с настройками для Firefox, после его копирование в каталог профиля при запуске Firefox настройки из него будут установлены.

[userChrome.css](ui_css/userChrome.css) - стили преминяемые к элементам интерфейса Firefox. Для их преминения положите файл в каталог `profile\chrome\` и перезагрузите Firefox (если каталога нету создайте).

#### Дополнения

Перезагружайте Firefox даже, если в описании дополнения написано "без перезагрузки", бывает не всё работает.

[ADDONS_MUST_HAVE.md](esr38config/ADDONS_MUST_HAVE.md) - список необходимых дополнений, то что и так должно было быть в Firefox.

[ADDONS_GOOD.md](esr38config/ADDONS_GOOD.md) - список дополнений, не необходимых, но делающих использование Firefox очень удобным.

[ADDONS_SPEC_INSTRUMENTS.md](esr38config/ADDONS_SPEC_INSTRUMENTS.md) - специальные инструменты-дополнения, очень помогающие в некоторых случаях копировать, искать, автоматизировать задачи и т.д.

[ADDONS_DEV.md](esr38config/ADDONS_DEV.md) - статья с описанием подборки дополнений для разработчика.

#### Ссылки

[LINKS.md](LINKS.md) - полезные ссылки.

#### Словари

[DICTIONARY.md](DICTIONARY.md) - полезные ссылки на словари.

#### Поисковые движки

[SEARCH_ENGINES.md](SEARCH_ENGINES.md) - список поисковых движков и поисковых сервисов, которые можно добавить в поисковую панель Firefox.