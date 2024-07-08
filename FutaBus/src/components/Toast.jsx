import React from 'react';
import {ToastContainer as ReactToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = React.memo(() => {
    return (
        <ReactToastContainer
            position="top-right"
            autoClose={3000}
        />
    );
});

export default ToastContainer;
