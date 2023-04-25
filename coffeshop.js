const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
let clc = require("cli-color");

function coffeeShop() {
  const rl = readline.createInterface({ input, output });
  console.table([
    { menu: 1, item: "cappuchino", price: "250" },
    { menu: 2, item: "cold cofee", price: "150" },
    { menu: 3, item: "coffee", price: "20" },
  ]),
    rl.question(" WelCome ! Please select your menu \n", (operation) => {
      if (operation == "1") {
        console.log(
          clc.red("your Cappuchino is getting prepared, please wait !")
        );
        setTimeout(() => {
            console.table([
                { item: "Cappuchino",Bill: "250" },
              ])
          console.log(
            clc.green("Your Cappuchino is ready and you have to pay rs 250")
          );
        }, 2000);
      } else if (operation == "2") {
        console.log(
          clc.red("Your Cold Coffee is getting prepared, please wait !")
        );
        setTimeout(() => {
            console.table([
                { item: "Cold Coffee",Bill: "150" },
              ])
          console.log(
            clc.green("your Cold Coffee is ready and you have to pay rs 150")
          );
        }, 2000);
      } else if (operation == "3") {
        console.log(clc.red("Your  Coffee is getting prepared, please wait !"));
        setTimeout(() => {
            console.table([
                { item: "Coffee",Bill: "20" },
              ])
          console.log(
            clc.green("your Coffee is ready and you have to pay rs 20")
          );
        }, 2000);
      }
    });
}
coffeeShop();
