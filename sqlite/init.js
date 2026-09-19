import Database from 'better-sqlite3';
import { S1, S2, S3, CONSOLE } from '../config.js';

const db = new Database('control_system.db');

function initDatabase() {
    db.exec('CREATE TABLE IF NOT EXISTS S1 (name TEXT PRIMARY KEY, value TEXT)');
    db.exec('CREATE TABLE IF NOT EXISTS S2 (name TEXT PRIMARY KEY, value TEXT)');
    db.exec('CREATE TABLE IF NOT EXISTS S3 (name TEXT PRIMARY KEY, value TEXT)');
    db.exec('CREATE TABLE IF NOT EXISTS "CONSOLE" (name TEXT PRIMARY KEY, value TEXT)');

    function insertTable(tableName, entries) {
        const stmt = db.prepare(`INSERT OR REPLACE INTO "${tableName}" (name, value) VALUES (?, ?)`);
        entries.forEach((entry) => {
            const obj = {};
            entry.keys.forEach(key => { obj[key] = 0; });
            stmt.run(entry.name, JSON.stringify(obj));
        });
    }

    insertTable('S1', S1);
    insertTable('S2', S2);
    insertTable('S3', S3);
    insertTable('CONSOLE', CONSOLE);
}

initDatabase();