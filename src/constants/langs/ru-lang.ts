import { CardType } from '../../enums/card-type';
import { LangDefinition } from '../../models/lang-definition';

export const ruLang: LangDefinition = {
    title: 'Русский',
    content: {
        cardParts: {
            predescription: 'в случае, если',
            postdescription: 'готов пожертвовать любой последующей картой',
        },
        restartGame: 'сначала',
        putCardBackToDeck: 'убрать карту в колоду',
        confirmation: {
            yes: 'Да',
            no: 'Нет',
        },
        restartConfirmation: {
            title: 'Новая игра',
            text: 'Вы уверены что хотите начать новую игру? Результаты текущей игры не сохранятся'
        },
        completeGame: 'Завершить',
        completeGamePopup: {
            title: 'Как вы сыграли?',
            testOnly: 'Просто потестировал как это работает',
            playSingle: 'Провел игру с самим собой',
            playMultiple: 'Провел игру с участником',
            continue: 'Еще не закончил - продолжаю'
        },
        cards: {
            [CardType.CHALLENGE]: {
                title: 'Вызов',
                description: 'будет возможность избегать рутинных задач и больше заниматься тем, что позволяет постоянно быть в тонусе и развиваться'
            },
            [CardType.COMMUNICATION]: {
                title: 'Общение',
                description: 'у меня будет возможность проводить часть рабочего времени за общением'
            },
            [CardType.CONTRIBUTION]: {
                title: 'Вклад',
                description: 'я буду видеть результаты своей работы и знать, что многие пользуются тем, что я сделал'
            },
            [CardType.CREATIVENESS]: {
                title: 'Творчество',
                description: 'я буду иметь возможность придумать или разработать что-то свое'
            },
            [CardType.EXPERT]: {
                title: 'Экспертное мнение',
                description: 'я смогу стать примером для остальных и люди будут тянуться ко мне и тому уровню, что у меня есть'
            },
            [CardType.FEEDBACK]: {
                title: 'Фидбэк',
                description: 'я буду получать отзывы о моей работе на удобной для меня основе'
            },
            [CardType.LEADER]: {
                title: 'Лидерство',
                description: 'я буду занимать лидирующую  или руководящую роль на проекте или в команде'
            },
            [CardType.LIFESTYLE]: {
                title: 'Образ жизни',
                description: 'у меня будет возможность гибко настраивать свой рабочий график и работать из удобного мне места'
            },
            [CardType.SALARY]: {
                title: 'Заработок',
                description: 'мне повысят з/п на 20%'
            },
            [CardType.STATUS]: {
                title: 'Статус',
                description: 'я смогу участвовать в принятии стратегических решений в компании'
            },
            [CardType.TEAM]: {
                title: 'Команда',
                description: 'у меня будет возможность работать в хорошей команде'
            },
        }
    },
}