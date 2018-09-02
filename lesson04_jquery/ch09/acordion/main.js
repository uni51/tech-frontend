/*global $*/
$(document).ready(function() {
    // アコーディオンのタイトルがクリックされたら
    $(".accordion-title a").click(function() {
        // 同じsection内の.accordion-contentを選択
        var content = $(this).closest("section").find(".accordion-content");

        // .accordion-contentが非表示の場合は
        if ( !content.is(":visible") ) {
            // 表示中のコンテンツを閉じる
            $(".accordion-content:visible").slideUp();

            // クリックされたコンテンツを表示
            content.slideDown();
        }

        // hrefにページ遷移しない
        return false;
    });
});