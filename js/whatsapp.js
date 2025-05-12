document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    // Efecto al hacer hover
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
    
    // Opcional: Contador de clicks (para analytics)
    whatsappBtn.addEventListener('click', function() {
        console.log('WhatsApp button clicked');
        // Aquí puedes agregar tracking de Google Analytics o similar
        // gtag('event', 'click', {'event_category': 'WhatsApp', 'event_label': 'Float Button'});
    });
});