// load all Components that can be linked
import React from "react";
import { useParams } from "react-router";

import { LinkableProps, LINKABLE_COMPONENTS } from "../share-links";

const PermalinkResolver: React.FC = () => {
  // load the url component name
  const { component } = useParams<{ component: string }>();

  // get the URL search query params
  // This is the native implementation, which will not work on IE
  // TODO: once LinkableProps is finished - replace by any library
  // that has polyfills
  const searchParams = new URLSearchParams(window.location.search);
  // this is what we want to have
  const params: LinkableProps = {};
  searchParams.forEach((parValue: string, parKey: string) => {
    // for some odd reasons they come as value, key !?
    // if the key aleady exists, it's an array-type
    if (params[parKey]) {
      (params[parKey] as string[]).push(parValue);
    } else {
      params[parKey] = parValue;
    }
  });

  console.log(params);

  // get the correct class
  const Component: React.ComponentType<LinkableProps> =
    LINKABLE_COMPONENTS[component];

  // render the component - no data handling implemented.
  return <Component {...params} />;
};

export default PermalinkResolver;
