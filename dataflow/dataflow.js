import { S1, S2, S3, CONSOLE, mqttBroker, reqWrite, respWrite, main } from '../config.js'

function entry(dataSet, label) {
    const entry = dataSet.find(item => item.name === label)
    return entry.keys
}

const dataLink = {
    // S1
    1: [
        [
            ['S1'],
            ['PF1'],
            entry(S1, 'PF1')
        ],
        [
            ['CONSOLE'],
            ['PF1S'],
            entry(S1, 'PF1')
        ]
    ],
    2: [
        [
            ['S1'],
            ['PF3'],
            entry(S1, 'PF3')
        ],
        [
            ['CONSOLE'],
            ['PF3S'],
            entry(S1, 'PF3')
        ]
    ],
    // S2
    3: [
        [
            ['S2'],
            ['PF2'],
            entry(S2, 'PF2')
        ],
        [
            ['CONSOLE'],
            ['PF2S'],
            entry(S2, 'PF2')
        ]
    ],
    4: [
        [
            ['S2'],
            ['PF4'],
            entry(S2, 'PF4')
        ],
        [
            ['CONSOLE'],
            ['PF4S'],
            entry(S2, 'PF4')
        ]
    ],
    // S3
    5: [
        [
            ['S3'],
            ['PF5'],
            entry(S3, 'PF5')
        ],
        [
            ['CONSOLE'],
            ['PF5S'],
            entry(S3, 'PF5')
        ]
    ],
    6: [
        [
            ['S3'],
            ['PF6'],
            entry(S3, 'PF6')
        ],
        [
            ['CONSOLE'],
            ['PF6S'],
            entry(S3, 'PF6')
        ]
    ],
    7: [
        [
            ['S3'],
            ['VFDF'],
            entry(S3, 'VFDF')
        ],
        [
            ['CONSOLE'],
            ['VFDF'],
            entry(S3, 'VFDF')
        ]
    ],
    // CONSOLE
    8: [
        [
            ['CONSOLE'],
            ['VFDK'],
            entry(S3, 'VFDK')
        ],
        [
            ['S3'],
            ['VFDK'],
            entry(S3, 'VFDK')
        ]
    ],
}

export { dataLink }