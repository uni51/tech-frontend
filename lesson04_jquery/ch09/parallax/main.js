// 背景画像のスクロール速度。数字が小さいほど速い。
var speed = 6;

// スライド1枚の高さを保持する変数
var slideHeight;

/*global $*/
// パララックスを適用する関数
function showParallax() {
    var scrollTop = $(window).scrollTop();

    // 各スライドの背景位置をスクロールに合わせて変える
    $(".parallax-section").each(function(index) {
        var pos = Math.round((slideHeight * index - scrollTop) / speed);
        $(this).css({
            "background-position": "center " + pos + "px"
        });
    });
}

// パララックスの初期設定をする関数
function initParallax() {
    // ウインドウの高さをスライド1枚分の高さとする
    slideHeight = $(window).height();

    // 表示を更新
    showParallax();
}

$(document).ready(function() {
    initParallax();

    // スクロールのたびにshowParallax関数を呼ぶ
    $(window).scroll(showParallax);
});

$(window).resize(function() {
    // ウインドウがリサイズされるとここが実行される
    initParallax();
});