import React from 'react';

import { Link } from "react-router-dom";

export default function QuizResult({iTotalQuiz,iFinalScore}) {
	return (
        <>
        	<div className="ui container default-margin">
	            <center>
		            <div class="ui card">
					  <div class="content">
					    <div class="header">Quiz Result</div>
					  </div>
					  <div class="content">
					    <h4 class="ui sub header">Activity</h4>
					    <div class="ui small feed">
					      <div class="event">
					        <div class="content">
					          <div class="summary">
					             <strong>Total Questions: {iTotalQuiz}</strong>
					          </div>
					        </div>
					      </div>
					      <div class="event">
					        <div class="content">
					          <div class="summary">
					             <strong>Final Score:{iFinalScore}</strong>
					          </div>
					        </div>
					      </div>
					    </div>
					  </div>
					</div>
				</center>
        	</div>
        </>

    );
}