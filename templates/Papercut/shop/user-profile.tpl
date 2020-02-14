<div class="user-page">

	<form action="" method="POST" name="user-profile">
	
		<div class="str">
			<div class="std-r">نام و نام‌خانوادگی تحویل گیرنده</div>
			<div class="std-l"><input type="text" name="name" value="{name}" required /></div>
			<div class="clear"></div>
		</div>
		
		<div class="str">
			<div class="std-r">شماره تماس ضروری (تلفن همراه)</div>
			<div class="std-l"><input type="text" name="cellphone" class="ltr" value="{cellphone}" required /></div>
			<div class="clear"></div>
		</div>
	
		<div class="str">
			<div class="std-r">شماره تلفن ثابت تحویل گیرنده</div>
			<div class="std-l"><input type="text" name="telephone" class="ltr" value="{telephone}" /></div>
			<div class="clear"></div>
		</div>
	
		<div class="str">
			<div class="std-r">استان</div>
			<div class="std-l"><select name="city"><option value="0">-- انتخاب کنید --</option>{cities}</select></div>
			<div class="clear"></div>
		</div>
	
		<div class="str">
			<div class="std-r">آدرس پستی</div>
			<div class="std-l"><textarea name="address" placeholder="آدرس کامل خود را جهت تحویل سفارش وارد کنید..." required>{address}</textarea></div>
			<div class="clear"></div>
		</div>
	
		<div class="str">
			<div class="std-r">کد پستی</div>
			<div class="std-l"><input type="text" name="postal" class="ltr" value="{postal}" /></div>
			<div class="clear"></div>
		</div>
	
		<div class="str">
			<div class="std-r">&nbsp;</div>
			<div class="std-l"><input type="submit" value="ثبت اطلاعات{go-checkout}" class="shop-submit green" /></div>
			<div class="clear"></div>
		</div>
		
		<input type="hidden" name="save-profile" value="1" />
	
	</form>

</div>