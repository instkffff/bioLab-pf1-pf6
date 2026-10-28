const triggerConfig = [
    { name: 'KTrigger', nodes: ['S1', 'S2', 'S3'], groups: ['PF1', 'PF2', 'PF3', 'PF4', 'PF5', 'PF6'], keys: [] },
    { name: 'FTrigger', nodes: ['CONSOLE'], groups: ['PF1W', 'PF2W', 'PF3W', 'PF4W', 'PF5W', 'PF6W'], keys: [] },
    { name: 'VTrigger', nodes: ['CONSOLE'], groups: ['VFDK'], keys: [] },
    { name: 'VKTrigger', nodes: ['CONSOLE'], groups: ['PF1S', 'PF2S', 'PF3S', 'PF4S', 'PF5S', 'PF6S'], keys: [] },
    { name: 'SFTrigger', nodes: ['S3'], groups: ['VFDF'], keys: [] },
]

const asArray = (v) => (Array.isArray(v) ? v : [])

const makeTrigger = ({ name, ...config }) => {
    const nodes = asArray(config.nodes)
    if (nodes.length === 0) {
        throw new Error(`Trigger [${name}] 的 nodes 不能为空`)
    }
    const groups = asArray(config.groups)
    const keys = asArray(config.keys)

    return (data) => {
        if (!data || typeof data !== 'object') return false
        const nodeMatch = nodes.includes(data.node)
        const groupMatch = groups.length === 0 || groups.includes(data.group)
        const keysMatch = keys.length === 0
            || keys.some(k => data.values && Object.prototype.hasOwnProperty.call(data.values, k))
        return nodeMatch && groupMatch && keysMatch
    }
}

const triggers = {}
triggerConfig.forEach(cfg => { triggers[cfg.name] = makeTrigger(cfg) })

export const { KTrigger, FTrigger, VTrigger, VKTrigger, SFTrigger } = triggers