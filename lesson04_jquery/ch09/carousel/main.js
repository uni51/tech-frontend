/*global $*/
// スライド1枚あたりの幅（px）
var slideWidth = 400;

// 現在表示中のスライドのindex（0から数え始める）
var currentSlide = 0;

// スライドの全枚数
var numSlides;

// index（0から始まる）番目のスライドを表示する関数
function showSlide(index) {
    // 1番目のスライドでは左矢印を非表示
    if (index === 0) {
        $(".carousel-control-prev").hide();
    } else {
        $(".carousel-control-prev").show();
    }

    // 最後のスライドでは右矢印を非表示
    if (index === numSlides - 1) {
        $(".carousel-control-next").hide();
    } else {
        $(".carousel-control-next").show();
    }

    // 実行中のアニメーションがあればキャンセルした後、
    // leftを変化させるアニメーションを開始
    $(".slides").stop().animate({
        left: -slideWidth * currentSlide + "px"
    }, 600);
}

$(document).ready(function() {
    // スライドが全部で何枚あるか取得
    numSlides = $(".slides > li").length;

    // 最初のスライドを表示
    showSlide(currentSlide);

    // 左矢印がクリックされたら1つ前のスライドを表示
    $(".carousel-control-prev").click(function() {
        currentSlide--;
        showSlide(currentSlide);
        return false;
    });

    // 右矢印がクリックされたら1つ後のスライドを表示
    $(".carousel-control-next").click(function() {
        currentSlide++;
        showSlide(currentSlide);
        return false;
    });
});

