import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'

function AddMovieModal() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <p className='modalMainDiv'>
      <button className="addMovieButton btn btn-primary shadow-lg" onClick={handleShow}>Add Movie</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie to Database</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="movieTitleInput">Movie Title:</label>
              <input type="text" className="form-control" id="movieTitleInput" aria-describedby="titleHelp" placeholder="Enter title" />
              {/* <small id="titleHelp" className="form-text text-muted">Enter Title Only Here</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="moviePosterUrlInput">Movie URL here:</label>
              <input type="url" className="form-control" id="moviePosterUrlInput" placeholder="http://your_movie_poster_url" />
            </div>
            <div className="form-group">
              <label htmlFor="movieDescriptionInput">Movie Description:</label>
              <textarea type="url" className="form-control" id="moviePosterUrlInput" placeholder="Enter movie description" />
            </div>
            <div className="form-group">
              <label htmlFor="movieCategoryInput">Category:</label>
              <select id="movieCategoryInput">
                <option value="adventure">Adventure</option>
                <option value="animated">Animated</option>
                <option value="biographical">Biographical</option>
                <option value="comedy">Comedy</option>
                <option value="disaster">Disaster</option>
                <option value="drama">Drama</option>
                <option value="epic">Epic</option>
                <option value="fantasy">Fantasy</option>
                <option value="musical">Musical</option>
                <option value="romantic">Romantic</option>
                <option value="science_fiction">Science Fiction</option>
                <option value="space_opera">Space Opera</option>
                <option value="superHero">Super Hero</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </p>
  );
}

export default AddMovieModal;