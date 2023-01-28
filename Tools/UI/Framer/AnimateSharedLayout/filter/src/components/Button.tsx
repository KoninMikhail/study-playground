import {motion} from "framer-motion";

interface ButtonProps {
    text: string;
    handleClick: () => void;
}

const btnStyle = {
    border: 'none',
    outline: 'none',
    padding: '12px 16px',
    margin: '10px',
    color: '#000',
    background: '#f1f1f1',
    cursor: 'pointer'
}

export const Button = ({text, handleClick}: ButtonProps) => {
    return (
        <>
            <motion.button style={btnStyle}
                           layout={true}
                           whileHover={{backgroundColor: "#ddd"}}
                           whileTap={{backgroundColor: '#ccc'}}
                           onClick={handleClick}
            >
                {text}
            </motion.button>
        </>
    );
}