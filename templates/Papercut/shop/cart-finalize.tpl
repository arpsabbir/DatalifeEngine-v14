<div class="cart-page">
	
	<div class="cart-finalize">
	
		<form method="POST" action="" name="cart" onsubmit="payCart();" class="no-submit">
				
			شما می‌توانید با کلیه کارت‌های عضو شبکه شتاب و با استفاده از هر یک از درگاه‌های زیر هزینه سفارش خود را پرداخت کنید.
			پس از انتخاب درگاه مورد نظر شما برای واریز وجه به وب‌سایت بانک پذیرنده منتقل خواهید شد.
		
			<ul>
				[parsian-status]
				<li>
					<label class="selected">
						<img src="{THEME}/shop/images/pay-parsian.png" alt="Parsian" /><br/>
						<input type="radio" name="pay-type" value="parsian" checked /> بانک پارسیان
					</label>
				</li>
				[/parsian-status]
				[zarinpal-status]
				<li>
					<label>
						<img src="{THEME}/shop/images/pay-zarinpal.png" alt="Zarinpal" /><br/>
						<input type="radio" name="pay-type" value="zarinpal" /> زرین پال
					</label>
				</li>
				[/zarinpal-status]
				[card-status]
				<li>
					<label>
						<img src="{THEME}/shop/images/pay-card.png" alt="Card" /><br/>
						<input type="radio" name="pay-type" value="receipt" /> کارت به کارت
					</label>
				</li>
				[/card-status]
				[cash-on-delivery-status]
				<li>
					<label>
						<img src="{THEME}/shop/images/pay-cash-on-delivery.png" alt="Cash On Delivery" /><br/>
						<input type="radio" name="pay-type" value="cash-on-delivery" /> پرداخت در محل
					</label>
				</li>
				[/cash-on-delivery-status]
			</ul>
			
			<div class="final-price-box">
				مبلغ قابل پرداخت: <span>{final-price}</span> {unit}
			</div>
			
			<div class="center">
				
				<input type="submit" class="shop-submit green" id="payment-button" value="ورود به بانک و پرداخت هزینه" />
				
				<span id="pay-result"></span>
				
			</div>
			
			<input type="hidden" name="cart-pay" value="1" />
			
		</form>
	
	</div>
	
</div>