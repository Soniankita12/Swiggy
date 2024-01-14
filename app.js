const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "hello world"),
        React.createElement("h2", {}, "hello world")]));




const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(parent);