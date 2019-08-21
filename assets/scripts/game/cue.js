
cc.Class({
    extends: cc.Component,

    properties: {
       SHOOT_POWER: 18,//合适的值就可以
       cue:{
           type:cc.Sprite,
           default:[],
       },
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        this.getComponent(cc.Sprite).spriteFrame = this.cue[Data.cueNow-1].spriteFrame;
        this.body = this.getComponent(cc.RigidBody);//获得刚体组件
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },

    // update (dt) {},
    shoot_at (dst) {
        //方向问题：
        //冲量：给这个球杆一个方向的冲量，矢量，大小，有方向。
        //方向问题：src---->dst;  也就是当前的方向指向白球的方向
        var src = this.node.getPosition();//获取当前位置
        var dir = dst.sub(src);//目标减去远点就是方向

        //大小问题：
        var cue_len_half = this.node.width * 0.5;//球杆的一半
        var len = dir.mag();//球杆中心与白球的距离
        var distance = len - cue_len_half;//球杆头与白球的距离
        var power_x = distance * this.SHOOT_POWER * dir.x / len;
        var power_y = distance * this.SHOOT_POWER * dir.y / len;
        //冲量函数，（冲量大小向量，球杆的原点转成世界坐标，true）
        this.body.applyLinearImpulse(cc.v2(power_x,power_y),this.node.convertToWorldSpaceAR(cc.v2(0,0)),true);
    },
    //碰撞回调
    onPreSolve (contact,selfCollider,otherCollider) {
        this.node.active = false;
    }
});
