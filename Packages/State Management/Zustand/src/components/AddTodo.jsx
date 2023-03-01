import {
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";
import {useTodos} from "../store/Store";

export const AddTodo = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const ref = useRef(null);
    const addTodo = useTodos(state => state.addTodo)

    const handleAddTodo = () => {
        addTodo(ref.current.value)
        onClose();
    }

    return(
        <>
            <Button colorScheme='teal' onClick={onOpen}>
                Add new Todo
            </Button>

            <Drawer isOpen={isOpen} placement={'right'} onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Create New Todo</DrawerHeader>
                    <DrawerBody>
                        <input ref={ref}
                               placeholder={'Add Todo'}
                               onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                               autoFocus
                        />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant={'outline'}
                                mr={3}
                                onClick={handleAddTodo}>Add Todo</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}