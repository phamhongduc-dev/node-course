const fs = require("fs");

// const book = {
//   title: "Toi thay hoa vang tren co xanh",
//   author: "Sach thieu nhi",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(dataJSON);

// challeng: work with json and the file system
// 1. load and parse the json data
const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);
// 2. change info
user.name = "nguyen thi nha phuong";
user.old = 22;
// stringfy the changed obj and overwrite the original data
const useJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", useJSON);

console.log(user);
