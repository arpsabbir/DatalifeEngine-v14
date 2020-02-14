/**
 * Datalife Engine shop module
 *
 * @author Mohammadreza Yektamaram <info@yektamaram.com>
 * @link http://www.datalifeengine.ir/
 * @copyright 2006-2016 Datalife Engine
 * @version 2.0
 */
var shopShowLoading = function( text ) {

	$( ".shop-lightbox, .shop-lightbox-text" ).fadeIn( 150 );
	
	if ( text )
		$( ".shop-lightbox-text" ).html( text );
	else
		$( ".shop-lightbox-text" ).html( 'لطفاً چند لحظه منتظر بمانید...' );
		
}, shopHideLoading = function() {

	$( ".shop-lightbox, .shop-lightbox-text" ).fadeOut( 150 );
	
}, shopShowContent = function( title, content ) {

	$( ".shop-contentbg, .shop-contentbox" ).fadeIn( 350 );
	$( ".shop-contentbox-title div" ).html( title );
	$( ".shop-contentbox-info" ).html( content );

	var marginTop = - parseInt( $( ".shop-contentbox" ).css( "height" ) ) / 2;

	$( ".shop-contentbox" ).css({
		'margin-top': marginTop,
		'transform': 'none', 
		'-webkit-transform': 'none', 
		'-moz-transform': 'none' 
	});
	
}, shopHideContent = function() {

	$( ".shop-contentbg, .shop-contentbox" ).fadeOut( 350 );

	$( '.shop-contentbox' ).css({ 
		'transform': 'perspective(600) scale(0.5) rotateX(-90deg)', 
		'-webkit-transform': 'perspective(600) scale(0.5) rotateX(-90deg)', 
		'-moz-transform': 'perspective(600) scale(0.5) rotateX(-90deg)' 
	});
	
}, addToCart = function( id ) {

	shopShowLoading();

	$.ajax({
		
		type: "POST",
		data: { action: 'add', id: id },
		url: dle_root + "engine/ajax/shop/cart.php",
		success: function( result ) {

			setTimeout( function() {
				
				shopShowContent( "اضافه کردن محصول به سبد خرید", result );
				
				productOptions();
				
			}, 150 );

		}
		
	}).done(function( result ) {

		shopHideLoading();

    });
	
}, addToFavorite = function( id, that ) {

	shopShowLoading();

	$.ajax({
		
		type: "POST",
		data: { action: 'add', id: id },
		url: dle_root + "engine/ajax/shop/favorite.php",
		success: function( result ) {

			if ( result == "added" ) {

				that.addClass( 'deleted' );
				that.find( '.add-favorite-text' ).html( 'حذف از علاقمندی‌ها' );
				
			} else if ( result == "deleted" ) {

				that.removeClass( 'deleted' );
				that.find( '.add-favorite-text' ).html( 'افزودن به علاقمندی‌ها' );
				
			}
			
		}
		
	}).done(function( result ) {

		shopHideLoading();

    });
	
}, tellFriend = function( id ) {

	shopShowLoading();

	$.ajax({
		
		type: "POST",
		data: { action: 'form', id: id },
		url: dle_root + "engine/ajax/shop/tell-friend.php",
		success: function( result ) {

			setTimeout( function() {
				
				shopShowContent( "پیشنهاد این محصول به دوست", result );
				
			}, 150 );

		}
		
	}).done(function( result ) {

		shopHideLoading();

    });
	
}, doTellFriend = function( id ) {

	var name = $( "#tell-name" ).val(),
		email = $( "#tell-email" ).val();
	
	if ( name && email && id > 0 ) {

		shopShowLoading();

		$.ajax({
			
			type: "POST",
			data: { action: 'send', id: id, name: name, email: email },
			url: dle_root + "engine/ajax/shop/tell-friend.php",
			success: function( result ) {

				if ( result == "done" )
					DLEalert( "ایمیل با موفقیت برای دوست شما ارسال شد.", "پیام سیستم" );
				
			}
			
		}).done(function( result ) {

			shopHideLoading();
			shopHideContent();

	    });
		
	}
	
	return false;
	
}, addShopComment = function( id ) {

	var name = $( "#comment-name" ).val(),
		email = $( "#comment-email" ).val(),
		text = $( "#comment-text" ).val();
	
	if ( name == "" && dle_group == 5 ) {

		DLEalert( "جهت ارسال دیدگاه برای این محصول، <font color='ff0000'>نام</font> خود را وارد کنید.", "پیام سیستم" );
		
		return false;
		
	} else if ( email == "" && dle_group == 5 ) {

		DLEalert( "جهت ارسال دیدگاه برای این محصول، <font color='ff0000'>آدرس ایمیل</font> خود را وارد کنید.", "پیام سیستم" );
		
		return false;
		
	} else if ( text.length < 3 ) {
		
		DLEalert( "جهت ارسال دیدگاه برای این محصول، <font color='ff0000'>متن دیدگاه</font> شما باید بیشتر از 3 حرف باشد.", "پیام سیستم" );
		
		return false;
		
	}
	
	shopShowLoading();

	$.ajax({
		
		type: "POST",
		data: { id: id, action: 'add', name: name, email: email, text: text },
		url: dle_root + "engine/ajax/shop/comments.php",
		success: function( result ) {

			shopHideLoading();

			$( ".comment-area" ).fadeIn( 100 ).append( result );
			$( ".shop-comments:last" ).hide().show( 'blind' );
			
			$( 'html, body' ).animate({ scrollTop: $( ".shop-comments:last" ).offset().top }, 2000 );
			
		}
		
	}).done(function( result ) {

		$( "#comment-name, #comment-email, #comment-text" ).val( "" );
		
		shopHideLoading();
		deleteShopCommentHandler();

    });

}, deleteShopComment = function( id ) {

	shopShowLoading();

	$.ajax({
		
		type: "POST",
		data: { id: id, action: 'delete' },
		url: dle_root + "engine/ajax/shop/comments.php",
		success: function( result ) {

			$( '.shop-comments[data-id="' + id + '"]' ).hide( 'blink' );
			 
		}
		
	}).done(function( result ) {

		shopHideLoading();

    });
	
}, deleteShopCommentHandler = function() {

	$( '.cm-delete' ).on( 'click', function() {
		
		var id = $( this ).data( 'id' );

		DLEconfirm( 'آیا شما از حذف این دیدگاه مطمئن هستید؟', 'حذف دیدگاه', function() { deleteShopComment( id ); } );
		
	});
	
}, categoryListing = function( catId, sortOrder, sortBy, pageLimit, selectedPage ) {

	shopShowLoading();

	$.ajax({
		
		type: "POST",
		data: { id: catId, order: sortOrder, by: sortBy, limit: pageLimit, page: selectedPage },
		url: dle_root + "engine/ajax/shop/category.php",
		success: function( result ) {

			$( '.product-list' ).html( result );

		}
		
	}).done(function( result ) {

		shopHideLoading();
		paginationCheck();

    });
	
}, payCart = function() {
	
	var payType = $( "input[type=radio][name='pay-type']:checked" ).val(),
		message;

	shopShowLoading();

	$.ajax({
		
		type: "POST",
		data: { action: 'prepare', type: payType },
		url: dle_root + "engine/ajax/shop/pay.php",
		success: function( result ) {

			if ( result == "error" || result == "" )
				message = "<span class='red'>خطا در اتصال به درگاه ! لطفاً مجددا تلاش فرمائید.</span>";
			else {
			
				message = "<span class='green'>لطفاً منتظر بمانید...</span>";
				
				location = result;
			
			}
			
			$( '#pay-result' ).hide().fadeIn( 300 ).html( message );
			 
			shopHideLoading();

		}
		
	}).done(function( result ) {

		shopHideLoading();

    });
	
}, productOptions = function() {

	$( '.quantity-btn' ).on( 'click', function() {
		
		var value = $( '#quantity' ).val();
		
		if ( $( this ).hasClass( 'quantity-plus' ) )
			value++;
		else
			value--;
		
		if ( value < 1 )
			value = 1;
		else if ( value > 10 )
			value = 10;
		
		$( "#quantity" ).val( value );
			
	});
	
	$( '.color-item' ).on( 'click', function() {

		$( '.color-item' ).removeClass( 'selected' );
		$( this ).addClass( 'selected' );
		
		$( '#color' ).val( $( this ).data( 'id' ) );
		
	});
	
}, paginationCheck = function() {

	$( ".shop-pagingation span" ).on( 'click', function() {
		
		if ( $( this ).hasClass( 'selected' ) )
			return false;
		
		var catId = $( "#category-id" ).val(),
			sortOrder = $( "#sort-order" ).val(),
			sortBy = $( "#sort-by" ).val(),
			inPage = $( "#in-page" ).val(),
			selectedPage = $( this ).data( 'page' );
		
		categoryListing( catId, sortOrder, sortBy, inPage, selectedPage );
		
	});

};

