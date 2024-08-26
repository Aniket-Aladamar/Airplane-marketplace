const airplaneData = [
  {
    model: "Airplane Model A",
    price: "$1,000,000",
    image:
      "https://www.evojets.com/wp-content/uploads/2019/08/new-private-jet-for-sale.jpg",
  },
  {
    model: "Airplane Model B",
    price: "$800,000",
    image:
      "https://millionplus.com/wp-content/uploads/2023/01/2007-eclipse-500-1.jpg",
  },
  {
    model: "Airplane Model C",
    price: "$600,000",
    image:
      "https://www.findaircraftforsale.com/wp-content/uploads/2021/09/FA-Aircraft-Sales-D-EOPG-1-min-400x300.jpg",
  },
  {
    model: "Airplane Model D",
    price: "$950,000",
    image:
      "https://cfsjets.com/wp-content/uploads/2020/04/Duke-ext-head-on.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const airplaneContainer = document.getElementById("airplane-container");

  airplaneData.forEach((airplane) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <img src="${airplane.image}" alt="${airplane.model}">
            <h2>${airplane.model}</h2>
            <p>Price: ${airplane.price}</p>
            <button class="buy-now">Buy Now</button>
            <button class="view-details">View Details</button>
        `;

    airplaneContainer.appendChild(card);
  });
});
