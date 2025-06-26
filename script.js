document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('submitBtn');
  const errorMsg = document.getElementById('error');

  btn.addEventListener('click', () => {
    const pw = document.getElementById('pw').value;
    if (pw === 'appelsap') {
      // Correct – go to menu.html
      window.location.href = 'menu.html';
    } else {
      errorMsg.style.display = 'block';
    }
  });
});
