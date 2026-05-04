

// allheart set value and increase the result also 

const allheart = document.getElementsByClassName("heart");

for (let heart of allheart) {
  heart.addEventListener("click", function () {
    const heartcount = document.getElementById('heartCounter');
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
    // 1. Find the card where this button 
    const card = copy.closest(".bg-white");

    // 2. Get the code number inside  card
    const codeElement = card.querySelector(".code");
    const codeText = codeElement.textContent.trim();

    // 3. Copy the code to clipboard
    navigator.clipboard.writeText(codeText).then(() => {
      console.log("Copied:", codeText);
    }).catch(err => {
      console.error("Failed to copy:", err);
    });

    // 4. Increase the counter
    let currentCount = parseInt(copyCounter.textContent);
    currentCount++;
    copyCounter.textContent = currentCount;
  });
}




// Get coin holder span
const coinHolder = document.getElementById("coin-holder");

// Get all call buttons
const callButtons = document.querySelectorAll(".call-btn");

// Get call history container
const historyContainer = document.querySelector(".space-y-3");

// Add click event to each call button
callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let currentCoins = parseInt(coinHolder.textContent);

    if (currentCoins < 20) {
      alert("Not enough coins!");
      return;
    }

    // Deduct 20 coins
    currentCoins -= 20;
    coinHolder.textContent = currentCoins;

    // Get card info
    const card = btn.closest(".bg-white"); // parent card
    const title = card.querySelector(".title").textContent;
    const code = card.querySelector(".code").textContent;

    // Show alert with details
      alert(`📞 Calling : ${title}\nCode: ${code}\nRemaining Coins: ${currentCoins}`);
 

    // Add to history
    const now = new Date();
    const dateTime = now.toLocaleString();

    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-between items-center  bg-gray-100 shadow rounded-lg p-3";

    historyItem.innerHTML = `
      <div>
        <p class="font-semibold text-sm">${title} </p>
        <p>code : ${code} </p>
        <p class="text-xs text-gray-500">Called on ${dateTime}</p>
      </div>
      <span class="text-xs text-gray-400">-20 coins</span>
    `;

    historyContainer.prepend(historyItem); // add at top
  });
});

// clear the history from here 

const clearBtn = document.getElementById("all-clear");

clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = ""; 
});

