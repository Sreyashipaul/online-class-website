import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Element from './components/Element/Element';
import CourseBootstrap from './components/CourseBootstrap/CourseBootstrap';


const App = () => {
  return (
    <div>
       <div> 
    <Header> </Header>
     <CourseBootstrap> </CourseBootstrap>
    <Element> </Element>
    </div>
    </div>
  );
};

export default App;