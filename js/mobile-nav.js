document.querySelector('.mobile-nav').addEventListener('click',function(){
  var nav = document.querySelector('.side-bar');
  if( nav.style.display === 'block'){
    nav.style.display = 'none'
  }else{
    nav.style.display = 'block';
    nav.style.position = "fixed"

  }
});

