import React from "react"
import Img from "gatsby-image"
import ExternalLink from "./ExternalLink"
import { useStaticQuery, graphql } from "gatsby"

export default function Bio() {
  const data = useStaticQuery(graphql`
    fragment SocialMedia on File {
      data: childImageSharp {
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query BioQuery {
      github: file(absolutePath: { regex: "/github.png/" }) {
        ...SocialMedia
      }
      twitter: file(absolutePath: { regex: "/twitter.png/" }) {
        ...SocialMedia
      }
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        data: childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)
  console.log(data.site)
  return (
    <>
      <div className="flex sm:items-center mt-8 mb-6 sm:flex-row flex-col items-start">
        <Img
          className="flex-shrink-0 w-12 h-12 mb-4 sm:mb-0 mr-4 rounded-full"
          fixed={data.avatar.data.fixed}
          alt="Profile"
        />
        <p className="mb-0 lg:text-lg text-gray-400">
          Hi, I'm a math student, a 3d printing nerd, and somewhat of a programmer.
        </p>
      </div>
      <div className="mb-8">
        <div
          className="grid gap-4 grid-flow-col"
          style={{ width: "max-content" }}
        >
          <ExternalLink
            href={`https://github.com/notliria`}
            className="flex items-center text-sm"
          >
            <Img
              fixed={data.github.data.fixed}
              alt="github"
              className="mr-3 mb-0 rounded-full"
            />{" "}
            Github
          </ExternalLink>
        </div>
      </div>
    </>
  )
}
