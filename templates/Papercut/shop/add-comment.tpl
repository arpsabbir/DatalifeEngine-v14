<form action="" method="POST" onsubmit="addShopComment( {id} );" class="no-submit">

	[is-logged]
	<div class="str">
		<div class="std-r">نام شما</div>
		<div class="std-l"><input type="text" name="name" id="comment-name" /></div>
		<div class="clear"></div>
	</div>
	
	<div class="str">
		<div class="std-r">ایمیل شما</div>
		<div class="std-l"><input type="email" name="email" id="comment-email" class="ltr" /></div>
		<div class="clear"></div>
	</div>
	[/is-logged]

	<div class="str">
		<div class="std-r">متن دیدگاه</div>
		<div class="std-l"><textarea name="comment" id="comment-text" placeholder="دیدگاه خود را در رابطه با محصول بنویسید..."></textarea></div>
		<div class="clear"></div>
	</div>

	<div class="str">
		<div class="std-r">&nbsp;</div>
		<div class="std-l"><input type="submit" value="ارسال" class="shop-submit green" /></div>
		<div class="clear"></div>
	</div>

</form>