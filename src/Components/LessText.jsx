import { useState } from 'react';

const LessText = ({text,maxLength}) => {
    const [hidden, setHidden] = useState(true);

    if(text.length <=maxLength){ //if text length is less than maximum defined, return whole text and don't display button (function exits here so return below is not reached)
        return <span>{text}</span>
    }

    return ( 
        <span>
            {hidden ? `${text.substr(0,maxLength).trim()}...` : text} {/*If variable 'hidden' is true, give section of text up to length specified + '...' (removing spaces)
                                                                        If 'hidden' is false, display complete text*/}
            <br/>
            {hidden ? (
                <button onClick={() => setHidden(false)}>Read More</button>  //if hidden is true, set button to revert hidden to false on next click
            ) : (
                <button onClick={() => setHidden(true)}>Read Less</button>    //if hidden is false, set button to revert hidden to true on next click
            )}
        </span>
    );
}

export default LessText;

