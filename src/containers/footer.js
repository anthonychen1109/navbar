import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hoursModalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openHoursModal = this.openHoursModal.bind(this);
    this.closeHoursModal = this.closeHoursModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openHoursModal() {
    this.setState({hoursModalIsOpen: true})
  }

  closeHoursModal() {
    this.setState({hoursModalIsOpen: false});
  }

  render() {
    return (
      <nav>
        <ul className="footer">
          <li>123 footer rd. flushing NY, 11354</li>
            <li className="footer-hours" onClick={this.openHoursModal}>
              <a href="#">Hours</a>
            </li>
            <li>
              <Modal
                  isOpen={this.state.hoursModalIsOpen}
                  onRequestClose={this.closeHoursModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center">Hours</p>
                  <ul className="modal-hours">
                    <li>mon-fri: 12:30am-12:30am</li>
                    <li>sat: 12:30am-12:30am</li>
                    <li>sun: 12:30am-12:30am</li>
                  </ul>
              </Modal>
            </li>
          <li>mon-fri: 12:30am-12:30am</li>
          <li>sat: 12:30am-12:30am</li>
          <li>sun: 12:30am-12:30am</li>
            <li className="footer-pin">
              <a href="#" onClick={this.openModal}>&#x1f4cc; map</a>
            </li>
            <li>
              <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center">Logo</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12089.73215947593!2d-73.8321986!3d40.7524994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe2e75f4c95a77d!2sAbacus+Business+Computer+Inc!5e0!3m2!1sen!2sus!4v1517259817435"
                  width="100%"
                  height="auto"
                  frameBorder="0"
                  allowFullScreen>
                </iframe>
              </Modal>
            </li>
          <li className="footer-tel">&#128222; 718-123-4567</li>
          <li id="footer-tel">&#128222; 718-123-4567</li>
        </ul>
      </nav>
    )
  }
}

export default Footer;
