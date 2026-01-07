// Smooth Scrolling für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formular Validierung und Absenden
document.getElementById('anmeldeform').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Sammle Formulardaten
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Validierung
    if (!data.vorname || !data.nachname || !data.email || !data.kurs) {
        alert('Bitte füllen Sie alle Pflichtfelder aus.');
        return;
    }
    
    if (!data.datenschutz) {
        alert('Bitte akzeptieren Sie die Datenschutzerklärung.');
        return;
    }
    
    // Hier würde normalerweise die Daten an einen Server gesendet werden
    console.log('Formulardaten:', data);
    
    // Erfolgs-Meldung
    alert('Vielen Dank für Ihre Anmeldung! Wir werden uns in Kürze bei Ihnen melden.');
    
    // Formular zurücksetzen
    this.reset();
});

// Animations beim Scrollen
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Beobachte alle Angebot-Cards
document.querySelectorAll('.angebot-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Beobachte Video-Container
document.querySelectorAll('.video-container').forEach(container => {
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(container);
});

// Navbar Scroll-Effekt
let lastScroll = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// E-Mail Validierung
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        this.style.borderColor = '#ff6b35';
        this.setCustomValidity('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    } else {
        this.style.borderColor = '#ddd';
        this.setCustomValidity('');
    }
});

// Datum-Validierung (nur zukünftige Daten)
document.getElementById('wunschtermin').addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        alert('Bitte wählen Sie ein zukünftiges Datum.');
        this.value = '';
    }
});

// Setze minimales Datum auf heute
const today = new Date().toISOString().split('T')[0];
document.getElementById('wunschtermin').setAttribute('min', today);
