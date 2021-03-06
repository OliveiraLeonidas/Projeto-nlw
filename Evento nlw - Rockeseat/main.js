/* # basic of javascript #

char -- string --> cadeia de caracteres
number -- 123

variaveis do tipo constantes
const name = "Leonidas"
const name "Leividy" --> isto não vai funcionar 

variaveis que mudam:
var name = "Leonidas"
var name = "Leividy" --> vai imprimir Leividy no console

alert("No navegador")
console.log("No terminal")

*/
/*  abre e fecha o menu quando clicar no icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*========= Testemonials carousel sliders swiper ========================== */

const swiper = new Swiper('.swiper-container', {
  slidePerView: 2,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidePerView: 2,
      setWrapperSize: true
    }
  }
})

/* scrollReveal - revelar quando der scroll na página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .text, #home .image, 
  #about .image, #about .text, 
  #services header, #services .card, 
  #testemonials header, #testemonials .testemonials, 
  #contact .text, #contact .links, 
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*======= back to top  ================= */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* abrir menu se seção visivel na página */

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSelection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
      querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove(
        'active'
      )
    }
  }
}

/*==== When scroll ==================== */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSelection()
})
