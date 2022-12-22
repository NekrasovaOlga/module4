const filter = (arr, key, val) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];

    if (obj[key] === val) result.push(obj);
  }
  console.log(result);
  return result;
};

export default filter;
