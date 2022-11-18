import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';

const login = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    return (
        <div>
            <p>Login</p>
        </div>
    )
}

export default login;