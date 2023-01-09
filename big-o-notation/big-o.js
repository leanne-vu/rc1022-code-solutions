/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 1 * 1 = O(1)
    if (!seen[word]) {              // 1 * n = O(1)
      seen[word] = true;            // 3 * n = O(3n) ~= 0(n)
      unique[unique.length] = word; // 3 * n = O(3n) ~= 0(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 1 * 1 = O(1)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 2 * n * n = O(2n^2) ~= 0(n^2)
      c++                           // 2 * n * n = O(2n^2) ~=0(n^2)
    ) {
      const comparing = words[c];   // 1 * 1 = O(1)
      if (comparing === word) {     // 3 * n = O(3n) ~= 0(n)
        isUnique = false;           // 3 * 1 = O(3) ~= 0(1)
      }
    }
    if (isUnique) {                 // 4 * n = O(4n) ~= 0(n)
      unique[unique.length] = word; // 4 * 1 = O(4) ~= 0(1)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
