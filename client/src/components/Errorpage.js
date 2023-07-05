import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
            <div id="outLog">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>

                    </div>
                    <h2>Page Not Found</h2>
                    <p className="mb-5">
                        The Page Might Be Down.
                    </p>
                    <NavLink to="/">Go To Home Page</NavLink>
                </div>

            </div>

        </>
    );
};


export default Errorpage;