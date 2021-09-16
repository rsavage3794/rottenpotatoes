import axios from "axios";
import React, { useState } from "react";
import { baseURL, headers } from "../../services/show.service";

const AddShow = () => {
  const initialShowState = {
    id: null,
    title: "",
    notable_actors: "",
    network: "",
    genre: "",
    summary: "",
    rating: 0,
    photo_url: ""
  };
  const [show, setShow] = useState(initialShowState);
  const [submitted, setSubmitted] = useState(false);
  const handleShowChange = (e) => {
    const { title, value } = e.target;
    setShow({ ...show, [title]: value });
  };
  const submitShow = () => {
    let data = {
      title: show.title,
      notable_actors: show.notable_actors,
      network: show.network,
      genre: show.genre,
      summary: show.summary,
      rating: show.rating,
      photo_url: show.photo_url
    };
    axios
      .post(`${baseURL}/shows/add`, data, {
        headers: {
            "Content-type": "application.json",
        },
      })
      .then((response) => {
        setShow({
          id: response.data.id,
          title: response.data.title,
          notable_actors: response.data.notable_actors,
          network: response.data.network,
          genre: response.data.genre,
          summary: response.data.summary,
          rating: response.data.rating,
          photo_url: response.data.photo_url,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newShow = () => {
    submitShow()
    setShow(initialShowState);
    setSubmitted(false);
  };
return (
    <div className="submit-form">
          {submitted ? (
            <div>
              <div
                className="alert alert-success alert-dismissible fade show"
                role="alert"
              >
                Show Added!
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <button className="btn btn-success" onClick={newShow}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  onChange={handleShowChange}
                  name="title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="notable_actors">Notable Actors</label>
                <input
                  type="text"
                  className="form-control"
                  id="notable_actors"
                  require
                  onChange={handleShowChange}
                  name="notable_actors"
                />
              </div>
              <div className="form-group">
                <label htmlFor="network">Network</label>
                <input
                  type="text"
                  className="form-control"
                  id="network"
                  required
                  onChange={handleShowChange}
                  name="network"
                />
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  required
                  onChange={handleShowChange}
                  name="genre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <input
                  type="text"
                  className="form-control"
                  id="summary"
                  required
                  onChange={handleShowChange}
                  name="summary"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  required
                  onChange={handleShowChange}
                  name="rating"
                />
              </div>
              <div className="form-group">
                <label htmlFor="photo_url">Photo URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="photo_url"
                  required
                  onChange={handleShowChange}
                  name="photo_url"
                />
              </div>
              <button onClick={submitShow} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
  );
};

export default AddShow;