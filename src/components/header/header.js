import PropTypes from 'prop-types';
import React from 'react';
import { Header, Box, Anchor, Text } from 'grommet';
import { Github } from 'grommet-icons';
import Logo from '../image/logo';

const CustomHeader = ({ siteTitle, ...props }) => (
  <Header align="center" background="brand" justify="center" {...props}>
    {/* Wrapper to let us have the header background extend full width, even if we want to contain stuff to be smaller */}
    <Box
      pad="1rem"
      direction="row"
      // gap="medium"
      align="center"
      justify="around"
      width="100%"
      wrap="true"
    >
      <Box>
        <Anchor href="/">
          <Logo />
        </Anchor>
      </Box>
      <Box
        direction="row"
        as="nav"
        flex={{ grow: 1 }}
        // fill="true"
        justify="end"
        // pad="small"
        // gap="medium"
        wrap="true"
        className="bad-nav"
      >
        <Box pad="small">
          <Anchor href="/about">About PyOhio</Anchor>
        </Box>
        <Box pad="small">
          <Anchor href="/events/overview">Events</Anchor>
        </Box>
        <Box pad="small">
          {/* Change this up later on (/attend/venue maybe?) */}
          <Anchor href="/attend/register">Attend</Anchor>
        </Box>
        <Box pad="small">
          {/* Change to sponsors landing when we get a list (change word to "Sponsors") */}
          <Anchor href="/sponsors/become">Sponsorship</Anchor>
        </Box>
        <Box pad="small">
          <Anchor href="https://github.com/pyohio/new-pyohio-website">
            <Text className="sr-only">View this site on GitHub</Text>
            <Github />
          </Anchor>
        </Box>
      </Box>
    </Box>
  </Header>
);

CustomHeader.propTypes = {
  siteTitle: PropTypes.string,
};

CustomHeader.defaultProps = {
  siteTitle: ``,
};

export default CustomHeader;
