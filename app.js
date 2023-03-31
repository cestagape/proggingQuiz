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
                    ['Обсерватории', 'Завода электронно-вычислительной техники', 'Атомной электростанци'],
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
const count = document.getElementById('win-counter-id')
const titleContent = document.getElementById('win-title-id')
const nextButton = document.getElementById('nextButton')
const answerButton1 = document.getElementById('answer-1')
const answerButton2 = document.getElementById('answer-2')
const answerButton3 = document.getElementById('answer-3')

answerButton1.addEventListener('click', tryAnswer)
answerButton2.addEventListener('click', tryAnswer)
answerButton3.addEventListener('click', tryAnswer)

function tryAnswer() {
    if (this.innerHTML === 'Владимира') {
        this.style.backgroundColor = "#35C97D";
        counter +=1
    }
    else {
        this.style.backgroundColor = "#FF2D2D";
    }
}
function nextQuestion() {

        if (answerButton1.style.backgroundColor !== "" || answerButton2.style.backgroundColor !== "" || answerButton3.style.backgroundColor !== "" ) {
            questionCounter += 1
            count.innerHTML = questionCounter +'/10'
            titleContent.innerHTML = questionsArr[questionCounter-1]
            titleContent.style.textAlign = center
        }


}