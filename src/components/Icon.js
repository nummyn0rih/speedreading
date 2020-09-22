import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  
  & > svg {
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`

export default function Icon({ icon }) {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)

  return <Wrapper dangerouslySetInnerHTML={{ __html: svg.default }} />
}
