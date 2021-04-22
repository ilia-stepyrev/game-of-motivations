// cardRatio = cardHeight / cardWidth
export const calculateCardSize = (panelWidth: number, panelHeight: number, cardRatio: number, numberOfCards: number) => { 
	const w = panelWidth * cardRatio;
	const cardSizeOptions = new Array(numberOfCards)
        .fill(undefined)
        .map((_, i) => Math.min(w / Math.ceil(numberOfCards/(i + 1)), panelHeight/(i + 1)));
	const cardHeight = Math.max(...cardSizeOptions);
	const numberOfRows = cardSizeOptions.indexOf(cardHeight) + 1;
	const cardWidth = cardHeight / cardRatio;
	
	return ({
		cardsPerRow: numberOfCards / numberOfRows,
		cardHeight,
		cardWidth
	});
}