import React, { Component } from "react";

class App extends Component {
  render() {
    const sidePanelWidth = 1;
    const centerPanelWidth = 10;

    return (
      <div className="App">
        <div className="row">
          <div id="leftPanel" className={`col s${sidePanelWidth}`}>
            <div className="sideArea" id="l1">
              l1
            </div>
            <div className="sideArea" id="l2">
              l2
            </div>
            <div className="sideArea" id="l3">
              l3
            </div>
            <div className="sideArea" id="l4">
              l4
            </div>
            <div className="sideArea" id="l5">
              l5
            </div>
            <div className="sideArea" id="l5">
              l6
            </div>
          </div>

          <div id="centerPanel" className={`col s${centerPanelWidth}`}>
            <div id="c1">c1</div>
            <div id="c2">c2</div>
            <div id="c3">c3</div>
          </div>

          <div id="rightPanel" className={`col s${sidePanelWidth}`}>
            <div className="sideArea" id="r1">
              r1
            </div>
            <div className="sideArea" id="r2">
              r2
            </div>
            <div className="sideArea" id="r3">
              r3
            </div>
            <div className="sideArea" id="r4">
              r4
            </div>
            <div className="sideArea" id="r5">
              r5
            </div>
            <div className="sideArea" id="r6">
              r6
            </div>
          </div>
        </div>
        <div className="row">
          <div id="bottomPanel" />
        </div>
      </div>
    );
  }
}

export default App;
