import React from 'react';
import './Footer.css';
import footerLogo from '../../../resources/image/footer-logo.png';

const Footer = () => {
    return (
        <footer class="main-footer-section">
            <div class="common-wrap clear footer-inner">
            <div class="footer-top-wrap">
                <h6>Let’s talk </h6>
                <a href="mailto: hello@blissway.com">hello@blissway.com</a>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom-inner">
                    <div class="footer-logo">
                        <a href="index.html">
                            <img src={footerLogo} alt=""/>
                        </a>
                    </div>
                    <span>Redondo Beach, CA Denver, CO</span>
                    <p>©2020 BLISSWAY Inc.</p>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;