(function() {

   var desktopLinks = {
    home: document.querySelector('#desktop-home'),
    about: document.querySelector('#desktop-about'),
    contact: document.querySelector('#desktop-contact'),
    more: document.querySelector('#desktop-more')
  }

  function scroll(sectionTop) {
    window.scroll({
      top: sectionTop,
      behavior: 'smooth'
    })
  }
  
  for (var btn in desktopLinks) {
    desktopLinks[btn].addEventListener('click', function(e) {
      e.preventDefault();

      switch (e.target.innerHTML) {
        case 'home':
          scroll(document.querySelector('#home').offsetTop)
          break;
        case 'about':
          scroll(document.querySelector('#about').offsetTop)
          break;
        case 'contact':
          scroll(document.querySelector('#contact').offsetTop)
          break;
        case 'more':
          scroll(document.querySelector('#more').offsetTop)
          break;
      }
    })
  }
})()
