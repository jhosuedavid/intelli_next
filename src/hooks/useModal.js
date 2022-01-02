import { useState} from "react";

const  useModal = () => {
    const [isVisible, setVisible] = useState(false);

    const hiddenModal = () => {
        setVisible(false);
    };

    const showModal = () => {
        console.log('Show modal');
        setVisible(true);
    };

    return {
        isVisible,
        hiddenModal,
        showModal,
    };
};

export default useModal;
