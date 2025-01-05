
const parent = React.createElement(
    "div" ,
    {id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{} ,"I am Alekhya"),React.createElement("h2",{},"I am Alekhya")]),React.createElement("div",{id:"child"},
    [React.createElement("h1",{} ,"I am Alekhya"),React.createElement("h2",{},"I am Alekhya")])]
    );

//const heading = React.createElement("h1",{id:"heading"},"Helo Akhi Wecome to learn React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);