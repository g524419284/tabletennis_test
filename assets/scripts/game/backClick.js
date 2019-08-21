cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    //视图开关
    ViewStart:function () {
        this.node.active = true;
    },
    ViewStop:function () {
        this.node.active = false;
    },
    // update (dt) {},
});
