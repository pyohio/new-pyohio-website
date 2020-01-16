import PropTypes from 'prop-types';
import React from 'react';
import { Header, Box, Paragraph, Anchor, Text } from 'grommet';
import { Github } from 'grommet-icons';
import Logo from '../image/logo';

const CustomHeader = ({ siteTitle }) => (
  <Header align="center" background="brand" justify="center">
    {/* Wrapper to let us have the header background extend full width, even if we want to contain stuff to be smaller */}
    <Box
      pad="1rem"
      direction="row"
      gap="medium"
      align="center"
      justify="around"
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
        justify="end"
        gap="small"
      >
        <Box>
          <Paragraph>About</Paragraph>
          <Anchor href="/about">About PyOhio</Anchor>
        </Box>
        <Box>
          <Paragraph>Events</Paragraph>
          <Anchor href="/events/overview">Events Overview</Anchor>
          <Anchor href="/events/schedule">Events Schedules</Anchor>
        </Box>
        <Box>
          <Paragraph>Attend</Paragraph>
          <Anchor href="/attend/code-of-conduct">Code of Conduct</Anchor>
          <Anchor href="/attend/register">Register or Volunteer</Anchor>
          <Anchor href="/attend/venue">Venue, Hotels &c</Anchor>
          <Anchor href="/attend/speak">Speaking and Call for Proposals</Anchor>
        </Box>
        <Box>
          <Paragraph>Sponsorship</Paragraph>
          <Anchor href="/sponsors">Our Sponsors</Anchor>
          <Anchor href="/sponsors/become">Become a Sponsor</Anchor>
        </Box>
        <Box>
          <Anchor href="https://github.com/pyohio/new-pyohio-website">
            <Text className="sr-only">Website source</Text>
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
