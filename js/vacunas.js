document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de pestañas principales
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Funcionalidad de pestañas del calendario
    const scheduleButtons = document.querySelectorAll('.schedule-btn');
    const scheduleContents = document.querySelectorAll('.schedule-content');
    
    scheduleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones y contenidos
            scheduleButtons.forEach(btn => btn.classList.remove('active'));
            scheduleContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const scheduleId = button.getAttribute('data-schedule');
            document.getElementById(scheduleId).classList.add('active');
        });
    });
    
    // Efecto hover para las tarjetas
    const vaccineCards = document.querySelectorAll('.vaccine-card');
    
    vaccineCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('highlight')) {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 10px 25px rgba(126, 214, 193, 0.2)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('highlight')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            } else {
                this.style.transform = 'translateY(-10px)';
            }
        });
    });
    
    // Animación para el botón CTA
    const ctaBtn = document.querySelector('.cta-btn');
    
    if (ctaBtn) {
        ctaBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        ctaBtn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
});