// Verifica a largura da tela
function verificarLarguraTela() {
    var larguraTela = screen.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Verifica se a largura da tela é menor ou igual a 375px
    if (larguraTela < 768) {
        
        var logo = document.querySelector('.logo-meteora');
        logo.src = 'assets/Mobile/Logo mobile.png';
        
        
    } else if (larguraTela >= 769 && larguraTela < 1440) {
        
        var logo = document.querySelector('.logo-meteora');
        logo.src = 'assets/Tablet/Logo tablet.png';

    } else {
        
        var logo = document.querySelector('.logo-meteora');
        logo.src = 'assets/Desktop/Logo desktop.png';
    }
  }
  
  // Chama a função ao carregar a página e quando a janela é redimensionada
  window.addEventListener("load", verificarLarguraTela);
  window.addEventListener("resize", verificarLarguraTela);
  

