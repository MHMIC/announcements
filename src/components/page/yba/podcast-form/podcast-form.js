import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "semantic-ui-react";
import Clipboard from "react-clipboard.js";

const StyledPodcastForm = styled.div`
  output {
    display: block;
    padding: 10px;
    color: #232333;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 0.28571429rem;
  }
`;

const PodcastForm = ({ input, handleChange }) => {
  const [isBold, setIsBold] = useState(false);
  return (
    <StyledPodcastForm>
      <Form>
        <Form.Group widths="equal">
          <Form.Field required>
            <label htmlFor="">Enter the Podcast Title</label>
            <input
              type="text"
              name="title"
              value={input.title}
              placeholder="Title"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field required>
            <label htmlFor="">Enter the Podcast Website Link</label>
            <input
              type="url"
              name="link"
              value={input.link}
              placeholder="https://www.yawarbaig.com/podcast/mentoring-is-a-contact-sport-2/"
              onChange={handleChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field width={16}>
            <label htmlFor="">Output is:</label>
            <output>
              Leadership is a personal choice, new episode: {""}
              {isBold && "*"}
              {input.title}
              {isBold && "*"}
              <br />
              <br />
              '{input.link}'
              <br />
              <br />
              Spotify: https://spoti.fi/35LzEaW
              <br />
              Apple: https://apple.co/2QLN0Qk
              <br />
              Google: http://bit.ly/2sdkP34"
            </output>
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label htmlFor="">Add Astrix for bolding in whatsapp</label>
            <input 
              type="checkbox"
              name="bold"
              value={isBold}
              onChange={() => setIsBold(!isBold)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field width={4}>
          {/* <Form.Button
            primary
          >Copy to clipboard</Form.Button> */}
          <Clipboard data-clipboard-text={`
            Leadership is a personal choice, new episode: ${""}
            ${isBold && "*"}
            ${input.title}
            ${isBold && "*"}
            ${""}
            ${""}
            '${input.link}'
            ${""}
            ${""}
            Spotify: https://spoti.fi/35LzEaW
            ${""}
            Apple: https://apple.co/2QLN0Qk
            ${""}
            Google: http://bit.ly/2sdkP34"
          `}>
            copy to clipboard
          </Clipboard>
        </Form.Field>
      </Form>
    </StyledPodcastForm>
  );
};

PodcastForm.defaultProps = {};

export default PodcastForm;
