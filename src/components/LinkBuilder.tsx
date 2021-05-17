import { LinkableProps } from "../share-links";

interface LinkBuilderProps {
  componentName: string;
  appRoute: string;
  params?: LinkableProps;
}

/**
 * The LinkBuilder generates the URLs needed to embed a component into another
 * page. It will turn into a backlink if the the URL actually is a /permalink
 * URL.
 * With the current implementation it renders the actual anchor-tag that
 * references the page or the component.
 * @todo Implement a Popover or something to *show* the link
 * @param props - LinkableProps - to make the component self contained
 * @returns
 */
const LinkBuilder: React.FC<LinkBuilderProps> = (props) => {
  // use the window to check the current location
  // TODO: not sure if the useLocation hook has any advantages here
  const { protocol, host, pathname } = window.location;
  const isPermalink = pathname.startsWith("/permalink");

  // build the correct href for the anchor-tag
  let href = `${protocol}//${host}/`;

  if (isPermalink) {
    href += `${props.appRoute}`;
  } else {
    href += `permalink/${props.componentName}`;

    // extra params needed and passed?
    if (props.params) {
      const query = new URLSearchParams(props.params);
      href += `?${query.toString()}`;
    }
  }
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {isPermalink ? "More" : "Share"}
    </a>
  );
};

export default LinkBuilder;
