import SamplePaper from "./components/SamplePaper";

/**
 * This is just a suggestion and we might want to refactor this in the future.
 * For the beginning this is fine.
 * A global config object that maps URL routes to the component to be loaded
 * We can set multi level url params if needed. But I would rather parse
 * query strings as that is more flexible (passing many citites etc.)
 */
export const LINKABLE_COMPONENTS: { [key: string]: React.ComponentType<any> } =
  {
    sample: SamplePaper,
  };

/**
 * Properties for any self-contained element.
 * The self-contained linkable elements need a way, how they can reproduce
 * the user interaction. These are a number of settings, like
 * city=Kalruhe, that are component specific, but need to exist on any
 * component that can be loaded by LINKABLE_COMPONENTS.
 * Then, the LinkBuilder can receive these params as the params prop and
 * PermalinkResolver can load them from the query String.
 * Page childs will set these properties explicitly and have a copy in their
 * state to update the linkparams
 *
 * Use this to extend the Linkable-Component Props.
 */
export interface LinkableProps {
  city?: string;
  citites?: string[];
  indicator?: string;
  indicators?: string[];
  [key: string]: any;
}
