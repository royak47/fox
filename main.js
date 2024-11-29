let balance = 0;

// Function to handle task completion
function completeTask(points, redirectUrl) {
    balance += points;
    alert(`Congratulations! You earned ${points} points.`);
    updateBalance();
    if (redirectUrl) {
        window.location.href = redirectUrl;
    }
}

// Update balance in real-time
function updateBalance() {
    const balanceElement = document.getElementById("balance");
    if (balanceElement) {
        balanceElement.textContent = balance;
    }
}

// Initialize balance (can fetch from server if needed)
document.addEventListener("DOMContentLoaded", () => {
    updateBalance();
});
