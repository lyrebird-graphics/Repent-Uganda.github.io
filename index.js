const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});



const alertBox = document.querySelector(".alert-box");
const closeBtn = document.querySelector(".close-btn");

setTimeout(() => {
  alertBox.classList.add("show");
}, 1000);

closeBtn.addEventListener("click", () => {
  alertBox.classList.remove("show");
});


function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('show');
}

function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Get the modal and close button elements
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}


portfolioItems.forEach((item, index) => {
    if (index % 2 === 0) {
        item.classList.add('animate-slide-in');
    } else {
        item.classList.add('animate-slide-out');
    }
});


// Add animation classes to portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach((item, index) => {
    if (index % 2 === 0) {
        item.classList.add('animate-slide-in');
    } else {
        item.classList.add('animate-slide-out');
    }
});


