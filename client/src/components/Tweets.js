import React from 'react';

const Tweet = (props) => {

    return (
        <>
            <form method="POST">
                <div class="form-group">
                    <label for="exampleInputEmail1">Write A Post</label>
                    <input type="text" onChange={props.writePost} value={props.views} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='false' name="post" placeholder="Write Post"></input>
                </div>

                <button type="submit" class="btn btn-primary" onClick={props.submitPost}>Submit</button>
            </form>
        </>
    )
};

export default Tweet;