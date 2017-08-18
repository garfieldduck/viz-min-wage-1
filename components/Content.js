import React from 'react'
import styled from 'styled-components'
import Slide from './Slide'
import Cover from './Cover'
import Footer from './Footer'
import InnerSlide from './InnerSlide'
import { slidesContent, slideBeginingKey, slideEndingKey } from '../constants/slidesContent'

const Wrapper = styled.div`
  height: 100%;
`

class Content extends React.Component {
  render() {
    const MainSlides = slidesContent.map((slide, index) =>
      (<Slide key={slide.key} index={index + 1}>
        <InnerSlide text={slide.text} />
      </Slide>),
    )

    return (
      <Wrapper>
        <Slide key={slideBeginingKey} index={0}>
          <Cover />
        </Slide>
        { MainSlides }
        <Slide key={slideEndingKey} index={slidesContent.length + 1}>
          <Footer title={'22K夠用嗎？基本工資 12 年凍漲的真相'} />
        </Slide>
      </Wrapper>
    )
  }

}

export default Content
