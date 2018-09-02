var Jyanken = function() {
    function Jyanken(hand) {
        this.hand = hand;
    }
    
    jyanken.prototype.poi = function() {
        return this.hand = Math.floor(Math.random() * 3);
    }
    
    jyanken.prototype.judge = function(your) {
        var judgement = (computer_hand - human_hand + 3) % 3;
        if (judgement == 0){
            return "引き分け";
        }else if(judgement == 1){
            return "勝ち";
        } else {
            return "負け";
        }
    };
    
    return Jyanken;
};