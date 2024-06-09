$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
 
  // video interactivo
  const video = document.getElementById('video');
  const buttons = document.querySelectorAll('.button');

  function skipTo(seconds) {
      video.currentTime = seconds;
      updateButtons(seconds);
  }

  function updateButtons(seconds) {
      buttons.forEach(button => button.classList.remove('active'));
      if (seconds < 10) {
          document.getElementById('btn1').classList.add('active');
      } else if (seconds < 20) {
          document.getElementById('btn2').classList.add('active');
      } else if (seconds < 30) {
          document.getElementById('btn3').classList.add('active');
      } else if (seconds < 40) {
          document.getElementById('btn4').classList.add('active');
      } else {
          document.getElementById('btn5').classList.add('active');
      }
  }

  video.addEventListener('timeupdate', () => {
      updateButtons(video.currentTime);
  });


//tooltip
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  });


  //toast
  const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

 // Función para obtener la hora actual en formato HH:MM AM/PM
 function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // La hora '0' debe ser '12'
    const strTime = hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    return strTime;
  }

  // Función para establecer la hora actual en el elemento small
  function setCurrentTime() {
    document.getElementById('current-time').textContent = getCurrentTime();
  }

  // Llamar a setCurrentTime cuando se carga la página
  document.addEventListener('DOMContentLoaded', function () {
    setCurrentTime();
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  });

