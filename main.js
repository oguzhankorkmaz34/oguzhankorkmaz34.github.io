document.addEventListener("DOMContentLoaded", () => {
  // Slider işlevselliği
  const slider = document.getElementById("slider")
  const slides = document.querySelectorAll(".slide")
  const dotsContainer = document.getElementById("slider-dots")

  let currentIndex = 0
  let startX
  let touchStartTime
  let touchEndTime
  let isDragging = false
  let animationFrameId = null

  // Slider noktalarını oluştur
  slides.forEach((_, index) => {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    if (index === 0) dot.classList.add("active")
    dot.addEventListener("click", () => goToSlide(index))
    dotsContainer.appendChild(dot)
  })

  const dots = document.querySelectorAll(".dot")

  // Slider navigation arrows
  const prevButton = document.getElementById("slider-prev")
  const nextButton = document.getElementById("slider-next")

  // Add click events to arrows
  prevButton.addEventListener("click", () => {
    clearInterval(slideInterval)
    prevSlide()
    slideInterval = setInterval(nextSlide, 5000)
  })

  nextButton.addEventListener("click", () => {
    clearInterval(slideInterval)
    nextSlide()
    slideInterval = setInterval(nextSlide, 5000)
  })

  // Add hover effect to pause auto-sliding
  slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval)
  })

  slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000)
  })

  // Slider'ı belirli bir slide'a götür
  function goToSlide(index) {
    currentIndex = index
    updateSliderPosition()
    updateDots()
  }

  // Slider position update with requestAnimationFrame for better performance
  function updateSliderPosition() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }

    animationFrameId = requestAnimationFrame(() => {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`
    })
  }

  // Slider noktalarını güncelle
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }

  // Sonraki slide'a geç
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    goToSlide(currentIndex)
  }

  // Önceki slide'a geç
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    goToSlide(currentIndex)
  }

  // Otomatik slider
  let slideInterval = setInterval(nextSlide, 5000)

  // Improved touch handling
  slider.addEventListener("touchstart", handleTouchStart, { passive: true })
  slider.addEventListener("touchmove", handleTouchMove, { passive: false })
  slider.addEventListener("touchend", handleTouchEnd, { passive: true })

  function handleTouchStart(e) {
    clearInterval(slideInterval)
    startX = e.touches[0].clientX
    touchStartTime = new Date().getTime()
    isDragging = true

    // Stop any ongoing transitions for immediate response
    slider.style.transition = "none"
  }

  function handleTouchMove(e) {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const diff = startX - currentX
    const slideWidth = slider.clientWidth

    // Calculate the position but don't allow overscrolling past the first or last slide
    let translateX = -currentIndex * 100 - (diff / slideWidth) * 100

    // Add resistance at the edges
    if (currentIndex === 0 && diff < 0) {
      translateX = -diff / (slideWidth * 3) // Stronger resistance at the beginning
    } else if (currentIndex === slides.length - 1 && diff > 0) {
      translateX = -(slides.length - 1) * 100 - diff / (slideWidth * 3) // Stronger resistance at the end
    }

    // Use requestAnimationFrame for smoother updates
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }

    animationFrameId = requestAnimationFrame(() => {
      slider.style.transform = `translateX(${translateX}%)`
    })

    // Prevent page scrolling when swiping the slider
    e.preventDefault()
  }

  function handleTouchEnd(e) {
    if (!isDragging) return

    // Restore the transition
    slider.style.transition = "transform 0.5s ease"

    touchEndTime = new Date().getTime()
    const touchDuration = touchEndTime - touchStartTime

    const currentX = e.changedTouches[0].clientX
    const diff = startX - currentX
    const slideWidth = slider.clientWidth

    // Adjust threshold based on swipe speed
    const threshold = touchDuration < 250 ? slideWidth * 0.1 : slideWidth * 0.3

    if (diff > threshold && currentIndex < slides.length - 1) {
      nextSlide()
    } else if (diff < -threshold && currentIndex > 0) {
      prevSlide()
    } else {
      // Return to current slide
      goToSlide(currentIndex)
    }

    isDragging = false
    startX = null
    slideInterval = setInterval(nextSlide, 5000)
  }

  // Improved mouse handling
  slider.addEventListener("mousedown", handleMouseDown)
  document.addEventListener("mousemove", handleMouseMove)
  document.addEventListener("mouseup", handleMouseUp)

  function handleMouseDown(e) {
    clearInterval(slideInterval)
    startX = e.clientX
    touchStartTime = new Date().getTime()
    isDragging = true

    // Stop transitions for immediate response
    slider.style.transition = "none"

    // Prevent text selection during drag
    e.preventDefault()
  }

  function handleMouseMove(e) {
    if (!isDragging) return

    const currentX = e.clientX
    const diff = startX - currentX
    const slideWidth = slider.clientWidth

    // Calculate position with edge resistance
    let translateX = -currentIndex * 100 - (diff / slideWidth) * 100

    if (currentIndex === 0 && diff < 0) {
      translateX = -diff / (slideWidth * 3)
    } else if (currentIndex === slides.length - 1 && diff > 0) {
      translateX = -(slides.length - 1) * 100 - diff / (slideWidth * 3)
    }

    // Use requestAnimationFrame for smoother updates
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }

    animationFrameId = requestAnimationFrame(() => {
      slider.style.transform = `translateX(${translateX}%)`
    })
  }

  function handleMouseUp(e) {
    if (!isDragging) return

    // Restore transition
    slider.style.transition = "transform 0.5s ease"

    touchEndTime = new Date().getTime()
    const touchDuration = touchEndTime - touchStartTime

    const currentX = e.clientX
    const diff = startX - currentX
    const slideWidth = slider.clientWidth

    // Adjust threshold based on swipe speed
    const threshold = touchDuration < 250 ? slideWidth * 0.1 : slideWidth * 0.3

    if (diff > threshold && currentIndex < slides.length - 1) {
      nextSlide()
    } else if (diff < -threshold && currentIndex > 0) {
      prevSlide()
    } else {
      // Return to current slide
      goToSlide(currentIndex)
    }

    isDragging = false
    startX = null
    slideInterval = setInterval(nextSlide, 5000)
  }

  // Add this meta tag to the head to prevent scaling issues on mobile
  const metaViewport = document.querySelector('meta[name="viewport"]')
  if (metaViewport) {
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")
  }

  // WhatsApp sipariş butonları için dinamik ürün bilgisi
  const whatsappButtons = document.querySelectorAll(".product-card .btn-whatsapp-small")

  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // Ürün kartını bul
      const productCard = this.closest(".product-card")

      // Ürün adını ve fiyatını al
      const productName = productCard.querySelector("h3").textContent
      const productPrice = productCard.querySelector(".price").textContent

      // Ürün görselinin URL'sini al
      const productImageUrl = productCard.querySelector(".product-image img").src

      // WhatsApp mesajını oluştur
      const message = `${productName} ürünü hakkında bilgi almak istiyorum. Fiyat: ${productPrice}. Görsel: ${productImageUrl}`

      // Mevcut href'i al ve mesaj kısmını güncelle
      const currentHref = this.getAttribute("href")
      const baseUrl = currentHref.split("?")[0]
      const newHref = `${baseUrl}?text=${encodeURIComponent(message)}`

      // Yeni href'i ayarla
      this.setAttribute("href", newHref)
    })
  })

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top")

  // Sayfa kaydırıldığında butonun opaklığını dinamik olarak ayarla
  window.addEventListener("scroll", () => {
    // Sayfanın ne kadar aşağı kaydırıldığını al
    const scrollPosition = window.pageYOffset

    // Maksimum scroll değeri (sayfanın yüksekliği - görünür pencere yüksekliği)
    const maxScroll = document.body.scrollHeight - window.innerHeight

    // Scroll pozisyonuna göre opaklık hesapla (0.2 ile 1 arasında)
    // Minimum 0.2 opaklık veriyoruz ki tamamen kaybolmasın
    let opacity = 0.2 + scrollPosition / 1000

    // Opaklığı 1'den fazla olmaması için sınırla
    opacity = Math.min(opacity, 1)

    if (scrollPosition > 100) {
      // Butonu görünür yap ve opaklığını ayarla
      backToTopButton.classList.add("visible")
      backToTopButton.style.opacity = opacity
    } else {
      // Scroll pozisyonu çok yukarıdaysa butonu gizle
      backToTopButton.classList.remove("visible")
    }
  })

  // Butona tıklandığında sayfanın en üstüne kaydır
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Scroll Reveal Animasyonları
  // Intersection Observer API kullanarak elementlerin görünür olup olmadığını kontrol ediyoruz
  const observerOptions = {
    root: null, // viewport'u kullan
    rootMargin: "0px",
    threshold: 0.15, // elementin %15'i görünür olduğunda tetikle
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element görünür olduğunda active sınıfını ekle
        entry.target.classList.add("active")
        // Bir kez göründükten sonra gözlemlemeyi bırak
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Animasyon uygulanacak tüm elementleri seç ve observer'a ekle
  const revealElements = document.querySelectorAll(".reveal-section, .reveal-left, .reveal-right, .reveal-scale")
  revealElements.forEach((element) => {
    observer.observe(element)
  })
})

