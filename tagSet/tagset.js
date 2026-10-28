import { login, fetchTags, insertTags } from './tagManager.js';

// login 
const baseUrl = 'http://192.168.50.167:7000';
const name = 'admin';
const password = '0000';

/* const token = await login(baseUrl, name, password);
console.log(token); */

const key = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJuZXVyb24iLCJib2R5RW5jb2RlIjowLCJleHAiOjE3OTIxNjQ0NDEsImlhdCI6MTc5MjE2MDg0MSwiaXNzIjoibmV1cm9uIn0.bhlz7yApe36cTZevnVkzQWlXtpGwxVKO5QbrLBMQgipt0osWhSL9bgLDQfd89Jcm1FGwJEEHlqOvNS0P35Sb98s-xk27zH6mK-Y-udSLcr4AYuFBR8yVTwNINyxSHjvm5wj1XGGy_5iHLkZnN4mC_KvwDb9CilIBiR9JJxulRKeO8ilhM3rnvMDRoZBTVHltuYjknxJ_l052KwzLLNXAjLBOIjNRRnCJHIg4CKwyaQyCvJFB2ztnsb0VezY2nHhJA1mJIjgUTf_K2ny9yznQd9RifujqqIEIF2Rq8SL4-soKIJWla8qOmtxorAD65GKPxj3cRudiEjX3_jGipzEIqw';

function tagList(unitId, offset) {

    let first = (unitId - 1) * 4 + 1;
    let Id = unitId + offset;

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

// await insertTags(baseUrl, key, 'S3', 'PF6', tagList(2, 1));

// console
/* const template = await fetchTags(baseUrl, key, 'console', 'PF1Switch');
console.log(template); */

await insertTags(baseUrl, key, 'CONSOLE', 'PF6W', tagListConsole(12, 40, 'F'));
