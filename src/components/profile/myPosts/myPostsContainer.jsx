import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       { (store) => {

//         let state = store.getState();

//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }

//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         }

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText} />)
//       }}
//     </StoreContext.Consumer>
//   );
// }