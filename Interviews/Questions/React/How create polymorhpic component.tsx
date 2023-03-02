import { ElementType, ComponentPropsWithoutRef } from "react";

type Props<T extends ElementType> = {
    tag?: T;
} & ComponentPropsWithoutRef<T>;



const MyComponent = <T extends ElementType>({
    tag,
    children,
    ...rest
}: Props<T>) => {
    const TagName = tag ?? "div";
    return <TagName {...rest}>{children}</TagName>;
};


const App = () => {
    return (
        <>
            <MyComponent tag={"a"} href="https://github.com/">
                {"whatever text"}
            </MyComponent>
            <MyComponent tag={"button"} type="submit">
                {"whatever text"}
            </MyComponent>
            <MyComponent>{"whatever text"}</MyComponent>
        </>
    );
};

export default App;