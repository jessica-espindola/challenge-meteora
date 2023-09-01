// Verifica a largura da tela
function verificarLarguraTela() {
    var larguraTela = screen.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    // Verifica se a largura da tela é menor ou igual a 375px
    if (larguraTela <= 768) {
        
        var logo = document.querySelector('.logo-meteora');
        logo.src = 'assets/Mobile/Logo mobile.png';
        var imagemCamisetaCat = document.querySelector('.categoria-img-camiseta');
        var imagemBolsaCat = document.querySelector('.categoria-img-bolsa');
        var imagemCalcadosCat = document.querySelector ('.categoria-img-calcados');
        var imagemCalcasCat = document.querySelector('.categoria-img-calca');
        var imagemCasacosCat = document.querySelector('.categoria-img-casacos');
        var imagemOculosCat = document.querySelector('.categoria-img-oculos');

        imagemCamisetaCat.src = 'assets/Mobile/Categorias/Categoria camiseta.png';
        imagemBolsaCat.src = 'assets/Mobile/Categorias/Categoria Bolsas.png';
        imagemCalcadosCat.src = 'assets/Mobile/Categorias/Categoria calçados.png';
        imagemCalcasCat.src = 'assets/Mobile/Categorias/Categoria calças.png';
        imagemCasacosCat.src = 'assets/Mobile/Categorias/Categoria Casacos.png';
        imagemOculosCat.src = 'assets/Mobile/Categorias/Categoria óculos.png';

    } else if (larguraTela >= 769 && larguraTela <= 1440) {
        
        var logo = document.querySelector('.logo-meteora');
        logo.src = 'assets/Tablet/Logo tablet.png';
        var imagemCamisetaCat = document.querySelector('.categoria-img-camiseta');
        var imagemBolsaCat = document.querySelector('.categoria-img-bolsa');
        var imagemCalcadosCat = document.querySelector ('.categoria-img-calcados');
        var imagemCalcasCat = document.querySelector('.categoria-img-calca');
        var imagemCasacosCat = document.querySelector('.categoria-img-casacos');
        var imagemOculosCat = document.querySelector('.categoria-img-oculos');

        imagemCamisetaCat.src = 'assets/Tablet/Categorias/Categoria camiseta.png';
        imagemBolsaCat.src = 'assets/Tablet/Categorias/Categoria Bolsas.png';
        imagemCalcadosCat.src = 'assets/Tablet/Categorias/Categoria calçados.png';
        imagemCalcasCat.src = 'assets/Tablet/Categorias/Categoria calças.png';
        imagemCasacosCat.src = 'assets/Tablet/Categorias/Categoria casacos.png';
        imagemOculosCat.src = 'assets/Tablet/Categorias/Categoria óculos.png';

    } else {
        
        var logo = document.querySelector('.logo-meteora');
        logo.src = 'assets/Desktop/Logo desktop.png';
        var imagemCamisetaCat = document.querySelector('.categoria-img-camiseta');
        var imagemBolsaCat = document.querySelector('.categoria-img-bolsa');
        var imagemCalcadosCat = document.querySelector ('.categoria-img-calcados');
        var imagemCalcasCat = document.querySelector('.categoria-img-calca');
        var imagemCasacosCat = document.querySelector('.categoria-img-casacos');
        var imagemOculosCat = document.querySelector('.categoria-img-oculos');

        imagemCamisetaCat.src = 'assets/Desktop/Categorias/Categoria camiseta.png';
        imagemBolsaCat.src = 'assets/Desktop/Categorias/Categoria Bolsa.png';
        imagemCalcadosCat.src = 'assets/Desktop/Categorias/Categoria Calçados.png';
        imagemCalcasCat.src = 'assets/Desktop/Categorias/Categoria calça.png';
        imagemCasacosCat.src = 'assets/Desktop/Categorias/Categoria casacos.png';
        imagemOculosCat.src = 'assets/Desktop/Categorias/Categoria óculos.png';
    }
  }
  
  // Chama a função ao carregar a página e quando a janela é redimensionada
  window.addEventListener("load", verificarLarguraTela);
  window.addEventListener("resize", verificarLarguraTela);
  

