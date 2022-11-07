import strictEquals from './strictEquals.js';

const data = [
    { a: 1, b: 1, result: true },
    { a: NaN, b: NaN, result: false },
    { a: 0, b: -0, result: true },
    { a: -0, b: 0, result: true },
    { a: 1, b: '1', result: strictEquals(1, '1') },
    { a: true, b: false, result: false },
    { a: false, b: false, result: true },
    { a: 'Water', b: 'Oil', result: false },
];

console.table(results);

data.forEach((item) => {
    describe(`When argument are ${item.a} and ${item.b}`, () => {
        test(`Then the result should be ${item.result}`, () => {
            const r = strictEquals(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

/*  ┌─────────┬─────────┬───────┬────────┐
    │ (index) │    a    │   b   │ result │
    ├─────────┼─────────┼───────┼────────┤
    │    0    │    1    │   1   │  true  │
    │    1    │   NaN   │  NaN  │ false  │
    │    2    │    0    │  -0   │  true  │
    │    3    │   -0    │   0   │  true  │
    │    4    │    1    │  '1'  │ false  │
    │    5    │  true   │ false │ false  │
    │    6    │  false  │ false │  true  │
    │    7    │ 'Water' │ 'Oil' │ false  │
    └─────────┴─────────┴───────┴────────┘  */
