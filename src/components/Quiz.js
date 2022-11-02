import React, { Component } from "react";
import { QuizData } from "./QuizData";
import QuizResult from './QuizResult';
import { Container, Row, Col } from "react-bootstrap";

export class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: null, //current users answer
            currentIndex: 0, //current questions index
            options: [], //the four options
            quizEnd: false, //determines if it's the last question
            score: 0, //holds the score
            disabled: true // determines the status of the buttons
        };
    }

    componentDidMount() {
        this.loadQuiz();
    }

    componentDidUpdate(prevProps, prevStates) {
        const { currentIndex } = this.state;
        if (this.state.currentIndex !== prevStates.currentIndex) {
            this.setState(() => {
                return {
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                };
            });
        }
    }

    //Component that holds the current quiz
    loadQuiz = () => {
        const { currentIndex } = this.state; //get the current question index
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            };
        });
    };

    nextQuestionHander = () => {
        const { userAnswer, answer, score } = this.state;
        this.setState({
            currentIndex: this.state.currentIndex + 1
        });

        //Check if correct answer and increment score
        if (userAnswer === answer) {
            this.setState({
                score: score + 1
            });
        }
    };

    //Check the answer
    checkAnswer = (answer) => {
        this.setState({
            userAnswer: answer,
            disabled: false
        });
    };

    finishHandler = () => {
        if (this.state.currentIndex === QuizData.length - 1) {
            this.setState({
                quizEnd: true
            });
        }
    };

    render() {
        const { question, options, currentIndex, userAnswer, quizEnd } = this.state; //get the current state

        if (quizEnd) {
            return (
                <QuizResult iTotalQuiz={QuizData.length} iFinalScore={this.state.score}/>
            );
        }

        return (
            <div className="ui container default-margin">
	            <center>
			    	<h1
			          style={{
			            display: "flex",
			            justifyContent: "center",
			            alignItems: "center",
			            fontSize: "3rem",
			            fontWeight: "bolder",
			          }}
			        >
			          Quiz App
			          
			        </h1>
			        <hr />
				    <Row>
				        <h2>{question}</h2>
				        <span>{`Question ${currentIndex} of ${QuizData.length - 1}`}</span>
				        {options.map((
				          option //for each option, new paragraph
				        ) => (
				          <p
				            key={option.id}
				            className={`ui floating message options
				                ${userAnswer === option ? "selected" : null}
				                `}
				            onClick={() => this.checkAnswer(option)}
				          >
				            {option}
				          </p>
				        ))}
				        <div class="ui inverted segment">
				        {currentIndex < QuizData.length - 1 && (
				          <button
				            className="ui inverted primary button"
				            disabled={this.state.disabled}
				            onClick={this.nextQuestionHander}
				          >
				            Next Question
				          </button>
				        )}
				        {currentIndex === QuizData.length - 1 && (
				          <button
				            className="ui inverted green button"
				            disabled={this.state.disabled}
				            onClick={this.finishHandler}
				          >
				            Finish
				          </button>
				        )}
				        </div>
				    </Row>
	      		</center>
      		</div>
        );
    }
}

export default Quiz;