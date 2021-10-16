import React, { Component } from "react";
import Card from "./CardUI";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="trb">
          <button class="btn btn-success">Create Grant</button>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc={img1}
              title="Collective Of Celo Creatives"
              content="A community experiment for a collective of artists + creators who seek to share mutual aid, resources, and support, by channeling the spirit of Celo around the world."
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img2}
              title="ZK HACK"
              content="The ZK HACK is a multi-week online event happening this fall! Through introductory workshops and advanced puzzle solving competitions, the event aims to teach participants how to use zk"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img3}
              title="Art2"
              content="Art2 is already successfully provides automated systems and AR services for bricks and mortar fine art galleries, but we are seeking to provide an easy to use interface for NFTs as well."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
