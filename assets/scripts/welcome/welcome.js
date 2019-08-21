cc.Class({
    extends: cc.Component,

    properties: {
        gift:{
            type:cc.Node,
            default:null,
        },
        mask:{
            type:cc.Node,
            default:null,
        },
        star:{
            type:cc.Label,
            default:null,
        },
        label:{
            type:cc.Node,
            default:null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.preloadScene("game_scene", function () {});
        cc.director.preloadScene("game_scene2", function () {});
        var Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        if(Data == null)
        {
            this.gift.active = true;
            this.mask.active = true;
            var userData = {
                gold: 1000,
                star: 3,
                cueNow: 1,
                tableNow: 1,
                cueNum1: 1,
                cueNum2: 0,
                cueNum3: 0,
                cueNum4: 0,
                cueNum5: 0,
                tableNum1: 1,
                tableNum2: 0,
                tableNum3: 0,
                tableNum4: 0,
                tableNum5: 0,
            
           };
            //var userData = {};

            cc.sys.localStorage.setItem('userData', JSON.stringify(userData));
        }

    },

    // start () {},
    eightBallStart:function(){
        cc.director.loadScene("game_scene");
    },
    raceStart:function(){
        var Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        var starNum = Data.star-1;
        if(starNum>=0){
            Data.star = starNum;
            cc.sys.localStorage.setItem('userData', JSON.stringify(Data));;
            this.star.string = Data.star;
            cc.director.loadScene("game_scene2");
        }
        else{
            this.label.active = true;
            this.scheduleOnce(function() {
                this.label.active = false;
            }, 2);
        }
    },
    // update (dt) {},
});
