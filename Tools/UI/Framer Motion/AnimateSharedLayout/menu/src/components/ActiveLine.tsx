import {motion} from "framer-motion";

export const ActiveLine = () => (
    <motion.div layoutId={'ActiveItemLine'}
                style={{
                    width: '100%',
                    height: '4px',
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(255, 0, 0 )'
                }}
    />
);

export default ActiveLine;