import React from "react";
import PropTypes from "prop-types";
import { WebView } from "react-native-webview";

export default function TheWebView({ href }) {
  return <WebView source={{ uri: href }} />;
}

TheWebView.defaultProps = {
  href: "https://facebook.github.io/react-native/"
};

TheWebView.propTypes = {
  href: PropTypes.string
};
