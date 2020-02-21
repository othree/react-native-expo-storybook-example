import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import DateTime from "../../src/components/DateTime";
import WebView from "../../src/components/WebView";
import Button from "../../src/components/Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")}>
      <Text>Hello Button!!</Text>
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

storiesOf("WebView", module)
  .add("without href", () => <WebView />)
  .add("with href", () => <WebView href={"https://duckduckgo.com/"} />);

storiesOf("DateTime", module).add("now", () => <DateTime />);
