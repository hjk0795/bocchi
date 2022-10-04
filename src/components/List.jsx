import React from "react";
import Circle from "./Circle";

function List(props) {

  return (
    <div className="container text-center">
      <div className="row borderLine">
        <div className="col-3">
          <Circle
            name=""
            width="100px"
            height="100px"
            lineHeight="100px"
            backgroundImage={props.brandImg}
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12 borderLine">{props.name}</div>
            <div className="col-12">
              <div className="row">
                <div className="col-3 borderLine">{props.star}</div>
                <div className="col-9 borderLine">{props.reviewStatement}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3" style={{border: "1px solid black", backgroundImage: `url(${props.foodImg})`, height: "100px", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
      </div>
    </div>
  );
}

export default List;
