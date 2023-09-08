import React from 'react'
import { useRouteError } from "react-router-dom";

// this page will be rendered if user wants to enter an invalid page 
const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    )
}

export default Error