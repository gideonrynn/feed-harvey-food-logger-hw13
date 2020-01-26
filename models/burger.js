//4. * Inside your `burger` directory, create a folder named `models`.
//   * In `models`, make a `burger.js` file.
//     * Inside `burger.js`, import `orm.js` into `burger.js`
//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
//     * Export at the end of the `burger.js` file.

//Models contain setup classes that represent data and the logic to manage that data

console.log(`Connected to models/burger.js`);

const orm = require("../config/orm");

const burger = {
    // orm.selectAll()
    // orm.insertOne()
    // orm.updateOne()
    
}

module.exports = burger;

