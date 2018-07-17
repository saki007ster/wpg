import React, { Component } from 'react';
import Measure from 'react-measure';
import WithLightbox from './WithLightbox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { width: -1 };
    this.loadPhotos = this.loadPhotos.bind(this);
  }
  componentDidMount() {
    this.loadPhotos();
  }
  loadPhotos() {
    const photos = [
      {src: './img/DSC_1095.jpg', width:4, height:3},
      {src: './img/DSC_1112.jpg', width:4, height:3},
      {src: './img/DSC_1132.jpg', width:4, height:3},
      {src: './img/DSC_1162.jpg', width:4, height:3},
      {src: './img/DSC_1247.jpg', width:4, height:3},
      {src: './img/DSC_1271.jpg', width:4, height:3},
      {src: './img/DSC_1280.jpg', width:4, height:3},
      {src: './img/DSC_1328.jpg', width:4, height:3},
      {src: './img/DSC_1346.jpg', width:4, height:3},
      {src: './img/DSC_1349.jpg', width:2, height:3},
      {src: './img/DSC_1380.jpg', width:4, height:3},
      {src: './img/DSC_1399.jpg', width:4, height:3},
      {src: './img/DSC_1428.jpg', width:4, height:3},
      {src: './img/DSC_1445.jpg', width:2, height:3},
      {src: './img/DSC_1447.jpg', width:4, height:3},
      {src: './img/DSC_1475.jpg', width:4, height:3},
      {src: './img/DSC_1483.jpg', width:4, height:3},
      {src: './img/DSC_1509.jpg', width:4, height:3},
      {src: './img/DSC_1513.jpg', width:4, height:3},
      {src: './img/DSC_1514.jpg', width:2, height:3},
      {src: './img/DSC_1520.jpg', width:4, height:3},
      {src: './img/DSC_1533.jpg', width:4, height:3},
      {src: './img/DSC_1545.jpg', width:4, height:3},
      {src: './img/DSC_1547.jpg', width:4, height:3},
      {src: './img/DSC_1553.jpg', width:4, height:3},
      {src: './img/DSC_1564.jpg', width:4, height:3},
      {src: './img/DSC_1569.jpg', width:4, height:3},
      {src: './img/DSC_1648.jpg', width:4, height:3},
      {src: './img/DSC_1747.jpg', width:4, height:3},
      {src: './img/DSC_1761.jpg', width:4, height:3},
      {src: './img/DSC_1769.jpg', width:4, height:3},
      {src: './img/DSC_1807.jpg', width:4, height:3},
      {src: './img/DSC_1834.jpg', width:2, height:3},
      {src: './img/DSC_1836.jpg', width:2, height:3},
      {src: './img/DSC_1933.jpg', width:4, height:3},
      {src: './img/DSC_1950.jpg', width:4, height:3},
      {src: './img/DSC_1993.jpg', width:4, height:3},
      {src: './img/DSC_2005.jpg', width:4, height:3},
      {src: './img/DSC_2014.jpg', width:4, height:3},
      {src: './img/DSC_2016.jpg', width:2, height:3},
      {src: './img/DSC_2023.jpg', width:4, height:3},
      {src: './img/DSC_2025.jpg', width:2, height:3},
      {src: './img/DSC_2032.jpg', width:2, height:3},
      {src: './img/DSC_2036.jpg', width:2, height:3},
      {src: './img/DSC_2039.jpg', width:2, height:3},
      {src: './img/DSC_2048.jpg', width:4, height:3},
      {src: './img/DSC_2049.jpg', width:4, height:3},
      {src: './img/DSC_2054.jpg', width:4, height:3},
      {src: './img/DSC_2058.jpg', width:4, height:3},
      {src: './img/DSC_2098.jpg', width:4, height:3},
      {src: './img/DSC_2103.jpg', width:4, height:3},
      {src: './img/DSC_2110.jpg', width:4, height:3},
      {src: './img/DSC_2113.jpg', width:4, height:3},
      {src: './img/DSC_2115.jpg', width:4, height:3},
      {src: './img/DSC_2118.jpg', width:4, height:3},
      {src: './img/DSC_2119.jpg', width:4, height:3},
      {src: './img/DSC_2131.jpg', width:4, height:3},
      {src: './img/DSC_2133.jpg', width:4, height:3},
      {src: './img/DSC_2135.jpg', width:4, height:3},
      {src: './img/DSC_2136.jpg', width:4, height:3},
      {src: './img/DSC_2137.jpg', width:4, height:3},
      {src: './img/DSC_2138.jpg', width:4, height:3},
      {src: './img/DSC_2140.jpg', width:4, height:3},
      {src: './img/DSC_2142.jpg', width:4, height:3},
      {src: './img/DSC_2143.jpg', width:4, height:3},
      {src: './img/DSC_2153.jpg', width:4, height:3},
      {src: './img/DSC_2155.jpg', width:4, height:3},
      {src: './img/DSC_2161.jpg', width:4, height:3},
      {src: './img/DSC_2168.jpg', width:4, height:3},
      {src: './img/DSC_2171.jpg', width:4, height:3},
      {src: './img/DSC_2172.jpg', width:4, height:3},
      {src: './img/DSC_2173.jpg', width:4, height:3},
      {src: './img/DSC_2178.jpg', width:4, height:3},
      {src: './img/DSC_2179.jpg', width:4, height:3},
      {src: './img/DSC_2181.jpg', width:4, height:3},
      {src: './img/DSC_2187.jpg', width:4, height:3},
      {src: './img/DSC_2190.jpg', width:4, height:3},
      {src: './img/DSC_2192.jpg', width:4, height:3},
      {src: './img/DSC_2201.jpg', width:4, height:3},
      {src: './img/DSC_2204.jpg', width:4, height:3},
      {src: './img/DSC_2205.jpg', width:4, height:3},
      {src: './img/DSC_2206.jpg', width:4, height:3},
      {src: './img/DSC_2208.jpg', width:4, height:3},
      {src: './img/DSC_2213.jpg', width:4, height:3},
      {src: './img/DSC_2218.jpg', width:4, height:3},
      {src: './img/DSC_2226.jpg', width:4, height:3},
      {src: './img/DSC_2241.jpg', width:4, height:3},
      {src: './img/DSC_2243.jpg', width:4, height:3},
      {src: './img/DSC_2244.jpg', width:4, height:3},
      {src: './img/DSC_2245.jpg', width:4, height:3},
      {src: './img/DSC_2255.jpg', width:4, height:3},
      {src: './img/DSC_2258.jpg', width:4, height:3},
      {src: './img/DSC_2264.jpg', width:4, height:3},
      {src: './img/DSC_2265.jpg', width:4, height:3},
      {src: './img/DSC_2294.jpg', width:4, height:3},
      {src: './img/DSC_2295.jpg', width:4, height:3},
      {src: './img/DSC_2296.jpg', width:4, height:3},
      {src: './img/DSC_2297.jpg', width:2, height:3},
      {src: './img/DSC_2312.jpg', width:4, height:3},
      {src: './img/DSC_2318.jpg', width:4, height:3},
      {src: './img/DSC_2319.jpg', width:4, height:3},
      {src: './img/DSC_2322.jpg', width:4, height:3},
      {src: './img/DSC_2326.jpg', width:4, height:3},
      {src: './img/DSC_2330.jpg', width:4, height:3},
      {src: './img/DSC_2343.jpg', width:4, height:3},
      {src: './img/DSC_2366.jpg', width:4, height:3},
      {src: './img/DSC_2368.jpg', width:4, height:3},
      {src: './img/DSC_2369.jpg', width:4, height:3},
      {src: './img/DSC_2371.jpg', width:4, height:3},
      {src: './img/DSC_2372.jpg', width:4, height:3},
      {src: './img/DSC_2373.jpg', width:4, height:3},
      {src: './img/DSC_2376.jpg', width:4, height:3},
      {src: './img/DSC_2377.jpg', width:4, height:3},
      {src: './img/DSC_2381.jpg', width:4, height:3},
      {src: './img/DSC_2392.jpg', width:4, height:3},
      {src: './img/DSC_2399.jpg', width:4, height:3},
      {src: './img/DSC_2403.jpg', width:4, height:3},
      {src: './img/DSC_2410.jpg', width:4, height:3},
      {src: './img/DSC_2418.jpg', width:2, height:3},
      {src: './img/DSC_2423.jpg', width:4, height:3},
      {src: './img/DSC_2433.jpg', width:4, height:3},
      {src: './img/DSC_2436.jpg', width:2, height:3},
      {src: './img/DSC_2439.jpg', width:2, height:3},
      {src: './img/DSC_2443.jpg', width:2, height:3},
      {src: './img/DSC_2445.jpg', width:4, height:3},
      {src: './img/DSC_2468.jpg', width:4, height:3},
      {src: './img/DSC_2476.jpg', width:4, height:3},
      {src: './img/DSC_2477.jpg', width:2, height:3},
      {src: './img/DSC_2479.jpg', width:2, height:3},
      {src: './img/DSC_2480.jpg', width:2, height:3},
      {src: './img/DSC_2485.jpg', width:2, height:3},
      {src: './img/DSC_2487.jpg', width:2, height:3},
      {src: './img/DSC_2488.jpg', width:2, height:3},
      {src: './img/DSC_2495.jpg', width:4, height:3},
      {src: './img/DSC_2497.jpg', width:2, height:3},
      {src: './img/DSC_2501.jpg', width:2, height:3},
      {src: './img/DSC_2510.jpg', width:2, height:3},
      {src: './img/DSC_2514.jpg', width:4, height:3},
      {src: './img/DSC_2517.jpg', width:4, height:3},
      {src: './img/DSC_2519.jpg', width:4, height:3},
      {src: './img/DSC_2522.jpg', width:4, height:3},
      {src: './img/DSC_2526.jpg', width:4, height:3},
      {src: './img/DSC_2530.jpg', width:4, height:3},
      {src: './img/DSC_2533.jpg', width:4, height:3},
      {src: './img/DSC_2536.jpg', width:4, height:3},
      {src: './img/DSC_2543.jpg', width:4, height:3},
      {src: './img/DSC_2544.jpg', width:4, height:3},
      {src: './img/DSC_2548.jpg', width:2, height:3},
      {src: './img/DSC_2551.jpg', width:4, height:3},
      {src: './img/DSC_2553.jpg', width:4, height:3},
      {src: './img/DSC_2556.jpg', width:4, height:3},
      {src: './img/DSC_2559.jpg', width:2, height:3},
      {src: './img/DSC_2561.jpg', width:4, height:3},
      {src: './img/DSC_2564.jpg', width:4, height:3},
      {src: './img/DSC_2567.jpg', width:4, height:3},
      {src: './img/DSC_2569.jpg', width:4, height:3},
      {src: './img/DSC_2571.jpg', width:4, height:3},
      {src: './img/DSC_2573.jpg', width:4, height:3},
      {src: './img/DSC_2575.jpg', width:4, height:3},
      {src: './img/DSC_2576.jpg', width:4, height:3},
      {src: './img/DSC_2577.jpg', width:2, height:3},
      {src: './img/DSC_2581.jpg', width:2, height:3},
      {src: './img/DSC_2587.jpg', width:2, height:3},
      {src: './img/DSC_2592.jpg', width:2, height:3},
      {src: './img/DSC_2596.jpg', width:4, height:3},
      {src: './img/DSC_2605.jpg', width:4, height:3},
      {src: './img/DSC_2625.jpg', width:2, height:3},
      {src: './img/DSC_2634.jpg', width:4, height:3},
      {src: './img/DSC_2638.jpg', width:4, height:3},
      {src: './img/DSC_2644.jpg', width:4, height:3},
      {src: './img/DSC_2647.jpg', width:2, height:3},
      {src: './img/DSC_2648.jpg', width:2, height:3},
      {src: './img/DSC_2655.jpg', width:2, height:3},
      {src: './img/DSC_2668.jpg', width:2, height:3},
      {src: './img/DSC_2683.jpg', width:2, height:3},
      {src: './img/DSC_2701.jpg', width:4, height:3},
      {src: './img/DSC_2703.jpg', width:2, height:3},
      {src: './img/DSC_2705.jpg', width:4, height:3},
      {src: './img/DSC_2723.jpg', width:4, height:3},
      {src: './img/DSC_2730.jpg', width:4, height:3},
      {src: './img/DSC_2740.jpg', width:4, height:3},
      {src: './img/DSC_2744.jpg', width:4, height:3},
      {src: './img/DSC_2751.jpg', width:4, height:3},
      {src: './img/DSC_2752.jpg', width:4, height:3},
      {src: './img/DSC_2753.jpg', width:4, height:3},
      {src: './img/DSC_2754.jpg', width:4, height:3},
      {src: './img/DSC_2777.jpg', width:4, height:3},
      {src: './img/DSC_2781.jpg', width:4, height:3},
      {src: './img/DSC_2791.jpg', width:4, height:3},
      {src: './img/DSC_2793.jpg', width:4, height:3},
      {src: './img/DSC_2796.jpg', width:4, height:3},
      {src: './img/DSC_2797.jpg', width:4, height:3},
      {src: './img/DSC_2800.jpg', width:4, height:3},
      {src: './img/DSC_2801.jpg', width:4, height:3},
      {src: './img/DSC_2803.jpg', width:4, height:3},
      {src: './img/DSC_2809.jpg', width:4, height:3},
      {src: './img/DSC_2815.jpg', width:4, height:3},
      {src: './img/DSC_2827.jpg', width:4, height:3},
      {src: './img/DSC_2831.jpg', width:4, height:3},
      {src: './img/DSC_2840.jpg', width:4, height:3},
      {src: './img/DSC_2843.jpg', width:4, height:3},
      {src: './img/DSC_2876.jpg', width:4, height:3},
      {src: './img/DSC_2883.jpg', width:4, height:3},
      {src: './img/DSC_2895.jpg', width:4, height:3},
      {src: './img/DSC_2900.jpg', width:4, height:3},
      {src: './img/DSC_2904.jpg', width:2, height:3},
      {src: './img/DSC_2908.jpg', width:2, height:3},
      {src: './img/DSC_2921.jpg', width:2, height:3},
      {src: './img/DSC_2935.jpg', width:4, height:3},
      {src: './img/DSC_2947.jpg', width:4, height:3},
      {src: './img/DSC_2955.jpg', width:4, height:3},
      {src: './img/DSC_3117.jpg', width:2, height:3},
      {src: './img/DSC_3118.jpg', width:2, height:3},
      {src: './img/DSC_3125.jpg', width:4, height:3},
      {src: './img/DSC_3129.jpg', width:4, height:3},
      {src: './img/DSC_3132.jpg', width:4, height:3},
      {src: './img/DSC_3146.jpg', width:4, height:3},
      {src: './img/DSC_3152.jpg', width:2, height:3},
      {src: './img/DSC_3155.jpg', width:4, height:3},
      {src: './img/DSC_3158.jpg', width:2, height:3},
      {src: './img/DSC_3168.jpg', width:4, height:3},
      {src: './img/DSC_3171.jpg', width:4, height:3},
      {src: './img/DSC_3177.jpg', width:4, height:3},
      {src: './img/DSC_3189.jpg', width:4, height:3},
      {src: './img/DSC_3190.jpg', width:4, height:3},
      {src: './img/DSC_3197.jpg', width:4, height:3},
      {src: './img/DSC_3200.jpg', width:4, height:3},
      {src: './img/DSC_3210.jpg', width:4, height:3},
      {src: './img/DSC_3212.jpg', width:2, height:3},
      {src: './img/DSC_3214.jpg', width:4, height:3},
      {src: './img/DSC_3221.jpg', width:4, height:3},
      {src: './img/DSC_3225.jpg', width:4, height:3},
      {src: './img/DSC_3236.jpg', width:4, height:3},
      {src: './img/DSC_3238.jpg', width:4, height:3},
      {src: './img/DSC_3240.jpg', width:4, height:3},
      {src: './img/DSC_3243.jpg', width:4, height:3},
      {src: './img/DSC_3247.jpg', width:4, height:3},
      {src: './img/DSC_3249.jpg', width:4, height:3},
      {src: './img/DSC_3258.jpg', width:4, height:3},
      {src: './img/DSC_3262.jpg', width:4, height:3},
      {src: './img/DSC_3289.jpg', width:4, height:3},
      {src: './img/DSC_3292.jpg', width:4, height:3},
      {src: './img/DSC_3296.jpg', width:2, height:3},
      {src: './img/DSC_3298.jpg', width:2, height:3},
      {src: './img/DSC_3302.jpg', width:4, height:3},
      {src: './img/DSC_3305.jpg', width:4, height:3},
      {src: './img/DSC_3311.jpg', width:2, height:3},
      {src: './img/DSC_3316.jpg', width:4, height:3}
    ];
    this.setState({
      photos: this.state.photos ? this.state.photos.concat(photos) : photos,
    });

  }
  render() {
    if (this.state.photos) {
      const width = this.state.width;
      return (
        <div className="ContainerApp">
          <header className="App-header">
            <h1 className="App-title">Saket & Neelam Wedding Photos</h1>
          </header>
          <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
          {
            ({ measureRef }) => {
              if (width < 1 ){
                return <div ref={measureRef}></div>;
              }
              let columns = 1;
              if (width >= 480){
                columns = 2;
              }
              if (width >= 1024){
                columns = 3;
              }
              if (width >= 1824){
                columns = 4;
              }
              return <div ref={measureRef} className="App">
                  <WithLightbox columns={columns} photos={this.state.photos} />
                </div>
            }
          }
		    </Measure>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div id="msg-app-loading" className="loading-msg">
            Loading
          </div>
        </div>
      );
    }
  }
}

export default App;
