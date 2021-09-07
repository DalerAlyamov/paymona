import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const Close = ({ 
  className,
  size
}) => ( 
  <Svg viewBox="0 0 24 24" className={className} size={size} fill="currentColor">   
    <path 
      fill="currentColor"
      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
    />
  </Svg>
)

Close.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

Close.defaultProps = {
  className: '',
  size: 24
}

export default Close