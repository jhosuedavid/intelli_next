import {useState, useMemo, useCallback, useEffect} from 'react';

const useLogin = (props) => {
    const {login = () => {}, user = {}} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
       if (user['token']) {
          //window.location.href = '/devices';
       }
    }, [user]);

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
        isValidForm,
        changeEmail,
        changePassword,
        signIn,
    };
};

export default useLogin;
