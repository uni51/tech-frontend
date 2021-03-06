/*global $*/
$(function(){
	// ライトボックスを非表示にする
	$(document).on('click', '#lbClose, #lbBg', function(){
		$('#lb, #lbBg').hide();
	});

	// ライトボックスを開く
	$('a.lb').click(function(){
		if(!$('#lb').length){
			$('body').append('<div id="lbBg"></div><div id="lb"><div id="lbClose"><a href="javascript:void(0);"><img src="img/lb_close.png" width="30" height="30" alt="閉じる" /></a></div><div id="lbBody"></div></div>');
		}
		$('#lb, #lbBg').hide();

		// 画像をImageオブジェクトに入れる
		var img = new Image();
		img.src = $(this).attr('href');

		// 画像の読み込みが完了したら画像を配置する
		$(img).imagesLoaded(function(){
			if($('#lbBg').is(':visible')){
				imgSet(img, img.width, img.height);
			}
		});

		// 半透明のレイヤーを表示
		$('#lbBg').show();
		ie6Fix();		

		return false;
	});

	// // 画像を配置する
	var imgSet = function(img, img_w, img_h){
		// ウィンドウサイズの取得
		var win_w = $(window).width();
		var win_h = $(window).height();

		// ウィンドウと画像の余白
		var padding = 100;

		// 画像がウィンドウサイズより大きい場合はリサイズする
		if(img_w > win_w || img_h > win_h){
			// ウィンドウと画像の比率を求める
			var win_ratio = win_w / win_h;
			var img_ratio = img_w / img_h;
	
			// 比率を比べてウィンドウに合わせる一辺を決める
			if(win_ratio < img_ratio){
				// 画像をウィンドウの幅に合わせる
				img_w = win_w - padding * 2;
				img_h = Math.floor(img_w / img_ratio);
			}else{
				// 画像をウィンドウの高さに合わせる
				img_h = win_h - padding * 2;
				img_w = Math.floor(img_h * img_ratio);
			}

			// 画像をリサイズ
			$(img).css({
				width: img_w,
				height: img_h
			});
		}

		// 画像の位置を設定
		scroll_top = $(document).scrollTop();
		$('#lb').css({
			top: (win_h - img_h) / 2 + scroll_top,
			left: '50%',
			marginLeft: -img_w / 2
		});

		// 画像の表示
		$('#lbBody').html(img);
		$('#lb').show();
	}

	// IE6用に半透明のレイヤーを調整
	var ie6Fix = function(){
		if(navigator.userAgent.indexOf("MSIE 6")>=0) {
			var win_w = $(window).width();
			var win_h = $(window).height();
			var doc_h = $(document).height();
			$('#lbBg').css({
				width: win_w,
				height: doc_h
			});
		}
	}
});
