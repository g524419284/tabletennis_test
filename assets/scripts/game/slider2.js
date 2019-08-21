// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let slider = this.getComponent(cc.Slider);
        let progressbar = this.getComponent(cc.ProgressBar);

        if(slider == null || progressbar == null){
            return;
        }

        progressbar.progress = slider.progress;

        let self = this;
        slider.node.on('slide', function(event){
            progressbar.progress = slider.progress;
        }, this);

    },

    start () {

    },

    // update (dt) {},
});
