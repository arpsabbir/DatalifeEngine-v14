<article class="block story">
	<h1 class="title h2">ارسال مطلب</h1>
	<ul class="ui-form">
		<li class="form-group imp">
			<label for="title">عنوان</label>
			<input type="text" name="title" id="title" value="{title}" class="wide" required>
		</li>
		[urltag]
		<li class="form-group imp">
			<label for="alt_name">مطلب URL</label>
			<input type="text" name="alt_name" id="alt_name" value="{alt-name}" class="wide">
		</li>
		[/urltag]
		<li class="form-group imp">
			<label for="category">موضوع</label>
			{category}
		</li>
		<li class="form-group">
			<label><a href="#" onclick="$('.addvote').toggle();return false;"><span class="plus_icon circle"><span>+</span></span> اضافه کردن نظرسنجی</a></label>
		</li>
		<li class="form-group addvote" style="display:none;">
			<label for="vote_title" >عنوان نظرسنجی</label>
			<input type="text" name="vote_title" value="{votetitle}" class="wide" />
		</li>
		<li class="form-group addvote" style="display:none;">
			<label for="frage" >سوال</label>
			<input type="text" name="frage" value="{frage}" class="wide" />
		</li>
		<li class="form-group addvote" style="display:none;">
			<label for="vote_body" >جواب ها</label>
			<textarea name="vote_body" rows="5" class="wide" placeholder="در هر خط، يک جواب وارد نمائيد">{votebody}</textarea><br /><input type="checkbox" name="allow_m_vote" value="1" {allowmvote}> امکان انتخاب چندين گزينه برای رأی
		</li>
		<li class="form-group imp">
			<label for="short_story">بخش مقدماتی</label>
			[not-wysywyg]
			<div class="bb-editor">
				{bbcode}
				<textarea name="short_story" id="short_story" onfocus="setFieldName(this.name)" rows="8" class="wide" required>{short-story}</textarea>
			</div>
			[/not-wysywyg]
			{shortarea}
		</li>
		<li class="form-group">
			<label for="full_story">بخش ادامه مطلب</label>
			[not-wysywyg]
			<div class="bb-editor">
				{bbcode}
				<textarea name="full_story" id="full_story" onfocus="setFieldName(this.name)" rows="18" class="wide" >{full-story}</textarea>
			</div>
			[/not-wysywyg]
			{fullarea}
		</li>
		<li class="form-group">
			<label for="alt_name">تگ ها و کلمات کلیدی</label>
			<input placeholder="برای جداسازی تگ ها از کاما استفاده کنید" type="text" name="tags" id="tags" value="{tags}" maxlength="150" autocomplete="off" class="wide">
		</li>
		<li class="form-group">
			<table style="width:100%">
				{xfields}
			</table>
		</li>
	[group=1,2]
		<li class="form-group">
			<div class="admin_checkboxs">{admintag}</div>
		</li>
	[/group]
	[recaptcha]
		<li class="form-group">{recaptcha}</li>
	[/recaptcha]
	[question]
		<li class="form-group">
			<label for="question_answer">{question}</label>
			<input placeholder="پاسخ را وارد کنید" type="text" name="question_answer" id="question_answer" class="wide" required>
		</li>
	[/question]
	</ul>
	<p style="margin: 20px 0 0 0;" class="grey"><span style="color: #e85319">*</span>فیلدهایی که با ستاره مشخص شده اند مورد نیاز می باشند</p>
	<div class="form_submit">
		[sec_code]
			<div class="c-capcha">
				{sec_code}
				<input placeholder="Enter the code" title="کد نمایش داده شده در تصویر را وارد کنید" type="text" name="sec_code" id="sec_code" required>
			</div>
		[/sec_code]
		<button class="btn" type="submit" name="add"><b>ارسال</b></button>
		<button id="add_news_preview" class="btn" onclick="preview()" type="submit" name="nview"><b>پیش نمایش</b></button>
	</div>
</article>