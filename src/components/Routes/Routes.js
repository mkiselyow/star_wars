import React from 'react';
import ItemsPage from "../ItemsPage/ItemsPage";
import ItemDetails from "../ItemDetails/ItemDetails";
import SecretPage from  "../SecretPage/SecretPage";
import LoginPage from  "../LoginPage/LoginPage";
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = ({isLoggedIn, onLogin}) => {
  const routes = ['planets', 'starships', 'people'];

  return (
    <React.Fragment>
      <Switch>
        <Route path="/"
               render={
                 () => { return (
                   <h2 className="text-center my-3">
                     Welcome to initial page
                   </h2>)}}
               exact/>
        <Route path={`/secret/`}
               component={() =>
                 <SecretPage isLoggedIn={isLoggedIn}/>}
               exact
        />
        <Route path={`/login/`}
               component={() =>
                 <LoginPage isLoggedIn={isLoggedIn}
                            onLogin={() => {onLogin()}}
                 />}
               exact
        />
        <Route path={`/${routes[0]}/selectedItem/:id?`}
               component={() =>
                 <ItemsPage itemsType={routes[0]}/>}
               exact
        />
        <Route path={`/${routes[0]}/`}
               component={() =>
                 <ItemsPage itemsType={routes[0]}/>}
               exact
        />
        <Route path={`/${routes[0]}/:id([0-9]+)`}
               render={() => {
                 return <ItemDetails itemType={routes[0]}
                                     isFullDescription={true}
                 />}}
        />
        <Route path={`/${routes[1]}/selectedItem/:id?`}
               component={() =>
                 <ItemsPage itemsType={routes[1]}/>}
               exact
        />
        <Route path={`/${routes[1]}/`}
               component={() =>
                 <ItemsPage itemsType={routes[1]}/>}
               exact
        />
        <Route path={`/${routes[1]}/:id([0-9]+)`}
               render={() => {
                 return <ItemDetails itemType={routes[1]}
                                     isFullDescription={true}
                 />}}
        />
        <Route path={`/${routes[2]}/selectedItem/:id?`}
               component={() =>
                 <ItemsPage itemsType={routes[2]}/>}
               exact
        />
        <Route path={`/${routes[2]}/`}
               component={() =>
                 <ItemsPage itemsType={routes[2]}/>}
               exact
        />
        <Route path={`/${routes[2]}/:id([0-9]+)`}
               render={() => {
                 return <ItemDetails itemType={routes[2]}
                                     isFullDescription={true}
                 />}}
        />
        <Redirect to="/"/>
      </Switch>
    </React.Fragment>
  )
};

export default Routes;