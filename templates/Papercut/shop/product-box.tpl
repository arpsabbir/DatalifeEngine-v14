<div class='product-box' title='{title}' id='{id}'>
	
	[special-offer]<div class='special-offer'>ویژه</div>[/special-offer]
	
	[link]
		
		<div class='product-image' style='background-image: url({main-image})'></div>

		<div class='product-title'><span>{title}</span></div>
		
	[/link]
	
	<div class='product-footer'>
	
		<div class='price right'>
		
			[available]{price} {unit}[/available]
			[not-available]<span class="not-available">ناموجود</span>[/not-available]
			[stopped]<span class="stopped">توقف تولید</span>[/stopped]
		
		</div>
		
		<div class='left'>
		
			[available]
				<div class='add-cart-link' data-id="{id}">
					<span class='add-cart-icon'><img src='{THEME}/shop/images/plus.png' alt='+' width='16' height='16' /></span>
					<span class='add-cart-text'>افزودن به سبد خرید</a>
				</div>
			[/available]
			
			[is-logged]
				<div class='add-favorite-link {favorite-status}' data-id="{id}">
					<span class='add-favorite-icon'><img src='{THEME}/shop/images/love.png' alt='*' width='16' height='16' /></span>
					<span class='add-favorite-text'>{favorite-text}</a>
				</div>
			[/is-logged]
			
		</div>
		
	</div>
	
</div>