$( document ).ready(function() {

	$( ".shop-page div, .shop-page img, .shop-page a" ).myTooltip({
		'fromTitle': true,
		'hoverTooltip':false
	});
	
	deleteShopCommentHandler();
	productOptions();
	paginationCheck();

	$( '.extra-images-btn' ).on( 'click', function() {
		
		var pageWidth = 208,
			positionPixel = 0,
			positionNumber = $( '.extra-images-space' ).data( 'position' ), 
			pages = $( '.extra-images-space' ).data( 'pages' );
		
		if ( $( this ).hasClass( 'extra-images-left' ) ) {

			positionNumber++;

			if ( positionNumber > pages ) 
				positionNumber = 1;
			
			positionPixel = ( positionNumber * pageWidth ) - pageWidth;
			
		} else {

			positionNumber--;

			if ( positionNumber <= 0 )
				positionNumber = pages;
			
			positionPixel = ( positionNumber * pageWidth ) - pageWidth;
		
		}
		
		positionPixel =- positionPixel;
		
		$( '.extra-images-space' ).data( 'position', positionNumber ).css( 'margin-right', positionPixel );
		
	});
	
	$( '.extra-images img' ).on( 'click', function() {

		if ( $( this ).hasClass( 'selected' ) )
			return false;

		var originalImage = $( this ).data( 'original' ),
			imageLink = $( this ).data( 'link' );
		
		$( '.extra-images img.selected' ).removeClass( 'selected' );
		
		$( this ).addClass( 'selected' );
		
		$( '.main-image-place > a' ).attr( 'href', imageLink );
		
		$( '.main-image-place > a > img' ).fadeOut( 200, function() {
		
			$( this ).attr( 'src', originalImage ).fadeIn( 200 );
			
		});
		
	});
	
	$( '.cm-delete' ).on( 'click', function() {
		
		var id = $( this ).data( 'id' );

		DLEconfirm( 'آیا شما از حذف این دیدگاه مطمئن هستید؟', 'حذف دیدگاه', function() { deleteShopComment( id ); } );
		
	});

	$( '.delete-cart' ).on( 'click', function() {
		
		var link = $( this ).data( 'link' );

		DLEconfirm( 'آیا مایل به حذف مورد انتخابی هستید؟', 'حذف محصول', function() { 

			location = link;
			
		} );
		
	});
	
	$( '.cart-finalize li label' ).on( 'click', function() {

		$( '.cart-finalize li label' ).removeClass( 'selected' );
		$( this ).addClass( 'selected' );
		
		if ( $( 'input[type="radio"][name="pay-type"]:checked' ).val() == "cash-on-delivery" )
			$( "#payment-button" ).val( "ارسال" );
		else if ( $( 'input[type="radio"][name="pay-type"]:checked' ).val() == "receipt" )
			$( "#payment-button" ).val( "ورود به فرم ثبت فیش واریزی" );
		else
			$( "#payment-button" ).val( "ورود به بانک و پرداخت هزینه" );
		
	});
	
	$( '.no-submit' ).on( 'submit', function( e ) { 
		
		 e.preventDefault();
		 
		 return false;

	});
	
	$( '.add-cart-link, .add-favorite-link, .tell-friend-link' ).on({
		
	    mouseenter: function () {

			$( this ).parent().parent().find( '.price' ).css( 'opacity', .3 );
			
	    },
	    mouseleave: function () {

			$( this ).parent().parent().find( '.price' ).css( 'opacity', 1 );
			
	    },
	    click: function() {
	    	
	    	var id = $( this ).data( 'id' );
	    	
	    	if ( $( this ).attr( 'class' ) == "tell-friend-link" )
	    		tellFriend( id );
	    	else if ( $( this ).attr( 'class' ) == "add-cart-link" )
	    		addToCart( id );
	    	else
	    		addToFavorite( id, $( this ) );
	    		
	    }
		
	});

	$( ".category-options select" ).on( 'change', function() {
		
		var catId = $( "#category-id" ).val(),
			sortOrder = $( "#sort-order" ).val(),
			sortBy = $( "#sort-by" ).val(),
			inPage = $( "#in-page" ).val(),
			selectedPage = $( ".shop-pagingation span.selected" ).data( 'page' );

		categoryListing( catId, sortOrder, sortBy, inPage, selectedPage );
		
	});

	$( ".order-details" ).on( 'click', function() {
		
		var details = $( this ).parent().find( '.dn' ).html();
		
		shopShowContent( 'مشخصات سفارش', details );

		return false;
		
	});
	
	$( "#search-shop" ).on( 'submit', function() {
		
		var name = $( this ).find( "[name='name']" ).val();
		
		if ( name.length < 3 ) {
			
			DLEalert( "حداقل کاراکتر جهت جستجوی محصول، 3 کاراکتر می باشد.", "پیام سیستم" );
			
			return false;
			
		}
		
	});
	
	$( ".shop-contentbg, .shop-contentbox-title span" ).on( 'click', function() {

		shopHideContent();

	});
	
});

