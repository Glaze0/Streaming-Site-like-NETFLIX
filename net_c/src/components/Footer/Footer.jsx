import React from "react";
import "./Footer.css";
import yt_icons from "../../assets/youtube_icon.png";
import tw_icons from "../../assets/twitter_icon.png";
import insta_icons from "../../assets/instagram_icon.png";
import fb_icons from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={fb_icons} alt="" />
        <img src={insta_icons} alt="" />
        <img src={tw_icons} alt="" />
        <img src={yt_icons} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Halp Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">©2024-2025 Gaurav</p>
    </div>
  );
};

export default Footer;
