import React , { useState, useEffect }  from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
//import viewsRoutes from './views/routes';

import {
  IndexView,
  BlogReachView as BlogReachViewView,
  BlogArticle as BlogArticleView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  Resume as ResumeView,
  PortfolioGrid as PortfolioGridView,
  Contact as ContactView,
  ThankYou as ThankYouView,
  ProjectView
} from './views';


const Routes = ({blogPageURL}) => {

  
//update the index.js file when adding a path
var routes1 = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/Blog',
    renderer: (params = {}) => <BlogReachViewView {...params} />,
  },
  {
    path: '/not-found',
    renderer: (params = {}) => <NotFoundView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
  {
    path: '/Resume',
    renderer: (params = {}) => <ResumeView {...params} />,
  },
  {
    path: '/Portfolio',
    renderer: (params = {}) => <PortfolioGridView {...params} />,
  },
  {
    path: "/contact",
    renderer: (params = {}) => < ContactView {...params}/>,
  },
  {
    path: '/Thankyou',
    renderer: (params = {}) => <ThankYouView {...params} />,
  },
  {
    path:"/Projectview",
    renderer: (params = {}) => <ProjectView {...params} />,
  }
];
  

  for(var i = 0;i< blogPageURL.length; i++){
    var page = blogPageURL[i];
    routes1.push({
      path: "/Blog/" + page,
      renderer: (params = {}) => <BlogArticleView {...params} />,
    })
  }
 
  const viewsRoutes =  routes1;


  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => {
        return <Route key={i} path={item.path} element={item.renderer()} />
      })}
      <Route path="*" element={<Navigate replace to="/not-found-cover" />} />
    </ReactRoutes>
  );
};



export default Routes;