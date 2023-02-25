function log(value) {
    console.log(value)
}

log('1'); // 1

setTimeout(()=> {
    log('setTimout 1');

    Promise.resolve().then(()=> {
        console.log('promise setTimout')
    })

    queueMicrotask(()=> {
        console.log('queueMicrotask setTimout 1') // 3
    })

    queueMicrotask(()=> {
        console.log('queueMicrotask setTimout  2') // 3
    })
}, 0)


queueMicrotask(()=> {
    console.log('queueMicrotask 1') // 3
})

setTimeout(()=> {
    log('setTimout 2');

}, 0)

Promise.resolve().then(()=> {
    console.log('promise 1')
})

queueMicrotask(()=> {
    console.log('queueMicrotask 2')
})

Promise.resolve().then(()=> {
    console.log('promise 2')
});

log('value 4') // 2