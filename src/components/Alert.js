import { Bounce } from "react-reveal";
const Alert = (props) => {
  const { message, show } = props;

  return (
    <Bounce left>
      <div className={`alert ${show ? "show" : ""} `}>
        <p>{message}</p>
      </div>
    </Bounce>
  );
};
export default Alert;
