        document.addEventListener('DOMContentLoaded', function() {
            const date = new Date().toLocaleDateString('es-ES');
            const footers = document.querySelectorAll('.footer');
            footers.forEach(footer => {
                const p = document.createElement('p');
                p.innerHTML = `<strong>Fecha:</strong> ${date}`;
                p.style.fontSize = '11px';
                p.style.color = '#888';
                footer.insertBefore(p, footer.firstChild);
            });
        });