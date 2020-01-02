import PropTypes from 'prop-types';
import React from 'react';
import { Header, Box, Paragraph, Anchor } from 'grommet';
import Logo from '../image/logo';

const CustomHeader = ({ siteTitle }) => (
  <Header
    direction="row"
    gap="medium"
    align="center"
    justify="around"
    background="brand"
  >
    <Box>
      <Anchor href="/">
        <Logo />
      </Anchor>
    </Box>
    <Box direction="row" as="nav">
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
        <Anchor href="/about/code-of-conduct">Code of Conduct</Anchor>
        <Anchor href="/attend/register">Register or Volunteer</Anchor>
        <Anchor href="/attend/venue">Venue, Hotels &c</Anchor>
        <Anchor href="/speak/cfp">Speaking and Call for Proposals</Anchor>
      </Box>
      <Box>
        <Paragraph>Sponsorship</Paragraph>
        <Anchor href="/sponsors">Our Sponsors</Anchor>
        <Anchor href="#">Become a Sponsor</Anchor>
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