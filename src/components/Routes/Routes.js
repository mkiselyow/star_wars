import React from 'react';
import ItemsPage from "../ItemsPage/ItemsPage";
import ItemDetails from "../ItemDetails/ItemDetails";
import SecretPage from  "../SecretPage/SecretPage";
import LoginPage from  "../LoginPage/LoginPage";
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = ({isLoggedIn, onLogin}) => {
  const preparedRoutes = ['planets', 'starships', 'people']
    .map((route) => {
    return (
      <React.Fragment key={route}>
        <Switch>
          <Route path={`/${route}/selectedItem/:id?`}
                 component={() =>
                   <ItemsPage itemsType={route}/>}
                 exact
          />
          <Route path={`/${route}/`}
                 component={() =>
                   <ItemsPage itemsType={route}/>}
                 exact
          />
          <Route path={`/${route}/:id([0-9]+)`}
            render={() => {
              return <ItemDetails itemType={route}
                                  isFullDescription={true}
              />}}
          />
          <Redirect to="/"/>
        </Switch>
      </React.Fragment>
    )
  });

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

        {preparedRoutes}
        <Redirect to="/"/>
      </Switch>
    </React.Fragment>
  )
};

export default Routes;