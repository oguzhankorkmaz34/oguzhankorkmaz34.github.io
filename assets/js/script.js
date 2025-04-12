document.addEventListener("DOMContentLoaded", () => {
  // Ürün verileri - her kategori için ürünler
  let artificialProducts = [
    {
      id: 1,
      name: "6 Dallı Orkide Gümüş Saksıda",
      image: "/images/6-dalli-beyaz-orkide-gumus-saksida-3.webp",
      price: "₺1.299,99",
      slug: "6-dalli-orkide-gumus-saksida",
    },
    {
      id: 2,
      name: "6 Dallı Orkide Gold Saksıda",
      image: "/images/6-dalli-beyaz-orkide-gold-saksida-1.webp",
      price: "₺899,99",
      slug: "6-dalli-orkide-gold-saksida",
    },
    {
      id: 3,
      name: "6 Dallı Mor Orkide Gümüş Saksıda",
      image: "/images/6-dalli-mor-orkide-gumus-saksida-1.webp",
      price: "₺249,99",
      slug: "6-dalli-mor-orkide-gumus-saksida",
    },
    {
      id: 4,
      name: "6 Dallı Mor Orkide Gold Saksıda",
      image: "/images/6-dalli-mor-orkide-gold-saksida-1.webp",
      price: "₺749,99",
      slug: "6-dalli-mor-orkide-gold-saksida",
    },
    {
      id: 5,
      name: "Yapay Manolya Çiçeği Fiber Saksıda",
      image: "/images/fiber-saksida-manolya-1.webp",
      price: "₺129,99",
      slug: "yapay-manolya-cicegi-fiber-saksida",
    },
    {
      id: 6,
      name: "2 Dallı Mor Yapay Orkide  Fiber Saksıda",
      image: "images/fiber-saksida-mor-orkide-aranjmani-2-dalli-1.webp",
      price: "₺349,99",
      slug: "yapay-2-dalli-mor-orkide-fiber-saksida",
    },
    {
      id: 7,
      name: "Tek Dallı Beyaz Orkide Siyah Saksıda",
      image: "images/siyah-saksida-orkide-tek-dalli-beyaz-1.webp",
      price: "₺279,99",
      slug: "yapay-tek-dalli-beyaz-orkide-fiber-saksida",
    },
    {
      id: 8,
      name: "Tek Dallı Beyaz Orkide Gümüş Saksıda",
      image: "images/6dalli-yapay-orkide-beyaz-gumus-saksida-1.webp",
      price: "₺199,99",
      slug: "yapay-tek-dalli-beyaz-orkide-gumus-saksida",
    },
    {
      id: 9,
      name: "Pembe Kutuda Gül Aranjmanı",
      image: "images/pembe-kutuda-gul-aranjmani-1.webp",
      price: "₺749,99",
      slug: "pembe-kutuda-gul-aranjmani",
    },
    {
      id: 10,
      name: "Bordo Kutuda Gül Aranjmanı",
      image: "images/bordo-kutuda-gul-aranjmani-1.webp",
      price: "₺749,99",
      slug: "bordo-kutuda-gul-aranjmani",
    },
    {
      id: 11,
      name: "Turkuaz Kutuda Gül Aranjmanı",
      image: "images/turkuvaz-kutuda-mavi-gul-aranjmani-1.webp",
      price: "₺749,99",
      slug: "turkuaz-kutuda-gul-aranjmani",
    },
    {
      id: 12,
      name: "Kalpli Kutuda Hediyelik Gül Aranjmanı",
      image: "images/kalpli-kutuda-hediyelik-gul-aranjmani-1.webp",
      price: "₺749,99",
      slug: "kalpli-kutuda-hediyelik-gul-aranjmani",
    },
  ]

  let liveFlowers = [
    {
      id: 1,
      name: "Guzmanya Çiçeği",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Kirmizi+Gul",
      price: "₺249,99",
      slug: "guzmanya-gul-buketi",
    },
  
  ]

  let pots = [
    {
      id: 1,
      name: "Eskitme Gold Metal Çanta Saksı",
      image: "images/eskitme-canta-kelebek-saksi-1.webp",
      price: "₺199,99",
      slug: "seramik-saksi-seti",
    },
    {
      id: 2,
      name: "Parlak Gold Metal Çanta Saksı",
      image: "images/gold-canta-aslan-desenli-saksi-1.webp",
      price: "₺249,99",
      slug: "ahsap-saksi",
    },
    {
      id: 3,
      name: "Parlak Gold Geniş Kelebek Saksı",
      image: "images/gold-kelebek-saksi-genis-1.webp",
      price: "₺179,99",
      slug: "beton-saksi",
    },
    {
      id: 4,
      name: "Parlak Gümüş Geniş Kelebek Saksı",
      image: "images/gumus-kelebek-saksi-genis-1.webp",
      price: "₺149,99",
      slug: "terracotta-saksi",
    },
    {
      id: 5,
      name: "Eskitme Gold Geniş Kelebek Saksı",
      image: "images/eskitme-kelebek-saksi-genis-1.webp",
      price: "₺229,99",
      slug: "metal-saksi-standi",
    },
    {
      id: 6,
      name: "Parlak Gold Metal Çanta Saksı",
      image: "images/gold-canta-aslan-desenli-saksi-1.webp",
      price: "₺159,99",
      slug: "hasir-saksi",
    },
    {
      id: 7,
      name: "Parlak Gümüş Metal Çanta Saksı",
      image: "images/gumus-canta-aslan-desenli-saksi-1.webp",
      price: "₺189,99",
      slug: "duvar-saksisi",
    },
    {
      id: 8,
      name: "Eskitme Gold Metal Kayık Saksı",
      image: "images/eskitme-kayik-desenli-saksi-1.webp",
      price: "₺219,99",
      slug: "cam-teraryum",
    },
    {
      id: 9,
      name: "Parlak Gold Dövme Saksı",
      image: "images/gold-parlak-dovme-saksi-1.webp",
      price: "₺219,99",
      slug: "cam-teraryum",
    },
    {
      id: 10,
      name: "Parlak Gümüş Dövme Saksı",
      image: "images/gumus-parlak-dovme-sakski-1.webp",
      price: "₺219,99",
      slug: "cam-teraryum",
    },
  ]

  // İstanbul'da olan kullanıcılar için ek olarak ücretsiz kargo ve kapıda ödeme sunulacak ürünlerin ID'leri
  const istanbulFreeShippingIds = {
    artificialProducts: [1], // İstanbul'da ek olarak ücretsiz kargo sunulacak yapay çiçek ürünleri
    liveFlowers: [3, 4, 7, 8], // İstanbul'da ek olarak ücretsiz kargo sunulacak canlı çiçek ürünleri
    pots: [1, 2, 5, 6, 9, 10] // İstanbul'da ek olarak ücretsiz kargo sunulacak saksı ürünleri
  };

  const istanbulPaymentAtDoorIds = {
    artificialProducts: [], // İstanbul'da ek olarak kapıda ödeme sunulacak yapay çiçek ürünleri
    liveFlowers: [1, 3, 5, 7], // İstanbul'da ek olarak kapıda ödeme sunulacak canlı çiçek ürünleri
    pots: [2, 3, 5, 6, 9, 10] // İstanbul'da ek olarak kapıda ödeme sunulacak saksı ürünleri
  };

  // Her durumda (İstanbul dışında da) ücretsiz kargo ve kapıda ödeme sunulacak ürünlerin ID'leri
  const alwaysFreeShippingIds = {
    artificialProducts: [], // Her zaman ücretsiz kargo sunulacak yapay çiçek ürünleri
    liveFlowers: [], // Her zaman ücretsiz kargo sunulacak canlı çiçek ürünleri
    pots: [] // Her zaman ücretsiz kargo sunulacak saksı ürünleri
  };

  const alwaysPaymentAtDoorIds = {
    artificialProducts: [], // Her zaman kapıda ödeme sunulacak yapay çiçek ürünleri
    liveFlowers: [2, 6], // Her zaman kapıda ödeme sunulacak canlı çiçek ürünleri
    pots: [4, 8] // Her zaman kapıda ödeme sunulacak saksı ürünleri
  };

  // İstanbul kontrolü için API'yi çağır
  async function checkUserLocation() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const locationData = await response.json();
      
      // Kullanıcı İstanbul'da mı kontrol et
      const isUserInIstanbul = locationData.city?.toLowerCase() === "istanbul" || 
                              locationData.region?.toLowerCase() === "istanbul";
      
      // Bilgi mesajını göster
      updateLocationInfo(isUserInIstanbul);
      
      // Ürün verilerini güncelle
      updateProductsWithShippingInfo(isUserInIstanbul);
      
    } catch (error) {
      console.error("Konum bilgisi alınamadı:", error);
      // Hata durumunda varsayılan olarak sadece her zaman gösterilecek etiketleri göster
      updateLocationInfo(false);
      updateProductsWithShippingInfo(false);
    }
  }

  // Konum bilgisine göre bilgi mesajını güncelle
  function updateLocationInfo(isUserInIstanbul) {
    // Tüm tab içeriklerindeki shipping-info alanlarını güncelle
    const shippingInfoElements = document.querySelectorAll('.shipping-info');
    
    shippingInfoElements.forEach(infoElement => {
      if (isUserInIstanbul) {
        infoElement.innerHTML = `
          <div class="info-item">
            <i class="fas fa-truck"></i>
            <span>İstanbul içi seçili ürünlerde ücretsiz kargo</span>
          </div>
          <div class="info-item">
            <i class="fas fa-credit-card"></i>
            <span>İstanbul içi seçili ürünlerde kapıda ödeme imkanı</span>
          </div>
        `;
      } else {
        infoElement.innerHTML = `
          <div class="info-item">
            <i class="fas fa-truck"></i>
            <span>Seçili ürünlerde ücretsiz kargo</span>
          </div>
          <div class="info-item">
            <i class="fas fa-credit-card"></i>
            <span>Seçili ürünlerde kapıda ödeme imkanı</span>
          </div>
        `;
      }
    });
  }

  // Ürün verilerini güncelle
  function updateProductsWithShippingInfo(isUserInIstanbul) {
    // Yapay çiçek ürünlerini güncelle
    artificialProducts = artificialProducts.map(product => {
      return {
        ...product,
        freeShipping: alwaysFreeShippingIds.artificialProducts.includes(product.id) || 
                     (isUserInIstanbul && istanbulFreeShippingIds.artificialProducts.includes(product.id)),
        paymentAtDoor: alwaysPaymentAtDoorIds.artificialProducts.includes(product.id) || 
                      (isUserInIstanbul && istanbulPaymentAtDoorIds.artificialProducts.includes(product.id))
      };
    });

    // Canlı çiçek ürünlerini güncelle
    liveFlowers = liveFlowers.map(product => {
      return {
        ...product,
        freeShipping: alwaysFreeShippingIds.liveFlowers.includes(product.id) || 
                     (isUserInIstanbul && istanbulFreeShippingIds.liveFlowers.includes(product.id)),
        paymentAtDoor: alwaysPaymentAtDoorIds.liveFlowers.includes(product.id) || 
                      (isUserInIstanbul && istanbulPaymentAtDoorIds.liveFlowers.includes(product.id))
      };
    });

    // Saksı ürünlerini güncelle
    pots = pots.map(product => {
      return {
        ...product,
        freeShipping: alwaysFreeShippingIds.pots.includes(product.id) || 
                     (isUserInIstanbul && istanbulFreeShippingIds.pots.includes(product.id)),
        paymentAtDoor: alwaysPaymentAtDoorIds.pots.includes(product.id) || 
                      (isUserInIstanbul && istanbulPaymentAtDoorIds.pots.includes(product.id))
      };
    });

    // Tüm ürünleri birleştir
    const allProducts = [...artificialProducts, ...liveFlowers, ...pots];
    
    // İlk tab'ı göster
    document.getElementById("tab-btn-1").classList.add("active");
    document.getElementById("tab-content-1").classList.add("active");
    renderProducts(artificialProducts, "tab-content-1");
    
    // Ürün verilerini localStorage'a kaydet
    localStorage.setItem("artificialProducts", JSON.stringify(artificialProducts));
    localStorage.setItem("liveFlowers", JSON.stringify(liveFlowers));
    localStorage.setItem("pots", JSON.stringify(pots));
    localStorage.setItem("allProducts", JSON.stringify(allProducts));
  }

  // Ürünleri sayfaya ekle
  function renderProducts(productArray, containerId) {
    const container = document.querySelector(`#${containerId} .product-grid`);
    if (!container) return;

    container.innerHTML = "";

    productArray.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.setAttribute("data-product-id", product.id);
      productCard.setAttribute("data-product-slug", product.slug);
      productCard.setAttribute("data-category", containerId);

      // Modernize edilmiş ürün kartı HTML'i
      productCard.innerHTML = `
      <div class="product-image-container">
        ${
          product.freeShipping
            ? `
          <div class="product-badge free-shipping-badge">
            <i class="fas fa-truck"></i>
            <span>Kargo Ücretsiz</span>
          </div>
        `
            : ""
        }
        ${
          product.paymentAtDoor
            ? `
          <div class="product-badge payment-badge">
            <i class="fas fa-credit-card"></i>
            <span>Kapıda Ödeme</span>
          </div>
        `
            : ""
        }
        <img src="${product.image}" alt="${product.name}" class="product-image">
      </div>
      <div class="product-title">${product.name}</div>
    `;

      // Ürün detay sayfasına yönlendirme
      productCard.addEventListener("click", () => {
        window.location.href = `${product.slug}.html`;
      });

      container.appendChild(productCard);
    });
  }

  // Tab değiştirme işlevi
  const tabButtons = document.querySelectorAll(".category-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  // Her bir tab butonuna tıklama olayı ekle
  document.getElementById("tab-btn-1").addEventListener("click", function () {
    showTab("tab-content-1", this);
    renderProducts(artificialProducts, "tab-content-1");
  });

  document.getElementById("tab-btn-2").addEventListener("click", function () {
    showTab("tab-content-2", this);
    renderProducts(liveFlowers, "tab-content-2");
  });

  document.getElementById("tab-btn-3").addEventListener("click", function () {
    showTab("tab-content-3", this);
    renderProducts(pots, "tab-content-3");
  });

  // Tab gösterme fonksiyonu
  function showTab(tabId, button) {
    // Tüm tabları gizle ve butonların aktif sınıfını kaldır
    tabContents.forEach((tab) => tab.classList.remove("active"));
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // Seçilen tabı göster ve butonu aktif yap
    document.getElementById(tabId).classList.add("active");
    button.classList.add("active");
  }

  // Konum kontrolünü başlat
  checkUserLocation();
});