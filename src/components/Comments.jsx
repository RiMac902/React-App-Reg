import React, {useState} from 'react';
import {Button} from "@mui/material";
import {connect} from "react-redux";
import {fetchComments} from "../store/actions/commentsAction";

const Comments = ({fetchComments}) => {

    useState(() => {
        fetchComments()
    }, [])

    return (
        <>
            <Button variant="outlined">Comments</Button>
        </>
    );
};


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    fetchComments,
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);