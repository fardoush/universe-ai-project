import React from 'react';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';

const App = () => {
  return (
    <div className='px-20'>
      <div className="flex justify-center items-center flex-col" >
      <Header/>
      <Button>Sort By Date</Button>
      
      </div>
      <Card></Card>
      <Button>Show More</Button>
    </div>
  );
};

export default App;