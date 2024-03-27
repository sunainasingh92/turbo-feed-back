import Header from './components/Header';
import Footer from './components/Footer';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Card from './components/shared/Card';
import AboutPage from './pages/AboutPage';
import AboutIconlink from './components/AboutIconlink';
import Post from './components/Post';
import { FeedbackProvider } from './context/Feedbackcontext';

function App() {
  const name = 'Sunaina Singh'
  const showComments = true

  return (
    <FeedbackProvider>
     <Router>
        <Header bgColor='white' textColor='red' text="Powerful React"/>
        <Card>

          <NavLink to='/' activeClassName='active'> Home </NavLink>
          <NavLink to='/about' activeClassName='active'> About </NavLink>

        </Card>
          <div className='container' textColor='white' textFloat='right'>
            <Routes>
              <Route exact path='/' element={ 
                <>
                  <AboutIconlink />
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
              
               {showComments}
              </>
                   }>
              </Route>
              <Route path='/about' element ={<AboutPage/>} />
              <Route path='/post/:id/:name' element ={<Post/>} />

            </Routes>
        </div>
      <Footer text="footer-container"/>
    </Router>
    </FeedbackProvider>
  );
}


export default App;
