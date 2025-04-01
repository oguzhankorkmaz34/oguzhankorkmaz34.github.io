document.addEventListener("DOMContentLoaded", () => {
  // Ürün verileri - her kategori için ürünler
  const artificialProducts = [
    {
      id: 1,
      name: "6 Dallı Orkide Gümüş Saksıda",
      image: "imgatıcak/6dalli-yapay-orkide-beyaz-gumus-saksida-1.jpg",
      price: "₺1.299,99",
      slug: "6-dalli-orkide-gumus-saksida"
    },
    {
      id: 2,
      name: "Tek Dallı Beyaz Orkide Gümüş Dövme Saksıda",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Orkide+2",
      price: "₺899,99",
      slug: "tek-dalli-beyaz-orkide-gumus-dovme-saksida"
    },
    {
      id: 3,
      name: "Tek Dallı Beyaz Orkide Siyah Saksıda",
      image: "https://via.placeholder.com/400/343D33/FFFFFF?text=Orkide+3",
      price: "₺249,99",
      slug: "tek-dalli-beyaz-orkide-siyah-saksida"
    },
    {
      id: 4,
      name: "Yapay Bambu Ağacı",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Bambu+Agaci",
      price: "₺749,99",
      slug: "yapay-bambu-agaci"
    },
    {
      id: 5,
      name: "Yapay Lavanta Buketi",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Lavanta+Buketi",
      price: "₺129,99",
      slug: "yapay-lavanta-buketi"
    },
    {
      id: 6,
      name: "Yapay Bonsai Ağacı",
      image: "https://via.placeholder.com/400/343D33/FFFFFF?text=Bonsai+Agaci",
      price: "₺349,99",
      slug: "yapay-bonsai-agaci"
    },
    {
      id: 7,
      name: "Yapay Orkide",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Yapay+Orkide",
      price: "₺279,99",
      slug: "yapay-orkide"
    },
    {
      id: 8,
      name: "Yapay Kaktüs Seti",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Kaktus+Seti",
      price: "₺199,99",
      slug: "yapay-kaktus-seti"
    }
  ];

  const liveFlowers = [
    {
      id: 1,
      name: "Kırmızı Gül Buketi",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Kirmizi+Gul",
      price: "₺249,99",
      slug: "kirmizi-gul-buketi"
    },
    {
      id: 2,
      name: "Orkide Aranjmanı",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Orkide+Aranjmani",
      price: "₺349,99",
      slug: "orkide-aranjmani"
    },
    {
      id: 3,
      name: "Papatya Buketi",
      image: "https://via.placeholder.com/400/343D33/FFFFFF?text=Papatya+Buketi",
      price: "₺179,99",
      slug: "papatya-buketi"
    },
    {
      id: 4,
      name: "Renkli Lale Buketi",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Lale+Buketi",
      price: "₺199,99",
      slug: "renkli-lale-buketi"
    },
    {
      id: 5,
      name: "Teraryum",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Teraryum",
      price: "₺299,99",
      slug: "teraryum"
    },
    {
      id: 6,
      name: "Bonzai Ağacı",
      image: "https://via.placeholder.com/400/343D33/FFFFFF?text=Bonzai+Agaci",
      price: "₺449,99",
      slug: "bonzai-agaci"
    },
    {
      id: 7,
      name: "Areka Palmiyesi",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Areka+Palmiyesi",
      price: "₺399,99",
      slug: "areka-palmiyesi"
    },
    {
      id: 8,
      name: "Lilyum Buketi",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Lilyum+Buketi",
      price: "₺279,99",
      slug: "lilyum-buketi"
    }
  ];

  const pots = [
    {
      id: 1,
      name: "Seramik Saksı Seti",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Seramik+Saksi+Seti",
      price: "₺199,99",
      slug: "seramik-saksi-seti"
    },
    {
      id: 2,
      name: "Ahşap Saksı",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Ahsap+Saksi",
      price: "₺249,99",
      slug: "ahsap-saksi"
    },
    {
      id: 3,
      name: "Beton Saksı",
      image: "https://via.placeholder.com/400/343D33/FFFFFF?text=Beton+Saksi",
      price: "₺179,99",
      slug: "beton-saksi"
    },
    {
      id: 4,
      name: "Terracotta Saksı",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Terracotta+Saksi",
      price: "₺149,99",
      slug: "terracotta-saksi"
    },
    {
      id: 5,
      name: "Metal Saksı Standı",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Metal+Saksi+Standi",
      price: "₺229,99",
      slug: "metal-saksi-standi"
    },
    {
      id: 6,
      name: "Hasır Saksı",
      image: "https://via.placeholder.com/400/343D33/FFFFFF?text=Hasir+Saksi",
      price: "₺159,99",
      slug: "hasir-saksi"
    },
    {
      id: 7,
      name: "Duvar Saksısı",
      image: "https://via.placeholder.com/400/475F45/FFFFFF?text=Duvar+Saksisi",
      price: "₺189,99",
      slug: "duvar-saksisi"
    },
    {
      id: 8,
      name: "Cam Teraryum",
      image: "https://via.placeholder.com/400/5A7A58/FFFFFF?text=Cam+Teraryum",
      price: "₺219,99",
      slug: "cam-teraryum"
    }
  ];

  // Tüm ürünleri birleştir (benzer ürünler için kullanılacak)
  const allProducts = [...artificialProducts, ...liveFlowers, ...pots];

  // Ürünleri sayfaya ekle
  function renderProducts(productArray, containerId) {
    const container = document.querySelector(`#${containerId} .product-grid`);
    if (!container) return; // Container bulunamazsa işlemi durdur

    container.innerHTML = "";

    productArray.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.setAttribute("data-product-id", product.id);
      productCard.setAttribute("data-product-slug", product.slug);
      productCard.setAttribute("data-category", containerId);
      
      productCard.innerHTML = `
        <div class="product-image-container">
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

  // Sayfa yüklendiğinde ilk tab'ı otomatik olarak göster
  document.getElementById("tab-btn-1").classList.add("active");
  document.getElementById("tab-content-1").classList.add("active");
  renderProducts(artificialProducts, "tab-content-1");

  // Ürün verilerini localStorage'a kaydet (ürün detay sayfası için)
  localStorage.setItem("artificialProducts", JSON.stringify(artificialProducts));
  localStorage.setItem("liveFlowers", JSON.stringify(liveFlowers));
  localStorage.setItem("pots", JSON.stringify(pots));
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
});