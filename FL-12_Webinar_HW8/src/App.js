import React, {useContext} from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import NewCourse from './components/NewCourse/NewCourse';
import {StoreContext, pages} from  './services'


class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      currentPage: pages.main,
    };

    this.goToPage = (newPage) => {
      this.setState(state => ({
        currentPage: newPage
      }));
    };
   }

   render() {
     const currentPage = this.state.currentPage;
     return (
       <StoreContext.Provider value={{
         currentPage: currentPage,
         goToPage: this.goToPage
       }} >
        <div className='wrapper'>
          <Header />
          {currentPage === pages.main && (
            <MainPage />
          )}
          {currentPage === pages.add && (
            <NewCourse />
          )}
        </div>
       </StoreContext.Provider>
     );
   }
}

export default App;
