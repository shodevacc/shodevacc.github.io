import React from "react"
import Page from '../../components/Layout/Page'
import { graphql } from "gatsby"
import * as styles from "../../style/projects/agri.module.css"
import { GatsbyImage } from "gatsby-plugin-image";

function agri({ data }) {
  var filteredData = {}

  data.agri.edges.forEach(edge => {
    filteredData[edge.node.name] = edge.node.childImageSharp.gatsbyImageData
  })

  return (
    <Page darkNav addPadd title="Amazon Shopping Assistant project">
      <div className={styles.container}>
        <h2>Amazon Shopping Assistant</h2>
        <p>
          In our modern world, the Internet is pervasive in every part
          of our lives. E-Commerce makes up a large portion of that part, and
          while most of us seem to able to use popular shopping destinations
          with ease it is not so for everyone. Individuals with
          impaired eyesight stand to benefit from an optimised
          online shopping experince.
        </p>
        <p>
          Website Optimization using chrome extension along with Nvidia Jaws is an easier way to
          help people with an impaired eyesight to make transactions on any e-commerce platform like
          Amazon faster and more efficient.
        </p>

        <h3 className="cinnabarH3">The Need</h3>
        <div className={styles.float}>
          <video autoPlay loop>
            <source src="/RShop.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div>
            <p>While searching for products on Amazon, a list of items pop up for
              every search. It then becomes a time consuming process to navigate to
              the product details page of each product, scroll through excessive details,
              and then read its description to make a purchase decision.
            </p>
          </div>
        </div>
        
        <h3 className="cinnabarH3">The Proposed Solution</h3>
        <p>
          We propose using a chrome extension to extract the product details
          of each product, change the DOM structure on the main page and integrate
          it the product details on the click of a "Get Details" Button. Hence,
          sacing the visually impaired a lot of time by avoiding navigation to
          the next page and moving through unnecessary details.
        </p>
      </div>
    </Page>
  );
}

export const query = graphql`{
  agri: allFile(filter: {relativeDirectory: {eq: "agri"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`

export default agri
