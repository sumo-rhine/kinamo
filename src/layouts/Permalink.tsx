/**
 * The Permalink Layout is the main component that loads the necessary
 * components to compile a single self-contained Figure or Table.
 * The backlink is injected and rendered.
 * This loads AppState and injects it into the component itself, to
 * bypass the pages and render components without Header etc.
 * 
 */
const Permalink: React.FC = () => {
    return (
        <pre>
            <code>
                This is &lt;Permalink /&gt; receiving following data: bisher noch gar keine
            </code>
        </pre>
    );
}

export default Permalink;