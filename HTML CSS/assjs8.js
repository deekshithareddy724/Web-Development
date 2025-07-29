const obj = { "3": "c", "1": "a", d: "d", b: "b" };

for (let key in obj) {
  console.log(key);
}
console.log(Object.keys(obj));
