// ====================
// ハンバーガーメニュー
// ====================
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".menu-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  // メニューが開いたら「✕」、閉じたら「☰」に切り替え
  if (nav.classList.contains("active")) {
    toggle.textContent = "✕";
    toggle.setAttribute("aria-label", "メニューを閉じる");
  } else {
    toggle.textContent = "☰";
    toggle.setAttribute("aria-label", "メニューを開く");
  }
});

// ====================
// スライダー
// ====================
$(function () {
  $(".main-visual__map").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 15000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 1, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
  });
});


$(function () {
  $(".slides").slick({
    prevArrow: $(".ctrl .prev"),
    nextArrow: $(".ctrl .next"),
  });
});

const modal = document.getElementById("modal");
const gallery = document.getElementById("modal-gallery");
const closeBtn = document.querySelector(".close-btn");




// // モーダルを「表示させる」ための
const showImages = (images) => {
gallery.innerHTML = images.map((src) => `<img src="${src}" alt="">`).join("");
modal.style.display = "block";
 };

document.querySelector(".btn-africa").addEventListener("click", () => {
  showImages([
    "./photo/af_1.jpg",
    "./photo/af_2.jpg",
    "./photo/af_3.jpg",
    "./photo/af_4.jpg",
    "./photo/af_5.jpg",
  ]);
});


document.querySelector(".btn-canada").addEventListener("click", () => {
showImages([
  "./photo/ca__1.jpg",
    "./photo/ca__2.jpg",
    "./photo/ca__3.jpg",
    "./photo/ca__4.jpg",
 ]);
});

document.querySelector(".btn-europe").addEventListener("click", () => {
showImages([
  "./photo/eu___1.jpg",
    "./photo/eu__2.jpg",
    "./photo/eu__3.jpg",
    "./photo/eu__4.jpg",
    "./photo/eu__5.jpg",
 ]);
});

document.querySelector(".btn-asia").addEventListener("click", () => {
showImages([
  "./photo/asia__1.jpg",
    "./photo/asia__2.jpg",
    "./photo/asia__3.jpg",
    "./photo/asia__4.jpg",
    "./photo/asia__5.jpg",
 ]);
});

document.querySelector(".btn-middleeast").addEventListener("click", () => {
showImages([
  "./photo/uae__1.jpg",
    "./photo/uae__2.jpg",
    "./photo/uae__3.jpg",
    "./photo/uae__4.jpg",
    "./photo/uae__5.jpg",
 ]);
});







// // 戻るボタン
closeBtn.addEventListener("click", () => {
modal.style.display = "none";
gallery.innerHTML = "";
 });
window.addEventListener("click", (e) => {
if (e.target === modal) {
 modal.style.display = "none";
gallery.innerHTML = "";
}
});