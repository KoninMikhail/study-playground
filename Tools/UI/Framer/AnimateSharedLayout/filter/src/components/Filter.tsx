import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";
import {useState} from "react";
import {Car} from "../types/car";
import {Button} from "./Button";

export const Filter = ({data}: { data: Car[] }) => {
    const [cards, setCards] = useState<Car[]>(data);

    const buttons = data.reduce((acc: number[], el) => {
        if (acc.includes(el.releaseYear)) return acc;
        return [...acc, el.releaseYear]
    }, [])

    const handleFilter = (selector: number) => {
        setCards(data.filter(car => car.releaseYear === selector));
    }

    return (
        <>
            <AnimateSharedLayout>
                <motion.div>
                    <div>
                        {
                            buttons.map(btn => (
                                <Button
                                    key={btn}
                                    handleClick={() => handleFilter(btn)}
                                    text={btn.toString()}/>
                            ))
                        }
                    </div>
                    <motion.div layout={true} style={{overflow: 'hidden', maxWidth: 400, border: '1px solid #ccc'}}>
                        <AnimatePresence initial={true} mode='wait'>
                            {
                                cards.map(card => (
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
                    </motion.div>
                </motion.div>
            </AnimateSharedLayout>
        </>
    );
}

export default Filter;