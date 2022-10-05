import React, { useState } from "react";
import Circle from "./Circle";
import Iframe from "react-iframe";

function List(props) {
  const [isChecked, setIsChecked] = useState(false);

  function unfoldDetail() {
    return setIsChecked(!isChecked);
  }

  return (
    <div>
      <div
        className="container text-center"
        onClick={unfoldDetail}
        style={{ cursor: "pointer" }}
      >
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
                  <div className="col-9 borderLine">
                    {props.reviewStatement}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-3"
            style={{
              border: "1px solid black",
              backgroundImage: `url(${props.foodImg})`,
              height: "100px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div
        className="container text-center"
        style={isChecked ? { display: "block" } : { display: "none" }}
      >
        <div className="row borderLine">
          <div className="col-6">
            <Iframe
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
              allowFullScreen
              src={props.location}
            ></Iframe>
          </div>
          <div className="col-6">
            <div className="row">
              <div
                className="col-12"
                style={{
                  border: "1px solid black",
                  backgroundImage: `url(${props.menuImg})`,
                  height: "120px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="row">
              <div className="col-12">{props.openingHours}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
