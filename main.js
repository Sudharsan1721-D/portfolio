window.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.getElementById('animated-name');
  const nameText = "Sudharsan D";
  nameEl.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < nameText.length) {
      nameEl.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeWriter, 120);
    }
  }
  typeWriter();
});