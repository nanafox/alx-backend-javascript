/**
 * Creates a groceries list with items and quantities using a Map.
 *
 * @returns {Map} - A Map containing grocery items as keys and their quantities as values.
 */
export default function groceriesList() {
  return new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
}
