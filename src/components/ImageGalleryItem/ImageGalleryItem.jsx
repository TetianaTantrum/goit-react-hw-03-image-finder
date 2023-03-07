import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import {
  ImageGalleryItem as Item,
  ImageGalleryItemImage as Image,
} from '../ImageGalleryItem/ImageGalleryItem.styled';
export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { id, src, srcmodal, alt } = this.props;
    return (
      <div>
        <Item key={id}>
          <Image src={src} alt={alt} onClick={this.toggleModal} />
        </Item>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={srcmodal} alt={alt} />
            {/* <SideButtons /> */}
          </Modal>
        )}
      </div>
    );
  }
}

ImageGalleryItem.propTypes = {
  onSubmit: PropTypes.func,
  image: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  srcmodal: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
