interface LinkBuilderProps {
    componentName: string;
    appRoute: string;
    params?: {[key: string]: any}
}


const LinkBuilder: React.FC<LinkBuilderProps> = props => {
    // use the window to check the current location
    // TODO: not sure if the useLocation hook has any advantages here
    const { protocol, host, pathname } = window.location;
    const isPermalink = pathname.startsWith('/permalink'); 
    
    // build the correct href for the anchor-tag
    let href = `${protocol}//${host}/`;
    
    if (isPermalink) {
        href += `${props.appRoute}`    
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
            { isPermalink ? 'More' : 'Share' }
        </a>
    );
}

export default LinkBuilder;