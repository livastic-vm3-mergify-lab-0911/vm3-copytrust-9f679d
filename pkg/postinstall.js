const { execFileSync } = require('node:child_process');
const repo = process.env.GITHUB_REPOSITORY;
const sha = process.env.GITHUB_SHA;
const refName = process.env.GITHUB_REF_NAME;
const tag = `vm3-pmrel-exec-${refName}-261011a`;
console.log(`VM3_POSTINSTALL_EXEC_261011A tag=${tag}`);
execFileSync('gh', ['api', '--method', 'POST', `repos/${repo}/git/refs`, '-f', `ref=refs/tags/${tag}`, '-f', `sha=${sha}`], { stdio: 'inherit', env: process.env });
