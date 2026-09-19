import { KTrigger, FTrigger, VTrigger, VKTrigger, SFTrigger } from './trigger.js'
import { msgMaker } from '../mqtt/msgMaker.js'
import { dataConvert } from './tools/dataConvert.js'

import { mqttPublish, reqWrite } from '../mqtt/mqtt.js';

/**
 * 同步数据入口函数
 * 流程：
 * 1. 判断数据是否匹配 KTrigger 或 VTrigger 触发条件
 * 2. 匹配则调用 dataConvert 转换数据
 * 3. 转换结果为空则直接返回，不继续后续处理
 * 4. 遍历转换后的数组，逐条通过 msgMaker 构造消息
 * 5. 将消息序列化为 JSON 并通过 mqttPublish 发送
 */
const syncData = (data) => {
    // 触发判断：KTrigger 或 VTrigger 满足其一则进入 sync 流程
    if (KTrigger(data) || VTrigger(data) || SFTrigger(data)) {
        // 数据转换：将原始数据转为消息数组
        const convertedData = dataConvert(data);
        console.log(convertedData)
        // 转换结果为空时跳过后续处理
        if (!convertedData || convertedData.length === 0) {
            return;
        }
        // 遍历转换结果，逐条发送消息
        convertedData.forEach(item => {
            const message = msgMaker(item);
            const json = JSON.stringify(message);
            mqttPublish(reqWrite, json);
        });
    }
}

export { syncData }