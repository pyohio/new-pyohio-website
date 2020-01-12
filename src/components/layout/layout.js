/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Grommet, Box, Main } from 'grommet';

import CustomHeader from '../header/header';
import CustomFooter from '../footer/footer';
import './layout.css';
import SEO from '../seo/seo';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // Add brand colors here once we're ready for them
  const theme = {
    global: {
      font: {
        family: "Helvetica"
      }
    },
  };

  return (
    <Grommet theme={theme}>
      <SEO />
      <CustomHeader siteTitle={data.site.siteMetadata.title} />
      <Box
        align="center"
        margin={{ top: '0', bottom: '0', left: '1rem', right: '1rem' }}
      >
        <Main margin={{ bottom: '2.5rem' }} width={{ max: '65ch' }}>
          {children}
        </Main>
        <CustomFooter />
      </Box>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
