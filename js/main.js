$(function(){
	// pageTopボタンの表示可否
	var topBtn=$('#pageTop');
	topBtn.hide();
	$(window).scroll(function(){
		if($(this).scrollTop()>80){
		//---- 画面を80pxスクロールしたら、ボタンを表示する
			topBtn.fadeIn();
		}else{
		//---- 画面が80pxより上なら、ボタンを表示しない
			topBtn.fadeOut();
		}

		// フッターまで行ったら高さを調整		
		scrollHeight = $(document).height(); // ドキュメントの高さ
		scrollPosition = $(window).height() + $(window).scrollTop(); // スクロール中のウインドウ下部の位置
		footHeight = $("footer").innerHeight(); // フッターの高さ
		if ( scrollHeight - scrollPosition  <= footHeight ) {
		// ウインドウの下部の位置が、フッターの高さの位置にはいったら"#pageTop"のpositionをabsoluteに変更し、フッターの高さの位置にする        
		    $("#pageTop").css({
		        "position":"absolute",
		        "bottom": footHeight
		    });
		} else {
		// それ以外の場合は元のcssスタイルを指定
		    $("#pageTop").css({
		        "position":"fixed",
		        "bottom": "0px"
		    });
		}
	});

	// ボタンをクリックしたら、スクロールして上に戻る
	topBtn.click(function(){
		$('body,html').animate({
		scrollTop: 0},500);
		return false;
	});
});