import _ from 'lodash';
import placeHolder from "../Api/placeHolder";

export const fetchPosts = () => async (dispatch) => {
        const res = await placeHolder.get('/posts');
            dispatch({type: "FETCH_POST", payload: res.data });
    };  

export const fetchPostsAndUsers = () => async (dispatch, getState) =>{

        await dispatch(fetchPosts());
        //console.log(getState().posts);
        const userIds = _.uniq(_.map(getState().posts, 'userId'));
        //console.log(userIds)
        userIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchUser = (id) => async (dispath) => {
        const res = await placeHolder.get(`/users/${id}`);
        dispath({type: 'FETCH_USER', payload: res.data});
}







// export const fetchUser = (id) => (dispath) => {
//        _fetchUser(id, dispath);
// }

// const _fetchUser = _.memoize(async  (id, dispath) => {
//  const res = await placeHolder.get(`/users/${id}`);
//         dispath({type: 'FETCH_USER', payload: res.data});
// });