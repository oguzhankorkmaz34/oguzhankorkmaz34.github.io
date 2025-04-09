document.addEventListener("DOMContentLoaded", () => {
  // Sayfalama işlevselliği
  const pages = document.querySelectorAll(".gallery-page");
  const pageNumbers = document.querySelectorAll(".page-number");
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  const currentPageIndicator = document.getElementById("current-page");
  let currentPage = 1;
  const totalPages = pages.length;

  // Sayfa değiştirme fonksiyonu
  function changePage(pageNum) {
    // Geçerli sayfayı kontrol et
    if (pageNum < 1 || pageNum > totalPages) return;

    // Tüm sayfaları gizle
    pages.forEach(page => {
      page.classList.remove("active");
    });

    // Seçilen sayfayı göster
    document.getElementById(`page-${pageNum}`).classList.add("active");

    // Sayfa numaralarını güncelle
    pageNumbers.forEach(btn => {
      btn.classList.remove("active");
      if (parseInt(btn.dataset.page) === pageNum) {
        btn.classList.add("active");
      }
    });

    // Önceki/Sonraki butonlarını güncelle
    prevButton.disabled = pageNum === 1;
    nextButton.disabled = pageNum === totalPages;

    // Geçerli sayfa göstergesini güncelle
    currentPageIndicator.textContent = `Sayfa ${pageNum}`;

    // Geçerli sayfayı güncelle
    currentPage = pageNum;

    // Sayfanın üstüne kaydır
    window.scrollTo({
      top: document.querySelector(".gallery-section").offsetTop - 100,
      behavior: "smooth"
    });
  }

  // Sayfa numaralarına tıklama olayı
  pageNumbers.forEach(btn => {
    btn.addEventListener("click", () => {
      changePage(parseInt(btn.dataset.page));
    });
  });

  // Önceki sayfa butonu
  prevButton.addEventListener("click", () => {
    changePage(currentPage - 1);
  });

  // Sonraki sayfa butonu
  nextButton.addEventListener("click", () => {
    changePage(currentPage + 1);
  });

  // İlk sayfayı yükle
  changePage(1);

  // Tam ekran görüntüleme
  const fullscreenTriggers = document.querySelectorAll(".fullscreen-trigger");
  const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
  const fullscreenImage = document.querySelector(".fullscreen-image");
  const fullscreenClose = document.querySelector(".fullscreen-close");
  const fullscreenPrev = document.querySelector(".fullscreen-prev");
  const fullscreenNext = document.querySelector(".fullscreen-next");

  // Tüm resimleri bir diziye al
  const allImages = [];
  fullscreenTriggers.forEach(img => {
    allImages.push({
      src: img.src,
      alt: img.alt
    });
  });

  let currentImageIndex = 0;

  // Resimlere tıklama olayı ekle
  fullscreenTriggers.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentImageIndex = index;
      showFullscreenImage(index);
    });
  });

  // Tam ekran resmi göster
  function showFullscreenImage(index) {
    fullscreenImage.src = allImages[index].src;
    fullscreenImage.alt = allImages[index].alt;
    fullscreenOverlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Scroll'u engelle
  }

  // Önceki resim
  fullscreenPrev.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    showFullscreenImage(currentImageIndex);
  });

  // Sonraki resim
  fullscreenNext.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    showFullscreenImage(currentImageIndex);
  });

  // Kapatma düğmesine tıklama olayı ekle
  fullscreenClose.addEventListener("click", () => {
    fullscreenOverlay.classList.remove("active");
    document.body.style.overflow = ""; // Scroll'u geri aç
  });

  // Overlay'a tıklama olayı ekle (resim dışına tıklandığında kapat)
  fullscreenOverlay.addEventListener("click", (e) => {
    if (e.target === fullscreenOverlay) {
      fullscreenOverlay.classList.remove("active");
      document.body.style.overflow = ""; // Scroll'u geri aç
    }
  });

  // ESC tuşuna basıldığında kapat
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fullscreenOverlay.classList.contains("active")) {
      fullscreenOverlay.classList.remove("active");
      document.body.style.overflow = ""; // Scroll'u geri aç
    }
    
    // Sol/Sağ ok tuşları ile gezinme
    if (fullscreenOverlay.classList.contains("active")) {
      if (e.key === "ArrowLeft") {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        showFullscreenImage(currentImageIndex);
      } else if (e.key === "ArrowRight") {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        showFullscreenImage(currentImageIndex);
      }
    }
  });

  // Dokunmatik kaydırma desteği
  let touchStartX = 0;
  let touchEndX = 0;

  fullscreenOverlay.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  fullscreenOverlay.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Sola kaydırma - sonraki resim
      currentImageIndex = (currentImageIndex + 1) % allImages.length;
      showFullscreenImage(currentImageIndex);
    } else if (touchEndX > touchStartX + 50) {
      // Sağa kaydırma - önceki resim
      currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
      showFullscreenImage(currentImageIndex);
    }
  }
});