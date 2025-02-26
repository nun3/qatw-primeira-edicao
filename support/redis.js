import { Queue } from "bullmq";

const connection = {
    host: 'paybank-redis',
    port: 6379
}

const queueName = 'twoFactorQueue'

const queue = new Queue(queueName, {connection})

export const getJob = async () => {
const jobs =  await queue.getJobs()
const code = jobs[0].data.code
console.log(code);
return code;
} 

export const cleanJObs = async ()=>{
    await queue.obliterate({force:'true'})
}