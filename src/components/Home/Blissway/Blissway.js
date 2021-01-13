import React from 'react';
import './Blissway.css';
import Wall from '../../../resources/image/WAL.png';
// import Wall from '../../../resources/image/WAL.png';
// import Wall from '../../../resources/image/WAL.png';

const Blissway = () => {
    return (
        <section class="blissway-wrap tabs">
        <div class="blissway-inner">
            <div class="common-wrap clear">
                <div class="section-title">
                   <div class="title-inner">
                       <h1>BLISSWAY</h1>
                       <span>builds next-generation tolling solutions for cities</span>
                       <p>from software-heavy, hardware-lite roadside infrastructure to contract-free public-private partnerships</p>
                   </div>
                </div>
            </div>
            <div class="blissway-tab-wrap">
               <div class="blissway-tab-item-wrap">
                   <div class="tab-item">
                       <div class="tab-item-thumb" style={{backgroundImage: `url(${Wall}`}}></div>
                       <div class="tab-item-content"> 
                           <h6>Future-proof lane enforcement</h6>
                           <ul>
                               <li>no more transponders</li>
                               <li>no overhead gantries</li>
                               <li>over 99.95% accuracy</li>
                               <li>deployment within weeks </li>
                               <li>interoperable with any ETC system </li>
                               <li>solar-powered </li>
                               <li>wireless data transfer</li>
                           </ul>
                        </div>
                   </div>
                   <div class="tab-item">
                       <div class="tab-item-thumb" style={{backgroundImage: `url(${Wall})`}}></div>
                       <div class="tab-item-content"> 
                           <h6>Democratizing speed</h6>
                           <ul>
                               <li>vehicle occupancy verification done right</li>
                               <li>low friction for users</li>
                               <li>near-perfect enforcement </li>
                               <li>high granularity (1, 2, 3, 4+ occupants)</li>
                           </ul></div>
                   </div>
                   <div class="tab-item">
                       <div class="tab-item-thumb" style={{backgroundImage: `url(${Wall})`}}></div>
                       <div class="tab-item-content"> 
                           <h6>Traffic management, reengineered</h6>
                           <ul>
                               <li>reservation-based traffic management</li>
                               <li>industry-first predictive dynamic pricing</li>
                               <li>maximizes vehicle throughput</li>
                               <li>opens the door to free flow conditions 24/7</li>
                           </ul>
                           </div>
                   </div>
               </div>
                <div class="blissway-tab-handler">
                        <div class="tab-nav-wrap">
                            <div class="lanes-tab-nav-inner">
                                <div class="tab-nav-item">
                                    <input type="radio" id="test1" name="radio-group" checked/>
                                    <label for="test1">1</label>
                                </div>
                                <div class="tab-nav-item">
                                    <input type="radio" id="test2" name="radio-group"/>
                                    <label for="test2">2</label>
                                </div>
                                <div class="tab-nav-item">
                                    <input type="radio" id="test3" name="radio-group"/>
                                    <label for="test3">3</label>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blissway;