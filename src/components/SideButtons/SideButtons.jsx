// import React, { Component } from 'react';

// const LS_KEY = 'user_photo_index';

// class SideButtons extends Component {
//   state = {
//     index: 0,
//   };
//   componentDidMount = () => {
//     const savedState = localStorage.getItem(LS_KEY);
//     if (savedState) {
//       this.setState({ index: Number(savedState) });
//     }
//   };

//   componentDidUpdate = (prevProps, prevState) => {
//     if (prevState.index !== this.state.index) {
//       localStorage.setItem(LS_KEY, this.state.index);
//     }
//     console.log('UPDATE');
//   };

//   changeIndex = value => {
//     this.setState(state => ({ index: state.index + value }));
//   };

//   render() {
//     // console.log(this.props.items[this.state.index]);
//     const totalPages = this.props.items.length;
//     const currentPage = this.state.index + 1;
//     const currentItem = this.props.items[this.state.index];
//     return (
//       <div>
//         <ul>
//           <li>
//             <button
//               type="button"
//               disabled={this.state.index === 0}
//               onClick={() => this.changeIndex(-1)}
//             >
//               Back
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               disabled={this.state.index === totalPages - 1}
//               onClick={() => this.changeIndex(1)}
//             >
//               Forth
//             </button>
//           </li>
//         </ul>
//         <p>
//           {currentPage}/{totalPages}
//         </p>
//         <article>
//           <h2>{currentItem.title}</h2>
//           <p>{currentItem.text}</p>
//         </article>
//       </div>
//     );
//   }
// }
// export default SideButtons;
