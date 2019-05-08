import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component
{
     render() {
          return (
               <h1>Hello, world !</h1>
          );
     }
}

const app = document.getElementById('root');
ReactDOM.render(<Layout/>, app);
