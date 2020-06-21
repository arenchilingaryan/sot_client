import React from 'react'
import './faq.scss'
import { NavLink } from 'react-router-dom';

export const FAQ = () => {
    return (
        <div className="page inside__page">
            <div className="inside__page">
                <h1 className="faq__title">
                    <strong>FAQ</strong>
                </h1>
                <div>
                    <p className="faq__subtitle"><strong>1. Registration.</strong></p>
                    <p>
                        You need to log in.
                    You need to go to the <NavLink to="/register" className="faq__link"> registration section </NavLink>.
                    </p>
                    <p className="faq__subtitle"><strong>2.My profile.</strong></p>
                    <p>
                        When you logged in, “My Profile” will open for you, in which you can see your data:
                        profile, username, email address, contact phone number, name in the Thriller app,
                        balance and history of publications promotion.
                    </p>
                    <p className="faq__subtitle"><strong>3.Selection of performance</strong></p>
                    <p>
                        The next step is to choose a promotion view (tariff)
                    </p>
                    <p>
                        You need to replenish the account for the amount by which you want to promote your video.
                    </p>
                    <p>
                        To replenish the account, you can choose one of three representations of the promotion.
                        After choosing a view, you go to the settings.
                    </p>
                    <p className="faq__subtitle"><strong>4.Setting up promotion submission</strong></p>
                    <p>
                        After selecting a promotion view, you are taken to the category selection section.
                        For a more accurate search of your audience, you can use the additional tool "Exact search"
                    </p>
                    <p>
                        Exact Search is an algorithm developed by our development team based on the Triller platform, 
                        with which it selects the most relevant audience for each user from the region and category.
                    </p>
                    <p>
                        "Exact search" is an algorithm that allows you to attract more users to your profile and save your money.
                    </p>
                    <p>
                        Exact Search is a paid tool.
                    </p>
                    <p>
                        To do this, place a link to a video from Triller.  To do this, you need to go to the Thriller mobile application and copy the video link to the clipboard.  
                        After copying the link to the clipboard, 
                        you need to paste the link into the link promotion field.
                    </p>
                    <p>
                        Promotion of a publication takes 24 hours from the date of appointment.  
                        Thriller question about the set of views, likes, subscribers.
                    </p>
                </div>
            </div>

        </div>
    )
}