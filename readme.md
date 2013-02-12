# Информер FlashGameRatings.ru v.1.1

Информер тестировался с jQuery 1.7.1 в браузерах Chrome 24.0.1312.57, Firefox 18.0.2, IE 9

## Использование информера

1.	Загрузить на сервер файлы:
	*	frg-informer.min.js
	*	jquery-1.7.1.min.js *(необязательно. Рекомендуется использовать googleapis.com)*
	*	icon-fgr.png *(для форума: иконку можно положить в styles/subsilver/theme/)*

2.	Добавить на страницу ссылку на FGR с id="fgr-informer":

		<a id="fgr-informer" href="http://flashgameratings.ru">FlashGameRatings</a>

3.	подключить jquery и скрипт информера:

	так: 
		
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript" src="fgr-informer.min.js"></script>

	или так: 
		
		<script type="text/javascript" src="jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="fgr-informer.min.js"></script>

4. После загрузки страницы, инициализировать скрипт и вызвать соответствующий метод для форума, или блога:

		<script type="text/javascript">
			$(document).ready(function(){
				var informer = new FGRInformer();
				informer.forum(<?= $currentUser->username ?>);
			});
		</script>

	### Настройка

	Конструктор принимает необязательный параметр-объект для изменения настроек. Доступные опции:
	*	String url. По умолчанию - `http://flashgameratings.ru/games/voteable.js`.
	*	String selector - элемент, с которым работает виджет. По умолчанию - `#fgr-informer`.
	*	String has_games_class - добавляется к selector, если у пользователя есть новые игры. По умолчанию - `fgr-new-games`.
	* 	Object has_games_css - применяется к selector, если у пользователя есть новые игры. 
		Чтобы запретить изменение стиля, нужно передать пустой объект. По умолчанию - `{ font-weight: bold }`. 

При успешном выполнении запроса, к `#fgr-informer` будет дописано количество новых для пользователя игр: **FlashGameRatings (3)**.
Если запрос по каким-то причинам не прошел (указан неправильный юзернейм, сервер недоступен и т.д.), элемент никак не изменяется.

## История изменений

### 1.1 
*	Небольшие изменения в API. Теперь перед использованием, скрипт необходимо инициализировать.
*	Изменил URL на `/games/voteable.js` - старый URL по мистическим причинам не работал в Хроме.
*	Внутренние изменения.
	
### 1.0 
*	Первая версия