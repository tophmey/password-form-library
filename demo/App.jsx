import { Form } from "src";
import UpdatePasswordForm from "./UpdatePasswordForm";

export default App;

function App() {
  return (
    <div>
      <h1>App Demo</h1>
      <Form username="myuser" />
      <br />
      <hr />
      <br />
      <UpdatePasswordForm />
      <br />
    </div>
  );
}
