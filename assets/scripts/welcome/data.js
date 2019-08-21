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
        cueContent:{
            type:cc.Node,
            default:null,
        },
        tableContent:{
            type:cc.Node,
            default:null,
        },
        shopTableContent:{
            type:cc.Node,
            default:null,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        this.coin.string = this.Data.gold;
        this.star.string = this.Data.star;
    },

    // start () {},
    clickCuePakege:function(){
        this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
       if(this.Data.cueNum1 == 0)
        { 
            var use = this.cueContent.getChildByName("1").getChildByName("use_1");
            var none = this.cueContent.getChildByName("1").getChildByName("race-table");
            use.active = false;
            none.active = true;
        }
        else
        {
            var use = this.cueContent.getChildByName("1").getChildByName("use_1");
            var none = this.cueContent.getChildByName("1").getChildByName("race-table");
            use.active = true;
            none.active = false;
        }
        if(this.Data.cueNum2 == 0)
        { 
            var use = this.cueContent.getChildByName("2").getChildByName("use_1");
            var none = this.cueContent.getChildByName("2").getChildByName("race-table");
            use.active = false;
            none.active = true;
        }
        else
        {
            var use = this.cueContent.getChildByName("2").getChildByName("use_1");
            var none = this.cueContent.getChildByName("2").getChildByName("race-table");
            use.active = true;
            none.active = false;
        }
        if(this.Data.cueNum3 == 0)
        { 
            var use = this.cueContent.getChildByName("3").getChildByName("use_1");
            var none = this.cueContent.getChildByName("3").getChildByName("race-table");
            use.active = false;
            none.active = true;
        }
        else
        {
            var use = this.cueContent.getChildByName("3").getChildByName("use_1");
            var none = this.cueContent.getChildByName("3").getChildByName("race-table");
            use.active = true;
            none.active = false;
        }
        if(this.Data.cueNum4 == 0)
        { 
            var use = this.cueContent.getChildByName("4").getChildByName("use_1");
            var none = this.cueContent.getChildByName("4").getChildByName("race-table");
            use.active = false;
            none.active = true;
        }
        else
        {
            var use = this.cueContent.getChildByName("4").getChildByName("use_1");
            var none = this.cueContent.getChildByName("4").getChildByName("race-table");
            use.active = true;
            none.active = false;
        }
        if(this.Data.cueNum5 == 0)
        { 
            var use = this.cueContent.getChildByName("5").getChildByName("use_1");
            var none = this.cueContent.getChildByName("5").getChildByName("race-table");
            use.active = false;
            none.active = true;
        }
        else
        {
            var use = this.cueContent.getChildByName("5").getChildByName("use_1");
            var none = this.cueContent.getChildByName("5").getChildByName("race-table");
            use.active = true;
            none.active = false;
        }
    },
    clickTablePakege:function(){
        this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        if(this.Data.tableNum1 == 0)
         { 
             var use = this.tableContent.getChildByName("1").getChildByName("use_1");
             var none = this.tableContent.getChildByName("1").getChildByName("race-table");
             use.active = false;
             none.active = true;
             
         }
         else
         {
             var use = this.tableContent.getChildByName("1").getChildByName("use_1");
             var none = this.tableContent.getChildByName("1").getChildByName("race-table");
             use.active = true;
             none.active = false;
         }
         if(this.Data.tableNum2 == 0)
         { 
             var use = this.tableContent.getChildByName("2").getChildByName("use_1");
             var none = this.tableContent.getChildByName("2").getChildByName("race-table");
             use.active = false;
             none.active = true;
         }
         else
         {
             var use = this.tableContent.getChildByName("2").getChildByName("use_1");
             var none = this.tableContent.getChildByName("2").getChildByName("race-table");
             use.active = true;
             none.active = false;
         }
         if(this.Data.tableNum3 == 0)
         { 
             var use = this.tableContent.getChildByName("3").getChildByName("use_1");
             var none = this.tableContent.getChildByName("3").getChildByName("race-table");
             use.active = false;
             none.active = true;
         }
         else
         {
             var use = this.tableContent.getChildByName("3").getChildByName("use_1");
             var none = this.tableContent.getChildByName("3").getChildByName("race-table");
             use.active = true;
             none.active = false;
         }
         if(this.Data.tableNum4 == 0)
         { 
             var use = this.tableContent.getChildByName("4").getChildByName("use_1");
             var none = this.tableContent.getChildByName("4").getChildByName("race-table");
             use.active = false;
             none.active = true;
         }
         else
         {
             var use = this.tableContent.getChildByName("4").getChildByName("use_1");
             var none = this.tableContent.getChildByName("4").getChildByName("race-table");
             use.active = true;
             none.active = false;
         }
         if(this.Data.tableNum5 == 0)
         { 
             var use = this.tableContent.getChildByName("5").getChildByName("use_1");
             var none = this.tableContent.getChildByName("5").getChildByName("race-table");
             use.active = false;
             none.active = true;
         }
         else
         {
             var use = this.tableContent.getChildByName("5").getChildByName("use_1");
             var none = this.tableContent.getChildByName("5").getChildByName("race-table");
             use.active = true;
             none.active = false;
         }
     },
     clickShopTablePakege:function(){
        this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        if(this.Data.tableNum1 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("1").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("1").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("1").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("1").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("1").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("1").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.tableNum2 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("2").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("2").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("2").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("2").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("2").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("2").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.tableNum3 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("3").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("3").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("3").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("3").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("3").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("3").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.tableNum4 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("4").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("4").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("4").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("4").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("4").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("4").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.tableNum5 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("5").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("5").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("5").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("5").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("5").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("5").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.cueNum1 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("6").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("6").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("6").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("6").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("6").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("6").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.cueNum2 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("7").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("7").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("7").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("7").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("7").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("7").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.cueNum3 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("8").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("8").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("8").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("8").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("8").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("8").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.cueNum4 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("9").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("9").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("9").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("9").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("9").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("9").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
         if(this.Data.cueNum5 == 0)
        { 
            var use1 = this.shopTableContent.getChildByName("10").getChildByName("use_1");
            var none1 = this.shopTableContent.getChildByName("10").getChildByName("race-table");
            var buy = this.shopTableContent.getChildByName("10").getChildByName("coinBg");
            buy.active = true;
            use1.active = false;
            none1.active = true;
        }
        else
         {
             var use1 = this.shopTableContent.getChildByName("10").getChildByName("use_1");
             var none1 = this.shopTableContent.getChildByName("10").getChildByName("race-table");
             var buy = this.shopTableContent.getChildByName("10").getChildByName("coinBg");
             buy.active = false;
             use1.active = true;
             none1.active = false;
         }
     },
    update (dt) {
        //this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
    },
});
