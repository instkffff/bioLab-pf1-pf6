import { login, fetchTags, insertTags } from './tagManager.js';

// login 
const baseUrl = 'http://192.168.50.52:7000';
const name = 'admin';
const password = '0000';

/* const token = await login(baseUrl, name, password);
console.log(token);
 */
const key = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJuZXVyb24iLCJib2R5RW5jb2RlIjowLCJleHAiOjE3OTAwNTA1NjAsImlhdCI6MTc5MDA0Njk2MCwiaXNzIjoibmV1cm9uIn0.Ah2XlO7L0iy7TG8952hBS_9Vc_NQu2LcLNkVj5n_zLvb8BNxDNwDr-rHPJwVu4gqF5lywbFnoZS-FnD3Gts0KZbeq1KAKv6TzJzPHWRdGcCPNM7m4iUdTI1jX43mxSNF_iubV5OAYgPjpE2nYJbmZUwh81CZrRJ3945AnDo12DySViBfre3Tg5No7az2jCxlLKiA4plZYaQ174ylHomV8VZT-0OJEnC6mK8kltVqGhF9jpUdQXqmyCWNqIEugWnV_Ec-SoOhNFUQ0Nq-0SXmdYBtiW3CuSpRWg--8QX7iX21ZMj6yATvagv0nrCTXMVyg2fNjTA5km0ObMJNLfh5Qg';

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

await insertTags(baseUrl, key, 'S1', 'PF3', tagList(3, 5));

// console
/* const template = await fetchTags(baseUrl, key, 'console', 'PF1Switch');
console.log(template); */

/* await insertTags(baseUrl, key, 'console', 'VFDF', tagListConsole(14, 6, 'F')); */


