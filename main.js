window.onload = function () {
  let cartList = document.getElementById('cart-items');
  let buttons = document.querySelectorAll('.add-cart');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
      let button = event.currentTarget;
      let card = button.parentElement;

      let img = card.querySelector('img');
      let name = img.alt;
      let select = card.querySelector('select');
      let size = select.value;
      let li = document.createElement('li');
      let text = document.createElement('span');
      text.textContent = name + ' - Size: ' + size;
      let del = document.createElement('button');
      del.textContent = 'Delete';
      del.addEventListener('click', function () {
        del.parentElement.remove();
      });
      li.appendChild(text);
      li.appendChild(del);
      cartList.appendChild(li);
    });
  }
};
