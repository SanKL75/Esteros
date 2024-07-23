document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalContainer = document.querySelector('.total');
  const cartToggle = document.getElementById('cart-toggle');
  const cartElement = document.getElementById('cart');
  const cartCount = document.getElementById('cart-count');
  const closeCartButton = document.querySelector('.close-cart');

  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', () => {
          const name = button.getAttribute('data-name');
          const price = parseFloat(button.getAttribute('data-price'));
          addItemToCart(name, price);
      });
  });

  cartToggle.addEventListener('click', () => {
      cartElement.classList.toggle('active');
  });

  closeCartButton.addEventListener('click', () => {
      cartElement.classList.remove('active');
  });

  function addItemToCart(name, price) {
      const item = cart.find(i => i.name === name);
      if (item) {
          item.quantity++;
      } else {
          cart.push({ name, price, quantity: 1 });
      }
      updateCartCount();
      renderCart();
  }

  function removeItemFromCart(name) {
      const itemIndex = cart.findIndex(i => i.name === name);
      if (itemIndex > -1) {
          cart.splice(itemIndex, 1);
      }
      updateCartCount();
      renderCart();
  }

  function updateCartCount() {
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
      cartCount.textContent = count;
  }

  function renderCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)} <button class="remove-item" data-name="${item.name}">Eliminar</button>`;
          cartItemsContainer.appendChild(li);
          total += item.price * item.quantity;
      });
      totalContainer.textContent = total.toFixed(2);

      document.querySelectorAll('.remove-item').forEach(button => {
          button.addEventListener('click', () => {
              const name = button.getAttribute('data-name');
              removeItemFromCart(name);
          });
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalAddToCart = document.getElementById('modal-add-to-cart');
  const span = document.getElementsByClassName('close')[0];

  document.querySelectorAll('.product img').forEach(img => {
      img.addEventListener('click', function() {
          modal.style.display = 'block';
          modalImg.src = this.src;
          modalTitle.textContent = this.parentElement.querySelector('h2').textContent;
          modalPrice.textContent = this.parentElement.querySelector('p').textContent;
          modalAddToCart.dataset.name = this.parentElement.querySelector('button').dataset.name;
          modalAddToCart.dataset.price = this.parentElement.querySelector('button').dataset.price;
      });
  });

  span.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});
// Opcional: animación del botón
var btn = document.querySelector('.whatsapp-btn');

btn.addEventListener('mouseover', function() {
    // Agregar clase de animación cuando se pasa el mouse sobre el botón
    btn.classList.add('animate__animated', 'animate__pulse');
});

btn.addEventListener('animationend', function() {
    // Eliminar la clase de animación al finalizar la animación
    btn.classList.remove('animate__animated', 'animate__pulse');
});