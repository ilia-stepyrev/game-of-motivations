import { CardType } from "../enums/card-type";

interface CardContent {
    title: string,
    description: string
}

export interface LangContent {
    cards: Record<CardType, CardContent>,
    cardParts: {
        predescription: string,
        postdescription: string,
    },
    completeGame: string,
    completeGamePopup: {
        title: string,
        testOnly: string,
        playSingle: string,
        playMultiple: string,
        continue: string,
    },
    confirmation: {
        yes: string,
        no: string
    },
    putCardBackToDeck: string,
    restartConfirmation: {
        title: string,
        text: string
    },
    restartGame: string,
}