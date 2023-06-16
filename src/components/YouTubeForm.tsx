import { useForm } from "react-hook-form";

const YouTubeForm = () => {
  const form = useForm();
  return (
    <form>
      <label htmlFor="username">UserName</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="channel">Channel</label>
      <input type="text" id="channel" name="cahnnel" />
      <button>Submit</button>
    </form>
  );
};

export default YouTubeForm;
