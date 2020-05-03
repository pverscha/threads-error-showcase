import { Observable } from "observable-fns"
import { expose } from "threads/worker"

function startCounting() {
    return new Observable(observer => {
        for (let currentCount = 1; currentCount <= 10; currentCount++) {
            observer.next(currentCount)
        }
        observer.complete()
    })
}

expose(startCounting);
