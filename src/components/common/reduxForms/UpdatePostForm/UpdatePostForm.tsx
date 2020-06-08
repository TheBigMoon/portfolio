import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './UpdatePostForm.module.css';
import {UpdatePostProps} from "../../../PostsPage/PostsPageContainer";

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
  debugger
  return (
    <div className={s.background}>
      <form className={s.updatePostForm} onSubmit={handleSubmit}>
        <p>EDIT POST</p>
        <Field placeholder={'Title'} name={'updatePostTitle'} component={'textarea'}/>
        <Field placeholder={'Body'} name={'updatePostBody'} component={'textarea'}/>
        <div>
          <button type={'submit'}>EDIT POST</button>
          <button onClick={() => toggleUpdatePostPopUp(postIdToUpdate)} type={'button'}>CANCEL</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm<UpdatePostProps, UpdatePostFormProps>({
  form: 'addPostForm'
})(UpdatePostForm)