async function carregarConteudo(url) {
    await fetch(url)
    .then(response => response.text())
    .then(html => document.querySelector('main').innerHTML = html)
    .catch(error => console.error(error));
}

class MobileNavbar {
    constructor(MobileMenu, navList, navLinks) {
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.MobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.MobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.MobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();




