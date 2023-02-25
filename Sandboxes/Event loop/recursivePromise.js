function recursivePromise(promise) {
    return promise.then(()=> {
        console.log('promise 1');
        recursivePromise(Promise.resolve())
    })
}

recursivePromise(Promise.resolve());

setTimeout(()=> console.log('timeout'), 0)