import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from './AddPostForm.module.css';
import {AddPostProps} from "../../../PostsPage/PostsPageContainer";

type AddPostFormProps = {
  toggleAddPostPopUp: () => void,
}

const AddPostForm: React.FC<
  AddPostFormProps & InjectedFormProps<AddPostProps, AddPostFormProps>
  > = ({toggleAddPostPopUp, handleSubmit}) => {
  return (
    <div className={s.background}>
      <form className={s.addPostForm} onSubmit={handleSubmit}>
        <p>ADD POST</p>
        <Field placeholder={'Title'} name={'addPostTitle'} component={'textarea'}/>
        <Field placeholder={'Body'} name={'addPostBody'} component={'textarea'}/>
        <div>
          <button type={'submit'}>Add post</button>
          <button onClick={toggleAddPostPopUp} type={'button'}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm<AddPostProps, AddPostFormProps>({
  form: 'addPostForm'
})(AddPostForm)