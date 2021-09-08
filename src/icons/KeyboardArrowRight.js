import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const KeyboardArrowRight = ({ 
  className,
  size
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor'
      d='M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z' 
    />
  </Svg>
)

KeyboardArrowRight.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

KeyboardArrowRight.defaultProps = {
  className: '',
  size: 24
}

export default KeyboardArrowRight
