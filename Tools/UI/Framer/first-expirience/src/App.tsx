import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {motion} from 'framer-motion'

function App() {
    const items = ['one', 'two', 'three', 'four', 'five'];

    const [count, setCount] = useState(0);

    const pVariants = {
        hidden: {
            x: 250,
            opacity: 0,
            translate: 'fadeIn',
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    const listVariants = {
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5
            }
        }),
        hidden: {
            y: 100,
            opacity: 0
        }
    }
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/AnimateSharedLayout/menu/public/vite.svg" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <motion.img src={reactLogo}
                                className="logo react"
                                alt="React logo"
                                animate={{
                                    rotate: 360
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1.2,
                                    ease: 'easeOut'
                                }}
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <motion.button whileHover={{scale: 1.3}}
                               onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </motion.button>
                <motion.p
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{
                        delay: 0.5
                    }}
                    variants={pVariants}
                >
                    Edit <code>src/App.tsx</code> and save to test HMR
                </motion.p>
            </div>
            <p className="read-the-docs">
                {
                    items.map((item, i) => (
                        <motion.li key={item}
                                   variants={listVariants}
                                   initial={'hidden'}
                                   animate={'visible'}
                                   custom={i}
                        >
                            {item}
                        </motion.li>
                    ))
                }
            </p>
        </div>
    )
}

export default App
