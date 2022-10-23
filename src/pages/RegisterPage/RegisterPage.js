import {useForm} from "react-hook-form";

const RegisterPage = () => {
  const {handleSubmit, register} = useForm();
  const submit = async () => {}

  return (
      <form onSubmit={handleSubmit(submit)}>
      <input type='text' placeholder={'username'} {...register('username')}/>
      <input type='text' placeholder={'password'} {...register('password')}/>
          <button>Register</button>
      </form>
  );
}

export {RegisterPage};