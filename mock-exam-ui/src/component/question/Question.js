import React, {useEffect, useState} from 'react';

const Question = () => {

    const [question, setQuestions] = useState(null)
    const [title, setTitle] = useState("");
    const [explanation, setExplanation] = useState("");
    const [isMultiple, setMultiple] = useState(false);
    const [examId, setExamId] = useState(1);
    const [answers, setAnswers] = useState([])

    const [answerContent, setAnswerContent] = useState("")
    const [isCorrect, setCorrect] = useState(false)


    useEffect(() => {
        const url = "http://localhost:9002/api/question/exam/1";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json)
                setQuestions(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const submit = (e) => {
        e.preventDefault()
        const question = {
            title,
            explanation,
            isMultiple,
            examId,
            "questionAnswers": answers
        }

        const url = "http://localhost:9002/api/question"

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(question)
        }).then(async (response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }

    const addAnswer = (e) => {
        e.preventDefault()
        console.log(isCorrect)
        const answer = {
            "content": answerContent,
            "isCorrect": isCorrect
        }
        setAnswers([...answers, answer])
        setAnswerContent("")
        setCorrect(false)
    }

    return (
        <div>
            <h1>All question</h1>
            {question && question.map((question, index) => (
                <div key={index}>

                </div>
            ))}

            <h3>ADD NEW QUESTION</h3>
            <form onSubmit={submit}>
                <label htmlFor="title">Title</label>
                <textarea id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>

                <label htmlFor="explanation">Explanation</label>
                <textarea id="explanation" onChange={(e) => setExplanation(e.target.value)}
                          value={explanation}/>

                <label htmlFor="f">False</label>
                <input type="radio" id="f" onClick={(e) => setMultiple(false)} name="a" value={"False"} defaultChecked/>

                <label htmlFor="t">True</label>
                <input type="radio" id="t" onClick={(e) => setMultiple(true)} name="a" value={"True"}/>

                <h3>Question Answers</h3>
                {answers.map((answer, index) => (
                    <div className="answer" key={index}>
                        <span>{index + 1}. {answer.content}</span>
                        <span>{answer.isCorrect ? " correct" : " incorrect"}</span>
                    </div>
                ))}

                <h2>Add new Answer</h2>

                <label htmlFor="answer_content">Answer</label>
                <textarea id="answer_content" onChange={(e) => setAnswerContent(e.target.value)} value={answerContent}/>

                <label htmlFor="correct">Correct</label>
                <input type="radio" onClick={(e) => setCorrect(true)} name="g" id="correct" />

                <label htmlFor="incorrect">Incorrect</label>
                <input type="radio" onClick={(e) => setCorrect(false)} name="g" id="incorrect" defaultChecked/>

                <input type="button" onClick={addAnswer} value="SAVE ANSWER"/>
                <br/>


                <input type="submit" value="SAVE QUESTION"/>
            </form>
        </div>

    )
}

export default Question;