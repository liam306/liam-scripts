const genId = (typeId: number, idx: number) =>
  (1n | (BigInt(typeId) << 4n) | (BigInt(idx) << (4n + 20n))).toString();

console.log(genId(181910, 21));

const parseId = (id: string) => {
  const bigIntId = BigInt(id);
  const idx = Number(bigIntId >> (4n + 20n));
  const typeId = Number((bigIntId >> 4n) & ((1n << 20n) - 1n));

  return { typeId, idx };
};

console.log(parseId('355232097'));
