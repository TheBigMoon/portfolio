import React from "react";
import {Field, reduxForm} from "redux-form";
import s from './AddPostForm.module.css';

const AddPostForm = (props: any) => {
  return (
    <div className={s.background}>
      <form className={s.addPostForm} onSubmit={props.handleSubmit}>
        <p>ADD POST</p>
        <Field placeholder={'Title'} name={'addPostTitle'} component={'textarea'}/>
        <Field placeholder={'Body'} name={'addPostBody'} component={'textarea'}/>
        <div>
          <button type={'submit'}>Add post</button>
          <button type={'button'}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'addPostForm'
})(AddPostForm)