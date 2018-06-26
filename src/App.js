import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image/image';

class App extends Component {

   render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Custom Image Component</h1>
        </header>
        <div className="App-intro">
           <div >
           <Image
                  src="https://res.cloudinary.com/luxuryp/image/upload/work-24_1_tu4ujr"
                  placeholder={this.props.thumbnail}
                  width={'300px'}
                  height={'300px'}
                  className="image-box"
                  keepAspectRation={true}
                />
            </div>
            <div  >
           <Image
                  src="https://res.cloudinary.com/luxuryp/image/upload/work-24_1_tu4ujr"
                  placeholder={this.props.thumbnail} className="image-box"
                  width={'250px'}
                  height={'300px'}
                />
            </div>
            <div  >
           <Image
                  src="https://res.cloudinary.com/luxuryp/image/upload/work-24_1_tu4ujr"
                  placeholder={this.props.thumbnail}
                  className="image-box"
                />
            </div>
            <div  >
           <Image
                  src="https://res.cloudinary.com/luxuryp/image/upload/work-24_1_tu4ujr"
                  placeholder={this.props.thumbnail}
                  className="image-box"
                />
            </div>
            <div  >
           <Image
                  src="https://res.cloudinary.com/luxuryp/image/upload/work-24_1_tu4ujr"
                  placeholder={this.props.thumbnail}
                  className="image-box"
                  position={{
                        position: 'absolute',
                        display: 'flex',
                        width: '100px',
                        height: '50px',
                        top: '10px',
                      left: '30%',
                  }}
                />
            </div>

        </div>
      </div>
    );
  }
}

App.defaultProps={
 thumbnail:'data:image/png;base64,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',
}

export default App;
