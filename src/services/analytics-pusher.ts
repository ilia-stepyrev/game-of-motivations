import { CardType } from "../enums/card-type";
import { CompleteGameReason } from "../enums/complete-game-reason";

const EVENT = 'event';
const CARD_RESULT = 'result_';
const GAME_RESULT = 'game_';

export const analyticsPusher = {
    pushCardResults
}

function pushCardResults(cards: Array<CardType>, reason: CompleteGameReason) {
    if (reason === CompleteGameReason.CONTINUE) return;

    if (reason !== CompleteGameReason.TEST_ONLY) {
        cards.forEach((card, index) => pushEvent(`${CARD_RESULT}${card}_${index + 1}`, 1));
    }
    
    pushEvent(GAME_RESULT + reason, 1);
}

function pushEvent (eventName: string, value: number) {
    const gtag = (window as any).gtag;
    if (gtag) {
        gtag(EVENT, eventName, {value});
    } else {
        console.log (`EVENT ${eventName} with value = ${value}`);
    }
}