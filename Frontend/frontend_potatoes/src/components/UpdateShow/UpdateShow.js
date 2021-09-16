import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { baseURL, headers } from "./../services/show.service";
export const UpdateShow = ({match}) => {
    const initialShowState = {
    id: null,
    title: "",
    notable_actors: "",
    network: "",
    genre: "",
    summary: "",
    rating: 0,
    photo_url: "",
  };
  let { id } = useParams();
  const [currentShow, setCurrentShow] = useState(initialShowState);
  const [submitted, setSubmitted] = useState(false);
  const countRef = useRef(0);
  useEffect(() => {
    retrieveShow();
  }, [countRef]);
  const handleShowChange = (e) => {
    const { title, value } = e.target;
    setCurrentShow({ ...currentShow, [title]: value });
  };
  const retrieveShow = () => {
    axios
      .get(`${baseURL}/shows/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentShow({
          id: response.data.id,
          title: response.data.title,
          notable_actors: response.data.notable_actors,
          network: response.data.network,
          genre: response.data.genre,
          summary: response.data.summary,
          rating: response.data.rating,
          photo_url: response.data.photo_url
        });
        console.log(currentShow);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const updateShow = () => {
    let data = {
      title: currentShow.title,
      notable_actors: currentShow.notable_actors,
      network: currentShow.network,
      genre: currentShow.genre,
      summary: currentShow.summary,
      rating: currentShow.rating,
      photo_url: currentShow.photo_url
    };
    axios
      .put(`${baseURL}/shows/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentShow({
          id: response.data.id,
          title: response.data.title,
          notable_actors: response.data.notable_actors,
          network: response.data.network,
          genre: response.data.genre,
          summary: response.data.summary,
          rating: response.data.rating,
          photo_url: response.data.photo_url
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const newShow = () => {
    setCurrentShow(initialShowState);
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
                Show Updated!
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
                Update
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
                  value={currentShow.title}
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
                  required
                  value={currentShow.notable_actors}
                  onChange={handleShowChange}
                  name="notable_actors"
                  default
                />
              </div>
              <div className="form-group">
                <label htmlFor="network">Network</label>
                <input
                  type="text"
                  className="form-control"
                  id="network"
                  required
                  value={currentShow.network}
                  onChange={handleShowChange}
                  name="network"
                  default
                />
              </div>
              <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  className="form-control"
                  id="genre"
                  required
                  value={currentShow.genre}
                  onChange={handleShowChange}
                  name="genre"
                  default
                />
              </div>
              <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <input
                  type="text"
                  className="form-control"
                  id="summary"
                  required
                  value={currentShow.summary}
                  onChange={handleShowChange}
                  name="summary"
                  default
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  required
                  value={currentShow.rating}
                  onChange={handleShowChange}
                  name="rating"
                  default
                />
              </div>
              <div className="form-group">
                <label htmlFor="photo_url">Photo URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="photo_url"
                  required
                  value={currentShow.photo_url}
                  onChange={handleShowChange}
                  name="photo_url"
                />
              </div>
              <button onClick={updateShow} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
  );
};