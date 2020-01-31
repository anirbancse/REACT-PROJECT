import React from "react";

//stateless functional component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar Rendered...");

  return (
    <React.Fragment>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand-align-center" href="#">
          ToDoApp
          {/* <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span> */}
        </a>
      </nav>
      <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Fixed bottom
        </a>
      </nav>
    </React.Fragment>
  );
};

// class Navbar extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <nav class="navbar navbar-light bg-light">
//           <a class="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </nav>
//       </React.Fragment>
//     );
//   }
// }

export default Navbar;
