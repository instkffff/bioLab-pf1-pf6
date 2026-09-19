import { readValue } from '../sqlite/read.js';
import { insertValue } from '../sqlite/insert.js';
import { port, System } from '../config.js';
import ModbusRTU from 'modbus-serial';

const MAX_ADDR = (unitID) => (unitID === 13 || unitID === 14) ? 6 : 40;

function checkParams(unitID, addr, quantity = 1) {
    if (unitID < 1 || unitID > 14) throw new Error("Illegal Data Address");
    if (addr < 0 || (addr + quantity) > MAX_ADDR(unitID)) throw new Error("Illegal Data Address");
    const tableName = System[unitID - 1];
    if (!tableName) throw new Error("Server Device Failure");
    return tableName;
}

function handleRead(addr, unitID) {
    const tableName = checkParams(unitID, addr, 1);
    return readValue(tableName, addr + 1) ?? 0;
}

function handleWrite(addr, value, unitID, quantity = 1) {
    const tableName = checkParams(unitID, addr, quantity);
    const startId = addr + 1;
    if (quantity === 1) {
        insertValue(tableName, startId, value);
    } else {
        value.forEach((val, i) => insertValue(tableName, startId + i, val));
    }
}

const vector = {
    getHoldingRegister: (addr, unitID, callback) => {
        try { 
            const val = handleRead(addr, unitID);
            callback(null, val); 
        } catch (e) { 
            console.error([unitID, addr, e.message]); 
            callback(e, null); 
        }
    },
    
    setRegister: (addr, value, unitID, callback) => {
        try { 
            handleWrite(addr, value, unitID);
            console.log([unitID, addr, value]);
            callback(null, value);
        } catch (e) { 
            console.error([unitID, addr, e.message]); 
            callback(e, null);
        }
    },
    
    setMultipleRegisters: (addr, values, unitID, callback) => {
        try { 
            handleWrite(addr, values, unitID, values.length);
            console.log([unitID, addr, values]);
            callback(null, values.length);
        } catch (e) { 
            console.error([unitID, addr, e.message]); 
            callback(e, null);
        }
    }
};

function initializeDatabaseCheck() {
    System.forEach((table, i) => {
        if (!table) return;
        try { readValue(table, 1); console.log([i + 1, 'ok']); }
        catch (e) { console.warn([i + 1, e]); }
    });
}

function startServer(host = '0.0.0.0', serverPort = port) {
    initializeDatabaseCheck();
    const serverTCP = new ModbusRTU.ServerTCP(vector, { host, port: serverPort, debug: false });
    serverTCP.on('socketError', (err) => console.error([0, 0, err]));
    console.log(`Server started on port ${serverPort}`);
    return serverTCP;
}

export { startServer };