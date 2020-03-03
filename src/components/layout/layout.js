/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Grommet, Box, Main, Grid } from 'grommet';

import CustomHeader from '../header/header';
import CustomFooter from '../footer/footer';
import './layout.css';

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
        family: 'Helvetica',
      },
      colors: {
        brand: '#333'
      }
    },
  };

  return (
    <Grommet theme={theme}>
      <Grid
        rows={['xsmall', '1fr', 'small']}
        columns={{ count: 'fit', size: '240px' }}
        gap="small"
      >
        <CustomHeader
          siteTitle={data.site.siteMetadata.title}
          style={{ gridRow: 1, gridColumn: '1 / -1' }}
        />
        <Box
          align="center"
          margin={{ top: '0', bottom: '0', left: '1rem', right: '1rem' }}
          style={{ gridRow: 2, gridColumn: '1 / -1' }}
        >
          <Main margin={{ bottom: '2.5rem' }} width={{ max: '80ch' }}>
            {children}
          </Main>
        </Box>
        <CustomFooter style={{ gridRow: 3, gridColumn: "1 / -1" }} />
      </Grid>
    </Grommet>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
