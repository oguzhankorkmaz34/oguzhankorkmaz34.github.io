document.addEventListener("DOMContentLoaded", () => {
    // Get product slug from URL (filename without .html)
    const currentUrl = window.location.pathname;
    const filename = currentUrl.split("/").pop();
    const productSlug = filename.replace(".html", "");
  
    // Get product data from localStorage
    const artificialProducts = JSON.parse(localStorage.getItem("artificialProducts") || "[]");
    const liveFlowers = JSON.parse(localStorage.getItem("liveFlowers") || "[]");
    const pots = JSON.parse(localStorage.getItem("pots") || "[]");
    const allProducts = JSON.parse(localStorage.getItem("allProducts") || "[]");
  
    // Find the current product
    let currentProduct = null;
    let productCategory = "";
  
    // Search in all categories
    for (const category of [
      { name: "artificialProducts", data: artificialProducts },
      { name: "liveFlowers", data: liveFlowers },
      { name: "pots", data: pots }
    ]) {
      const found = category.data.find(product => product.slug === productSlug);
      if (found) {
        currentProduct = found;
        productCategory = category.name;
        break;
      }
    }
  
    // If product not found, redirect to products page
    if (!currentProduct) {
      window.location.href = "products.html";
      return;
    }
  
    // Set page title
    document.title = currentProduct.name;
  
    // Update breadcrumb
    document.getElementById("product-breadcrumb").textContent = currentProduct.name;
  
    // Update product info
    document.getElementById("product-title").textContent = currentProduct.name;
    document.getElementById("product-price").textContent = currentProduct.price;
  
    // Create product images (3 images for each product)
    const productImages = [
      currentProduct.image,
      currentProduct.image.replace("FFFFFF", "EEEEEE"), // Slightly different version
      currentProduct.image.replace("FFFFFF", "DDDDDD")  // Another slightly different version
    ];
  
    // Update main image
    const mainImage = document.getElementById("main-image");
    mainImage.src = productImages[0];
    mainImage.alt = currentProduct.name;
  
    // Create thumbnails
    const thumbnailContainer = document.getElementById("thumbnail-container");
    productImages.forEach((image, index) => {
      const thumbnail = document.createElement("div");
      thumbnail.className = `thumbnail ${index === 0 ? "active" : ""}`;
      thumbnail.setAttribute("data-index", index);
      
      const img = document.createElement("img");
      img.src = image;
      img.alt = `${currentProduct.name} - Görsel ${index + 1}`;
      
      thumbnail.appendChild(img);
      thumbnailContainer.appendChild(thumbnail);
      
      // Thumbnail click event
      thumbnail.addEventListener("click", () => {
        // Update main image
        mainImage.src = image;
        
        // Update active thumbnail
        document.querySelectorAll(".thumbnail").forEach(thumb => {
          thumb.classList.remove("active");
        });
        thumbnail.classList.add("active");
      });
    });
  
    // Add product features
    const productFeatures = document.getElementById("product-features");
    
    // Sample features based on product category
    let features = "";
    
    if (productCategory === "artificialProducts") {
      features = `
        <ul>
          <li><strong>Malzeme:</strong> Yüksek kalite ipek kumaş ve doğal ahşap gövde</li>
          <li><strong>Yükseklik:</strong> 55-60 cm</li>
          <li><strong>UV Koruma:</strong> Güneş ışınlarına dayanıklı</li>
          <li><strong>Kullanım:</strong> İç ve dış mekan</li>
          <li><strong>Bakım:</strong> Toz alınması yeterli, su gerekmez</li>
          <li><strong>Saksı:</strong> Dekoratif saksı dahil</li>
          <li><strong>Garanti:</strong> 1 yıl</li>
          <li><strong>Stok Durumu:</strong> Stokta Var</li>
        </ul>
      `;
    } else if (productCategory === "liveFlowers") {
      features = `
        <ul>
          <li><strong>Tür:</strong> Doğal çiçek</li>
          <li><strong>Bakım:</strong> Düzenli sulama gerektirir</li>
          <li><strong>Işık İhtiyacı:</strong> Orta seviye ışık</li>
          <li><strong>Saksı:</strong> Dekoratif saksı dahil</li>
          <li><strong>Ömür:</strong> Düzenli bakımla uzun ömürlü</li>
          <li><strong>Kullanım:</strong> İç mekan</li>
          <li><strong>Özellik:</strong> Hava temizleme özelliği</li>
        </ul>
      `;
    } else if (productCategory === "pots") {
      features = `
        <ul>
          <li><strong>Malzeme:</strong> Yüksek kalite seramik/ahşap/metal</li>
          <li><strong>Boyut:</strong> 25-30 cm çap</li>
          <li><strong>Yükseklik:</strong> 20-25 cm</li>
          <li><strong>Drenaj:</strong> Drenaj delikli</li>
          <li><strong>Kullanım:</strong> İç ve dış mekan</li>
          <li><strong>Dayanıklılık:</strong> Uzun ömürlü, çizilmeye dayanıklı</li>
        </ul>
      `;
    }
    
    productFeatures.innerHTML = features;
  
    // Setup WhatsApp button
    document.getElementById("whatsapp-button").addEventListener("click", () => {
      const message = `Merhaba, ${currentProduct.name} ürünü hakkında bilgi almak istiyorum.`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/+905001234567?text=${encodedMessage}`, "_blank");
    });
  
    // Setup fullscreen gallery
    const fullscreenButton = document.getElementById("fullscreen-button");
    const fullscreenGallery = document.getElementById("fullscreen-gallery");
    const closeFullscreenButton = document.getElementById("close-fullscreen");
    const galleryImageContainer = document.getElementById("gallery-image-container");
    const galleryDots = document.getElementById("gallery-dots");
    const galleryPrev = document.getElementById("gallery-prev");
    const galleryNext = document.getElementById("gallery-next");
    
    let currentGalleryIndex = 0;
  
    // Create gallery images
    productImages.forEach((image, index) => {
      // Create gallery image
      const galleryImage = document.createElement("div");
      galleryImage.className = "gallery-image";
      
      const img = document.createElement("img");
      img.src = image;
      img.alt = `${currentProduct.name} - Görsel ${index + 1}`;
      
      galleryImage.appendChild(img);
      galleryImageContainer.appendChild(galleryImage);
      
      // Create gallery dot
      const dot = document.createElement("button");
      dot.className = `gallery-dot ${index === 0 ? "active" : ""}`;
      dot.setAttribute("data-index", index);
      
      galleryDots.appendChild(dot);
      
      // Dot click event
      dot.addEventListener("click", () => {
        currentGalleryIndex = index;
        updateGallery();
      });
    });
  
    // Open fullscreen gallery
    fullscreenButton.addEventListener("click", () => {
      fullscreenGallery.classList.add("active");
      document.body.classList.add("no-scroll");
      
      // Set current gallery index based on current main image
      const currentMainImage = mainImage.src;
      currentGalleryIndex = productImages.findIndex(image => image === currentMainImage);
      if (currentGalleryIndex === -1) currentGalleryIndex = 0;
      
      updateGallery();
    });
  
    // Close fullscreen gallery
    closeFullscreenButton.addEventListener("click", () => {
      fullscreenGallery.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  
    // Gallery navigation
    galleryPrev.addEventListener("click", () => {
      currentGalleryIndex = (currentGalleryIndex - 1 + productImages.length) % productImages.length;
      updateGallery();
    });
  
    galleryNext.addEventListener("click", () => {
      currentGalleryIndex = (currentGalleryIndex + 1) % productImages.length;
      updateGallery();
    });
  
    // Update gallery
    function updateGallery() {
      galleryImageContainer.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
      
      // Update active dot
      document.querySelectorAll(".gallery-dot").forEach((dot, index) => {
        dot.classList.toggle("active", index === currentGalleryIndex);
      });
    }
  
    // Keyboard navigation for gallery
    document.addEventListener("keydown", (e) => {
      if (!fullscreenGallery.classList.contains("active")) return;
      
      if (e.key === "ArrowLeft") {
        currentGalleryIndex = (currentGalleryIndex - 1 + productImages.length) % productImages.length;
        updateGallery();
      } else if (e.key === "ArrowRight") {
        currentGalleryIndex = (currentGalleryIndex + 1) % productImages.length;
        updateGallery();
      } else if (e.key === "Escape") {
        fullscreenGallery.classList.remove("active");
        document.body.classList.remove("no-scroll");
      }
    });
  
    // Touch swipe for gallery
    let touchStartX = 0;
    let touchEndX = 0;
    
    galleryImageContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    galleryImageContainer.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left - next image
        currentGalleryIndex = (currentGalleryIndex + 1) % productImages.length;
        updateGallery();
      } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right - previous image
        currentGalleryIndex = (currentGalleryIndex - 1 + productImages.length) % productImages.length;
        updateGallery();
      }
    }
  
    // Similar products
    const similarProductsContainer = document.getElementById("similar-products-container");
    
    // Get 4 random products from the same category (excluding current product)
    const categoryProducts = 
      productCategory === "artificialProducts" ? artificialProducts :
      productCategory === "liveFlowers" ? liveFlowers : pots;
    
    const otherProducts = categoryProducts.filter(product => product.id !== currentProduct.id);
    
    // Shuffle and take first 4 (or less if not enough products)
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffled.slice(0, 4);
    
    // Add similar products
    selectedProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "similar-product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="similar-product-image">
        <div class="similar-product-title">${product.name}</div>
      `;
      
      // Click event to navigate to product
      card.addEventListener("click", () => {
        window.location.href = `${product.slug}.html`;
      });
      
      similarProductsContainer.appendChild(card);
    });
  
    // Create a sample product detail page for each product
    // This would normally be done server-side, but for this example we'll use localStorage
    // to store the product data and then load it on the product detail page
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Get the product features div
    const productFeatures = document.getElementById('product-features');
    
    if (productFeatures) {
      // Get all list items and select the last one (stock status in your HTML)
      const listItems = productFeatures.querySelectorAll('li');
      const stockItem = listItems[listItems.length - 1]; // Get the last list item
      
      if (stockItem) {
        // Check if it contains "Stokta Var" or "Stokta Yok"
        const text = stockItem.textContent;
        
        if (text.includes('Stokta Var')) {
          stockItem.style.color = 'green';
        } else if (text.includes('Stokta Yok')) {
          stockItem.style.color = 'red';
        }
      }
    }
  });