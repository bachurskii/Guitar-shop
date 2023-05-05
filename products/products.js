class Products {
  render() {
    let htmlCatalog = "";
    catalog.forEach(({ id, name, img, price }) => {
      htmlCatalog += `
      <li class="products-elements">
      <span class="products-elements-name">${name}</span>
      <img class="products-elements-img" src ="${img}" />
      <span class="products-elements-price"> ${price.toLocaleString()}₴</span>
      <button class="products-elements-btn">Добавить в корзину</button>
      </li>
      `;
    });
    const html = `
    <ul class="products-container">
    ${htmlCatalog}
    </ul>`;

    rootProducts.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
