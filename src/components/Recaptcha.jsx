import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptcha = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  // site key  6LevEtknAAAAACuGKzOliDa_hRQ9RF9c-Os-B8gb
  // secret key   6LevEtknAAAAAD6QwMamqQRapkF9Tf-vsNR8gf9L

  // site key  6Lc9GNknAAAAAHPMm4DNNdq8u7e23UXvW4jqhtIP
  // secret key   6Lc9GNknAAAAALU_LiSYm-hsUBLF-Jgdiias4nEp

  // site key  6Lc8ItknAAAAAO1QT-LKxOsYott_V8VbupcM0u7L
  // secret key   6Lc8ItknAAAAAO1B9DFYuiUMIbpbh_RJm2p6O8IM

  return (
    <ReCAPTCHA
      sitekey="6Lc8ItknAAAAAO1QT-LKxOsYott_V8VbupcM0u7L"
      onChange={onChange}
    />
  );
};

export default Recaptcha;
