import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data) => {
    console.log("form data: ", data);
  };

  return (
    <div className="Login">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          USERNAME
          <input type="text" name="username" {...register("username")} />
        </label>
        <label>
          PASSWORD
          <input type="password" name="password" {...register("password")} />
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default Login;
