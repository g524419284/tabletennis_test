cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {},
    clickCueOrtable:function(event, customEventData){
        this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        if(customEventData == 1)
        {
            this.Data.cueNow = customEventData;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 2)
        {
            this.Data.cueNow = customEventData;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 3)
        {
            this.Data.cueNow = customEventData;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 4)
        {
            this.Data.cueNow = customEventData;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 5)
        {
            this.Data.cueNow = customEventData;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 6)
        {
            this.Data.tableNow = customEventData - 5;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 7)
        {
            this.Data.tableNow = customEventData - 5;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 8)
        {
            this.Data.tableNow = customEventData - 5;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 9)
        {
            this.Data.tableNow = customEventData - 5;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
        if(customEventData == 10)
        {
            this.Data.tableNow = customEventData - 5;
            cc.sys.localStorage.setItem('userData', JSON.stringify(this.Data));
        }
    }
    // update (dt) {},
});
