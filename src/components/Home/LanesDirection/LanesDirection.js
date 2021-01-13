import React from 'react';
import './LanesDirection.css';
import Path_46 from '../../../resources/image/Path_46.png';
import Path_47 from '../../../resources/image/Path_47.png';
import Path_64 from '../../../resources/image/Path_64.png';
import Group_1 from '../../../resources/image/Group_1.png';
import Group_3 from '../../../resources/image/Group_3.png';
import Group_4 from '../../../resources/image/Group_4.png';
import Group_6 from '../../../resources/image/Group_6.png';

const LanesDirection = () => {
    return (
        <section class="lanes-direction tabs">
        <div class="common-wrap clear">
            <div class="lanes-direction-inner">
                <div class="lanes-direction-content">
                    <div class="section-title">
                        <h5>Why every city should deploy fast lanes*</h5>
                        <span>*a.k.a. express lanes, HOT lanes, or managed lanes</span>
                    </div>
                    <div class="lanes-direction-line">
                        <img src={Path_46} alt=""/>
                    </div>
                </div>
                <div class="lanes-direction-tab-wrap">
                    <div class="lanes-direction-tab-inner"> 
                        <div class="lanes-direction-tab">
                            <div class="lanes-direction-tab-nav">
                                <div class="lanes-tab-nav-inner">
                                    <div class="tab-nav-item">
                                        <input type="radio" id="test11" name="radio-group1" checked/>
                                        <label for="test11">1</label>
                                    </div>
                                    <div class="tab-nav-item">
                                        <input type="radio" id="test22" name="radio-group1"/>
                                        <label for="test22">2</label>
                                    </div>
                                    <div class="tab-nav-item">
                                        <input type="radio" id="test33" name="radio-group1"/>
                                        <label for="test33">3</label>
                                    </div>
                                    <div class="tab-nav-item">
                                        <input type="radio" id="test44" name="radio-group1"/>
                                        <label for="test44">4</label>
                                    </div>
                                </div>
                            </div>
                            <div class="direction-tab-item-wrap">
                                <div class="direction-tab-item">
                                    <figure>
                                        <img src={Group_1} alt=""/>
                                    </figure>
                                    <div class="direction-tab-item-content">
                                        <p class="lead"> Reduce congestion and expand road capacity <dfn>without pouring new concrete</dfn> </p>
                                    </div>
                                </div>
                                <div class="direction-tab-item">
                                    <figure>
                                        <img src={Group_3} alt=""/>
                                    </figure>
                                    <div class="direction-tab-item-content">
                                        <p class="lead"> Decrease travel times and increase trip reliability <dfn>even for regular lanes</dfn> </p>
                                    </div>
                                </div>
                                <div class="direction-tab-item">
                                    <figure>
                                        <img src={Group_4} alt=""/>
                                    </figure>
                                    <div class="direction-tab-item-content">
                                        <p class="lead"> tripling the travel options for drivers <dfn>from “roll the dice” to (1) “roll the dice” or (2) “pay for a fast, reliable commute” or (3) “carpool for a fast, reliable commute”</dfn> </p>
                                    </div>
                                </div>
                                <div class="direction-tab-item">
                                    <figure>
                                        <img src={Group_6} alt=""/>
                                    </figure>
                                    <div class="direction-tab-item-content">
                                        <p class="lead"><dfn>and as byproduct</dfn> vast monetization of road assets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lanes-direction-line-down">
                    <img class="desk" src={Path_47} alt=""/>
                    <img class="mobi" src={Path_64} alt=""/>
                </div>
            </div>
        </div>
     </section>
    );
};

export default LanesDirection;