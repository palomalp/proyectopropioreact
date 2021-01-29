import React from "react";

function Layout(props) {
    return (
        <div className="container">
            {props.children} 
            {/* props.children para que el componente contenga todos los datos que están dentro del div */}
        </div>
    )
}

export default Layout;