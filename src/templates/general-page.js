import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Box, Heading } from 'grommet';
import Layout from '../components/layout/layout';
import Content, { HTMLContent } from '../components/content/content';
import SEO from '../components/seo/seo';

export const GeneralPageTemplate = ({ title, content, contentComponent, seoTitle }) => {
  const PageContent = contentComponent || Content;

  return (
    <Box>
      <SEO title={seoTitle || title} />
      <Heading>{title}</Heading>
      <PageContent className="content" content={content} />
    </Box>
  );
};

GeneralPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  seoTitle: PropTypes.string,
};

const GeneralPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const pageTitle = `PyOhio 2020 - ${post.frontmatter.title}`;
  return (
    <Layout>
      <GeneralPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        seoTitle={pageTitle}
      />
    </Layout>
  );
};

GeneralPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default GeneralPage;

export const generalPageQuery = graphql`
  query GeneralPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
