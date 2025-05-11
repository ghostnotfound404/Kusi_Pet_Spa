// footer.js - Para efectos en el footer
document.addEventListener('DOMContentLoaded', function() {
    const termsLink = document.getElementById('terms-link');
    
    if (termsLink) {
        // Efecto hover mejorado
        termsLink.addEventListener('mouseenter', function() {
            this.style.fontWeight = '600';
        });
        
        termsLink.addEventListener('mouseleave', function() {
            this.style.fontWeight = 'normal';
        });
        
        // Opcional: Abrir en nueva pestaña con control
        termsLink.addEventListener('click', function(e) {
            // Si quieres que siempre abra en nueva pestaña:
            // e.preventDefault();
            // window.open(this.href, '_blank');
        });
    }
});