import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UpdatePostProps} from "../../../PostsPage/PostsPageContainer";
import {PopUp} from "../../../../styledComponents/common/popUps/PopUp";
import {Button} from "../../../../styledComponents/common/buttons/Button";

type UpdatePostFormProps = {
  toggleUpdatePostPopUp: (id: number | null) => void,
  postIdToUpdate: number | null,
}

const UpdatePostForm: React.FC<UpdatePostFormProps & InjectedFormProps<UpdatePostProps, UpdatePostFormProps>> = (
  {
    toggleUpdatePostPopUp,
    postIdToUpdate,
    handleSubmit
  }
) => {

  return (
    <PopUp>
      <form className={'popUpArea'} onSubmit={handleSubmit}>
        <p>
          EDIT POST
        </p>
        <Field placeholder={'Title'} name={'updatePostTitle'} component={'textarea'}/>
        <Field placeholder={'Body'} name={'updatePostBody'} component={'textarea'}/>
        <div className={'buttonsArea'}>
          <Button primary type={'submit'}>
            EDIT POST
          </Button>
          <Button onClick={() => toggleUpdatePostPopUp(postIdToUpdate)} type={'button'}>
            CANCEL
          </Button>
        </div>
      </form>
    </PopUp>
  )
}

export default reduxForm<UpdatePostProps, UpdatePostFormProps>({
  form: 'addPostForm'
})(UpdatePostForm)