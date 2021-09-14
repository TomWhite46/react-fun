import { useEffect } from "react";

const TestComponent = ({nm, age}) => {
    
    useEffect(() => {
        console.log("hello");
    }, [age]);

    return (
        <>
            <p>{nm}</p>
            <p>{age}</p>
        </>
    );
}

export default TestComponent;