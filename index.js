//arity

fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50);
pipe(fn3, fn2, fn1)(50);
compose
pipe

const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));
const multipyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multipyBy3, makePositive);


// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

purchasesItem({ name: 'laptop', price: 344 });
function purchasesItem(user, item) {
    return Object.assign({}, user, { purchases: item })
}

function itemToCart() { }

function applyTaxToItems() { }

function buyItem() { }

function emptyCart() { }



// Check repl for finished functions.  
//Implement a cart feature:
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. empty cart