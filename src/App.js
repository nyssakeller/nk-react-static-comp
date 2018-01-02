import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: './public/Somhow-I-Mangage.jpg',
    title: 'Somehow I Manage',
    desc: 'Sometimes I sing in the shower, sometimes I spend too much time volunteering, occasionally I\'ll hit someone with my car.',
    authImg: './public/michael.jpg',
    authName: 'Michael Scott',
    estTime: '2 min'
  },
  {
    img: './public/dwight.jpg',
    title: 'Are you okay?',
    desc: 'I am better than you have ever been or ever will be.',
    authImg: './public/dwight2.jpg',
    authName: 'Dwight Schrute',
    estTime: '10 min'
  },
  {
    img: './public/kevin-story.png',
    title: 'Never Settle for Less',
    desc: 'Mini-cupcakes? As in the mini version of regular cupcakes? Which is a mini version of cake? Where does it end with you people?',
    authImg: './public/kevin.jpg',
    authName: 'Kevin Malone',
    estTime: '8 min'
  },
  {
    img: './public/jim-story.jpg',
    title: 'Become Dwight',
    desc: 'Fact, bears eat beats. Bears, beats, Battlestar Galatica.',
    authImg: './public/jim.jpg',
    authName: 'Jim Halpert',
    estTime: '11 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Stories  storiesTitle="Today's Top Stories" stories={stories} />
      <Stories storiesTitle="Pop Culture" stories={stories} />
      <Footer />
    </div>
  );
}

export default App;
