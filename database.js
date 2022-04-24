"use strict"

const Database = require('better-sqlite3')

const db = new Database('log.db')

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name= 'accesslog'`);

let row = stmt.get();
if (row == undefined) {
    console.log('Log database appears to be empty. Creating log database...')

    const sqlInit = `
    CREATE TABLE accesslog ( id INTERGER PRIMARY KEY, remote-addr VARCHAR, remote-user VARCHAR, datetime VARCHAR, method VARCHAR 
        url VARCHAR, protocol VARCHAR, http-version NUMERIC, status INTEGER, referer VARCHAR, user-agent VARCHAR)
    `

    logdp.exec(sqlInit)
}
else {
    console.log('Log database exists.')
}