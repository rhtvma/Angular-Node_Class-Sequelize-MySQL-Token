/**
 * Created by rhtvma on 1/21/2019.
 */
var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('kkk', 'root', '');

auto.run(function (err) {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});

// With options:
var auto = new SequelizeAuto('kkk', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    directory: false, // prevents the program from writing to disk
    port: '3306',
    additional: {
        timestamps: true
        //...
    },
    "define": {
        "timestamps": true
    },
    tables: ['table1', 'table2', 'table3']
    //...
})