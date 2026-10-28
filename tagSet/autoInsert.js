import { S1, S2, S3, CONSOLE } from '../config.js';
import { login, insertTags } from './tagManager.js';

const baseUrl = 'http://192.168.50.167:7000';
const name = 'admin';
const password = '0000';
const key = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJuZXVyb24iLCJib2R5RW5jb2RlIjowLCJleHAiOjE3OTIxNjQ0NDEsImlhdCI6MTc5MjE2MDg0MSwiaXNzIjoibmV1cm9uIn0.bhlz7yApe36cTZevnVkzQWlXtpGwxVKO5QbrLBMQgipt0osWhSL9bgLDQfd89Jcm1FGwJEEHlqOvNS0P35Sb98s-xk27zH6mK-Y-udSLcr4AYuFBR8yVTwNINyxSHjvm5wj1XGGy_5iHLkZnN4mC_KvwDb9CilIBiR9JJxulRKeO8ilhM3rnvMDRoZBTVHltuYjknxJ_l052KwzLLNXAjLBOIjNRRnCJHIg4CKwyaQyCvJFB2ztnsb0VezY2nHhJA1mJIjgUTf_K2ny9yznQd9RifujqqIEIF2Rq8SL4-soKIJWla8qOmtxorAD65GKPxj3cRudiEjX3_jGipzEIqw';

const groups = [
    { name: 'S1', entries: S1 },
    { name: 'S2', entries: S2 },
    { name: 'S3', entries: S3 },
    { name: 'CONSOLE', entries: CONSOLE },
];

async function main() {
    await login(baseUrl, name, password);
    console.log('✅ 登录成功');

    for (const group of groups) {
        console.log(`\n=== ${group.name} ===`);
        for (const entry of group.entries) {
            await insertTags(baseUrl, key, group.name, entry.name, entry.keys);
            console.log(`  ✅ ${entry.name} (${entry.keys.length}个标签)`);
        }
    }

    console.log('\n🎉 全部插入完成');
}

main().catch(err => {
    console.error('❌ 出错:', err.message);
    process.exit(1);
});