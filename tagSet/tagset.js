import { login, fetchTags, insertTags } from './tagManager.js';

// login 
const baseUrl = 'http://192.168.50.52:7000';
const name = 'admin';
const password = '0000';

/* const token = await login(baseUrl, name, password);
console.log(token); */

const key = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJuZXVyb24iLCJib2R5RW5jb2RlIjowLCJleHAiOjE3ODk3MzU5MTEsImlhdCI6MTc4OTczMjMxMSwiaXNzIjoibmV1cm9uIn0.VKiPOSvUXrBZlYUewiNPgPYtJraVt89yeifUxw6OhB_AkSCFzUrJyRToqhuCmNx7iB3sjaa-u6UD1dlVqhrB-AiXUu4_C0B6F2cL6clnWSP--vhSTT3YU4_ef-Lay6JjXmWTuKGEH0l1kLxiEUhQhMD2RSmBCC6e3vgYsWHIsT_Lvxcr67hPYc5ZDk2Q4XCfBZEbBe-1B2Bh1xa0Yf0PfUYT5vId4ALxc-ID-XPESatnhSMvWPmRdHQzZ9pXh4Xudx9pIw-LZ8TUuUrmUDpwBiGoJwuZYA4Le83cvm5Cth5Vc4LzDNrUg-nBGa7tv-yxpuUcL9CQLI3YOyfBecxgeQ';

function tagList(unitId) {

    let first = (unitId - 1) * 4 + 1;
    let Id = unitId + 4;

    const tags = [
        {
            type: 4,
            name: `K${first}`,
            attribute: 4,
            precision: 0,
            decimal: 0,
            bias: 0,
            address: `${Id}!30001`,
            description: '',
            unit: ''
        },
        {
            type: 4,
            name: `K${first + 1}`,
            attribute: 4,
            precision: 0,
            decimal: 0,
            bias: 0,
            address: `${Id}!30002`,
            description: '',
            unit: ''
        },
        {
            type: 4,
            name: `K${first + 2}`,
            attribute: 4,
            precision: 0,
            decimal: 0,
            bias: 0,
            address: `${Id}!30003`,
            description: '',
            unit: ''
        },
        {
            type: 4,
            name: `K${first + 3}`,
            attribute: 4,
            precision: 0,
            decimal: 0,
            bias: 0,
            address: `${Id}!30004`,
            description: '',
            unit: ''
        }
    ]

    return tags;

}

function item( unitID, id, name ){
    let item = {
        type: 4,
        name: `${name}${id}`,
        attribute: 6,
        precision: 0,
        decimal: 0,
        bias: 0,
        address: `${unitID}!${40000 + id}`,
        description: '',
        unit: ''
    }
    return item;
}

function tagListConsole(unitId, num, name) {
    let tags = [];

    for (let i = 1; i <= num; i++) {
        tags.push(item(unitId, i, name));
    }

    return tags;
}

// S1 S2 S3
/* const template = await fetchTags(baseUrl, key, 'S3', 'PF5');
console.log(template); */

/* await insertTags(baseUrl, key, 'S2', 'PF4', tagList(3)); */

// console
/* const template = await fetchTags(baseUrl, key, 'console', 'PF1Switch');
console.log(template); */

await insertTags(baseUrl, key, 'console', 'VFDF', tagListConsole(14, 6, 'F'));


