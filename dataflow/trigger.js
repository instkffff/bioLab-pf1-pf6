const triggerConfig = [
  { name: 'KTrigger', nodes: ['S1','S2','S3'], groups: ['PF1','PF2','PF3','PF4','PF5','PF6'] },
  { name: 'FTrigger', node: 'CONSOLE', groups: ['PF1W','PF2W','PF3W','PF4W','PF5W','PF6W'] },
  { name: 'VTrigger', node: 'CONSOLE', group: 'VFDK' },
  { name: 'VKTrigger', node: 'CONSOLE', groups: ['PF1S','PF2S','PF3S','PF4S','PF5S','PF6S'] },
  { name: 'SFTrigger', node: 'S3', group: 'VFDF' },
]

const makeTrigger = (config) => (data) => {
  const nodeMatch = config.nodes ? config.nodes.includes(data.node) : config.node === data.node
  const groupMatch = config.groups ? config.groups.includes(data.group) : config.group === data.group
  return nodeMatch && groupMatch
}

const triggers = {}
triggerConfig.forEach(({ name, ...config }) => {
  triggers[name] = makeTrigger(config)
})

export const { KTrigger, FTrigger, VTrigger, VKTrigger, SFTrigger } = triggers
