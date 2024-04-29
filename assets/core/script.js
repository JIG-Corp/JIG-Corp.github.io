
window.addEventListener('DOMContentLoaded', event => {

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