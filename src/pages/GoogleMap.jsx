import React from "react";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79544.90063985878!2d-0.05410263193498581!3d51.46222962446284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602844a443523%3A0x9f5181128b65430a!2sUniversity%20of%20Greenwich!5e0!3m2!1sen!2sng!4v1701280168400!5m2!1sen!2sng"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMap;
