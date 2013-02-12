/**
 * FlashGameRatings Informer v 1.1
 * "Виджет" для отображения количества новых игр на FlashGameRatings.
 * 
 * Возможные опции:
 * @param String url. По умолчанию - http://flashgameratings.ru/games/voteable.js
 * @param String selector - элемент, с которым работает виджет. По умолчанию - #fgr-informer
 * @param String has_games_class - добавляется к selector, если у пользователя есть новые игры. По умолчанию - 'fgr-new-games'
 * @param Object has_games_css - применяется к selector, если у пользователя есть новые игры. 
 * Чтобы запретить изменение стиля, нужно передать пустой объект. По умолчанию - { font-weight: bold }
 */
function FGRInformer(options){

	var self = this;

	var config = {
		url: 'http://flashgameratings.ru/games/voteable.js',
		selector: '#fgr-informer',
		has_games_class: 'fgr-new-games',
		has_games_css: { 'font-weight': 'bold' }
	};

	if(options !== undefined){
		jQuery.extend(config, options);
	}

	/** 
	 * Форумный информер
	 * @param String username - логин пользователя на форумах
	 */
	self.forum = function(username){
		if(!username){
			return;
		}
		getData({ forum_user: username });
	};
	
	/** 
	 * Блоговый информер
	 * @param String username - логин пользователя на блогах
	 */
	self.blog = function(username){
		if(!username){
			return;
		}
		getData({ blog_user: username });
	};

	var getData = function(user){
		if(user === undefined){
			return;
		}
		
		var informerDOM = jQuery(config.selector);
		
		jQuery.ajax({
			dataType: 'jsonp',			
			data: user,
			url: config.url,
			success: function (data){				
				if(data.count >= 0){
					informerDOM.append(" (" + data.count + ")");
				}
				
				if(data.count > 0){
					informerDOM.addClass(config.has_games_class);					
					informerDOM.css(config.has_games_css);
				}
			}
		});
	};

	return self;
};
