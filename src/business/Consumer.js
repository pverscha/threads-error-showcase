import { spawn, Worker } from "threads"

export default class Consumer {
    async test() {
        const counter = await spawn(new Worker("./counter.js"));
        console.log(counter);
        counter.subscribe(newCount => console.log(`Counter incremented to:`, newCount));
    }
}
