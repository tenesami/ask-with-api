import placeHolder from "../Api/placeHolder";

export const fetchPosts = () => async (dispatch) => {
        const res = await placeHolder.get('/posts');
            dispatch({type: "FETCH_POST", payload: res });
    };  

