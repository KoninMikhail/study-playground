import {motion, AnimatePresence} from "framer-motion";
import {ReactNode, useState} from "react";

interface CollapsibleProps {
    title: string;
    children: ReactNode;
}

export const Collapsible = ({title = 'click me', children}: CollapsibleProps) => {
    const [isVisible, setVisible] = useState<boolean>(false);

    const handleVisible = () => {
        setVisible(!isVisible);
    }
    return (
        <>
            <div onClick={handleVisible}
                 style={{background: "#ddd", width: 300, padding: "0.8rem 1.2rem", margin: '0 auto', border: '1px solid #ddd', color: '#000'}}
            >
                {title}
            </div>
            <AnimatePresence initial={false}>
                {
                    isVisible && (
                        <motion.div initial={{height: 0, opacity: 0}}
                                    animate={{height: 'auto', opacity: 1}}
                                    exit={{height: 0, opacity: 0}}
                                    style={{overflow: 'hidden', border: '1px solid #ddd'}}
                                    transition={{duration: 0.3}}
                        >
                            <div style={{padding: '0.8rem 1.2rem ', width: 300}}>
                                {children}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}

export default Collapsible;