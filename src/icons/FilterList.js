import React from 'react'
import styled from 'styled-components'
import SvgTemplate from './SvgTemplate'
import PropTypes from 'prop-types'

const Svg = styled(SvgTemplate)` 
  width: ${props => props.size}px; 
  height: ${props => props.size}px;
`

const FilterList = ({ 
  className,
  size
}) => ( 
  <Svg viewBox='0 0 24 24' className={className} size={size} fill='currentColor'>   
    <path 
      fill='currentColor' 
      d='M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z' 
    />
  </Svg>
)

FilterList.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
}

FilterList.defaultProps = {
  className: '',
  size: 24
}

export default FilterList