document.addEventListener("DOMContentLoaded", () => {
  // Form gönderme işlemi
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Form verilerini al
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      }

      // Normalde burada bir API'ye form verilerini gönderirdik
      // Ancak bu örnek için sadece konsola yazdırıyoruz
      console.log("Form verileri:", formData)

      // Başarılı gönderim mesajı
      alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")

      // Formu sıfırla
      contactForm.reset()
    })
  }
})

