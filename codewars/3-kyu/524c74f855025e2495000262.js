// Solution for the 524c74f855025e2495000262 problem at CodeWars: Texas Hold'em Hands (3 kyu)

const order = Object.freeze({'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14});
const reverseOrder = Object.fromEntries(
    Object.entries(order).map(([k, v]) => [v, k])
);

function hand(holeCards, communityCards) {
    const groupedHand = group([...holeCards, ...communityCards])
    const ranks = groupedHand.getRanks()

    let result;
    if ((result = hasStraightFlush(groupedHand)).status) {
        return { type: 'straight-flush', ranks: result.ranks }
    } else if ((result = hasFourOfAKind(groupedHand)).status) {
        return { type: 'four-of-a-kind', ranks: result.ranks }
    } else if ((result = hasFullHouse(groupedHand)).status) {
        return { type: 'full house', ranks: result.ranks }
    } else if ((result = hasFlush(groupedHand)).status) {
        return { type: 'flush', ranks: result.ranks }
    } else if ((result = hasStraight(groupedHand)).status) {
        return { type: 'straight', ranks: result.ranks }
    } else if ((result = hasThreeOfAKind(groupedHand)).status) {
        return { type: 'three-of-a-kind', ranks: result.ranks }
    } else if ((result = hasTwoPair(groupedHand)).status) {
        return { type: 'two pair', ranks: result.ranks }
    } else if ((result = hasPair(groupedHand)).status) {
        return { type: 'pair', ranks: result.ranks }
    }

    return { type:"nothing", ranks };
}

function hasStraightFlush(hand){
    // If more than 2 kinds in hand, no royal flush possible
    if(hand.kindsInHand(hand) > 3) {
        return { status: false, ranks: hand.getRanks() }
    }

    const kinds = Object.keys(hand.byKind)
    const kindWithFiveNumbers = kinds.filter(kind => hand.byKind[kind].length >= 5)

    // If no kind has 5 cards, no royal flush possible
    if(kindWithFiveNumbers.length === 0){
        return { status: false, ranks: hand.getRanks() }
    }

    // If numbers in kind with five numbers aren't consecutive, then no royal flush is possible
    const consecutiveNumbers = listHasFiveConsecutiveNumbers(hand.byKind[kindWithFiveNumbers[0]])
    if(!consecutiveNumbers){
        return { status: false, ranks: consecutiveNumbers }
    }

    // If all validations pass, we have a straight flush
    return { status: true, ranks: consecutiveNumbers }

}

function hasFourOfAKind(hand){


    // If a hand has more than three numbers, it cannot be a four of a kind
    if(hand.numbersInHand() > 4) {
        return { status: false, ranks: hand.getRanks() }
    }

    const numbers = Object.keys(hand.byNumber)
    const numberWithFourKinds = numbers.find(number => hand.byNumber[number].length >= 4)

    // If there's no kind with four numbers, then no Four Of A Kind possible
    if(!numberWithFourKinds) {
        return { status: false, ranks: hand.getRanks() }
    }

    return {
        status: true,
        ranks: [numberWithFourKinds, ...numbers.filter(n => n !== numberWithFourKinds).sort((a,b) => sortByRank(a,b)).slice(0,1)]
    }
}

function hasFullHouse(hand){
    // If a hand has more than three different numbers, it cannot be a full house
    if(hand.numbersInHand() > 4) {
        return { status: false, ranks: hand.getRanks() }
    }

    const numbers = Object.keys(hand.byNumber)
    const numbersWithThreeOfAKind = numbers.filter(number => hand.byNumber[number].length === 3)

    // If there's no kind with three numbers, then no Full House is possible
    if(numbersWithThreeOfAKind < 1) {
        return { status: false, ranks: hand.getRanks() }
    }

    const numbersWithTwoOfAKind = numbers.filter(number => hand.byNumber[number].length === 2)

    // If there's no kind with two numbers, we cannot generate a full house and we may be in presence of a
    // Three of a Kind hand
    if(numbersWithTwoOfAKind.length < 1 && numbersWithThreeOfAKind < 2) {
        return { status: false, ranks: hand.getRanks() }
    }

    return {
        status: true,
        ranks: [
            ...numbersWithThreeOfAKind
                .sort((a,b) => sortByRank(a,b)),
            ...numbersWithTwoOfAKind
                .filter(n => !numbersWithThreeOfAKind.includes(n))
                .sort((a,b) => sortByRank(a,b))
                .slice(0,1)
        ]
    }
}

function hasFlush(hand){
    const kinds = Object.keys(hand.byKind)
    const kindWithFiveNumbers = kinds.filter(kind => hand.byKind[kind].length >= 5).pop()

    // If no hand with five or more numbers, then a flush isn't possible
    if(!kindWithFiveNumbers){
        return { status: false, ranks: hand.getRanks() }
    }

    // Else, a flush is present
    return { status: true, ranks: hand.byKind[kindWithFiveNumbers].sort((a,b) => sortByRank(a,b)).slice(0,5) }

}

function hasStraight(hand) {
    const numbers = Object.keys(hand.byNumber)

    // If the list doesn't have five consecutive numbers, then a straight isn't possible
    const consecutiveNumbers = listHasFiveConsecutiveNumbers(numbers)
    if(!consecutiveNumbers){
        return { status: false, ranks: consecutiveNumbers }
    }

    // Else, we have a straight
    return { status: true, ranks: consecutiveNumbers }
}

function hasThreeOfAKind(hand){
    const numbers = Object.keys(hand.byNumber)
    const numberWithThreeKinds = numbers.filter(number => hand.byNumber[number].length === 3).pop()

    // If there's no kind with three numbers, then no Three Of A Kind possible
    // at the point of evaluation of this function, we know no kind has four numbers
    if(!numberWithThreeKinds) {
        return { status: false, ranks: hand.getRanks() }
    }

    // Else, we know we have a three of a kind. We don't evaluate for duplicates in the ranks since
    // at this point we know we don't have a Full House
    return {
        status: true,
        ranks: [
            numberWithThreeKinds,
            ...numbers.filter(n => n !== numberWithThreeKinds)
                .sort((a,b) => sortByRank(a,b))]
            .slice(0,3)
    }
}

function hasTwoPair(hand) {
    const numbers = Object.keys(hand.byNumber)
    const numbersWithPair = numbers
        .filter(number => hand.byNumber[number].length === 2)
        .sort((a,b) => sortByRank(a,b)).slice(0,2)

    // If there's no kind with two numbers, then no Two Pair Of A Kind possible
    // at the point of evaluation of this function, we know no kind has four numbers
    if(numbersWithPair.length < 2) {
        return { status: false, ranks: hand.getRanks() }
    }

    // Else, we know we have a pair of two kind each. We don't evaluate for duplicates in the ranks since
    // at this point we know we don't have a three of a kind
    return {
        status: true,
        ranks: [
            ...numbersWithPair.sort((a,b) => sortByRank(a,b)),
            ...numbers.filter(n => !numbersWithPair.includes(n))
                .sort((a,b) => sortByRank(a,b))]
            .slice(0,3)
    }
}

function hasPair(hand) {
    const numbers = Object.keys(hand.byNumber)
    const numberWithPair = numbers.filter(number => hand.byNumber[number].length === 2).pop()

    // If there's no kind with two numbers, then no Pair possible
    // at the point of evaluation of this function, we know no kind has three numbers
    if(!numberWithPair) {
        return { status: false, ranks: hand.getRanks() }
    }

    // Else, we know we have a pair of a kind. We don't evaluate for duplicates in the ranks since
    // at this point we know we don't have a three of a kind
    return {
        status: true,
        ranks: [
            numberWithPair,
            ...numbers.filter(n => n !== numberWithPair)
                .sort((a,b) => sortByRank(a,b))]
            .slice(0,4)
    }
}

// Utility functions
function listHasFiveConsecutiveNumbers(numbers) {
    const numbersByDescOrder = numbers.map(n => order[n]).sort((a,b) => b - a)

    let count = 1;
    let start = 0
    let end = null
    for (let i = 1; i < numbersByDescOrder.length; i++) {
        if (numbersByDescOrder[i - 1] - numbersByDescOrder[i] === 1) {
            count++;
            if (count === 5) {
                end = i + 1
                return numbersByDescOrder.slice(start, end).map(number => reverseOrder[number])
            };
        } else {
            start = i
            count = 1;
        }
    }

    return false;

}

function sortByRank(a, b) {
    return order[b] - order[a];
}

function group(hand) {
    return hand.reduce((accum, value) => {
        const [number, kind] = [value.slice(0,-1), value.slice(-1)]

        if(!accum.byKind[kind]){
            accum.byKind[kind] = []
        }

        accum.byKind[kind].push(number)

        if(!accum.byNumber[number]){
            accum.byNumber[number] = []
        }

        accum.byNumber[number].push(kind)
        accum.byNumber[number].sort((a,b) => sortByRank(a,b))

        return accum

    }, {
        byKind: {},
        byNumber: {},
        kindsInHand() { return Object.keys(this.byKind).length },
        numbersInHand() { return Object.keys(this.byNumber).length },
        getRanks() { return Array.from(new Set(Object.keys(this.byNumber).sort((a,b) => sortByRank(a,b)).slice(0,5))) }
    })
}