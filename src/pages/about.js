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
import coupleImage from "../../content/assets/profile-pic.jpg"

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="プロフィール" />
        <Col className='about_profile'>
          <h1>書いている夫婦</h1>
          <div>
            <img src={wifeImg} className='about_profile__icon'/>
          </div>
          <div>
            雨宮妻
          </div>
          <div class="twitter">
            <a 
              href="https://twitter.com/amamiya_wife?ref_src=twsrc%5Etfw" 
              class="twitter-follow-button" 
              data-show-count="true"
              data-lang="ja">Follow @amamiya_wife
            </a>
            {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
          </div>
          <div>
            <a href={`https://www.instagram.com/amamiya_wife/`}>
              妻のInstagramをフォロー
            </a>
          </div>
          <div>
            <a href={`https://linktr.ee/amamiya_wife`}>
              その他のリンク
            </a>
          </div>
          <div>
            GAFA営業の妻です。
          </div>
          <div>
            日英中トリリンガルです。
          </div>
          <div>
            パワーカップルの資産運用/語学/キャリア/笑える日常を発信しています。
          </div>
          <div>
            <img src={husbandImg} className='about_profile__icon'/>
          </div>
          <div>
            <h3>雨宮夫</h3>
          </div>
          <div class="twitter">
            <a 
              href="https://twitter.com/amamiya_couple?ref_src=twsrc%5Etfw"
              class="twitter-follow-button"
              data-show-count="true"
              data-lang="ja">Follow @amamiya_couple
            </a>
            {<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>}
          </div>
          <div>
            <a href={`https://www.instagram.com/amamiya_husband/`}>
              夫のInstagramをフォロー
            </a>
          </div>
          <div>
            <a href={`https://linktr.ee/amamiya_couple`}>
              その他のリンク
            </a>
          </div>
          <div>
            日系大手勤務の夫です。
          </div>
          <div>
            早慶卒のエンジニアです。
          </div>
          <div>
            結婚のコツ/キャリア/筋トレ/英語/パワーカップルの笑える日常を発信しています。
          </div>
          <div>
            <img src={coupleImage} className='about_profile__icon'/>
          </div>
          <div>
            <h3>夫婦のVoicyラジオ1位📻</h3>
          </div>
          <div>
            <a href={`https://voicy.jp/channel/1259`}>
              Voicyで雨宮夫婦をフォロー
            </a>
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