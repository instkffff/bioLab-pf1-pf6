import net from 'node:net';
import { SerialPort } from 'serialport';

const TCP_HOST = '192.168.50.110';
const TCP_PORT = 12000;
const COM_PORT = 'COM9';
const BAUD_RATE = 115200;

const client = new net.Socket();
const serialPort = new SerialPort({ path: COM_PORT, baudRate: BAUD_RATE });

client.connect(TCP_PORT, TCP_HOST, () => {
  console.log(`已连接到 TCP 服务器 ${TCP_HOST}:${TCP_PORT}`);
});

// TCP -> COM9
client.on('data', (data) => {
  serialPort.write(data);
});

// COM9 -> TCP
serialPort.on('data', (data) => {
  client.write(data);
});

client.on('error', (err) => {
  console.error(`TCP 连接错误: ${err.message}`);
});

serialPort.on('error', (err) => {
  console.error(`串口错误: ${err.message}`);
});

client.on('close', () => {
  console.log('TCP 连接断开，3秒后重连...');
  setTimeout(() => client.connect(TCP_PORT, TCP_HOST), 3000);
});

