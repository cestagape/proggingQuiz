const questionsArr = ['Чье имя носит православный собор, возведенный в Херсонесе?',
    'Представители, какого музыкального направления ежегодно собираются на фестиваль в Коктебеле?',
    'Для работников, какого учреждения создавался поселок Научный?',
    'Кто из знаменитых российских художников профинансировал в 19 в. сооружение водопровода в городе Феодосии?',
    'Название, какого населенного пункта, в переводе с греческого означает «полезный город»?',
    'Где находилась летняя резиденция советского президента?',
    'За каким городом закрепилась слава 1-ого бальнеологического курорта Российской империи?',
    'Какое романтическое название получил необычный фонтан, устроенный в гаремной части ханского дворца в Бахчисарае?',
    'Остатки, какого греческого полиса сбереглись на территории города Керчи?',
    'Кому из известных литераторов принадлежала дача в Гурзуфе, ныне переоборудованная в дом-музей?'];
const answersArr = [['Владимира', 'Андрея', 'Николая'],
                    ['Джаза', 'Рэгги', 'Техно'],
                    ['Обсерватории', 'Завода электронно-вычислительной техники', 'Атомной электростанции'],
                    ['И. Айвазовский', 'И. Крамской', 'В. Серов'],
                    ['Симферополь', 'Инкерман', 'Алушта'],
                    ['В Форосе', 'В Гаспре', 'В Ливадии'],
                    ['Саки', 'Судак', 'Евпатория'],
                    ['Слёз', 'Любви', 'Верности'],
                    ['Пантикопея', 'Керкинитиды', 'Ольвии'],
                    ['А.Чехову', 'И. Бунину', 'А. Грину'],
                   ];

var rightAnswersCounter = 0
var questionCounter = 1
const answerBtns = document.getElementsByClassName('answer')
const count = document.getElementById('win-counter-id')
const titleContent = document.getElementById('win-title-id')
const nextButton = document.getElementById('nextButton')
const answerButton1 = document.getElementById('answer-1')
const answerButton2 = document.getElementById('answer-2')
const answerButton3 = document.getElementById('answer-3')
const pointsEarned = document.getElementById('points-earned-id')
const nextBtnDiv = document.getElementsByClassName('win-next-button')

nextBtnDiv.hidden = true


if (window.location.pathname === '/hahahaha/questions.html') {
    answerButton1.addEventListener('click', tryAnswer)
    answerButton2.addEventListener('click', tryAnswer)
    answerButton3.addEventListener('click', tryAnswer)
}
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    function tryAnswer() {
        if (this.innerHTML === answersArr[questionCounter-1][0]) {
            rightAnswersCounter +=1
            console.log(rightAnswersCounter)
        }

        if (answerButton1.innerHTML !== answersArr[questionCounter-1][0] ) {
            answerButton1.style.backgroundColor = "#FF2D2D"
        }
        else {
            answerButton1.style.backgroundColor = "#35C97D"
        }
        if (answerButton2.innerHTML !== answersArr[questionCounter-1][0] ) {
            answerButton2.style.backgroundColor = "#FF2D2D"
        }
        else {
            answerButton2.style.backgroundColor = "#35C97D"
        }
        if (answerButton3.innerHTML !== answersArr[questionCounter-1][0] ) {
            answerButton3.style.backgroundColor = "#FF2D2D"
        }
        else {
            answerButton3.style.backgroundColor = "#35C97D"
        }
        answerButton1.setAttribute('disabled', '')
        answerButton2.setAttribute('disabled', '')
        answerButton3.setAttribute('disabled', '')
    }
    function nextQuestion() {

            answerButton1.disabled = false
            answerButton2.disabled = false
            answerButton3.disabled = false
            let deletedIndex
            if (questionCounter !== 10 ) {
                // увеличение счетчика вопроса на 1
                questionCounter += 1
                count.innerHTML = questionCounter + '/10'
                // измененеие вопроса и ответов к нему
                //изменение вопроса
                titleContent.innerHTML = questionsArr[questionCounter - 1]
                // изменение ответов
                //массив ответов под конкретный вопрос
                let currAnswers = answersArr[questionCounter - 1].slice()

                // записываем индекс вписываемого в ответ элемента массива currAnswers
                deletedIndex = randomInteger(0, 2)
                // вписываем в первый ответ currAnswers[deletedIndex]
                answerButton1.innerHTML = currAnswers[deletedIndex]
                // удаляем currAnswers[deletedIndex] из currAnswers, чтобы он не повторялся в ответах
                currAnswers.splice(deletedIndex, 1)

                // записываем индекс вписываемого в ответ элемента массива currAnswers
                deletedIndex = randomInteger(0, 1)
                // вписываем во второй ответ currAnswers[deletedIndex]
                answerButton2.innerHTML = currAnswers[deletedIndex]
                // удаляем currAnswers[deletedIndex] из currAnswers, чтобы он не повторялся в ответах
                currAnswers.splice(deletedIndex, 1)

                // записываем индекс вписываемого в ответ элемента массива currAnswers
                deletedIndex = randomInteger(0, 0)
                // вписываем во второй ответ currAnswers[deletedIndex]
                answerButton3.innerHTML = currAnswers[deletedIndex]
                // удаляем currAnswers[deletedIndex] из currAnswers, чтобы он не повторялся в ответах
                currAnswers.splice(deletedIndex, 1)

                //  возвращаем нейтральный цвет бэкгрунда ответов
                answerButton1.style.backgroundColor = 'rgba(217, 217, 217, 20%)'
                answerButton2.style.backgroundColor = 'rgba(217, 217, 217, 20%)'
                answerButton3.style.backgroundColor = 'rgba(217, 217, 217, 20%)'
            } else {
                localStorage.setItem("points", rightAnswersCounter)
                window.location.href = 'end-page.html'
            }


    }
if(window.location.pathname === '/hahahaha/end-page.html') {
    pointsEarned.innerHTML = localStorage.getItem('points') + ' БАЛЛОВ!'
    localStorage.clear();



}