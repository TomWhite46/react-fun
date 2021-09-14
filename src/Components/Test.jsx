import { useState } from "react";
import TestComponent from './TestComponent';
import LessText from './LessText';
    

    const Test = () => {

    const [nomen, setNomen]= useState("hi");
    const [age, setAge]= useState(2);

    const [text, setText]= useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

    return (
        <>
            <TestComponent nm={nomen} age={age}/>
            <button onClick={() => setNomen(nomen + "a")}>Change name</button>
            <button onClick={() => setAge(age + 2)}>Change age</button>
            <br/>
            <LessText text={text} maxLength={51} />
        </>
    );
}

export default Test;