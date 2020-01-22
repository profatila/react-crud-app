import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Contacts List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">Add Contact</NavLink>
        </div>
        <Route exact path="/" component={ContactListPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
      </div>
    );
  }
}


export default App;
