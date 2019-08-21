
cc.Class({
    extends: cc.Component,

    properties: {
       table:{
           type:cc.Sprite,
           default:[],
       },
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        this.getComponent(cc.Sprite).spriteFrame = this.table[Data.tableNow-1].spriteFrame;
    },

    // start () {},
    // update (dt) {},
});
