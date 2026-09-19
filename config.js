function genListK(num) {
    const list = []
    for (let i = 1; i <= num; i++) {
        list.push('K' + i)
    }
    return list
}

function genListF(num) {
    const list = []
    for (let i = 1; i <= num; i++) {
        list.push('F' + i)
    }
    return list
}

const PF1 = genListK(20)
const PF2 = genListK(16)
const PF3 = genListK(12)
const PF4 = genListK(8)
const PF5 = genListK(4)
const PF6 = genListK(8)
const VFDF = genListF(6)
const VFDK = genListK(6)

const PF1S = genListK(40)
const PF1W = genListF(40)
const PF2S = genListK(40)
const PF2W = genListF(40)
const PF3S = genListK(40)
const PF3W = genListF(40)
const PF4S = genListK(40)
const PF4W = genListF(40)
const PF5S = genListK(40)
const PF5W = genListF(40)
const PF6S = genListK(40)
const PF6W = genListF(40)

const S1 = [
    { name: 'PF1', keys: PF1 },
    { name: 'PF3', keys: PF3 },
]
const S2 = [
    { name: 'PF2', keys: PF2 },
    { name: 'PF4', keys: PF4 },
]
const S3 = [
    { name: 'PF5', keys: PF5 },
    { name: 'PF6', keys: PF6 },
    { name: 'VFDF', keys: VFDF },
    { name: 'VFDK', keys: VFDK },
]

const CONSOLE = [
    { name: 'PF1S', keys: PF1S },
    { name: 'PF1W', keys: PF1W },
    { name: 'PF2S', keys: PF2S },
    { name: 'PF2W', keys: PF2W },
    { name: 'PF3S', keys: PF3S },
    { name: 'PF3W', keys: PF3W },
    { name: 'PF4S', keys: PF4S },
    { name: 'PF4W', keys: PF4W },
    { name: 'PF5S', keys: PF5S },
    { name: 'PF5W', keys: PF5W },
    { name: 'PF6S', keys: PF6S },
    { name: 'PF6W', keys: PF6W },
    { name: 'VFDF', keys: VFDF },
    { name: 'VFDK', keys: VFDK },
]

const mqttBroker = 'mqtt://192.168.50.52:1883';

const reqWrite = '/neuron/system/write/req';

const respWrite = '/neuron/system/write/resp';

const main = '/neuron/system';

export { S1, S2, S3, CONSOLE, mqttBroker, reqWrite, respWrite, main }
