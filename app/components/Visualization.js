// var React = require('react');
// var render = require('react-dom');
//
// var visualizer = React.createClass({
//   getInitialState() {
//     return {
//       data: []
//     };
//   },
//
//   componentDidMount() {
//     socket.on('new data', this.handleData.bind(this));
//   },
//
//   handleData(message) {
//     this.setState({data: this.state.data.concat(message)});
//   },
//
//   render() {
//     var list = this.state.data.map(function(message){
//       return (
//         <li>
//           <p>{message.username}</p>
//           <p>{message.time}</p>
//           <p>{message.commit}</p>
//         </li>
//       )
//     });
//
//     return (
//       <div>
//         {list}
//       </div>
//     );
//   }
// });
//
// module.exports = Visualization;
