import React from "react";
import { BsArrowRight } from "react-icons/bs";
const SIngUp = () => {
  const handleCheck = () => {
    console.log("click");
  };
  return (
    <div className="singUpContainer">
      <p className="singUpTitle">
        Before you go, please leave your contact details so we
        <br /> can get back to you...
      </p>
      <form action="" className="hiddenFrom">
        <div className="inputSec">
          <input required placeholder="* Your Name" type="text" name="" id="" />
          <br />
          <input
            required
            placeholder="* Your Email"
            type="email"
            name=""
            id=""
          />
        </div>
        
        <div className="checkboxCondition">
          <input required onClick={handleCheck} type="checkbox" name="" id="" />
          <p>
            * [Sample legal text] The personal data you have provided will be
            processed by XXXXX for purposes of providing you the service. The
            legal basis of the processing is XXXXX. Your data will not be
            transferred nor assigned to third parties. You can exercise your
            right to access, rectify and delete your data, as well as the other
            rights granted by law by sending an email to XXXXX. For further
            information, please check our privacy policy XXXXX.
          </p>
        </div>
        <button type="submit" className="redirectBtn campingBtn">
          Send Me Your Answer <BsArrowRight />{" "}
        </button>
      </form>
    </div>
  );
};

export default SIngUp;
