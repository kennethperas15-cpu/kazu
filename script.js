
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});


document.getElementById('shopBtn').addEventListener('click', () => {
  alert("Redirecting to our perfume collection...");
});
