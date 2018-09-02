class Jyanken {
    constructor(hand) {
        this.hand = hand
    }
    
    poi() {
        this.hand = Math.floor(Math.random() * 3)
    }
    
    judge(your){
        const judgement = (computer_hand - human_hand + 3) % 3;
        if (judgement == 0){
            return "引き分け"
        }else if(judgement == 1){
            return "勝ち"
        } else {
            return "負け"
        }
    }
}