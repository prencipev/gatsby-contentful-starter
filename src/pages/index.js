import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Footer from '../components/footer'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return ([
        <Hero data={author.node}/>,
        <Layout location={this.props.location}>
          <div style={{ background: '#fff' }}>
            <Helmet title={siteTitle}/>
            <main role="main">
              <div className="row">
                {posts.map(({ node }) => {
                  return (
                    <ArticlePreview article={node} key={node.slug}/>
                  )
                })}
              </div>
              <div>
                <hr className="featurette-divider"/>

                <div className="row featurette">
                  <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span>
                    </h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta
                      felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce
                      dapibus, tellus ac cursus commodo.</p>
                  </div>
                  <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                         width="500" height="500" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid slice"
                         focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#eee"/>
                      <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                    </svg>
                  </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                  <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span>
                    </h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta
                      felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce
                      dapibus, tellus ac cursus commodo.</p>
                  </div>
                  <div className="col-md-5 order-md-1">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                         width="500" height="500" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                         aria-label="Placeholder: 500x500"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#eee"/>
                      <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                    </svg>
                  </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                  <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span
                      className="text-muted">Checkmate.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta
                      felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce
                      dapibus, tellus ac cursus commodo.</p>
                  </div>
                  <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                         width="500" height="500" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                         aria-label="Placeholder: 500x500"><title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#eee"/>
                      <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                    </svg>
                  </div>
                </div>




              </div>
            </main>
          </div>
        </Layout>,
      ]
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
    query HomeQuery {
        site {
            siteMetadata {
                title
            }
        }
        allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
            edges {
                node {
                    title
                    slug
                    publishDate(formatString: "MMMM Do, YYYY")
                    tags
                    heroImage {
                        fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
        allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
            edges {
                node {
                    name
                    shortBio {
                        shortBio
                    }
                    title
                    heroImage: image {
                        fluid(
                            maxWidth: 1180
                            maxHeight: 480
                            resizingBehavior: PAD
                            background: "rgb:000000"
                        ) {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`
