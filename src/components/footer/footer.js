import React from 'react';
import { Footer, Image, Paragraph, Anchor } from 'grommet';

const CustomFooter = props => (
  <Footer direction="column" margin={{ bottom: '1.5rem' }} gap="none" {...props}>
    <Paragraph>&copy; 2020 PyOhio</Paragraph>
    <Paragraph margin={{ bottom: '0' }}>
      PyOhio is made possible by our premier sponsor:
    </Paragraph>
    <Anchor href="#">
      <Image alt="sponsor" src="https://placekitten.com/150/150" />
    </Anchor>
    <Anchor href="https://www.netlify.com">
      <Image
        src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
        alt="Netlify"
      />
    </Anchor>
    <Anchor href="/about/newsletter">Sign up for our newsletter!</Anchor>
  </Footer>
);

export default CustomFooter;
