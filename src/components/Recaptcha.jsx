import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <ReCAPTCHA
      sitekey="6LevEtknAAAAACuGKzOliDa_hRQ9RF9c-Os-B8gb"
      onChange={onChange}
    />
  );
};

export default Recaptcha;
