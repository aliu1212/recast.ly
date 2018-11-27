// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from '../src/data/exampleVideoData.js';

// console.log('example video data: ', exampleVideoData)
ReactDOM.render(<App exampleVids={exampleVideoData}/>, document.getElementById("app"));