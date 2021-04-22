import { CardType } from '../../enums/card-type';
import { LangDefinition } from '../../models/lang-definition';

export const enLang: LangDefinition = {
    title: 'English',
    content: {
        cardParts: {
            predescription: 'in case if',
            postdescription: 'ready to give away any subsequent card',
        },
        restartGame: 'restart',
        putCardBackToDeck: 'put back to the deck',
        confirmation: {
            yes: 'Yes',
            no: 'No',
        },
        restartConfirmation: {
            title: 'New game',
            text: 'Are you sure you want to start a new game? The current result will be lost'
        },
        completeGame: 'Complete',
        completeGamePopup: {
            title: 'How did you play?',
            testOnly: 'Just played around',
            playSingle: 'Played alone',
            playMultiple: 'Played with a second player',
            continue: 'Still playing - continue'
        },
        cards: {
            [CardType.CHALLENGE]: {
                title: 'Challenge',
                description: 'there will be an opportunity to avoid routine tasks and do more the tasks which allow me to constantly develop'
            },
            [CardType.COMMUNICATION]: {
                title: 'Communication',
                description: 'there will be an opportunity to spend part of my working time on communications'
            },
            [CardType.CONTRIBUTION]: {
                title: 'Contribution',
                description: 'I will see the outcomes of my work and know that many people use what I have done'
            },
            [CardType.CREATIVENESS]: {
                title: 'Creativeness',
                description: 'I will be able to come up with something of my own'
            },
            [CardType.EXPERT]: {
                title: 'Expert opinion',
                description: 'I will be able to become an example to follow and people will reach out to me and strive to reach a high level'
            },
            [CardType.FEEDBACK]: {
                title: 'Feedback',
                description: 'I will be able to receive feedback on my work in a convenient way'
            },
            [CardType.LEADER]: {
                title: 'Leadership',
                description: 'I will have a chance to take a leadership role on a project or a team'
            },
            [CardType.LIFESTYLE]: {
                title: 'Lifestyle',
                description: 'I will be able to flexibly customize my work schedule and work from a convenient place for me'
            },
            [CardType.SALARY]: {
                title: 'Salary',
                description: 'my salary will be increased by 20%'
            },
            [CardType.STATUS]: {
                title: 'Status',
                description: 'I will be able to take part in making strategic decisions in the company'
            },
            [CardType.TEAM]: {
                title: 'Team',
                description: 'I will work in a good team'
            },
        }
    },
}