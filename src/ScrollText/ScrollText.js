import React, { Component } from 'react';
import propTypes from 'prop-types';
import './ScrollText.css';
import { getFilm } from '../helper.js' 

const ScrollText = (props) => {

console.log(props)
    return (
      <div className = "scrolling">
      <div className="fade">
        <button className="remove"> X </button> 
        <section className="star-wars">
          <div className="crawl"> 
            <div className="title">
              <p> {props.scroll.episode_id}</p>
              <h1>{props.scroll.name}</h1>
            </div> 
            <p>{props.scroll.opening_crawl}…</p>
          </div>
        </section>
      </div>
      </div>
    )
  }


export default ScrollText;