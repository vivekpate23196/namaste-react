import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!",
);
console.log(heading);

// React Element using JSX
const jsxHeading = (
  <h1 id="heading" className="head">
    Namste React using JSX{" "}
  </h1>
);
console.log(jsxHeading);

// React Component

// 1. React Functional Component

const Title = () => <h1> Title : Namste React using JSX </h1>; // Function
const a = 100; // Variable
const Name = <span>Name : Vivek</span>; // React Element

// Way 1
// const HeadingComponent = function () {
//   return (
//     <div id="container">
//       <Title />
//       <h1 className="heading">Namste React using Functional Component</h1>
//     </div>
//   );
// };

// Way 2
// const HeadingComponent = () => {
//   return (
//     <div id="container">
//       <Title />
//       <h1 className="heading">Namste React using Functional Component</h1>
//     </div>
//   );
// };

// Way 3
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {Title()}
    {Name}
    <h1 className="heading">Namste React using Functional Component</h1>
    <h2>{a}</h2>
  </div>
);

console.log(HeadingComponent());
console.log(Title());

// React Dom Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(HeadingComponent()); // Way1

root.render(<HeadingComponent />); // Way2
