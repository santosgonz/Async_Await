const deck = {
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        this.deckId = res.data.deck_id;
    },
    async shuffle() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle`)
        console.log(res)
    },
    async drawCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
        console.log(res.data)
        const card = res.data.cards[0];
        console.log(`${card.value} OF ${card.suit}`);
        return card
    }
}

deck.init().then(() => {
    document.getElementById("drawCardButton").addEventListener("click", async function() {
        const card = await deck.drawCard();
        const cardImage = document.createElement("img");
        cardImage.src = card.image;
        document.getElementById("cardDisplay").appendChild(cardImage);
        if (card.remaining === 0) {
            document.getElementById("drawCardButton").disabled = true;
        }
    });
});