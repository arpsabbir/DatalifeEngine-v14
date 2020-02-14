<div class="category-options oh">

	<div class="search-area">
	
		<form action="{search-link}" method="POST" id="search-shop">
		
			<button></button>
			<input type="text" name="name" placeholder="نام محصول مورد نظر را جهت جستجو وارد کنید . . ." />
			
			<input type="hidden" name="search" value="1" />
		
		</form> 
	
	</div>

	<div class="right">
	
		مرتب سازی براساس:
		
		<select id="sort-order">
			<option value="0">جدیدترین</option>
			<option value="1">پر بازدیدترین</option>
			<option value="2">پیشنهاد ویژه</option>
			<option value="3">قیمت</option>
		</select>
	
		<select id="sort-by">
			<option value="0">نزولی</option>
			<option value="1">صعودی</option>
		</select>
		
	</div>
	
	<div class="left">
	
		تعداد نمایش:
		
		<select id="in-page">
			<option value="0">15</option>
			<option value="1">24</option>
			<option value="2">36</option>
			<option value="3">45</option>
		</select>
	
	</div>

</div>	

<div class="product-list">

	{product-list}
	
</div>

<input type="hidden" id="category-id" value="{id}" />