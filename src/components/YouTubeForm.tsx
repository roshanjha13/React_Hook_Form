import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
let renderCount = 0;

type Formvalues = {
  username: string;
  email: string;
  channel: string;
};

const YouTubeForm = () => {
  const form = useForm<Formvalues>();

  const { register, control, handleSubmit } = form;
  renderCount++;

  const onSubmit = (data: Formvalues) => {
    console.log("Form submitted", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Count Render Hook Form ({renderCount / 2})</h1>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" {...register("username")} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default YouTubeForm;
