import React from "react";
import Layout from "./src/components/Layout";

export let wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
