/*global $*/
// 画像ロード中の表示エリアのサイズ（px）
var initialSize = 60;

// 拡大表示をウインドウの端から何px空けるか
var padding = 100;

// 各アニメーションの時間（ミリ秒）
var animDuration = 300;

// img要素を表示する
function showImage(img) {
    // ウインドウの幅と高さを取得
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // ウインドウのアスペクト比を計算
    var windowAspectRatio = windowWidth / windowHeight;
    console.log("windowAspectRatio："+ windowAspectRatio);
    // 画像のアスペクト比を計算
    var imageAspectRatio = img.width / img.height;
    console.log("imageAspectRatio："+ imageAspectRatio);

    // ウインドウと画像のどちらが横に長いかによって
    // 表示サイズを決める
    var dispWidth;
    var dispHeight;
    if (windowAspectRatio > imageAspectRatio) {
        // 画像の方が縦に長い場合
        dispHeight = windowHeight - padding;
        dispWidth = dispHeight * imageAspectRatio;
    } else {
        // 画像の方が横に長い場合
        dispWidth = windowWidth - padding;
        dispHeight = dispWidth / imageAspectRatio;
    }
    console.log("dispWidth：" + dispWidth);
    console.log("dispHeight：" + dispHeight);
    
    // 画像の表示サイズをセット
    $(img).css({
        width: dispWidth + "px",
        height: dispHeight + "px",
        display: "none",
    });

    // img要素を.popup-content内に挿入
    $(".popup-content").html(img);

    // 表示エリアの拡大アニメーション
    $(".popup-content").animate({
        width: dispWidth + "px",
        height: dispHeight + "px",
        // 以下2つは上下左右中央に置くために必要
        "margin-left": -dispWidth / 2 + "px",
        "margin-top": -dispHeight / 2 + "px",
    }, animDuration, "swing", function() {
        // 拡大アニメーションが終わったら画像をフェードイン
        $(img).fadeIn(animDuration);
    });
}

// imageUrlの画像をポップアップで表示する関数
function showPopup(imageUrl) {
    // 前回挿入したimg要素を削除
    $(".popup-content").html("");

    // オーバーレイ（黒背景と画像表示エリア）をフェードイン
    $(".overlay").fadeIn(animDuration);

    // 画像表示エリアを小さな四角にする
    $(".popup-content").css({
        width: initialSize + "px",
        height: initialSize + "px",
        // 以下2つは上下左右中央に置くために必要
        "margin-left": -initialSize / 2 + "px",
        "margin-top": -initialSize / 2 + "px",
    });

    // img要素を作成して拡大画像をロードする
    var img = new Image();
    img.onload = function() {
        // 画像のロードが終わるとここが実行される
        showImage(img);
    };
    img.src = imageUrl;
}

// ポップアップを閉じる
function closePopup() {
    $(".overlay").fadeOut(animDuration);
}

$(document).ready(function() {
    // .popup要素がクリックされたらポップアップを表示
    $(".popup").click(function() {
        showPopup($(this).attr("href"));
        return false;
    });

    // オーバーレイがクリックされたらポップアップを閉じる
    $(".overlay").click(function() {
        closePopup();
        return false;
    });
});
