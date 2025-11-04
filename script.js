// Pegando o botão e o menu
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// Ao clicar no botão, o menu aparece ou desaparece
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
