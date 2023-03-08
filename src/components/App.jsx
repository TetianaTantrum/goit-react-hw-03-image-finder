import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import * as API from './Api/API';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App as AppStyle } from 'App.styled';
export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
  };
  addImage = async ({ searchQuery }, page) => {
    try {
      if (!searchQuery) {
        return toast(`Error: ${searchQuery}`);
      }
      const hits = await API.addImage(searchQuery, page);
      this.setState(state => {
        return { images: hits, searchQuery, page };
      });
    } catch (error) {
      toast(`Error: ${error}`);
    }
  };
  handleLoadMore = newImages => {
    if (newImages?.length) {
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
      }));
    }
  };
  render() {
    const { images, searchQuery } = this.state;
    return (
      <AppStyle>
        <GlobalStyle />
        <Searchbar onSubmit={this.addImage} />
        <ImageGallery
          images={images}
          query={searchQuery}
          handleLoadMore={newImages => this.handleLoadMore(newImages)}
        />
        <ToastContainer autoClose={3000} />
      </AppStyle>
    );
  }
}

// import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// import Modal from './Modal/Modal';
// import tests from './testJSON.json';
// import SideButtons from './SideButtons/SideButtons';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Searchbar from './Searchbar/Searchbar';
// import 'react-toastify/dist/ReactToastify.css';
// import * as API from './Api/API';

// export class App extends Component {
//   state = {
//     showModal: false,
//     searchQuery: '',
//     loading: false,
//     images: [],
//   };
//   async addImage(values) {
//     const image = await API.addImage(values);
//     console.log(values);
//     console.log(image);
//   }
// toggleModal = () => {
//   this.setState(({ showModal }) => ({
//     showModal: !showModal,
//   }));
// };
//   handleFormSubmit = searchQuery => {
//     this.setState(searchQuery);
//     console.log(this.state.searchQuery);
//     if (this.state.searchQuery.trim() === '') {
//       return toast(`Your search query ${this.state.searchQuery} is too short!`);
//     }
//     console.log(searchQuery);

//     //   if (
//     //     this.state.image.tags.some(
//     //       image =>
//     //         image.tags.toLowerCase() === newSearchQuery.toLowerCase()
//     //     )
//     //   ) {
//     //   return;
//     //   }
//     //   this.setState(prevState => ({
//     //     image: [...prevState.image, newSearchQuery],
//     //   }));
//     // };
//   };
//   render() {
//     const { showModal, searchQuery, loading } = this.state;
//     const { handleFormSubmit, toggleModal } = this;
//     return (
//       <div>
//         <Searchbar onSubmit={this.addImage} />
//         <button type="button" onClick={toggleModal}>
//           toggle
//         </button>
//         <ul>
//           <li>{searchQuery && <ImageGallery searchQuery={searchQuery} />}</li>
//         </ul>
//         {loading && <h1>Loading...</h1>}
//         {showModal && (
//           <Modal onClose={toggleModal}>
//             <SideButtons items={tests} />
//           </Modal>
//         )}
//         <ToastContainer autoClose={3000} />
//       </div>
//     );
//   }
// }
