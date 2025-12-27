const API_STATUS_URL = "http://159.65.128.165:9598/status";

const minigames = ["Survival Vanilla", "SkyWars", "Crystal pvp", "Duels", "Survival economy", "Tnt Run"];
let index = 0;
const minigameText = document.getElementById("minigameText");

setInterval(() => {
  index = (index + 1) % minigames.length;
  minigameText.textContent = minigames[index];
}, 1500);

async function updateServerStatus() {
  const serverStatus = document.getElementById("serverStatus");
  try {
    const res = await fetch(API_STATUS_URL);
    const data = await res.json();
    serverStatus.textContent = `Status: ${data.online ? "Online" : "Offline"}`;
  } catch (err) {
    serverStatus.textContent = "Status: Error";
  }
}

updateServerStatus();

setInterval(updateServerStatus, 30000);
