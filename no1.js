/**
 * Menjumlahkan dua angka dengan elemen pertama dari sebuah array.
 *
 * @param {number} a Angka pertama.
 * @param {number} b Angka kedua.
 * @param {number[]} c Array angka; hanya elemen pertama (`c[0]`) yang dipakai.
 * @returns {number} Hasil a + b + c[0].
 * @throws {TypeError} Bila `c` bukan array (null atau undefined).
 */
function call(a, b, c) {
  if (!Array.isArray(c)) {
    throw new TypeError("Parameter 'c' must be an array");
  }
  return a + b + c[0];
}