import React from "react";
import { Grid, Header } from "semantic-ui-react";
import Greeting from "./Greeting.js";
import IconGrid from "./IconGrid.js";
import PhotoSlider from "./PhotoSlider.js";
import { useState } from "react";

const About = () => {
  const [blurbStatus, setBlurbStatus] = useState(false);
  const [blobValue, setblobValue] = useState(100);

  const switchBlurb = () => {
    if (blurbStatus === false) {
      setBlurbStatus(true);
    } else {
      setBlurbStatus(false);
    }
  };

  const blobHelper = (e) => {
    setblobValue(e.target.value);
  };

  return (
    <div id="about">
      <Header as="h1" id="name">
        Matt Green
      </Header>

      <IconGrid />

      <div id="aboutsection" style={{ "--spin": `${blobValue}s` }}>
        <Grid divided="vertically" stackable={true} id="aboutgrid">
          <Grid.Row columns={2} centered={true}>
            <Grid.Column width={7} id="blurbcolumn">
              <Greeting blurbStatus={blurbStatus} switchBlurb={switchBlurb} />

              {!blurbStatus ? (
                <Header as="h4" id="blurb">
                  I'm a full-stack developer based in nyc. I'm passionate about
                  using new technologies to build delightful, intuitive web
                  apps. I'm a jack of all trades, ready to use my
                  swiss-army-knife-like skillset to tackle tough problems and
                  implement user focused, visually pleasant solutions.
                  <br />
                  <br />
                  <br />
                </Header>
              ) : (
                <Header as="h4" id="blurb">
                  I'mway away ullfay-ackstay eveloperday asedbay inway ycnay.
                  I'mway assionatepay aboutway usingway ewnay echnologiestay
                  otay uildbay elightfulday, intuitiveway ebway appsway. I'mway
                  away ackjay ofway allway adestray, eadyray otay useway ymay
                  isssway-armyway-ifeknay-ikelay illsetskay otay ackletay
                  oughtay oblemspray andway implementway userway ocusedfay,
                  isuallyvay easantplay olutionssay.
                </Header>
              )}
            </Grid.Column>

            <Grid.Column width={5} id="photocolumn">
              <PhotoSlider blobValue={blobValue} blobHelper={blobHelper} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default About;
