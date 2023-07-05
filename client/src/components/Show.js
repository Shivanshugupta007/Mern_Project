import React from 'react';

const Show = (props) => {
    return (
        <>
            <div className="container emp-profile">
                <form method="GET">
                    <div className="row aboutTop">
                        <div className="col-md-4 ">
                            <div className="profile-work">
                                <img src={props.userpic} alt="Profile Pic" className="profile-pic" />
                            </div>
                        </div>
                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active inp" id="home" role="tabpanel" area-aria-labelledby='home-tab'>
                                    <div className="row">
                                        <div className="col-md-6 fr">
                                            <label>
                                                USER ID
                                            </label>
                                        </div>
                                        <div className="col-md-6 bk">
                                            <p>{props.id}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3 ">
                                        <div className="col-md-6 fr1">
                                            <label>
                                                Name
                                            </label>
                                        </div>
                                        <div className="col-md-6 bk2">
                                            <p>{props.name}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3 ">
                                        <div className="col-md-6 fr2">
                                            <label>
                                                Email
                                            </label>
                                        </div>
                                        <div className="col-md-6 bk2">
                                            <p>{props.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3 ">
                                        <div className="col-md-6 fr5">
                                            <label>
                                                No. Of Post
                                            </label>
                                        </div>
                                        <div className="col-md-6 bk5">
                                            <p>{props.post}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Show;