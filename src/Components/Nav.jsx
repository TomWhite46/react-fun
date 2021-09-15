import {Link} from 'react-router-dom';

const Nav = ({text, setText}) => {
    return (
        <>
            <p>User number: {text}</p>
            <nav>
                <Link to="/">
                Home
                </Link>
                {'  '}
                <Link to={`/users/${text}`}>
                Users
                </Link>
                {'  '}
                <Link to="/contact">
                Contact
                </Link>
                {'  '}
                <Link to="/productManager">
                Product Manager
                </Link>
                {'  '}
                <Link to="/films">
                Films
                </Link>
                {'  '}
                <Link to={`/parameter/${text}`}>
                Parameter
                </Link>
                {'  '}
            </nav>
        </>
    )
}

export default Nav;