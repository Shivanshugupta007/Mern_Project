import React from 'react';

function Vie(props) {

    return (
        <>

            <div className="GridContainer outer">
                <div className="GridItem out">
                    <div className="card inside">
                        <h5 className="card-title title">Post {props.ind + 1}</h5>
                        <div className="card-content ">
                            <p className="postSty">{props.pri}</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Vie;