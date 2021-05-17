import { Route, RouteProps } from "react-router";

// import our analytics module
import * as analytics from "../analytics";

/**
 * Here, we extend the default RouteProps, to accept anything
 * a normal <Route /> would accept, but also our custom props.
 */
interface PageViewProuteProps extends RouteProps {
  title?: string;
}

const PageViewRoute: React.FC<PageViewProuteProps> = ({
  title,
  ...routeProps
}) => {
  // get the page title
  let pageTitle = title ? title : window.location.pathname.split("/").pop();
  if (!pageTitle) pageTitle = "unknown";

  // call the analytics
  analytics.pageview(pageTitle as string, {
    page_location: window.location.href,
    page_path: window.location.pathname,
  });

  return <Route {...routeProps} />;
};

export default PageViewRoute;
