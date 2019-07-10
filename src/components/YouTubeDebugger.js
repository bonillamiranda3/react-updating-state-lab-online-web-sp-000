// Code YouTubeDebugger Component Here
import React from 'react';


class YouTubeDebugger extends React.Component {
  constructor() {
    super();

      this.state = {
        errors: [],
        user: null,
        settings: {
          birate: 8,
          video: {
            resolution: '1080p'
           }
        }
      };
  }

    handleBirate = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      });
    };

    handleResolution = () => {
      this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
          }
        }
      });
    };

    render() {
      return (
          <div>
            <button className="birate" onClick={this.handleBirate}>
            Change bitrate
            </button>
          </div>
      );
    }
}

export default YouTubeDebugger;
