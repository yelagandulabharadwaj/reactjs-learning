import { ReactNode } from "react";
import { Fragment } from "react";
import { useState } from "react";
interface buttonProperties {
  click_check: boolean;
}

function ButtonClick(click_check: buttonProperties) {
  const [age_variable, setAgeValue] = useState<null | boolean>(null);
  return (
    <Fragment>
      <h1>age check</h1>
      <div>
        <button
          type="button"
          onClick={() => setAgeValue(true)}
          className="btn btn-primary"
        >
          Are you 18 yr older?
        </button>

        <button
          type="button"
          onClick={() => setAgeValue(false)}
          className="btn btn-danger"
        >
          NO, am not.
        </button>
        {age_variable && <p>yes you are eligible</p>}
        {age_variable === false && <p>comeback when you are eligible</p>}
      </div>
    </Fragment>
  );
}

export default ButtonClick;
