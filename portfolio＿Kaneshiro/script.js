const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.menu-nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  // メニューが開いたら「✕」、閉じたら「☰」に切り替え
  if (nav.classList.contains('active')) {
    toggle.textContent = '✕';
    toggle.setAttribute('aria-label', 'メニューを閉じる');
  } else {
    toggle.textContent = '☰';
    toggle.setAttribute('aria-label', 'メニューを開く');
  }
});

// HTMLの要素を取得する部分、モーダルを操作するための
const modal = document.getElementById("modal");
const gallery = document.getElementById("modal-gallery");
const closeBtn = document.querySelector(".close");

// モーダルを「表示させる」ための
const showImages = (images) => {
  gallery.innerHTML = images.map(src => `<img src="${src}" alt="">`).join('');
  modal.style.display = "block";
};


document.querySelector(".btn-africa").addEventListener("click", () => {
  showImages([
    "./imaages/af_1.jpg",
    "./imaages/af_2.jpg",
    "./imaages/af_3.jpg",
    "./imaages/af_4.jpg",
    "./imaages/af_5.jpg",
    "./imaages/af_6.jpg",
    "./imaages/af_7.jpg",
    "./imaages/af_8.jpg",
    "./imaages/af_9.jpg"
  ]);
});


document.querySelector(".btn-canada").addEventListener("click", () => {
  showImages([
    "./imaages/ca_1.jpg",
    "./imaages/ca_3.jpg",
    "./imaages/ca_4.jpg"
  ]);
});


document.querySelector(".btn-europe").addEventListener("click", () => {
  showImages([
    "./imaages/eu_2.jpg",
    "./imaages/eu_3.jpg",
    "./imaages/eu_4.jpg"
    
  ]);
});


document.querySelector(".btn-asia").addEventListener("click", () => {
  showImages([
    "./imaages/asia_1.jpg",
    "./imaages/asia_2.jpg",
    "./imaages/asia_3.jpg"
  ]);
});


document.querySelector(".btn-middleeast").addEventListener("click", () => {
  showImages([
    "./imaages/uae_1.jpg",
    "./imaages/uae_2.jpg",
    "./imaages/uae_4.jpg",
  ]);
});

// 戻るボタン
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

