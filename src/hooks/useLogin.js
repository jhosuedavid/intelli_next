import {useState, useMemo, useCallback} from 'react';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        // console.log(email);
    }, [email, password]);

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
