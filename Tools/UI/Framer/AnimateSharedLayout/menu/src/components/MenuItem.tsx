import {motion} from "framer-motion";
import ActiveLine from "./ActiveLine";

interface MenuItem {
    item: string,
    isSelected: boolean,
    handleClick: () => void
}


const MenuItem = ({item, isSelected, handleClick}: MenuItem) => (
    <motion.div onClick={handleClick}
                style={{margin: '0 0.5rem', fontWeight: 900, position: 'relative'}}
                initial={{color: '#000'}}
                animate={{color: isSelected ? 'rgb(255, 0, 0)' : '#000'}}
    >
        {item}
        {
            isSelected && <ActiveLine/>
        }
    </motion.div>
);


export default MenuItem