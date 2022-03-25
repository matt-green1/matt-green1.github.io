import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Grid, Image, Header } from "semantic-ui-react";
import github from "../images/about_images/github.png";
import linkedin from "../images/about_images/linkedin.png";
import { useState } from "react";

const IconGrid = () => {
  const [copied, setCopied] = useState(false);
  const [emailValue] = useState("magreen118@gmail.com");

  const emailCopyHelper = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };

  return (
    <Grid divided="vertically">
      <Grid.Row columns={3} id="linkiconrow">
        <Grid.Column className="linkicons">
          <Image
            src={linkedin}
            alt="linkedin"
            className="hvr-skew"
            id="linkedin"
            href="https://linkedin.com/in/matthewgreen123"
            target="_blank"
          />
        </Grid.Column>
        <Grid.Column className="linkicons">
          <Image
            src={github}
            alt="github"
            className="hvr-skew"
            id="github"
            href="https://github.com/matt-green1"
            target="_blank"
          />
        </Grid.Column>
        <Grid.Column className="linkicons">
          <CopyToClipboard text={emailValue} onCopy={emailCopyHelper}>
            <Header as="h1" id="emailsymbol" className="hvr-skew">
              @
            </Header>
          </CopyToClipboard>
        </Grid.Column>
        {copied ? <span id="emailcopytext">Email Copied!</span> : null}
      </Grid.Row>
    </Grid>
  );
};

export default IconGrid;
