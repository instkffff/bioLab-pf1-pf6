import { KTrigger, FTrigger, VTrigger, VKTrigger } from './trigger.js'
import { mqttPublish, reqWrite } from '../mqtt/mqtt.js'
import { msgMaker } from '../mqtt/msgMaker.js'
import { dataSum } from './tools/dataSum.js'

function setFlow(groupF, groupS, tag) {
    const windSum = dataSum('CONSOLE', groupF, groupS)
    const data = {
        node: 'S3',
        group: 'VFDF',
        tag: tag,
        value: windSum
    }
    const json = JSON.stringify(msgMaker(data))
    console.log(json)
    mqttPublish(reqWrite, json);
}


function setVFD(data) {

    if (FTrigger(data) || VKTrigger(data)) {
        switch (data.group) {
            case 'PF1S':
            case 'PF1W': {
                setFlow('PF1W', 'PF1S', 'F1')
                break;
            }
            case 'PF2S':
            case 'PF2W': {
                setFlow('PF2W', 'PF2S', 'F2')
                break;
            }
            case 'PF3S':
            case 'PF3W': {
                setFlow('PF3W', 'PF3S', 'F3')
                break;
            }
            case 'PF4S':
            case 'PF4W': {
                setFlow('PF4W', 'PF4S', 'F4')
                break;
            }
            case 'PF5S':
            case 'PF5W': {
                setFlow('PF5W', 'PF5S', 'F5')
                break;
            }
            case 'PF6S':
            case 'PF6W': {
                setFlow('PF6W', 'PF6S', 'F6')
                break;
            }
            default:
                console.error('未知的setVfd触发数据:', data)
                break;
        }
    }
    return
}

export { setVFD }