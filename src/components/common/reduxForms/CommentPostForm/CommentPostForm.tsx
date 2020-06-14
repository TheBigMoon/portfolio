import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CommentPostProps} from "../../../PostsPage/PostPageContainer";
import {PopUp} from "../../../../styledComponents/common/popUps/PopUp";
import {Button} from "../../../../styledComponents/common/buttons/Button";

type CommentPostFormProps = {
  toggleAddCommentPopUp: (postId: number | null) => void,
}

const CommentPostForm: React.FC<CommentPostFormProps & InjectedFormProps<CommentPostProps, CommentPostFormProps>> = (
  {
    toggleAddCommentPopUp,
    handleSubmit
  }
) => {

  return (
    <PopUp>
      <form className={'popUpArea'} onSubmit={handleSubmit}>
        <p>
          LEAVE COMMENT
        </p>
        <Field placeholder={'Comment'} name={'commentPostBody'} component={'textarea'}/>
        <div className={'buttonsArea'}>
          <Button primary type={'submit'}>
            ADD COMMENT
          </Button>
          <Button onClick={() => toggleAddCommentPopUp(null)} type={'button'}>
            CANCEL
          </Button>
        </div>
      </form>
    </PopUp>
  )
}

export default reduxForm<CommentPostProps, CommentPostFormProps>({
  form: 'comentPostForm'
})(CommentPostForm)