let currentMode = '1-player';

let playerStats = { wins: 0, losses: 0 };

function switchGameMode() {
    currentMode = currentMode === '1-player' ? '2-player' : '1-player';
    displayConfirmationMessage();
}

function displayConfirmationMessage() {
    const message = `Game mode switched to ${currentMode}`;
    alert(message);
}

function displayWinCondition(score) {
    // Display confetti effect
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000); // Remove confetti after 3 seconds

    // Display score count
    const scoreDisplay = document.createElement('div');
    scoreDisplay.className = 'score-display';
    scoreDisplay.innerText = `Score: ${score}`;
    document.body.appendChild(scoreDisplay);
}

function recordWin() {
    playerStats.wins += 1;
    displayPlayerStats(); // Update stats display immediately
}

function recordLoss() {
    playerStats.losses += 1;
    displayPlayerStats(); // Update stats display immediately
}

function displayPlayerStats() {
    const statsDisplay = document.createElement('div');
    statsDisplay.className = 'stats-display';
    statsDisplay.innerText = `Wins: ${playerStats.wins}, Losses: ${playerStats.losses}`;
    document.body.appendChild(statsDisplay);
}

module.exports = { switchGameMode, displayWinCondition, recordWin, recordLoss, displayPlayerStats };