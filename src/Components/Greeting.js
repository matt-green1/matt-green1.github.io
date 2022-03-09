import React from "react";
import { Header, Checkbox } from "semantic-ui-react";

const Greeting = ({ blurbStatus, switchBlurb }) => {
  return (
    <Header as="h1" id="greeting">
      <span id="wave">{!blurbStatus ? <>✋</> : <>🐽</>}</span>&nbsp;
      {!blurbStatus ? <>Hey, I'm Matt!</> : <>Eyhay, I'mway Attmay!</>}
      <span id="pigspan">
        <Checkbox
          className="pigtoggle"
          toggle
          onChange={switchBlurb}
          checked={blurbStatus}
        ></Checkbox>
        <span id="pigemoji">🐖</span>
      </span>
    </Header>
  );
};
export default Greeting;
