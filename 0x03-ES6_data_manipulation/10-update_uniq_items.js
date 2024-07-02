/**
 * Updates the quantity to 100 for items with an initial quantity of 1 in the map.
 *
 * @param {Map} map - The map containing items and quantities.
 * @returns {Map} - An updated map with quantities updated to 100 for items
 * with an initial quantity of 1.
 * @throws {Error} - If the argument is not a Map, throws 'Cannot process'.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((quantity, item) => {
    if (quantity === 1) {
      map.set(item, 100);
    }
  });

  return map;
}
