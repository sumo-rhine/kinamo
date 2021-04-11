// load all Components that can be linked
import React from "react";
import { useParams } from "react-router";
import SampleIndicatorCard from "./SampleIndicatorCard";

/**
 * This is just a suggestion and we might want to refactor this in the future.
 * For the beginning this is fine. 
 * A global config object that maps URL routes to the component to be loaded
 * We can set multi level url params if needed. But I would rather parse 
 * query strings as that is more flexible (passing many citites etc.)
 */
 const LINKABLE_COMPONENTS: {[key: string]: React.ComponentType<any>} = {
    'sample': SampleIndicatorCard
};

const PermalinkResolver: React.FC = () => {
    // load the url component name
    const {component } = useParams<{component: string}>();

    // get the correct class
    const Component: React.ComponentType<any> = LINKABLE_COMPONENTS[component];
    
    // render the component - no data handling implemented.
    return (
        <Component />
    );
}

export default PermalinkResolver;