import Database from 'better-sqlite3';
import path from 'node:path';

// 获取当前脚本所在文件夹的绝对路径
const dbPath = path.join(import.meta.dirname, 'control.db');

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

const init = db.transaction((tables) => {
  for (const [name, count] of Object.entries(tables)) {
    db.exec(`CREATE TABLE IF NOT EXISTS ${name} (ID INTEGER PRIMARY KEY, Value INTEGER DEFAULT 0)`);
    const insert = db.prepare(`INSERT OR IGNORE INTO ${name} (ID) VALUES (?)`);
    for (let i = 1; i <= count; i++) insert.run(i);
  }
});

init({
  VFDP: 6, VFDF: 6,
  PF1S: 40, PF2S: 40, PF3S: 40, PF4S: 40, PF5S: 40,
  PF6S: 40,
  PF1W: 40, PF2W: 40, PF3W: 40, PF4W: 40, PF5W: 40,
  PF6W: 40
});