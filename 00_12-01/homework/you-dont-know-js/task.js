const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

// продолжаем покупать телефоны пока у нас остаются деньги
while (amount < bank_balance) {
	// покупаем новый телефон!
	amount = amount + PHONE_PRICE;

	// можем ли мы позволить себе аксессуар?
	if (amount < SPENDING_THRESHOLD) {
		amount = amount + ACCESSORY_PRICE;
	}
}

// не забудьте заплатить налог
amount = amount + calculateTax( amount );

console.log(
	"Ваша покупка: " + formatAmount( amount )
);
// Ваша покупка: $334.76

// можете ли вы в самом деле позволить себе эту покупку?
if (amount > bank_balance) {
	console.log(
		"Вы не можете позволить себе эту покупку. :("
	);
}
// Вы не можете позволить себе эту покупку. :(