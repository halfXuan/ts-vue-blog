await new Promise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
console.log(1);
const a = '这是test分支'