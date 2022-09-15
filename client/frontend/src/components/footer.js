import  "../App.css"
import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
return (
	<div class="social-container">
		<h3 className="follow-us">Follow us </h3>
		<br/>
		<a href="#"
		className="youtube social">
		<FontAwesomeIcon icon={faYoutube} size="3x" />
		</a>

		<a href="#"
		className="facebook social">
		<FontAwesomeIcon icon={faFacebook} size="3x" />
		</a>
		<a href="#" className="twitter social">
		<FontAwesomeIcon icon={faTwitter} size="3x" />
		</a>
		<a href="#"
		className="instagram social">
		<FontAwesomeIcon icon={faInstagram} size="3x" />
		</a>
		<br/>
		<div>
			<footer className="foot">&copy; All rights reserved  2022</footer>
		</div>
	</div>
);
};