const balance = document.getElementById('balance'), 
      money_plus = document.getElementById('money-plus'), 
      money_minus = document.getElementById('money-minus'), 
      list = document.getElementById('list'), 
      form = document.getElementById('form');

let transactions = [];

form.addEventListener('submit', e => {
    e.preventDefault();

    const amount = +document.getElementById('amount').value,
          text = document.getElementById('text').value;

    transactions.push({ amount, text });
    
    list.innerHTML += `<li class="${amount < 0 ? 'minus' : 'plus'}">${text} <span>${amount < 0 ? '-' : '+'}$${Math.abs(amount)}</span></li>`;
    
    const income = transactions.filter(t => t.amount > 0).reduce((a, b) => a + b.amount, 0).toFixed(2),
          expense = transactions.filter(t => t.amount < 0).reduce((a, b) => a + b.amount, 0).toFixed(2),
          total = (income - Math.abs(expense)).toFixed(2);

    balance.textContent = `Total Money Left: $${total}`;
    money_plus.textContent = `Income: +$${income}`;
    money_minus.textContent = `Expenses: -$${Math.abs(expense)}`;

    form.reset();
});
