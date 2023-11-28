//-- JavaScript pour afficher la date de la dernière mise à jour dans le pied de page.--
    document.addEventListener("DOMContentLoaded", function () {
        const footer = document.querySelector('.footer');
        const currentDate = new Date().getFullYear();
        footer.innerHTML = `Copyright &copy; ${currentDate} DEVJAM France. Tous droits réservés.`;
    });
