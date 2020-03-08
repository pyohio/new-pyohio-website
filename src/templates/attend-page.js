import React from 'react';
import PropTypes from 'prop-types';
import { graphql, withPrefix } from 'gatsby';
import { Box, Heading, Anchor } from 'grommet';
import Layout from '../components/layout/layout';
import Content, { HTMLContent } from '../components/content/content';
import SEO from '../components/seo/seo';

export const AttendPageTemplate = ({
  title,
  content,
  contentComponent,
  seoTitle,
  pageKey,
}) => {
  const PageContent = contentComponent || Content;

  const secondaryLinks = [
    {
      key: 'coc',
      href: '/attend/code-of-conduct',
      text: 'View our Code of Conduct',
    },
    {
      key: 'reg',
      href: '/attend/register',
      text: 'Register to Attend',
    },
    {
      key: 'spk',
      href: '/attend/speak',
      text: 'Speaker Information',
    },
    {
      key: 'ven',
      href: '/attend/venue',
      text: 'About the Venue and Location',
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
            <Anchor key={item.key} href={withPrefix(item.href)} margin="small">
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

AttendPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  seoTitle: PropTypes.string,
  pageKey: PropTypes.string,
};

const AttendPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const pageTitle = `${post.frontmatter.title}`;
  return (
    <Layout>
      <AttendPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        seoTitle={pageTitle}
        pageKey={post.frontmatter.pageKey}
      />
    </Layout>
  );
};

AttendPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AttendPage;

export const attendPageQuery = graphql`
  query AttendPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        pageKey
      }
    }
  }
`;
