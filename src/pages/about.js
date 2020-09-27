import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

//add by myself
import Image from "gatsby-image";
import "../styles/style.scss"
import { Col } from "react-bootstrap";
import husbandImg from "../../content/assets/icon_husband2.jpg"
import wifeImg from "../../content/assets/icon_wife2.jpg"

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="プロフィール" />
        <Col style={{padding:`0.5rem`,textAlign:'center'}}>
          <h1>書いている夫婦</h1>
          <div className="posts__image_container">
            <Image
              className="posts__image"
              husbandImg
            />
          </div>
        </Col>
      </Layout>
    </div>
  );
};

export default Aboutpage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`;