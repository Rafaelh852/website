import React from 'react';

import {
  IndexView,
  BlogReachView as BlogReachViewView,
  BlogArticle as BlogArticleView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
  Resume as ResumeView,
  PortfolioGrid as PortfolioGridView,
  Contact as ContactView,
  ThankYou as ThankYouView
} from '@/views';

//update the index.js file when adding a path

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/Blog',
    renderer: (params = {}) => <BlogReachViewView {...params} />,
  },
  {
    path: '/blogArt',
    renderer: (params = {}) => <BlogArticleView {...params} />,
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
  }
];

  export default routes;