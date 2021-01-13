import React from 'react';
import './HowBlissway.css';
import play_btn from '../../../resources/image/play-btn.png'; 
import howBlissway from '../../../resources/image/how-blissway.jpg'; 

const HowBlissway = () => {
    return (
        <section class="video-wrap how-blissway">
            <div class="common-wrap clear">
                <div class="video-wrap-inner">
                    <div class="video-content-wrap">
                        <div class="play-btn-wrap">
                            <div class="play-btn" id="play-btn-two">
                                <img src={play_btn} alt=""/>
                            </div>
                        </div>
                        <div class="video-content">
                            <div class="section-title">
                                <h3>How Blissway</h3>
                                <span>can solve it</span>
                            </div>
                            <div class="video-wrap-thumb">
                                <figure>
                                    <img src={howBlissway} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowBlissway;