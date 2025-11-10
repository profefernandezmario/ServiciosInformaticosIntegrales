document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp Button
    document.getElementById('btnWhatsApp').addEventListener('click', function () {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !telefono || !servicio || !mensaje) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        const texto = `Hola, me interesa el servicio de ${servicio}. Mi nombre es ${nombre}, mi teléfono es ${telefono}. Mensaje: ${mensaje}`;
        const encodedText = encodeURIComponent(texto);
        const phoneNumber = "5493624096688"; 
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    });

    // Email Button
    document.getElementById('btnEmail').addEventListener('click', function () {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !telefono || !servicio || !mensaje) {
            alert('Por favor, completa todos los campos del formulario.');
            return;
        }

        const subject = `Consulta sobre ${servicio} - ${nombre}`;
        const body = `Nombre: ${nombre}%0D%0ATeléfono: ${telefono}%0D%0AServicio: ${servicio}%0D%0AMensaje: ${mensaje}`;
        window.location.href = `mailto:profe.fernandezmario@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
});