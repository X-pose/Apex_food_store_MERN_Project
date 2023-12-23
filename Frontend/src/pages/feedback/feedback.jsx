import React, { useEffect, useState } from "react"
import './feedback.css'

export default function Feedback(){

    //add states -> ex :- useState
    //add hooks -> ex :- useEffect
    //add other function -> ex :- handleChange() and other related things

    return(
        <div>
            <div className="topContainer">
                <div className="titleContainer_top">
                    <p>Hello</p>
                </div>
                <div className="faqListDiv">
                <p>Hello</p>
                </div>
            </div>
            <div className="middleContainer">
                <div className="titleContainer_middle">
                <p>Hello</p>
                </div>
                <div className="subTitileContainer_middle">
                <p>Hello</p>
                </div>
                <div className="customerFeedbackDiv">
                    <div className="feedback">
                    <p>Hello</p>
                    </div>
                    <div className="feedback">
                    <p>Hello</p>
                    </div>
                    <div className="feedback">
                    <p>Hello</p>
                    </div>
                </div>
            </div>
            <div className="bottomContainer">
                <div className="titleContainer_bottom">
                <p>Hello</p>
                </div>
                <div className="feedbackFormContainer">
                    <div className="infoDiv">
                    <p>Hello</p>
                    </div>
                    <div className="feedbackForm">
                    <p>Hello</p>
                    </div>
                </div>
            </div>


        </div>
    )
}