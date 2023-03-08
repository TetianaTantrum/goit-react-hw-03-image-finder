import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { addImage } from 'components/Api/API';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { ImageGallery as ImageGalleryStyles } from './ImageGallery.styled';
import { toast } from 'react-toastify';
import { object } from 'prop-types';

class ImageGallery extends Component {
  state = {
    totalHits: 0,
    page: 1,
    loading: false,
    error: '',
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (
      (prevState.page !== this.state.page && this.state.page !== 1) ||
      prevProps.searchQuery !== this.state.query
    ) {
      try {
        this.setState({ loading: true });
        const nextImages = await addImage(this.props.query, this.state.page);
        this.props.handleLoadMore(nextImages);
      } catch (error) {
        this.setState({ error: error });
      } finally {
        this.setState({ loading: false });
      }
    }
  };
  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { images } = this.props;
    if (!images && !images.length && this.state.page !== 1) {
      return toast(`Sorry, there are no more images!`);
    }
    if (images.length) {
      return (
        <div>
          <ImageGalleryStyles>
            {images.map(image => {
              return (
                <ImageGalleryItem
                  image={image}
                  key={image.id}
                  src={image.webformatURL}
                  srcmodal={image.largeImageURL}
                  alt={image.tags}
                />
              );
            })}
          </ImageGalleryStyles>
          {this.state.loading && <Loader />}
          {images.length > 0 && <Button onClick={() => this.onLoadMore()} />}
        </div>
      );
    }
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(object).isRequired,
  query: PropTypes.string.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
export default ImageGallery;

// class ImageGallery extends Component {
//   state = {
//     images: [],
//     status: 'idle',
//   };

//   render() {
//     const {
//       status,
//       error,
//     } = this.state;
//     // const { ImageGallery, searchQuery } = this.props;
//     if (status === 'idle') {
//       return <div>Search images and photos</div>;
//     }
//     if (status === 'pending') {
//       return <div>Loading...</div>;
//     }
//     if (status === 'rejected') {
//       return <div>Error:{error}</div>;
//     }
//     if (status === 'resolved') {
//       return (
//         <ul className="gallery">
//           <ImageGalleryItem />
//         </ul>
//       );
//     }
//   }
// }
// export default ImageGallery;

// // return (
// //   <div className="gallery">
// //     {error && <div>Error:{error}</div>}
// //     {loading && <div>Loading...</div>}
// //     {!searchQuery &&
// //       toast(`Your search query ${searchQuery} is too short!`)}
// //     {/* {!image && <div>{image.totalHits}</div>} */}
// //     <p>{ImageGallery}</p>
// //     <ImageGalleryItem />
// //   </div>
// // );

// if (status === 'idle') {
//   return <div>Search images and photos</div>;
// }
// if (status === 'pending') {
//   console.log('status pending');
//   return <Loader />;
// }
// // if (status === 'rejected') {
// //   return <div>Error:{error}</div>;
// // }
// if (status === 'resolved') {
