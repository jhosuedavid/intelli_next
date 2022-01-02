import {useState, useMemo, useCallback, useEffect} from 'react';

const useLogin = (props) => {
    const {
        login = () => {},
        user = {},
        error = '',
        cleanError = () => {},
    } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
       if (user['token']) {
          //window.location.href = '/devices';
       }
    }, [user]);

    useEffect(() => {
        if (error) {
            cleanError();
        }
    }, [email, setPassword]);

    const changeEmail = (value) => {
        setEmail(value);
    };

    const changePassword = (value) => {
        setPassword(value);
    };

    const isValidForm = useMemo(() => {
        return email && password;
    }, [email, password]);

    const signIn = useCallback(() => {
       login({email, password})
    }, [login, email, password]);

    return {
        email,
        password,
        error,
        isValidForm,
        changeEmail,
        changePassword,
        signIn,
    };
};

export default useLogin;
