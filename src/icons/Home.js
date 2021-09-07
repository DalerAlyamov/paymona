import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const Home = ({ 
  className,
  size
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z' 
    />
  </Svg>
)

Home.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

Home.defaultProps = {
  className: '',
  size: 24
}

export default Home
