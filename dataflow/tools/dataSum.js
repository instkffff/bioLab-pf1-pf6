import { getRow } from '../../sqlite/read.js'

function dataSum(node, groupF, groupS) {
    const rowWind = getRow(node, groupF)
    const rowPower = getRow(node, groupS)
    
    // 解析 JSON 字符串
    const windData = JSON.parse(rowWind.value)
    const powerData = JSON.parse(rowPower.value)
    
    let sum = 0
    
    // 遍历 1 到 40 的键对应位置
    for (let i = 1; i <= 40; i++) {
        const kKey = `K${i}`
        const fKey = `F${i}`
        
        // 如果 rowPower 中当前位置的值等于 1
        if (powerData[kKey] === 1 || powerData[kKey] === 1.0) {
            sum += windData[fKey] || 0
        }
    }
    
    return Math.min(sum + 4000, 20000)
}

/* 
console.log(dataSum('CONSOLE', 'PF1W', 'PF1S')) */

export { dataSum }