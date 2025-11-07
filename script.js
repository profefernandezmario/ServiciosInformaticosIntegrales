document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp Button
    document.getElementById('btnWhatsApp').addEventListener('click', function () {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !servicio || !mensaje) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        const texto = `Hola, me interesa el servicio de ${servicio}. Mi nombre es ${nombre}, mi email es ${email}. Mensaje: ${mensaje}`;
        const encodedText = encodeURIComponent(texto);
        const phoneNumber = "5493621234567"; // Reemplazar con número real
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    });

    // Email Button
    document.getElementById('btnEmail').addEventListener('click', function () {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !servicio || !mensaje) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        const subject = `Consulta sobre ${servicio} - ${nombre}`;
        const body = `Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0AServicio: ${servicio}%0D%0AMensaje: ${mensaje}`;
        window.location.href = `mailto:info@serviciosinformaticos.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
});