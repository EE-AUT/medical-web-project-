import React from 'react';
import  "./DrawerToggleButton.css";

const drawerToggleButton = props=>(
    <button className="toggleButton" onClick={props.click}>
        <div className="toggleButton_line"/>
        <div className="toggleButton_line"/> 
        <div className="toggleButton_line"/> 
    </button>
);

export default drawerToggleButton;