
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
   // Parallax scrolling effect
   window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    document.querySelector('.parallax-container').style.backgroundPositionY = -scrollY * 0.1 + 'px';
  });


    /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


//super formulario

function submitForm() {
  
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.querySelector('textarea[name="message"]').value;

  if (name === "" || email === "" || message === "") {
      alert("Por favor, complete todos los campos del formulario");
      return;
  }
 
  var formData = {
      name: name,
      phone: phone,
      email: email,
      message: message
  };

  fetch('http://jig-corp.github.io/submit', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formData: formData })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status == "success") {
          alert("Mensaje enviado correctamente, lo contactaremos lo mas pronto posible");
        }
        else if (data.status == "server") {
          alert("Hubo un error de conexion, intenta en unos minutos mas");
        }
        else {
          alert("Datos invalidos, por favor revise los campos");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Gracias, lo llamaremos");
    });
}