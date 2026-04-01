import { useState } from "react";
import { Fragment } from "react";

function Toggle() {
  const [buttonvalue, setbuttonOnclick] = useState(false);

  const toggle = () => setbuttonOnclick((value) => !value);
  return (
    <Fragment>
      <button type="button" onClick={toggle}>
        Hey click me!!!
      </button>
      {buttonvalue && <p>Hey here is the message, clikc again to hide</p>}
    </Fragment>
  );
}

export default Toggle;
