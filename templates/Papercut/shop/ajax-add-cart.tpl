<form action="{cart-link}" method="POST" name="product">

	<div class="str">
		<div class="std-r">عنوان</div>
		<div class="std-l">{title}</div>
		<div class="clear"></div>
	</div>
	
	<div class="str">
		<div class="std-r">قیمت</div>
		<div class="std-l">[discount]{price} {unit}[/discount] [real-price]{real-price} {unit}[/real-price]</div>
		<div class="clear"></div>
	</div>
	
	[color]
		<div class="str">
			<div class="std-r">انتخاب رنگ</div>
			<div class="std-l">{color}<input type='hidden' name='color' id='color' value='0' /></div>
			<div class="clear"></div>
		</div>
	[/color]
	[guarantee]
		<div class="str">
			<div class="std-r">گارانتی</div>
			<div class="std-l">{guarantee}</div>
			<div class="clear"></div>
		</div>
	[/guarantee]

	<div class="str">
		<div class="std-r">تعداد</div>
		<div class="std-l"><span class="quantity-btn quantity-plus">+</span><input type="text" name="quantity" id="quantity" class="ltr" value="1"  readonly/><span class="quantity-btn quantity-minus">-</span></div>
		<div class="clear"></div>
	</div>

	<div class="str">
		<div class="std-r">&nbsp;</div>
		<div class="std-l"><input type="submit" value="افزودن به سبد خرید" class="shop-submit green" /></div>
		<div class="clear"></div>
	</div>

	<input type="hidden" name="add-cart" value="1" />
	<input type="hidden" name="id" value="{id}" />

</form>