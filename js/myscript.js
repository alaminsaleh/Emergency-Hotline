const allheart = document.getElementsByClassName("heart");

for (let heart of allheart) {
  heart.addEventListener("click", function () {
    const heartcount = document.getElementById("heartCounter");
    let current = parseInt(heartcount.innerText) || 0;
    current++;
    heartcount.innerText = current;
  });
}

// Get all copy buttons
const copyButtons = document.getElementsByClassName("copy-btn");

// Get the counter span
const copyCounter = document.querySelector("h1 span");

for (let copy of copyButtons) {
  copy.addEventListener("click", function () {

    // 1. Find the card
    const card = copy.closest(".bg-white");

    // 2. Get the code text
    const codeElement = card.querySelector(".code");
    const codeText = codeElement.textContent.trim();

    // 3. Copy to clipboard
    navigator.clipboard.writeText(codeText)
      .then(() => {
        // Change button text
        copy.innerText = "Copied";

        // Disable button
        copy.disabled = true;

        // Optional style for disabled state
        copy.classList.add("opacity-50", "cursor-not-allowed");

        // 4. Increase copy counter
        let currentCount = parseInt(copyCounter.textContent) || 0;
        currentCount++;
        copyCounter.textContent = currentCount;
      })
      .catch(err => {
        console.error("Failed to copy:", err);
      });
  });
}

// Coin holder
const coinHolder = document.getElementById("coin-holder");

// All call buttons
const callButtons = document.querySelectorAll(".call-btn");

// Call history container
const historyContainer = document.querySelector(".space-y-3");

callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {

    let currentCoins = parseInt(coinHolder.textContent);

    if (currentCoins < 20) {
      alert("Not enough coins!");
      return;
    }

    // Deduct coins
    currentCoins -= 20;
    coinHolder.textContent = currentCoins;

    // Get card info
    const card = btn.closest(".bg-white");
    const title = card.querySelector(".title").textContent;
    const code = card.querySelector(".code").textContent;

    // 📞 Alert
    alert(`📞 Calling: ${title}\nCode: ${code}\nRemaining Coins: ${currentCoins}`);

    // 🧾 Add to history
    const now = new Date();
    const dateTime = now.toLocaleString();

    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-between items-center bg-gray-100 shadow rounded-lg p-3";

    historyItem.innerHTML = `
      <div>
        <p class="font-semibold text-sm">${title}</p>
        <p>Code: ${code}</p>
        <p class="text-xs text-gray-500">Called on ${dateTime}</p>
      </div>
      <span class="text-xs text-gray-400">-20 coins</span>
    `;

    // Add on top
    historyContainer.prepend(historyItem);
  });
});


const clearBtn = document.getElementById("all-clear");

clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
});



