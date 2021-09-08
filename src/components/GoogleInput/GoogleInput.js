import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './GoogleInput.module.sass'

const GoogleInput = ({
  className,
  placeholder,
  value='',
  setValue,
  required=false
}) => {

  const [focused, setFocused] = useState(false)

  return (
    <div 
      className={classNames(
        className, 
        styles.root,
        (focused || value.trim() !== '') && styles['root--focused'] 
      )}
    >
      
      <span className={styles.placeholder}>
        {placeholder}
        {required &&
          <span className={styles.required_star}>*</span>
        }
      </span>

      <input 
        type="text" 
        value={value} 
        className={styles.input}
        onChange={e => setValue(e.target.value)} 
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

    </div>
  )
}

export default GoogleInput
