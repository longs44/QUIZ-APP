
        const questions = [
            {
                question: "what is HTML used for?",
                options: ["coding", "cooking", "web development", "programming"],
                answer: 3
            },
            {
                question: "Which of the following is not a datatype?",
                options: ["string", "a-hub", "array", "integer"],
                answer: 2
            },
            {
                question: "which of the following is not a HTML tag?",
                options: ["h tag", "p tag", "ancor tag", "nate tag"],
                answer: 4
            },
            {
                question: "which of these is not among the properties of HTML?",
                options: ["head", "tittle", "body", "tail"],
                answer: 4
            },
            {
                question: "what is the appropriate width for a HTML container?",
                options: ["90%", "100%", "80%", "12%"],
                answer: 2
            },
            {
                question: "Which language is used for web apps?",
                options: ["Put", "HTML", "Jav", "AllS"],
                answer: 2
            },
            {
                question: " which of these is not a Property of arrays in HTML?",
                options: ["shift", "pop", "push", "Euro"],
                answer: 4
            },
            {
                question: "HTML stands for?",
                options: ["hyper term mockup language", "hyper text mark-up language", "", "hypertext mark-up list"],
                answer: 2
            },
            {
                question: "Who invented HTML?",
                options: ["Nate arlo", "stan lee", "longzhi locwat", "tim berners-lee"],
                answer: 4
            },
            {
                question: "what is used to style web pages in HTML?",
                options: ["HIV", "CSC", "CSS", "STDs"],
                answer: 3
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let userAnswers = [];

        function showQuestion() {
            const q = questions[currentQuestion];
            let html = `<div class="question">Q${currentQuestion+1}: ${q.question}</div><div class="options">`;
            q.options.forEach((opt, idx) => {
                html += `<label><input type="radio" name="option" value="${idx}"> ${opt}</label>`;
            });
            html += `</div><button class="btn btn-primary" onclick="submitAnswer()">Submit</button>`;
            document.getElementById('quiz').innerHTML = html;
        }

        function submitAnswer() {
            const options = document.getElementsByName('option');
            let selected = -1;
            for (let i = 0; i < options.length; i++) {
                if (options[i].checked) {
                    selected = parseInt(options[i].value);
                    break;
                }
            }
            if (selected === -1) {
                alert('Please select an option!');
                return;
            }
            userAnswers.push(selected);
            if (selected === questions[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            document.getElementById('quiz').style.display = 'none';
            let resultHtml = `<h3>Your Score: ${score} / ${questions.length}</h3><ul style='text-align:left;'>`;
            questions.forEach((q, idx) => {
                let correct = q.answer === userAnswers[idx];
                resultHtml += `<li>Q${idx+1}: ${q.question}<br>
                <span style='color:${correct ? "green" : "red"}'>Your answer: ${q.options[userAnswers[idx]] || "No answer"}</span><br>
                <span style='color:green'>Correct answer: ${q.options[q.answer]}</span></li><br>`;
            });
            resultHtml += '</ul>';
            document.getElementById('result').innerHTML = resultHtml;
            document.getElementById('result').style.display = 'block';
        }

        showQuestion();