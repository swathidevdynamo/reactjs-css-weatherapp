import React from "react";

const TodayWeather = React.lazy(() => import('./TodayWeather'));

function LazyComponent() {
  return (
    <div>
      <TodayWeather />
    </div>
  );
}

export default LazyComponent;