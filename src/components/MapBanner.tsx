import * as React from "react";

declare global {
  interface Window {
    H: any;
  }
}

// let H = window.H; // ok now

const Map = () => {
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: "A8I1uemRKdAgTozu_LVVsxUYFjezdwAXzAk9LQ_lz0Y",
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 50, lng: 5 },
      zoom: 11,
      pixelRatio: window.devicePixelRatio || 1,
    });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));

    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    const view = hMap.getViewModel();

    view.setLookAtData({
      tilt: 70,
    });
    // const moveX
    // const moveY
    // const moveZ
    // const rotateX
    // const rotateY
    // const rotateZ

    view.startControl(true);
    // view.control({ rotateX: 3 });
    view.endControl(true);

    return () => {
      hMap.dispose();
    };
  }, [mapRef]); // This will run this hook every time this ref is updated

  return <div className="map" ref={mapRef} style={{ height: "500px" }} />;
};

export default Map;
