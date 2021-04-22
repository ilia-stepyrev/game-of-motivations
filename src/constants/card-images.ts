import { CardType } from "../enums/card-type";

export const CardImages: Record<CardType, string> = {
    [CardType.CHALLENGE]: 'img/challenge.svg',
    [CardType.COMMUNICATION]: 'img/communication.svg',
    [CardType.CONTRIBUTION]: 'img/contribution.svg',
    [CardType.CREATIVENESS]: 'img/creativeness.svg',
    [CardType.EXPERT]: 'img/expert.svg',
    [CardType.FEEDBACK]: 'img/feedback.svg',
    [CardType.LEADER]: 'img/leader.svg',
    [CardType.LIFESTYLE]: 'img/lifestyle.svg',
    [CardType.SALARY]: 'img/salary.svg',
    [CardType.STATUS]: 'img/status.svg',
    [CardType.TEAM]: 'img/team.svg',
}