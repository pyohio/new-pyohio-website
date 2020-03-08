import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Box, Heading, Anchor } from 'grommet';
import Layout from '../components/layout/layout';
import Content, { HTMLContent } from '../components/content/content';
import SEO from '../components/seo/seo';

export const SponsorPageTemplate = ({
  title,
  content,
  contentComponent,
  seoTitle,
  pageKey,
}) => {
  const PageContent = contentComponent || Content;

  const secondaryLinks = [
    {
      key: 'roll',
      href: '/sponsors/',
      text: 'Our Sponsors',
    },
    {
      key: 'bec',
      href: '/sponsors/become',
      text: 'Become a Sponsor',
    },
  ];

  return (
    <Box>
      <SEO title={seoTitle || title} />
      <Box
        as="nav"
        direction="row"
        pad="medium"
        background="backgroundBack"
        justify="around"
        wrap="true"
        margin={{ bottom: 'xsmall' }}
        style={{ borderRadius: '5px' }}
      >
        {secondaryLinks.map(item =>
          item.key === pageKey ? (
            <></>
          ) : (
            <Anchor key={item.key} href={item.href} margin="small">
              {item.text}
            </Anchor>
          )
        )}
      </Box>
      <Heading>{title}</Heading>
      <PageContent className="content" content={content} />
    </Box>
  );
};

SponsorPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  seoTitle: PropTypes.string,
  pageKey: PropTypes.string,
};

const SponsorPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const pageTitle = `${post.frontmatter.title}`;
  return (
    <Layout>
      <SponsorPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        seoTitle={pageTitle}
        pageKey={post.frontmatter.pageKey}
      />
    </Layout>
  );
};

SponsorPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SponsorPage;

export const sponsorPageQuery = graphql`
  query SponsorPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        pageKey
      }
    }
  }
`;
