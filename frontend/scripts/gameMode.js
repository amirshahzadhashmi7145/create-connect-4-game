let currentMode = '1-player';

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

module.exports = { switchGameMode, displayWinCondition };