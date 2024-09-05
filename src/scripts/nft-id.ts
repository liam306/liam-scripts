export const genId = (typeId: number, idx: number) =>
  (1n | (BigInt(typeId) << 4n) | (BigInt(idx) << (4n + 20n))).toString();

// console.log(genId(181910, 21));

export const parseId = (id: string) => {
  const bigIntId = BigInt(id);
  const idx = Number(bigIntId >> (4n + 20n));
  const typeId = Number((bigIntId >> 4n) & ((1n << 20n) - 1n));

  return { typeId, idx };
};

// console.log(parseId('355232097'));
// console.log(parseId('70040225'));
// console.log(parseId('86817441'));
// console.log(parseId('53263025'));
// console.log(parseId('70040241'));
// console.log(parseId('53263041'));
// console.log(parseId('70040257'));
// console.log(parseId('36485841'));
console.log(parseId('103581873'));
