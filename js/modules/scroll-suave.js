export default function initScrollSuave() {
  const linksIntenos = document.querySelectorAll('[data-menu="suave"] a[href^="#]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //forma alternativa
    //const topo = section.offsetTop;
    // window.scrollTo({
    //  top: topo,
    //  behavior: 'smooth',
    // });
  }



  linksIntenos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
