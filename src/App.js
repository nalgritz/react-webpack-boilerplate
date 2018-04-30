import React from 'react';
import ReactDOM from 'react-dom';
import HelloContainer from "./js/components/HelloContainer";

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<HelloContainer />, wrapper) : false;
