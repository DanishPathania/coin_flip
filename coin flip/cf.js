document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
    const flipButton = document.getElementById('flipButton');

    flipButton.addEventListener('click', () => {
        // Flip the coin
        coin.style.transform = 'rotateY(3600deg)';
        
        // Determine the result after a delay
        setTimeout(() => {
            const isHeads = Math.random() < 0.5;
            coin.src = isHeads ? 'heads.jpg' : 'tails.jpg';
            result.textContent = isHeads ? 'It\'s Heads!' : 'It\'s Tails!';
            coin.style.transform = '';
        }, 600); // Match this to the CSS transition duration
    });
});
