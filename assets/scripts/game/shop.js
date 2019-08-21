cc.Class({
    extends: cc.Component,

    properties: {
        coin:{
            type:cc.Label,
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
        label2:{
            type:cc.Node,
            default:null,
        },
        refrash:{
            type:cc.Node,
            default:null
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {},
    buySomething:function(event, customEventData){
        this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        var refrash = this.refrash.getComponent("data");
        var thingNum = customEventData;
        var label = this.label;
        var label2 = this.label2;
        if(thingNum <= 5){
            var coinNumNow = this.Data.gold - 50;
            if(coinNumNow >= 0){
                this.Data.gold = coinNumNow;
                cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                this.coin.string = this.Data.gold;
                if(thingNum == 2)
                {
                    this.Data.tableNum2 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
                if(thingNum == 3)
                {
                    this.Data.tableNum3 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
                if(thingNum == 4)
                {
                    this.Data.tableNum4 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
                if(thingNum == 5)
                {
                    this.Data.tableNum5 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
            }
            else{
                label.active = true;
                this.scheduleOnce(function() {
                    label.active = false;
                }, 2);
            }
        }
        else{
            coinNumNow = this.Data.gold - (50*(thingNum-5));
            if(coinNumNow >= 0){
                this.Data.gold = coinNumNow;
                cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                this.coin.string = this.Data.gold;
                if(thingNum == 7)
                {
                    this.Data.cueNum2 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
                if(thingNum == 8)
                {
                    this.Data.cueNum3 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
                if(thingNum == 9)
                {
                    this.Data.cueNum4 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
                if(thingNum == 10)
                {
                    this.Data.cueNum5 = 1;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    refrash.clickShopTablePakege();
                }
            }
            else{
                label.active = true;
                this.scheduleOnce(function() {
                    label.active = false;
                }, 2);
            }
            if(thingNum > 10){
                var coinNumNow = this.Data.gold - (9*(thingNum-10));
                if(coinNumNow >= 0){
                this.Data.gold = coinNumNow;
                cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                this.coin.string = this.Data.gold;
                if(thingNum == 11)
                {
                    this.Data.star += 3;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    this.star.string = this.Data.star;
                }
                if(thingNum == 12)
                {
                    this.Data.star += 6;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
                    this.star.string = this.Data.star;
                }
                if(thingNum == 13)
                {
                    this.Data.star += 9;
                    cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));;
                    this.star.string = this.Data.star;
                }
                }
                else{
                    label2.active = true;
                    this.scheduleOnce(function() {
                        label2.active = false;
                    }, 2);
                }
            }
            
        }
    },
    // update (dt) {},
});
