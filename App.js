/*
--render makes the react object to convert to Html and send to browser  
React is more messier than HTML
<div>
    <div>
         <h1></h1>
    <div>
</div>
->createElelment is an object takes 3 params (attribute, {id}, children) multiple children it should pass as an array[child1, child2]
Here comes the JSX
render- putting the 'parent' inside the 'root' tag
if other h1 tag is already there in root div then it will replaced not appended(May be override the existing tag by 'parent' )
how it execute-FIRST it will print the h1 tag then the root.render will( root.render(parent);) override tag with parent 
*/ 

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"child1"},"i'm h1 tag"),
React.createElement("h2",{id:"child2"},"i'm h2 tag")]))

const heading = React.createElement("h1", 
    {id :"xyz"} ,
    "Hello React!");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    const root = ReactDOM.createRoot(document.getElementById("header"));// only works on given ID where we are creating root 
    root.render(parent);

 

