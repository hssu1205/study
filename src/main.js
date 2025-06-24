import Swal from 'sweetalert2';

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("warning-btn");

  button.addEventListener("click", () => {
    Swal.fire({
      icon: 'warning',
      title: 'Warning!',
      text: 'I said do not click this button',
      confirmButtonColor: '#1a2b6b',
      background: '#0a0f2c',
      color: '#ffffff'
    });
  });
});
