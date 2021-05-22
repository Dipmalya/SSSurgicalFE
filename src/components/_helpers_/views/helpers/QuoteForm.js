import React, { useState } from "react";
import axios from "axios";

const QuoteForm = ({ url }) => {
  const { SEND_EMAIL } = url;
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [query, setQuery] = useState("");

  const sendMail = (mailObj) => {
    axios
      .post(SEND_EMAIL, mailObj)
      .then((res) => {
        if (res.data.success) {
          setName("");
          setMobile("");
          setQuery("");
          alert(
            "We have received your query, we will get back to you shortly!!"
          );
        }
      })
      .catch((res) => (staus = res.data));
  };

  return (
    <div className="card">
      <div className="card-header p-0">
        <div className="bg-secondary text-white text-center p-2">
          <h3>
            <i className="fa fa-envelope pr-3"></i>Tell Us What You Are Looking
            For ?
          </h3>
        </div>
      </div>
      <div className="card-body p-3">
        <div className="form-group">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-user text-secondary"></i>
              </div>
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-phone text-secondary"></i>
              </div>
            </div>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              type="tel"
              className="form-control"
              id="nombre"
              name="mobile"
              placeholder="+91 ..."
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fa fa-comment text-secondary"></i>
              </div>
            </div>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control"
              placeholder="Tell Us What You Are Looking For ?"
              required
            ></textarea>
          </div>
        </div>

        <div className="text-center">
          <input
            disabled={name === "" || mobile === "" || query === ""}
            type="button"
            onClick={() => sendMail({ name, mobile, query })}
            value="Send us"
            className="btn btn-secondary btn-block py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
