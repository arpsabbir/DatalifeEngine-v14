<div class="card-page">

	<form method="POST" action="" name="receipt">
		
		<div class="str">
			<div class="std-r">شماره کارت</div>
			<div class="std-l">{card-number}</div>
			<div class="clear"></div>
		</div>
		
		<div class="str">
			<div class="std-r">شماره حساب</div>
			<div class="std-l">{account-number}</div>
			<div class="clear"></div>
		</div>
		
		<div class="str">
			<div class="std-r">به نام</div>
			<div class="std-l">{account-owner}</div>
			<div class="clear"></div>
		</div>
		
		<div class="str">
			<div class="std-r">مبلغ قابل پرداخت</div>
			<div class="std-l">{final-price} {unit}</div>
			<div class="clear"></div>
		</div>
		
		<div class="str">
			<div class="std-r">شماره فیش</div>
			<div class="std-l"><input type="text" name="receipt" class="min-width ltr" required /></div>
			<div class="clear"></div>
		</div>
		
		<div class="str">
			<div class="std-r">&nbsp;</div>
			<div class="std-l"><input type="submit" value="ثبت اطلاعات پرداخت" class="shop-submit green" /></div>
			<div class="clear"></div>
		</div>
		
		<input type="hidden" name="submit-receipt" value="1" />
	
	</form>

</div>