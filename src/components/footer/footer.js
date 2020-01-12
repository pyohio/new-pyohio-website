import React from 'react';
import { Footer, Image, Paragraph, Anchor } from 'grommet';

class CustomFooter extends React.Component {
  render() {
    return (
      <Footer direction="column">
        <Paragraph>&copy; 2020 PyOhio</Paragraph>
        <Paragraph>PyOhio is made possible by our premier sponsor:</Paragraph>
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
  }
}

export default CustomFooter;
