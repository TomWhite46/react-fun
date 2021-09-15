import { useParams, useHistory } from 'react-router-dom';

const Users = () => {
    const {id=0} = useParams();

    const history = useHistory();

    const handleClick = (link) => {
        history.push(link);
    };

    return(
        <>
            <p>This is the users page. You are user number {id}.</p>
            <button onClick={() => handleClick("/")}>Take me to the homepage</button>
            <br/>
            <button onClick={() => handleClick("/contact")}>Take me to the contact page</button>
            <br/>
            <button onClick={() => handleClick("/productManager")}>Take me to the shopping page</button>
            <br/>
            <button onClick={() => handleClick("/Films")}>Take me to the films search page</button>
        </>
    )
}

export default Users;