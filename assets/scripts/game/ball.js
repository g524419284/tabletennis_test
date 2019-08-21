cc.Class({
    extends: cc.Component,

    properties: {
        value: 1,
        game_scene: {
            type: cc.Node,
            default: null,
        },
        music: {
            type: cc.Node,
            default: null,
        },
    },
    

    // onLoad () {},
    start () {
        //this指的就是当前的组件实例
        this.start_x = this.node.x;//球初始坐标
        this.start_y = this.node.y;
        this.body = this.getComponent(cc.RigidBody);//刚体组件
        this.gameControl = this.game_scene.getComponent("game_scene");
        this.gamemusic = this.music.getComponent("gameMusic");
    },
    reset() {
        this.node.active = true;
        this.node.x = this.start_x;
        this.node.y = this.start_y;
        //this.node.rotation = 0;//旋转设置为0
        this.body.linearVelocity = cc.v2(0,0);//线性速度设置为0
        this.body.angularVelocity = 0;//角速度设置为0    
    },
    // update (dt) {},
    onBeginContact (contact,selfCollider,otherCollider) {
        //白球有可能碰球杆，碰球，碰边，碰球袋
        //假设碰到的是球袋，也就是2
        if (otherCollider.node.groupIndex == 2) {
            this.node.active = false;//碰到球袋之后直接把这个球隐藏； 
            if(this.value == 8)
            {
                this.gameControl.checkBall_game_over();
                return
            }
            this.gamemusic.playCheer();
            this.gameControl.check_game_over();
            return; //表示处理完了
        }
        if(otherCollider.node.groupIndex == 4) {
            // 碰到球之后，播放音效； 
            this.gamemusic.playBall(); 
            return;//表示处理完了
         }
    }
});
