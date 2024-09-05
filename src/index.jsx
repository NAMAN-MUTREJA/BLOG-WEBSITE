// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css'; // Import your CSS for styling

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={BlogPost} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
