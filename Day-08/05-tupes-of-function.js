//  Task 2.2
function mergeInventory(shelf = [], delivery = []) {
  return [...shelf, ...delivery];

  let shelf = undefined;
  let delivery = ["🍫", "🍇"];

  console.log(mergeInventory(shelf, delivery));
}
