let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let name = document.getElementById("expense-name").value;
    let amount = document.getElementById("expense-amount").value;
    let category = document.getElementById("expense-category").value;

    if (name === "" || amount === "") {
        alert("Please enter all fields.");
        return;
    }

    let expense = { name, amount, category };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

function displayExpenses() {
    let expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";
    let totalExpense = 0;

    expenses.forEach((expense, index) => {
        totalExpense += parseInt(expense.amount);
        expenseList.innerHTML += `
            <tr>
                <td>${expense.name}</td>
                <td>₹${expense.amount}</td>
                <td>${expense.category}</td>
                <td><button onclick="deleteExpense(${index})">Delete</button></td>
            </tr>
        `;
    });

    document.getElementById("total-expense").innerText = totalExpense;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

// Display expenses on page load
displayExpenses();
