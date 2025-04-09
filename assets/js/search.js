document.addEventListener("DOMContentLoaded", () => {
    // Get search elements
    const searchInput = document.getElementById("product-search");
    const clearSearchBtn = document.getElementById("clear-search");
    const searchResults = document.getElementById("search-results");
    
    // Get all products from localStorage
    const artificialProducts = JSON.parse(localStorage.getItem("artificialProducts") || "[]");
    const liveFlowers = JSON.parse(localStorage.getItem("liveFlowers") || "[]");
    const pots = JSON.parse(localStorage.getItem("pots") || "[]");
    
    // Combine all products and add category information
    const allProducts = [
        ...artificialProducts.map(product => ({...product, category: "Yapay Çiçek ve Ağaç"})),
        ...liveFlowers.map(product => ({...product, category: "Canlı Çiçek"})),
        ...pots.map(product => ({...product, category: "Saksı"}))
    ];
    
    // Search functionality
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Show/hide clear button
        if (searchTerm.length > 0) {
            clearSearchBtn.classList.add("visible");
        } else {
            clearSearchBtn.classList.remove("visible");
        }
        
        // Filter products
        if (searchTerm.length >= 2) {
            const filteredProducts = allProducts.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
            
            displaySearchResults(filteredProducts, searchTerm);
        } else {
            searchResults.classList.remove("active");
            searchResults.innerHTML = "";
        }
    });
    
    // Clear search
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearSearchBtn.classList.remove("visible");
        searchResults.classList.remove("active");
        searchResults.innerHTML = "";
        searchInput.focus();
    });
    
    // Display search results
    function displaySearchResults(products, searchTerm) {
        searchResults.innerHTML = "";
        
        if (products.length > 0) {
            products.slice(0, 5).forEach(product => {
                const resultItem = document.createElement("div");
                resultItem.className = "search-result-item";
                resultItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="search-result-image">
                    <div class="search-result-info">
                        <div class="search-result-name">${highlightSearchTerm(product.name, searchTerm)}</div>
                        <div class="search-result-category">${product.category}</div>
                    </div>
                `;
                
                resultItem.addEventListener("click", () => {
                    window.location.href = `${product.slug}.html`;
                });
                
                searchResults.appendChild(resultItem);
            });
            
            searchResults.classList.add("active");
        } else {
            searchResults.innerHTML = `<div class="no-results">Sonuç bulunamadı</div>`;
            searchResults.classList.add("active");
        }
    }
    
    // Highlight search term in results
    function highlightSearchTerm(text, searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<span style="background-color: rgba(71, 95, 69, 0.2); font-weight: bold;">$1</span>');
    }
    
    // Close search results when clicking outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".search-wrapper")) {
            searchResults.classList.remove("active");
        }
    });
    
    // Prevent form submission
    document.addEventListener("submit", (event) => {
        if (event.target.contains(searchInput)) {
            event.preventDefault();
        }
    });
    
    // Handle keyboard navigation
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            searchResults.classList.remove("active");
        }
    });
});