import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './CommentPostForm.module.css';
import {CommentPostProps} from "../../../PostsPage/PostPageContainer";

type CommentPostFormProps = {
  toggleAddCommentPopUp: (postId: number | null) => void,
  postIdToComment: number | null,
}

const CommentPostForm: React.FC<CommentPostFormProps & InjectedFormProps<CommentPostProps, CommentPostFormProps>> = (
  {
    toggleAddCommentPopUp,
    postIdToComment,
    handleSubmit
  }
) => {

  return (
    <div className={s.background}>
      <form className={s.commentPostForm} onSubmit={handleSubmit}>
        <p>LEAVE COMMENT</p>
        <Field placeholder={'Comment'} name={'commentPostBody'} component={'textarea'}/>
        <div>
          <button type={'submit'}>
            ADD COMMENT
          </button>
          <button onClick={() => toggleAddCommentPopUp(null)} type={'button'}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm<CommentPostProps, CommentPostFormProps>({
  form: 'comentPostForm'
})(CommentPostForm)