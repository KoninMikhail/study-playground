function pick<
    T extends Record<string, unknown>,
    K extends keyof T
    >
(obj: T, ...keys: Array<K>): Pick<T, K>{
    // picked pairs [{name: 'Mike'}, {age: 25}, {city: 'Moscow'}]
    const pickedPairs = keys
        .map(key =>({
            [key]: obj[key]
        }));

    // assign to an object and return
    return  Object.assign({}, ...pickedPairs) // ({}, {name: 'Mike'}, {age: 25}, {city: 'Moscow'}
}


type Person = {
    name: string;
    lastName: string;
    age: number;
    city: string;
}



const App = () => {
    const person: Person = {
        name: 'Mike',
        lastName: 'Konin',
        age: 25,
        city: 'Moscow',
    }

    const picked: Pick<Person, 'lastName'|'age'|'city'> = pick(person, 'lastName', 'age', 'city')

    return <div>{JSON.stringify(picked)}</div>
}

export default App; 