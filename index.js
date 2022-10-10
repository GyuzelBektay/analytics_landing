document.querySelector(".nav_burger").addEventListener("click", () => {
  document.querySelector(".nav_links").classList.toggle("show");
  document.querySelector(".nav_links_wrap").classList.toggle("show_links");
});

const cardsContainer = document.querySelector(".container");
const cards = document.querySelectorAll(".pricing_plan_card");
const centerCard = document.getElementById("main_card");

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    if (cardsContainer.clientWidth == 375) {
      centerCard.innerHTML = e.target.innerHTML;
    }
    setTimeout(() => {
      centerCard.innerHTML = `
      <div class="pricing_plan_card" id="main_card">
                <h3>Standard</h3>
                <p>up to 20 people</p>
                <hr class="line" />
                <p class="plan_price">$99</p>
                <p>per month</p>
                <button class="btn pricing_btn">Order</button>
      </div>
      `;
    }, 1000);
  });
});
