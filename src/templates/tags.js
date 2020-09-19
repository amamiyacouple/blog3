import React from "react";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

// Components
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";
import "../styles/style.scss"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const author = data.site.siteMetadata.author.name;

  const tagHeader = `[${tag}]タグの記事一覧（全${totalCount}件）`;

  return (
    <Layout location={location} author={author}>
      <SEO
        title={`Tag: ${tag}`}
        description={`${tag}タグを含む記事の一覧ページです`}
      />
      <Bio />
      <h2>{tagHeader}</h2>
      {edges.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link
                  style={{ boxShadow: `none` }}
                  to={node.fields.slug}
                  itemProp="url"
                >
                  <span itemProp="headline">{title}</span>
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <div className="posts__image_container">
              <Link to={node.fields.slug}>
                <Image
                  className="posts__image"
                  fluid={node.frontmatter.hero.childImageSharp.fluid}
                />
              </Link>
            </div>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
      ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            hero {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;