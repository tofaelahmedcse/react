import React from 'react';
import './NewsLatter.css';

const NewsLatter = () => {
    return (
        <section class="news-letter-wrap">
            <div class="common-wrap clear">
                <div class="news-letter-form-wrap">
                    <form action="#" method="post">
                        <div class="news-letter-form">
                            <span>Schedule a <dfn>45-minute demo:</dfn></span>
                            <div class="input-row">
                                <div class="input-col">
                                    <input type="email" placeholder="Your email here"/>
                                </div>
                                <div class="input-col submit">
                                    <input type="submit" value="SUBMIT"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLatter;