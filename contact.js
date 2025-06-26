// Sample data for cards
const cardData = [
    { name: "Kampala Main Altar", phone: "+256787309094", image: "kma.png" },
    { name: "Holy-sum Altar", phone: "+256787309094", image: "holy-sum.png" },
    { name: "Seeta Altar", phone: "+256787309094", image: "seeta altar.png" },
    { name: "Kakiri Altar", phone: "+256787309094", image: "kakiri.png" },
    { name: "Ntenjeru Altar", phone: "+256787309094", image: "ntenjeru altar.png" },
    { name: "Nyenjje Altar", phone: "+256787309094", image: "nyenjje altar.png" },
    { name: "Busana Altar", phone: "+256787309094", image: "busana altar.png" },
];

let currentPage = 1;
const cardsPerPage = 3;

function generateCard(card) {
    return `
        <div class="card">
            <img src="${card.image}" alt="Landscape Image" class="card-image">
            <div class="card-content">
                <h2 class="card-name">${card.name}</h2>
                <p class="card-contact">Phone: ${card.phone}</p>
                <button class="call-button"><a href="tel:${card.phone}">call now</a></button>
            </div>
        </div>
    `;
}

function renderCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const cardsToRender = cardData.slice(start, end);
    cardsToRender.forEach((card) => {
        cardContainer.innerHTML += generateCard(card);
    });
    document.getElementById('pageNumber').innerText = Page ;{currentPage};
}

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCards();
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentPage < Math.ceil(cardData.length / cardsPerPage)) {
        currentPage++;
        renderCards();
    }
}); 

renderCards();