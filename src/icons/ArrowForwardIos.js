import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const ArrowForwardIos = ({ 
  className,
  size
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M5.88 4.12L13.76 12L5.88 19.88L8 22L18 12L8 2L5.88 4.12Z' 
    />
  </Svg>
)

ArrowForwardIos.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

ArrowForwardIos.defaultProps = {
  className: '',
  size: 24
}

export default ArrowForwardIos