(function($){var tooltipsStorage={};var tooltipsSettingsStorage={};var tooltipId=0;var tooltipLastShowId=false;var tooltipClasses={base:"system-mytooltip--base",item:"system-mytooltip--item",hover:"system-mytooltip--hover",backing:"system-mytooltip--backing",help:"mytooltip--cursor-help",close:"js-mytooltip-close"};var directionClasses={top:"mytooltip--top",right:"mytooltip--right",bottom:"mytooltip--bottom",left:"mytooltip--left"};var eventsNames={showBefore:"show-before",showComplete:"show-complete",hideBefore:"hide-before",hideComplete:"hide-complete"};$(document).on("mouseleave","."+tooltipClasses.hover,function(){methods.hide();});$(document).on("click",function(event){var $target=$(event.target);if($target.hasClass(tooltipClasses.base)||($target.closest("."+tooltipClasses.item).length&&!$target.hasClass(tooltipClasses.close))){return;}tooltipLastShowId=false;methods.hide();});if(!String.prototype.trim){(function(){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");};})();}var methods={init:function(options){var self=$(this);if(self.attr("data-mytooltip-id")){return;}var id=tooltipId;tooltipId++;self.attr("data-mytooltip-id",id);var userOptions=$.extend(true,{},options,methods.getAttrOptions(self));var currentOptions=$.extend(true,{},methods.getDefaultOptions(),userOptions);if(methods.stringToBoolean(currentOptions.fromTitle)){var selfTitle=self.attr("title");currentOptions.content=selfTitle?selfTitle:currentOptions.content;}else{var html=methods.getHtmlTemplate(currentOptions.content,currentOptions);if(html!==false){currentOptions.content=html;}}if(currentOptions.content==""){return;}tooltipsStorage[id]={id:id,current:self,options:currentOptions};self.addClass(tooltipClasses.base);if(currentOptions.cursorHelp){self.addClass(tooltipClasses.help);}methods.setEvents(tooltipsStorage[id]);},create:function(data){var id=data.id;var current=$(data.current);if(!methods.isEmptyObjectProperty(id)||current.hasClass(data.options.ignoreClass)){return;}if(tooltipLastShowId===id){methods.hide();methods.resetLastShow();return;}tooltipLastShowId=id;methods.callEvents(data.current,eventsNames.showBefore);var options=data.options;var direction=directionClasses[options.direction];var content=options.content;var html=null;if(options.dinamicContent){content=current.attr("data-mytooltip-content");html=methods.getHtmlTemplate(content,options);content=html!==false?html:content;}var tooltip=$('<div style="display: none;" data-mytooltip-id="'+id+'" class="mytooltip system-mytooltip--'+options.action+" "+tooltipClasses.item+" "+direction+" "+options.customClass+'">'+content+"</div>");if(!methods.stringToBoolean(options.showArrow)){tooltip.addClass("mytooltip-noshow-arrow");}if(options.theme){tooltip.addClass("mytooltip-theme-"+options.theme);}if(options.hoverTooltip){tooltip.append('<div class="mytooltip-backing '+tooltipClasses.backing+'">');}methods.hide(tooltip,options);$("body").append(tooltip);methods.setPosition(tooltip,data);},getHtmlTemplate:function(string,options){try{var selector=string.trim();if($(selector).length&&!~string.indexOf("<")){return $(selector).html();}return false;}catch(err){if(methods.stringToBoolean(options.debug)){methods.error("Attention! "+err);}return false;}},resetLastShow:function(){tooltipLastShowId=false;},stringToBoolean:function(string){if(typeof string==="boolean"){return string;}return string==="true";},show:function(tooltip,data){var options=data.options;var duration=parseInt(options.animateDuration);tooltip.fadeIn({queue:false,duration:duration});switch(options.direction){case"top":tooltip.animate({top:parseInt(tooltip.css("top"))+options.animateOffsetPx},duration);break;case"right":tooltip.animate({left:parseInt(tooltip.css("left"))-options.animateOffsetPx},duration);break;case"bottom":tooltip.animate({top:parseInt(tooltip.css("top"))-options.animateOffsetPx},duration);break;case"left":tooltip.animate({left:parseInt(tooltip.css("left"))+options.animateOffsetPx},duration);break;default:if(methods.stringToBoolean(options.debug)){methods.error("Direction: "+options.direction+" not found!");}return false;}setTimeout(function(){methods.callEvents(data.current,eventsNames.showComplete);if(options.hideTime){methods.hideTimer(tooltip,options);}},options.animateDuration);},hideTimer:function(tooltip,options){var delay=parseInt(options.hideTime);if(!delay||delay<0){delay=0;}setTimeout(function(){if(tooltip.is(":visible")){methods.hide(tooltip,options);}},delay);},hide:function(tooltip,options){var duration;var item=$("."+tooltipClasses.item);var id=item.data("mytooltip-id");if(!methods.isEmptyObjectProperty(id)){return;}if(options){duration=options.animateDuration;}else{if(id!==undefined){duration=tooltipsStorage[+id].options.animateDuration;}}var base=$("."+tooltipClasses.base+"[data-mytooltip-id='"+id+"']");methods.callEvents(base,eventsNames.hideBefore);item.stop().fadeOut(duration,function(){methods.remove(tooltip,id,base);});},remove:function(tooltip,id,base){if(tooltip){$("."+tooltipClasses.item).each(function(){if(tooltip[0]!=$(this)[0]){$(this).remove();}});}else{$("."+tooltipClasses.item).remove();}if(tooltipsStorage[id].options.disposable){methods.destroy({id:id});}methods.callEvents(base,eventsNames.hideComplete);},setPosition:function(tooltip,data){var current=$(data.current);var position=current.offset();var options=data.options;var image=tooltip.find("img");var animateOffsetPx=options.animateOffsetPx?parseInt(options.animateOffsetPx):0;var backing=tooltip.find(".mytooltip-backing");var sizeBacking=0;var sizeElement={height:current.outerHeight(),width:current.outerWidth()};var sizeTooltip={};if(image.length>0){image.load(function(){setSizeTooltip();});}else{setSizeTooltip();}function setSizeTooltip(){sizeTooltip.height=tooltip.outerHeight();sizeTooltip.width=options.widthOfParent?(sizeElement.width/100*parseInt(options.widthOfParent)):tooltip.outerWidth();callSwith();}function callSwith(){var offsetHorizontalBorder=0;var offsetVerticalBorder=0;if(options.border==="far"){offsetHorizontalBorder=sizeElement.width;offsetVerticalBorder=sizeElement.height;}if(options.widthOfParent){tooltip.css("width",sizeTooltip.width);}switch(options.direction){case"top":tooltip.css({left:position.left+(sizeElement.width/2)-(sizeTooltip.width/2),top:position.top-sizeTooltip.height-+options.offset-animateOffsetPx+ +offsetVerticalBorder});sizeBacking=position.top-parseInt(tooltip.css("top"))-sizeTooltip.height-animateOffsetPx;backing.css({height:sizeBacking,bottom:-sizeBacking,left:0});break;case"right":tooltip.css({left:position.left+sizeElement.width+ +options.offset+animateOffsetPx-+offsetHorizontalBorder,top:position.top-(sizeTooltip.height/2)+(sizeElement.height/2)});sizeBacking=parseInt(tooltip.css("left"))-position.left-sizeElement.width-animateOffsetPx;backing.css({height:sizeTooltip.height,width:sizeBacking,top:0,left:-sizeBacking});break;o;case"bottom":tooltip.css({left:position.left+(sizeElement.width/2)-(sizeTooltip.width/2),top:position.top+sizeElement.height+ +options.offset+animateOffsetPx-+offsetVerticalBorder});sizeBacking=parseInt(tooltip.css("top"))-position.top-sizeElement.height-animateOffsetPx;backing.css({height:sizeBacking,top:-sizeBacking,left:0});break;case"left":tooltip.css({left:position.left-sizeTooltip.width-+options.offset-animateOffsetPx+ +offsetHorizontalBorder,top:position.top-(sizeTooltip.height/2)+(sizeElement.height/2)});sizeBacking=position.left-parseInt(tooltip.css("left"))-sizeTooltip.width-animateOffsetPx;backing.css({height:sizeTooltip.height,width:sizeBacking,top:0,right:-sizeBacking});break;default:if(methods.stringToBoolean(options.debug)){methods.error("Direction: "+options.direction+" not found!");}return false;}methods.show(tooltip,data);}},setEvents:function(data){var action=data.options.action;var current=data.current;var options=data.options;switch(action){case"click":current.on(action,function(event){if(!methods.isEmptyObjectProperty(data.id)){return;}event.preventDefault();methods.create(data);});break;case"hover":case"focus":if(!methods.isEmptyObjectProperty(data.id)){return;}var actionGet;var actionLose;if(action==="hover"){actionGet="mouseenter";actionLose="mouseleave";}else{if(action==="focus"){actionGet="focus";actionLose="blur";}}current.on(actionGet,function(event){if(!$(event.relatedTarget).is("."+tooltipClasses.item+",."+tooltipClasses.backing)){methods.create(data);}});current.on(actionLose,function(event){methods.resetLastShow();if(!options.hoverTooltip||!methods.stringToBoolean(options.hoverTooltip)){methods.hide();}else{if(!$(event.relatedTarget).is("."+tooltipClasses.item+",."+tooltipClasses.backing)){methods.hide();}}});break;default:if(methods.stringToBoolean(options.debug)){methods.error("Action: "+options.action+" not found!");}return false;}},getAttrOptions:function(current){var defaultOptions=this.getDefaultOptions();var dataOptions={};for(var option in defaultOptions){var symbolArray=option.split("");var currentAttrName="";symbolArray.forEach(function(item){var itemToLowerCase=item.toLocaleLowerCase();if(item!==itemToLowerCase){currentAttrName+="-";}currentAttrName+=itemToLowerCase;});var dataAttrValue=$(current).attr("data-mytooltip-"+currentAttrName);if(dataAttrValue!==undefined){dataOptions[option]=dataAttrValue;}}return dataOptions;},getDefaultOptions:function(){return{direction:"top",offset:10,border:"closer",customClass:"",content:"",dinamicContent:false,action:"hover",theme:"default",ignoreClass:"js-mytooltip-ignore",widthOfParent:false,showArrow:true,disposable:false,fromTitle:false,cursorHelp:false,hideTime:false,hoverTooltip:true,animateOffsetPx:15,animateDuration:200,debug:true};},callEvents:function(current,event){$(current).trigger(event);},isEmptyObjectProperty:function(id){return tooltipsStorage[id]!==undefined;},call:function(params){var current=$(params.selector);var id=current.data("mytooltip-id");if(id>=0){methods.create(tooltipsStorage[id]);}else{methods.error("Method Call: ID not found!");}},update:function(params){$(this).myTooltip(tooltipsSettingsStorage[params.selector]);},updateContent:function(params){$(this).attr("data-mytooltip-content",params.args[1]);},destroy:function(params){var $self;var id=params.id;if(id!==undefined){$self=$("."+tooltipClasses.base+'[data-mytooltip-id="'+id+'"]');delete tooltipsStorage[id];removeData($self);}else{$self=$(this);for(var block in tooltipsStorage){if(tooltipsStorage.hasOwnProperty(block)){if($self.data("mytooltip-id")===$(tooltipsStorage[block].current).data("mytooltip-id")){delete tooltipsStorage[block];removeData($self);}}}}function removeData(self){self.removeClass(tooltipClasses.base);var attributes=$.extend({},self.get(0).attributes);$.each(attributes,function(i,attr){var name=attr.name;if(~name.indexOf("data-mytooltip")){self.removeAttr(name);}});}},error:function(message){console.error(message);}};$.fn.myTooltip=function(method){var args=arguments;var selector=this.selector;if($(this).length===0){methods.error("Element: "+selector+" not found!");return;}return this.each(function(){if(methods[method]){return methods[method].apply(this,[{args:args,selector:selector}]);}else{if(typeof method==="object"||!method){tooltipsSettingsStorage[selector]=args[0];return methods.init.apply(this,args);}else{methods.error("Method "+method+" not found!");}}});};})(jQuery);