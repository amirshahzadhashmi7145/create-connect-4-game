let currentMode = '1-player';

function switchGameMode() {
    currentMode = currentMode === '1-player' ? '2-player' : '1-player';
    displayConfirmationMessage();
}

function displayConfirmationMessage() {
    const message = `Game mode switched to ${currentMode}`;
    alert(message);
}

module.exports = { switchGameMode };