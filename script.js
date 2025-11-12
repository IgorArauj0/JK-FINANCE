const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
const menuIcon = menuBtn.querySelector('i'); // pega o ícone interno

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuBtn.classList.toggle('active');

  // Troca o ícone com base no estado
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});



//CRIAÇÃO DO NOME E IDENTIDADE VISUAL DA MARCA
//CRIAÇÃO LOGO ILLUSTRATOR
//CRIAÇÃO DE MINÍMO 2 BANNER PHOTOSHOP
//CRIAR FIGMA
//CRIAR REPOSITÓRIO E ADD COLABORADORES AO GRUPO
//PÁGINA PRECISA ESTAR FIEL AO FIGMA
//PALETA DE CORES
//FAMÍLIA DE FONTES
//MÍNIMO 2 PÁGINAS TODAS RESPONSIVAS + BÔNUS POR PÁGINAS
//OBTER JAVASCRIPT NO PROJETO