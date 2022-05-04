// adding an if function to make sure the script loads after the document is loaded
if (document.readState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// creating ready function
function ready() {
    // adding remove-btn functions
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    // loop through the buttons
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // function to make sure price is relative to quantity and that qty can't go less than 0
    var quantityInputs = document.getElementsByClassName('item-qty')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        // any time 'input' changes its value, it will fire the quantity changing function
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

// clean up our code by creating a function 
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}

// function to change the quantity
function quantityChanged(event) {
    var input = event.target
    // checking whether the value is valid, > 0 
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

// function to add items to cart
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-name')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-img')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

// function to add item-row to cart
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    // cartRow.classList.add('cart-item')
    var cartItems = document.getElementsByClassName('cart')[0]
    var cartItemNames = cartItems.getElementsByClassName('item-name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Item already added to cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item">
                <figure>
                    <figcaption class="item-title">${title}</figcaption>
                    <div class="item-img">
                        <img src="${imageSrc}" alt="">
                    </div>
                    <figcaption class="item-price">${price}</figcaption>
                </figure>
                <ul class="value-list">
                    <li class="item-values">
                        <label for="item-quantity" class="value-title">Quantity</label>
                        <input type="number" class="item-qty" name="item-quantity" id="item-quantity" value="1" class="input-value">
                    </li>
                    <li class="item-values">
                        <label for="item-size" class="value-title">Size</label>
                        <input type="text" name="item-size" id="item-size" value="M" class="input-value">
                    </li>
                    <li class="remove">
                        <button class="btn btn-remove" role="button">Remove</button>
                    </li>
                </ul>
        </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('item-qty')[0].addEventListener('change', quantityChanged)
}

// function to update the total price
function updateCartTotal() {
    // selecting the first row only -> [0]
    var cartContainer = document.getElementsByClassName('cart')[0]
    var cartRows = cartContainer.getElementsByClassName('cart-item')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('item-price')[0]
        // getElementById only for document not variables
        var quantityElement = document.getElementsByClassName('item-qty')[0]
        // console.log(priceElement, quantityElement)
        // replace(x with y)
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        // price is logged without $ sign
        // console.log(price)
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    // rounding off our total price to the nearest number
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

updateCartTotal()