import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const ExpandMore = ({ 
  className,
  size
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor' 
      d='M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z' 
    />
  </Svg>
)

ExpandMore.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

ExpandMore.defaultProps = {
  className: '',
  size: 24
}

export default ExpandMore