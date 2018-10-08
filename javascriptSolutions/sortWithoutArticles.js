function removeArticle(text) {
  if (text.slice(0,4) === "The ") return text.slice(4);
  if (text.slice(0,3) === "An ") return text.slice(3);
  if (text.slice(0,2) === "A ") return text.slice(2);

  return text;
}

function sortWithoutArticles(a, b) {
  let compareA = removeArticle(a);
  let compareB = removeArticle(b);

  if (compareA[0] > compareB[0]) return 1;
  if (compareA[0] === compareB[0]) return 0;
  if (compareA[0] < compareB[0]) return -1;
}
