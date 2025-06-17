function range(start, end) {
  // todo

  // if end is ommited, return function accept second argument
  if (end === undefined)
    return function (end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    };

  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
  // otherwise return an array from start to end (include end)
}

// test case 1
[[3,3], [3,8], [3,0]].forEach(([start,end]) => console.log(range(start,end)));
console.log('----');
[[3,3], [3,8], [3,0]].forEach(([start,end]) => {
    const a = range(start)
    console.log(a(end))
})
