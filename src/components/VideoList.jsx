// import App from './components/App.js';
import VideoListEntry from '../components/VideoListEntry.js';

let VideoList = (props) => (
  <div className="video-list">
    {/* {console.log('videolist props', props.vids)} */}
    {props.vids.map(item =>
      <VideoListEntry item={item} />
    )}
  </div>
);



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.

export default VideoList;
