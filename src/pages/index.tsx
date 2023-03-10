import * as React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import Seo from "../components/seo"
import FlutterBuild from "../components/builds/FlutterBuild"
import { useWindowSize } from "react-use"
import GridSection from "../components/sections/GridSection"

const IndexPage = () => {
  const { width } = useWindowSize()
  return (
    <Wrapper>
      <HeroWrapper>
        <CourseCard />
        <TextWrapper>
          <Logo src="/images/logos/react-logo.svg" alt="logo" />
          <Title>Build a web app with React Hooks</Title>
          <Caption>20 sections - 3 hours of videos</Caption>
          <Description>
            Learn how we built the new Design+Code site with React Hooks using
            Gatsby, Netlify, and advanced CSS techniques with Styled Components.
          </Description>
          <AuthorWrapper>
            <AuthorImage src="/images/avatars/jeanmarc.png" alt="avatar" />
            <Caption>Taught by Janith Bimsara</Caption>
          </AuthorWrapper>
          <PurchaseButton />
          <SmallText>
            Purchase includes access to 30 courses. Over 80 hours of content,
            including 12 hours for SwiftUI, for iOS 13 and iOS 14.
          </SmallText>
        </TextWrapper>
      </HeroWrapper>
      <Divider />
      <GridSection />
      <FlutterWrapper width={width}>
        <FlutterBuild />
      </FlutterWrapper>
    </Wrapper>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Home" description={undefined} children={undefined} />
)

export default IndexPage

const Wrapper = styled.div`
  height: 1247px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  overflow: hidden;
`

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;

  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`
const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 60px;
  padding: 220px 20px 0px;
  justify-content: center;
  margin: 0 auto;

  .courseCard {
    margin-top: 39px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`
const Title = styled.h1`
  max-width: 500px;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`
const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`
const SmallText = styled.p`
  max-width: 280px;
  font-style: normal;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
`
const FlutterWrapper = styled.div`
  margin: 100px auto;

  @media (max-width: 1440px) {
    transform-origin: top left;
    transform: scale(${props => props.width / 1440});
  }
`
const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 60px auto 30px;
`
