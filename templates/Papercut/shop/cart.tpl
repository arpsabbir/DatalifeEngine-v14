<div class="cart-page">

	<table width="100%" cellpadding="0" cellspacing="0" border="0">
		<thead>
			<tr>
				<th width="44">ردیف</th>
				<th class="taright">شرح محصول</th>
				<th width="50">تعداد</th>
				<th width="120">قیمت واحد</th>
				<th width="120">قیمت کل</th>
				<th width="44">حذف</th>
			</tr>
		</thead>
		<tbody>
			{product-list}
		</tbody>
	</table>
	
	<div class="cart-info">
	
		<div class="right">
			<form method="POST" action="" name="cart">
				<input type="submit" class="shop-submit green" value="خرید خود را نهایی کنید" />
				<input type="hidden" name="cart-checkout" value="1" />
			</form>
		</div>
		
		<div class="left">
			مبلغ قابل پرداخت<br />
			<span>{final-price}</span> {unit}
		</div>
		
	</div>
	
</div>