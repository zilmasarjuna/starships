import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import List from 'containers/List'

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback="Loading">
          <Switch>
            <Route exact path="/" component={List} />
          </Switch>
         </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
