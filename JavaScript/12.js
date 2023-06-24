
document.addEventListener('DOMContentLoaded', function () {
    let inputElement = document.getElementById('text01');
    let displayElement = document.getElementById('display-text');
  
    inputElement.addEventListener('blur', function () {
      displayElement.textContent = inputElement.value;
    });
  });

  