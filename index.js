import { startHttpServer } from './devices/modbusProxy/server.js'
import { startServer } from './devices/modbusProxy/modbus/modbusSlave.js'
import {
    initMqtt,
    mqttPublish,
    getMqttClient,
} from './mqtt/mqtt.js';

// modbusProxy

startHttpServer();
startServer();

// system

initMqtt();
