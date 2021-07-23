window.onscroll = function() {
    if(window.pageYOffset>=100){
      $('#navigation').addClass('nav_attach')
      $('#modal').hide()
    }else{
      $('#navigation').removeClass('nav_attach')
    }
  };
