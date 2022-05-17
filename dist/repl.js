import a from"repl";import{transform as l}from"@esbuild-kit/core-utils";import{v as c}from"./package-5a2461d7.js";console.log(`Welcome to tsx v${c} (Node.js ${process.version}).
Type ".help" for more information.`);const o=a.start(),{eval:m}=o,i=async function(r,e,t,s){const n=await l(r,".ts");return m.call(this,n.code,e,t,s)};o.eval=i;
