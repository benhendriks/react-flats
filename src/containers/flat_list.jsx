import React, { Component } from "react";

import Flat from "../components/flat";

class FlatList extends Component {
  static defaultProps = {
    flats: [
      {
        name: "Charm at the Steps of Montmartre",
        imageUrl:
          "https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/lunch.jpg",
        price: 164,
        priceCurrency: "EUR",
      },
    ],
  };
  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => (
          <Flat flat={flat} key={flat.name} />
        ))}
      </div>
    );
  }
}

export default FlatList;
