import React from "react";
import "./form-style.css";
import logo from "../assets/img4.png";
import DropzoneComponent from "../DropZoneComp/DropZoneComponent";

const Form = () => {
  return (
    <div id="cs" class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div class="cd">
            <img src={logo} />;
            <br /> <br />
            <h5 class="text-center">Create A Grant</h5>
            <p>We're excited to learn about your project.</p>
            <form class="form-card" onsubmit="event.preventDefault()">
              <div class="row justify-content-between text-left">
                <div class="form-group flex-column d-flex">
                  {" "}
                  <label class="form-control-label">
                    Project Logo<span class="text-danger"> *</span>
                  </label>{" "}
                  <div>
                    <DropzoneComponent />
                  </div>
                  <label class="form-control-label">
                    Title<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Project Title"
                    onblur="validate(1)"
                  />{" "}
                  <label class="form-control-label">
                    Description<span class="text-danger"> *</span>
                  </label>{" "}
                  <textarea
                    class="scrollabletextbox"
                    name="note"
                    placeholder="Project Description"
                    onblur="validate(2)"
                  ></textarea>{" "}
                  <label class="form-control-label">
                    Number Of Installments<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Number Of Installments"
                    onblur="validate(3)"
                  />
                  <label class="form-control-label">
                    Github URL<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="mob"
                    name="mob"
                    placeholder="Github URL"
                    onblur="validate(4)"
                  />{" "}
                  <label class="form-control-label">
                    Project Website<span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="job"
                    name="job"
                    placeholder="Website URL"
                    onblur="validate(5)"
                  />{" "}
                  <label class="form-control-label">
                    LinkedIn URL
                    <span class="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder="LinkedIn URL"
                    onblur="validate(6)"
                  />{" "}
                  <label class="form-control-label">
                    Tags
                    <span class="text-danger"> *</span>
                  </label>{" "}
                  <select name="cars" id="cars">
                    <option value="volvo">Opt1</option>
                    <option value="saab">Opt2</option>
                    <option value="opel">Opt3</option>
                    <option value="audi">Opt4</option>
                  </select>
                  <br />
                  <br />{" "}
                  <label class="form-control-label">
                    Categories
                    <span class="text-danger"> *</span>
                  </label>{" "}
                  <select name="cars" id="cars">
                    <option value="volvo">Opt1</option>
                    <option value="saab">Opt2</option>
                    <option value="opel">Opt3</option>
                    <option value="audi">Opt4</option>
                  </select>
                  <br />
                  <br />{" "}
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="form-group">
                  {" "}
                  <button type="submit" class="btn-block btn-primary">
                    Create Grant
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
