export const weakMap = new WeakMap();

/**
 * Tracks the number of times queryAPI is called for each endpoint and throws
 * an error if the load is high.
 *
 * @param {Object} endpoint - The endpoint object with protocol and name properties.
 * @throws {Error} - If the number of queries for the endpoint is >= 5, throws
 * 'Endpoint load is high'.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
