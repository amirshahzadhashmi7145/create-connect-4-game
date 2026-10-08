const { displayWinCondition } = require('../scripts/gameMode');

describe('Winning Condition Tests', () => {
    let originalAppendChild;
    let originalRemove;

    beforeAll(() => {
        // Mock appendChild and remove to test DOM manipulation
        originalAppendChild = Document.prototype.appendChild;
        originalRemove = Element.prototype.remove;
        Document.prototype.appendChild = jest.fn();
        Element.prototype.remove = jest.fn();
    });

    afterAll(() => {
        // Restore original methods
        Document.prototype.appendChild = originalAppendChild;
        Element.prototype.remove = originalRemove;
    });

    test('should display confetti effect', () => {
        displayWinCondition(10);
        expect(document.body.appendChild).toHaveBeenCalled();
        const confettiDiv = document.body.appendChild.mock.calls[0][0];
        expect(confettiDiv.className).toBe('confetti');
    });

    test('should display score count', () => {
        displayWinCondition(10);
        const scoreDisplay = document.body.appendChild.mock.calls[1][0];
        expect(scoreDisplay.className).toBe('score-display');
        expect(scoreDisplay.innerText).toBe('Score: 10');
    });
});