import React from 'react';
import './TheWhy.css';
import play_btn from '../../../resources/image/play-btn.png'; 
import videoThumb from '../../../resources/image/video-thumb .jpg'; 

const TheWhy = () => {
    return (
        <section class="video-wrap the-why">
            <div class="common-wrap clear">
                <div class="video-wrap-inner">
                    <div class="video-content-wrap">
                        <div class="play-btn-wrap">
                            <div class="play-btn" id="play-btn-one">
                                <img src={play_btn} alt=""/>
                            </div>
                        </div>
                        <div class="video-content">
                            <div class="section-title">
                                <h3>The Why</h3>
                                <span>of traffic congestion</span>
                            </div>
                            <div class="video-wrap-thumb">
                                <figure>
                                    <img src={videoThumb} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheWhy;