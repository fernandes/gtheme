import React from "react"
import cx from "classnames"

function H1({ children, className, ...rest }) {
  return (
    <h1 {...rest} className={cx("text-2xl bg-gray-200", className)}>
      {children}
    </h1>
  )
}

export default H1
