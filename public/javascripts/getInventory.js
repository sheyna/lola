// requires getDiscount.js to work
// var getDiscount = require('./getDiscount');

function getInventory(category) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'javascripts/inventory.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var inventory = JSON.parse(xhr.responseText);
      var statusHTML = '';
      for (var i = 0; i < inventory.length; i++) {
        if (category == 'all' || inventory[i].itemClass == category || (category == 'specials' && inventory[i].special)) {
          statusHTML += '<section class="inventory-listing"><img src="' + inventory[i].imageURL + '" alt="' + inventory[i].itemTitle + '"><h1>' + inventory[i].itemTitle + '</h1><p>$';
            if (inventory[i].special) {
              var priceCalc = getDiscount(inventory[i].itemPrice, inventory[i].discount);
              statusHTML += priceCalc + ' <span class="special">' + inventory[i].discount + '% OFF of $' + (inventory[i].itemPrice.toFixed(2)) + '</span> ';
            } else {
              statusHTML += (inventory[i].itemPrice.toFixed(2));
            }
          statusHTML += '</p></section>';
        }
      }
      document.getElementById('inventory').innerHTML = statusHTML;
    }
  };
  xhr.send();
}

document.getElementById('tops').addEventListener("click", function() {
  getInventory('tops');
}, false);

document.getElementById('dresses').addEventListener("click", function() {
  getInventory('dresses');
}, false);

document.getElementById('shorts').addEventListener("click", function() {
  getInventory('shorts');
}, false);

document.getElementById('pants').addEventListener("click", function() {
  getInventory('pants');
}, false);

document.getElementById('skirts').addEventListener("click", function() {
  getInventory('skirts');
}, false);

document.getElementById('accessories').addEventListener("click", function() {
  getInventory('accessories');
}, false);

document.getElementById('outerwear').addEventListener("click", function() {
  getInventory('outerwear');
}, false);

document.getElementById('shoes').addEventListener("click", function() {
  getInventory('shoes');
}, false);
