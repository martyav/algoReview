/*
https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/

In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
*/

var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false;
    
  let dividedDeck = new Map();
    
  deck.forEach(cardNumber => {
    if (!dividedDeck.has(cardNumber)) {
      let allInstances = deck.filter(y => y === cardNumber).length;
      dividedDeck.set(cardNumber, allInstances);
    }
  });
    
  let checkAgainst = dividedDeck.get(deck[0]);
  let values = [...dividedDeck.values()];
  let allAreEqual = values.every(x => x === checkAgainst);
  let allAreEven = (values.filter(cardNumber => cardNumber % 2 === 0).length === values.length);

  if (allAreEqual || allAreEven) return true;

  for (let i = 3; i <= Math.max(...values); i++) {
    if (values.filter(cardNumber => cardNumber % i === 0).length === values.length) return true;
  }

  return false;
}
