/*global $*/
/**
 * selectorに該当するタブを表示する
 */
function showTab(tabSelector, selector) {
    console.log(tabSelector);
    // .tabs-menu divのうちselectorに該当するものにだけactiveクラスを付ける
    $(".tabs-menu div").removeClass("active");
    $(tabSelector).addClass("active");

    // .tabs-content > divのうちselectorに該当するものだけを表示
    $(".tabs-content > div").hide();
    $(selector).show();
}

$(document).ready(function() {
    // 初期状態として1番目のタブを表示
    showTab("#tab-menu-a", "#tabs-a");

    // タブがクリックされたらコンテンツを表示
    $(".tabs-menu div").click(function() {
        // hrefの値を受け取ってshowTab()関数に渡す
        var tabSelector = $(this).attr("id");
        switch(tabSelector){
            case "tab-menu-a":
                selector = "#tabs-a";
                tabSelector2 = "#tab-menu-a";
                break;
            case "tab-menu-b":
                selector = "#tabs-b";
                tabSelector2 = "#tab-menu-b";                
                break;
            case "tab-menu-c":
                selector = "#tabs-c";
                tabSelector2 = "#tab-menu-c";                 
                break;
            default:
                selector = "#tabs-a";
                tabSelector2 = "#tab-menu-a";                 
                break;
        }
        
        showTab(tabSelector2, selector);

        // hrefにページ遷移しない
        return false;
    });
});