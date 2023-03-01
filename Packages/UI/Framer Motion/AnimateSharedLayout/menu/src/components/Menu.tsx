import {useState} from "react";
import MenuItem from "./MenuItem";
import {AnimateSharedLayout} from "framer-motion";

interface Menu {
    items: string[];
}


export const Menu = ({items}: Menu) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return (
        <>
            <div style={{
                display: 'flex',
                backgroundColor: '#eee',
                padding: '1rem',
                borderRadius: '25px'
            }}>
                <AnimateSharedLayout>
                    {
                        items.map((item, index) => (
                            <MenuItem key={item}
                                      item={item}
                                      isSelected={activeIndex === index}
                                      handleClick={() => setActiveIndex(index)}
                            />
                        ))
                    }
                </AnimateSharedLayout>
            </div>
        </>
    );
}

export default Menu;

