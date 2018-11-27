import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from '../components/VideoList.js';
import VideoPlayer from '../components/VideoPlayer.js';
import Search from '../components/Search.js';
import fakeVideos from '../../spec/data/fakeVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);                                                                                                                                                                                
    this.state = {
      videoList: exampleVideoData,
      video: exampleVideoData[0],

    };
  }

  onTitleClick() {
    this.setState({
      video: 'bla'
    });
  }

  render() {
    return (
      <div>
        {/* {console.log('this.props',this.state.exampleVids)} */}
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-  md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videoList={this.state.videoList}/>
          </div>
        </div>
      </div>
    );
  }
}

// var App = (props) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
