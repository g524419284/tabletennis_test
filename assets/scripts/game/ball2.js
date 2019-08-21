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
    

    onLoad () {
        //this指的就是当前的组件实例
        this.body = this.getComponent(cc.RigidBody);//刚体组件
        this.gameControl = this.game_scene.getComponent("game_scene2");
        this.gamemusic = this.music.getComponent("gameMusic");
    },
    //start () {},
    getRandomPosInRect: function(point, width, height) {
        //随机生成坐标
        var minX = point.x - (width*5);
        var maxX = point.x + (width*5);
        var x = Math.random() * (maxX - minX + 1) + minX;
        var minY = point.y - (height*5);
        var maxY = point.y + (height*5);
        var y = Math.random() * (maxY - minY + 1) + minY;
        return new cc.Vec2(x, y);
    },
    set(num) {
        //设置初始坐标
        if(num == 1)
        {
            this.node.setPosition(-138.4,65.2);
            this.start_x = this.node.x;
            this.start_y = this.node.y;
            this.node.active = true;
            return;
        }
        this.node.setPosition(-2,159);
        this.node.setPosition(this.getRandomPosInRect(this.node,20,20));
        this.start_x = this.node.x;
        this.start_y = this.node.y;
        this.node.active = true;
    },
    reset() {
        //恢复初始设置
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
            this.gamemusic.playCheer();
            //this.gameControl.check_game_over();
            return; //表示处理完了
        }
        if(otherCollider.node.groupIndex == 4) {
            // 碰到球之后； 
            this.gamemusic.playBall(); 
            return;//表示处理完了
         }
    }
});
