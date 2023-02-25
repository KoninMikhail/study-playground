const header = document.getElementById('headerWithCount');
const button = document.getElementById('buttonCountUp');

let counter = 0;

    button.addEventListener('click', () => {
        counter +=1;
        header.innerText = counter.toString();
        header.appendChild(document.createElement('div'))

        console.log('AFTER CHANGE')

        Promise.resolve().then(()=> {
            console.log('promise')
        })

        setTimeout(() => {
            console.log('setTimeout');

        }, 0)
    })

    const mutationObserver = new MutationObserver((mutations)=> {
        console.log(mutations)
    });

    mutationObserver.observe(header, {
        subtree: true,
        childList: true,
        attributeOldValue: true
    })
