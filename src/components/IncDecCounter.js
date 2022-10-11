import React, { useState } from "react";

export default function IncDecCounter() {
  const [value, setValue] = useState(0);

  //Handle increment
  const handleIncrement = () => setValue(value + 1);

   //Handle Decrement
  const handleDecrement = () => setValue(value - 1);

  return (
    <>
      <div className="container default-margin">
        <h1>Increment/Decrement Counter</h1>
        <div className="col-xl-2" style={{ marginTop: "2rem" }}>
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                class="btn btn-primary"
                type="button"
                onClick={handleDecrement}
              >
                -
              </button>
            </div>
            <input type="text" class="form-control" value={value} style={{marginLeft:"10px",marginRight:"10px"}} />
            <div class="input-group-prepend">
              <button
                class="btn btn-primary"
                type="button"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
