import {motion, AnimatePresence} from "framer-motion";
import {ReactNode, SetStateAction, useEffect, useState} from "react";
import {Car} from "../types/car";
import {demoData} from '../data/data'
import {Button} from "./Button";

export const Filter = ({data}: {data: Car[]}) => {
    const [cards, setCards] = useState<Car[]>(data.filter(el => el.releaseYear === 2007));

    const buttons = data.reduce((acc: number[], el) => {
        if(acc.includes(el.releaseYear)) return acc;
        return [...acc, el.releaseYear]
    }, [])

    const handleFilter = (selector: number) => {
        setCards(data.filter(car => car.releaseYear === selector));
    }

    return (
        <>
            <div>
                <div>
                    {
                        buttons.map(btn =>(
                            <Button
                                key={btn}
                                handleClick={() => handleFilter(btn)}
                                text={btn.toString()}/>
                        ))
                    }
                </div>
                <div style={{overflow: 'hidden', maxWidth: 400}}>
                    <AnimatePresence initial={true} mode='wait'>
                        {
                            cards.map(card =>(
                                <motion.div key={card.name}
                                            initial={{
                                                opacity: 0
                                            }}
                                            animate={{
                                                opacity: 1
                                            }}
                                            exit={{
                                                opacity: 0
                                            }}
                                            style={{
                                                float: 'left',
                                                backgroundColor: "#2196f3",
                                                color: '#ffffff',
                                                width: '100px',
                                                lineHeight: '40px',
                                                textAlign: 'center',
                                                margin: '2px',
                                            }}>
                                            <div style={{display: 'block'}}>
                                                <span style={{display: 'block'}}>{card.brand}</span>
                                                <span style={{display: 'block'}}>{card.name}</span>
                                                <span style={{display: 'block'}}>{card.releaseYear}</span>
                                                <span style={{display: 'block'}}>{card.color}</span>
                                            </div>
                                </motion.div>
                            ))
                        }
                    </AnimatePresence>
                </div>
            </div>


        </>
    );
}

export default Filter;