export const m = 1;

// some data
let data = JSON.stringify({
  foo: 123,
  bar: 'hello',
  flag: false,
  some: null,
});

// try to parse and use
let parsed = JSON.parse(data); // type of "parsed" is any
let undefinedVal = parsed.hello; // we don't know for sure is there a key "hello"

let fixedParsed: {
  foo: number,
  bar: string,
  flag: boolean,
  some: null,
} = JSON.parse(data);
// fixedParsed.hello; // now we know, that there isn't key "hello"
