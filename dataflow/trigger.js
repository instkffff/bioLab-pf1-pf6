const KTrigger = (data) => ['S1','S2','S3'].includes(data.node) && ['PF1','PF2','PF3','PF4','PF5','PF6'].includes(data.group)

const FTrigger = (data) => data.node === 'CONSOLE' && ['PF1W','PF2W','PF3W','PF4W','PF5W','PF6W'].includes(data.group)

const VTrigger = (data) => data.node === 'CONSOLE' && data.group === 'VFDK'

const VKTrigger = (data) => data.node === 'CONSOLE' && ['PF1S','PF2S','PF3S','PF4S','PF5S','PF6S'].includes(data.group)

const SFTrigger = (data) => data.node === 'S3' && data.group === 'VFDF'

export { KTrigger, FTrigger, VTrigger, VKTrigger, SFTrigger }
