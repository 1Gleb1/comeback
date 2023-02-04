///////// Бинарный поиск

let array = [];
for (let i = 1; i <= 100; i++) {
  array.push(i);
}

let binarySearch = (array, item) => {
  let counter = 0;
  let low = 0;
  let height = array.length - 1;
  while (low <= height) {
    counter++;
    let mid = Math.ceil((low + height) / 2);
    // console.log(counter, mid);
    let selectItem = array[mid];
    if (selectItem == item) {
      return console.log(
        `Мы нашли чилсло: ${item} на позиции ${mid} за ${counter} попыток`
      );
    }
    if (selectItem > item) {
      height = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return console.log("Такого значения нет");
};

// binarySearch(array, 1000000000);

console.log(Math.log2(1000000000));
// страница 58
