// Solution for the 5a360620f28b82a711000047 problem at CodeWars: Define a card suit (8 kyu)

function defineSuit(card) {
    const suit = card.slice(-1)

    const suitMap = {
        '♣': 'clubs',
        '♠': 'spades',
        '♦': 'diamonds',
        '♥': 'hearts'
    }

    return suitMap[suit]
}