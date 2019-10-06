/**
 * Login component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { MDCTextField } from '@material/textfield';
import { MDCRipple } from '@material/ripple';
import { MDCSelect } from '@material/select';

import "./login.css"
import "../utils/globals.css"
import "../utils/material.scss"

const Login = ({ children }) => {
  useEffect(() => {
    [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
      return new MDCTextField(el);
    });

    [].map.call(document.querySelectorAll('.mdc-button'), function (el) {
      return new MDCRipple(el);
    });

    [].map.call(document.querySelectorAll('.mdc-select'), function (el) {
      return new MDCSelect(el);
    });
  }, []);
  // useEffect(() => {
  //   // MDCRipple.attachTo(document.querySelector('body'));
  //   console.log("all");

  //   [].map.call(document.querySelectorAll('.mdc-text-field'), function (el) {
  //     return new MDCTextField(el);
  //   });

  //   [].map.call(document.querySelectorAll('.mdc-button'), function (el) {
  //     return new MDCRipple(el);
  //   });

  //   [].map.call(document.querySelectorAll('.mdc-select'), function (el) {
  //     return new MDCSelect(el);
  //   });
  // })
  return (
    <div className="flex flex-col h-full">
      <div className="md:flex-grow md:flex-1"></div>
      <div className="flex sm:flex-grow h-full">
        <div className="hidden md:block flex-1"></div>
        <div className="md:max-w-md flex-grow middle-box text-center h-full">
          {children}
        </div>
        <div className="hidden md:block flex-1"></div>
      </div>
      <div className="md:flex-grow md:flex-1"></div>
    </div>
  )
}

Login.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Login
