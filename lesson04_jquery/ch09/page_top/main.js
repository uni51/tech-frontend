/*global $*/
function updateButton() {
    if ($(this).scrollTop() >= 300) { // 300px以上スクロールされた
        // ボタンを表示
        $(".back-to-top").fadeIn();
    } else {
        // ボタンを非表示
        $(".back-to-top").fadeOut();
    }
}

$(document).ready(function() {
    updateButton();

    // スクロールされる度にupdateButtonを実行
    $(window).scroll(updateButton);

    // ボタンをクリックしたらページトップにスクロールする
    $(".back-to-top").click(function() {
        // 600ミリ秒かけてトップに戻る
        $("html, body").animate({
            scrollTop: 0,
        }, 600);

        // ボタンのhrefに遷移しない
        return false;
    });
});