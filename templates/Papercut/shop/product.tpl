<div class="product-page">
	
	<div class="product-main-info">
	
		<div class="main-image right">
		
			<div class="main-image-place">
				<a href="{main-image-link}" rel="highslide" class="highslide">
					<span class="image-zoom"></span>
					<img src="{main-image}" alt="{title}" />
				</a>
			</div>
						
			[extra-images]
			
				<div class="extra-images">
					
					<span class="extra-images-btn extra-images-left"></span> 
					<span class="extra-images-btn extra-images-right"></span> 
					
					<div class="extra-images-space" style="width: {extra-images-space}px" data-pages="{extra-images-pages}" data-position="1">
						{extra-images}
					</div>
					
				</div>				
			
			[/extra-images]
			
		</div>
	
		<div class="main-details right">
			
			<div class='tell-friend-link' data-id="{id}">
				<span class='tell-friend-icon'><img src='{THEME}/shop/images/icon-friend.png' alt='*' width='16' height='16' /></span>
				<span class='tell-friend-text'>پیشنهاد این محصول به دوستان</a>
			</div>
			
			[is-logged]
			<div class='add-favorite-link {favorite-status}' data-id="{id}">
				<span class='add-favorite-icon'><img src='{THEME}/shop/images/love.png' alt='*' width='16' height='16' /></span>
				<span class='add-favorite-text'>{favorite-text}</a>
			</div>
			[/is-logged]
			
			[special-offer]<span class="special-offer">پیشنهاد ویژه</span>[/special-offer]
			
			<div class="clear"></div>
			
			<form action="{cart-link}" method="POST" name="product">
			
				<table cellpadding="0" cellspacing="0">
					<tr>
						<td>شاخه</td>
						<td>{category}</td>
					</tr>
					<tr>
						<td>قیمت</td>
						<td>[discount]{price} {unit}[/discount] [real-price]{real-price} {unit}[/real-price]</div>
					</tr>
					[color]
						<tr>
							<td>[available]انتخاب[/available] رنگ</td>
							<td>{color}</td>
						</tr>
					[/color]
					[available]
					[guarantee]
						<tr>
							<td>گارانتی</td>
							<td>{guarantee}</td>
						</tr>
					[/guarantee]
					<tr>
						<td>تعداد</td>
						<td>
							<span class="quantity-btn quantity-plus">+</span><input type="text" name="quantity" id="quantity" class="ltr" value="1"  readonly/><span class="quantity-btn quantity-minus">-</span>
						</td>
					</tr>
					[/available]
				</table>
				
				<div class="left">
				
					[available]<input type="submit" class="shop-submit green" value="افزودن به سبد خرید" />[/available]
					[not-available]<input type="submit" class="shop-submit gray default-cursor" value="ناموجود" disabled />[/not-available]
					[stopped]<input type="submit" class="shop-submit gray default-cursor" value="توقف تولید" disabled />[/stopped]
				
				</div>
				
				[available]
				<input type='hidden' name='color' id='color' value='0' />
				<input type="hidden" name="add-cart" value="1" />
				<input type="hidden" name="id" value="{id}" />
				[/available]
				
			</form>
			
		</div>
	
		<div class="clear"></div>
	
	</div>

	[product-item]
		<div class="product-item">
			[item-free-delivery]<div class="free-delivery">تحویل رایگان</div>[/item-free-delivery][item-cash-on-delivery]<div class="cash-on-delivery">پرداخت در محل</div>[/item-cash-on-delivery][item-original]<div class="original">ضمانت اصل بودن کالا</div>[/item-original][item-best-price]<div class="best-price">تضمین بهترین قیمت</div>[/item-best-price][item-return-guarantee]<div class="return-guarantee">7 روز ضمانت بازگشت</div>[/item-return-guarantee]
		</div>
	[/product-item]

	[extra-fields]
		
		<div class="short-description extra-fields">
			<h2><span>مشخصات محصول</span></h2>
			<div>
				{extra-fields}
			</div>
		</div>
		
	[/extra-fields]

	<div class="short-description">
		<h2><span>توضیحات مختصر</span></h2>
		<div>
			{short-description}
		</div>
	</div>
	
	[full-description]
	
		<div class="full-description">
			{full-description}
		</div>
		
	[/full-description]
	
	[comment]
		
		<div class="comment-area {has-comment}">
			<h4><span><img src="{THEME}/shop/images/icon-add.png" alt="User Comments" /> دیدگاه کاربران برای این محصول</span></h4>
			{comments-list}
		</div>
		
		<h4><span><img src="{THEME}/shop/images/icon-add.png" alt="Add Comment" /> ارسال دیدگاه</span></h4>
		{add-comment}
		
	[/comment]
	
	[related-products]
			
		<h4><span><img src="{THEME}/shop/images/icon-product.png" alt="Related Products" /> محصولات مشابه این محصول</span></h4>
		
		<div class="related-products">
			{related-products}
		</div>

	[/related-products]
			
</div>

<script type="text/javascript">
$( document ).ready(function() {

	var infoMinHeight = parseInt( $( ".main-image" ).css( "height" ) );
	
	$( ".product-main-info" ).css( "min-height", infoMinHeight );

});
</script>