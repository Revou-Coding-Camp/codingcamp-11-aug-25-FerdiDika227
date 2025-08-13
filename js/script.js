// Sambutan dinamis
document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcome-text");
    let name = prompt("Masukkan nama Anda:");
    if (name) {
        welcomeText.textContent = `Hi ${name}, Welcome To Website`;
    }
});

// Validasi Form
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
        alert("Semua field harus diisi!");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Format email tidak valid!");
        return;
    }

    let phonePattern = /^[0-9]{10,13}$/;
    if (!phone.match(phonePattern)) {
        alert("Nomor telepon harus 10-13 digit angka!");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h3>Data yang Anda Kirim:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telepon:</strong> ${phone}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
});

// Animasi scroll untuk semua section
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".fade-section");
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});
