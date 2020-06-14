import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { AddPostProps } from '../../../PostsPage/PostsPageContainer';
import { PopUp } from '../../../../styledComponents/common/popUps/PopUp';
import { Button } from '../../../../styledComponents/common/buttons/Button';

type AddPostFormProps = {
  toggleAddPostPopUp: () => void,
}
type ReduxProps = AddPostFormProps & InjectedFormProps<AddPostProps, AddPostFormProps>

const AddPostForm: React.FC<ReduxProps> = ({ toggleAddPostPopUp, handleSubmit }) => (
  <PopUp>
    <form className={'popUpArea'} onSubmit={handleSubmit}>
      <p>
        ADD POST
      </p>
      <Field placeholder={'Title'} name={'addPostTitle'} component={'textarea'} />
      <Field placeholder={'Body'} name={'addPostBody'} component={'textarea'} />
      <div className={'buttons'}>
        <Button primary type={'submit'}>
          Add post
        </Button>
        <Button onClick={toggleAddPostPopUp} type={'button'}>
          Cancel
        </Button>
      </div>
    </form>
  </PopUp>
);

export default reduxForm<AddPostProps, AddPostFormProps>({
  form: 'addPostForm'
})(AddPostForm);