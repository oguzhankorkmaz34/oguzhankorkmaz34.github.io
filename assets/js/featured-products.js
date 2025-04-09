document.addEventListener("DOMContentLoaded", () => {
    // Featured products data
    const featuredProducts = [
      {
        id: 1,
        name: "6 Dallı Orkide Gümüş Saksıda",
        image: "imgatıcak/6dalli-yapay-orkide-beyaz-gumus-saksida-1.jpg",
        description: "Premium kalite, gerçekçi görünüm",
        slug: "6-dalli-orkide-gumus-saksida"
      },
      {
        id: 2,
        name: "Tek Dallı Beyaz Orkide Gümüş Dövme Saksıda",
        image: "imgatıcak/6dalli-yapay-orkide-beyaz-gumus-saksida-1.jpg",
        description: "Premium kalite, gerçekçi görünüm",
        slug: "tek-dalli-beyaz-orkide-gumus-dovme-saksida"
      },
      {
        id: 3,
        name: "Yapay Bonsai Ağacı",
        image: "imgatıcak/6dalli-yapay-orkide-beyaz-gumus-saksida-1.jpg",
        description: "Premium kalite, gerçekçi görünüm",
        slug: "yapay-bonsai-agaci"
      },
      {
        id: 4,
        name: "Yapay Kaktüs Seti",
        image: "imgatıcak/6dalli-yapay-orkide-beyaz-gumus-saksida-1.jpg",
        description: "Premium kalite, gerçekçi görünüm",
        slug: "yapay-kaktus-seti"
      }
    ];
  
    // Render featured products
    const featuredProductsContainer = document.getElementById("featured-products");
    
    if (featuredProductsContainer) {
      featuredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.setAttribute("data-product-slug", product.slug);
        
        productCard.innerHTML = `
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
        `;
        
        // Add click event to navigate to product detail page
        productCard.addEventListener("click", () => {
          window.location.href = `${product.slug}.html`;
        });
        
        featuredProductsContainer.appendChild(productCard);
      });
    }
  
    // Store product data in localStorage for product detail pages
    localStorage.setItem("featuredProducts", JSON.stringify(featuredProducts));
  });