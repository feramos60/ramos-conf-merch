const sumTotal = (arr, field) => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue[field];
    const sum = arr.reduce(reducer, 0);
    return sum;
  };

export {
    sumTotal
}