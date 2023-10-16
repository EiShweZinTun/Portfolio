import react from 'react';
//Components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

const style = {
  bg: `h-screen- w-screen p-4 bg-gradient-to-r from-[#2F80ED]`
}

const App = () => {
  return (
    <div className={style.bg}>
      <Header />
      <Banner />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Nav />
      <div className ='h-[4000px]'></div> 
    </div>
  );
}

export default App;
