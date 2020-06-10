import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from  './gif';
import GifList from './gifList';

// change Yann's API key
const giphy = require('giphy-api')('KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR');

// eslint-disable-next-line react/prefer-stateless-function

export default class App extends Component {

  // constructor is the equivalent of initiliaze in Ruby
  constructor(props) {
    super(props);
    // define state
    this.state = {
      selectedGif: "6fScAIQR0P0xW",
      gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({ selectedGif: newGifId });
  }

  changeGifIds = (keyword) => {
    // Use the keyword to fetch Giphy API
    // // npm js giphy
    // Receive an array of gif ids
    // Pass this array as our new gifIds state
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIds: res.data.map(gifObj => gifObj.id) });
    });
  }


  render() {
    // https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif
    // "6fScAIQR0P0xW"
    // const selectedGif = "6fScAIQR0P0xW";
    // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
    const { selectedGif, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifIds={this.changeGifIds}/>
          <div className="selected-gif">
           <Gif gifId={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}
