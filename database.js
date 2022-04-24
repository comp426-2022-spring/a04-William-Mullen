"use strict"

const Database = require('better-sqlite3')

const db = new Database('log.db')

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name= 'accesslog'`);

let row = stmt.get();
if (row == undefined) {
    console.log('Log database appears to be empty. Creating log database...')
}
else {
    console.log('Log database exists.')
}