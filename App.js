const reactHeading = React.createElement("h1", {}, "Welcome To React Js");
const reactRoot = ReactDOM.createRoot(document.getElementById("root-three"));
reactRoot.render(reactHeading);

const div = React.createElement("div", { id: "div-one" }, [
  React.createElement("h1", { id: "child-1", key: "child-1" }, "Div Child One"),
  React.createElement("h1", { id: "child-2", key: "child-2" }, "Div Child Two"),
]);
const divRoot = ReactDOM.createRoot(document.getElementById("root-four"));
divRoot.render(div);
