function clicaremostrargradu() {
    const Botaogradu = document.getElementById('botaogradu');
    const Conteudoprincipal = document.getElementById('conteudoprincipal');
    const Conteudogradu = document.getElementById('conteudogradu');
    const Conteudoskills = document.getElementById('conteudoskills');

    if (Conteudogradu.style.display === 'none') {
        Conteudogradu.style.display = 'block';
        Conteudoprincipal.style.display = 'none';
        Conteudoskills.style.display = 'none';
        Botaogradu.classList.remove('botaogradu');
    } else {
        Conteudogradu.style.display = 'none';
        Conteudoprincipal.style.display = 'block';
        Conteudoskills.style.display = 'none';
        Botaogradu.classList.add('botaogradu');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const Botaogradu = document.getElementById('botaogradu');
    Botaogradu.addEventListener('click', clicaremostrargradu);
});

function clicaremostrarskills() {
    const Botaoskills = document.getElementById('botaoskills');
    const Conteudoskills = document.getElementById('conteudoskills');
    const Conteudoprincipal = document.getElementById('conteudoprincipal');
    const Conteudogradu = document.getElementById('conteudogradu');

    if (Conteudoskills.style.display === 'none') {
        Conteudoskills.style.display = 'block';
        Conteudoprincipal.style.display = 'none';
        Conteudogradu.style.display = 'none'
    } else {
        Conteudoprincipal.style.display = 'block';
        Conteudogradu.style.display = 'none';
        Conteudoskills.style.display = 'none';
        Botaoskills.classList.add('botaoskills');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const Botaoskills = document.getElementById('botaoskills');
    Botaoskills.addEventListener('click', clicaremostrarskills);
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
    });
})