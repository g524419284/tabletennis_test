cc.Class({
    extends: cc.Component,

    properties: {
       
        cue: {
            type: cc.Node,
            default: null,
        },
        progressBar: {
            type: cc.Node,
            default: null,
        },
        music: {
            type: cc.Node,
            default: null,
        },
        timeToplay: {
            type: cc.Node,
            default: null,
        },
        stop: {
            type: cc.Node,
            default: null,
        },
        ball_root:{
            type: cc.Node,
            default: null
        },
        game_scene: {
            type: cc.Node,
            default: null,
        },
        //moveSprite: cc.Sprite,
        trackLayout: cc.Layout,
        min_dis: 20,
        max_dis: 500, // 如果拖动的距离到白球的中心 < 这个距离，那么我们就隐藏球杆，否者的话，显示球杆;
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.startPos = cc.v2(0, 0);  //开始位置
        this.endPos = cc.v2(0, 0);    //结束位置
        this.trackSprites = [];      //装轨迹点
        this.j = 0;
        //轨迹不显示
        this.gameControl = this.game_scene.getComponent("game_scene2");
        this.trackLayout.node.active = false;
        this.pro = this.progressBar.getComponent(cc.ProgressBar);
        this.gamemusic = this.music.getComponent("gameMusic");
        this.Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.ballIsStatic = true;
    },
    drawTrack: function () {
            var pro = this.len/this.max_dis;
            this.pro.progress = pro;
            var i ;
            this.startPos = this.node.getPosition();
            this.endPos = this.dst;
            this.trackLayout.node.active = true;
            this.trackLayout.node.setPosition(this.startPos);
            let distance = this.len;
            //获得轨迹点
            this.trackSprite = this.trackLayout.node.getChildByName("trackSprite");
            //轨迹点数量
            let trackNum = Math.floor( distance / (this.trackSprite.width + this.trackLayout.spacingX));
            if( this.j <= 5*this.Data.cueNow){
            for ( i = 1; i < trackNum; i++)
                {
                    //克隆轨迹点
                    let trackSpriteTemplate = cc.instantiate(this.trackSprite);
                    this.trackLayout.node.addChild(trackSpriteTemplate);
                    this.trackSprites.push(trackSpriteTemplate);
                    this.j += 1;
                }
            }
            //向量差计算,结束点-开始点，向量的指向是朝着结束点
            var posSub = this.endPos.sub(this.startPos);
            //向量的角度计算，cc.pToAngle是获得弧度值，角度 = 弧度/PI*180
            var angle = Math.atan2(posSub.y,posSub.x) * 180/ Math.PI ;
            angle = 180 - angle;//编辑器和数学上旋转的角度不一样
            //rotation 是逆时针旋转的，在角度添加负号才正确
            this.trackLayout.node.rotation = angle;
    },
    start () {
        this.body = this.getComponent(cc.RigidBody);//获得刚体组件
        this.cue_inst = this.cue.getComponent("cue");
        this.start_x = this.node.x;
        this.start_y = this.node.y;

        // START(点击下去), MOVED（触摸移动）, ENDED(触摸在节点范围内弹起), CANCEL（节点范围外弹起）
        this.node.on(cc.Node.EventType.TOUCH_START, function(e) {

        }.bind(this), this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
            if(this.ballIsStatic == true && this.timeToplay.active == false){
            var w_pos = e.getLocation();//获得触摸位置
            var dst = this.node.parent.convertToNodeSpaceAR(w_pos);//白球位置转局部坐标
            this.dst = dst;
            var src = this.node.getPosition();//src就是台球的位置
            var dir = dst.sub(src);//方向就是目标点减去原点向量
            var len = dir.mag();//求这个向量的长度，又叫求模
            this.len = len;
            this.trackLayout.node.active = true;
            //小于这个距离不显示球杆
            if (len < this.min_dis) {
                this.cue.active = false; // 设置球杆为隐藏;
                //this.removeTrackSprites();
                this.trackLayout.node.active = false;
                //this.j = 0;
                return;
            }
            if (len > this.max_dis) {
                this.cue.active = false; // 设置球杆为隐藏;
                //this.removeTrackSprites();
                this.trackLayout.node.active = false;
                return;
            }

            this.cue.active = true;

            var r = Math.atan2(dir.y, dir.x);//弧度
            var degree = r * 180 / Math.PI;//度，弧度转成度
            degree = 360 - degree;//编辑器和数学上旋转的角度不一样
            
            this.cue.rotation = degree + 180; //球杆的旋转，为了不让球杆的头太大，所以还要再调个方向

            var cue_pos = dst;//球杆的位置等于触摸的位置
            var cue_len_half = this.cue.width * 0.5;//移动球杆的一半
            cue_pos.x += (cue_len_half * dir.x / len);
            cue_pos.y += (cue_len_half * dir.y / len);
            this.cue.setPosition(cue_pos);
            this.drawTrack();
            }
            else{
                this.stop.active = true;
                this.scheduleOnce(function(){
                    this.stop.active = false  
                },1);
            }
        }.bind(this), this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(e) {//如果没有显示表示没有发杆，否则的话就调用cue.js的代码
            if(this.cue.active === false) {
                return;
            }
            this.cue_inst.shoot_at(this.node.getPosition());
            this.gamemusic.playCue();
            this.removeTrackSprites();
            this.j = 0;
        }.bind(this), this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {//如果没有显示表示没有发杆，否则的话就调用cue.js的代码
            if(this.cue.active === false) {
                return;
            }
            this.cue_inst.shoot_at(this.node.getPosition());//发射球杆
            this.gamemusic.playCue();
            this.removeTrackSprites();
            this.j = 0;
        }.bind(this), this);
    },

    reset: function() {
         //初始化白球
        this.node.scale = 1.6;
        this.node.x = this.start_x;
        this.node.y = this.start_y;

        this.body.linearVelocity = cc.v2(0, 0);//线性速度设置为0
        this.body.angularVelocity = 0;//角速度设置为0   
    },
    checkBall:function(dt){
        if(this.gameControl.is_game_started == false)
        {
            this.ballIsStatic = true;
            this.unschedule(this.checkBall);
            return;
        }
        if(this.ballX == Math.round(this.node.x) && this.ballY == Math.round(this.node.y))
        {
            this.ballIsStatic = true;
            this.gameControl.check_game();
            this.timeToplay.active = true;
            this.scheduleOnce(function(){
                this.timeToplay.active = false;  
            },1.5);
            this.unschedule(this.checkBall);
        }
        else{
            this.ballIsStatic = false;
            this.ballX = Math.round(this.node.x);
            this.ballY = Math.round(this.node.y);
        }
        
    },
    onBeginContact: function(contact, selfCollider, otherCollider) {
        // 白球有可能，碰球杆，碰球，碰边,球袋
        //假设碰到的是球袋，也就是2
        if(this.gameControl.is_game_started == true)
        {this.schedule(this.checkBall,1);}
        if(otherCollider.node.groupIndex == 2) {
           // 隔1秒一种，要把白球放回原处;
           this.node.scale = 0;
           this.gameControl.game_over();
           //this.scheduleOnce(this.reset.bind(this), 1);
           return;//表示处理完了
        }
        if(otherCollider.node.groupIndex == 4) {
            // 隔1秒一种，要把白球放回原处;
            this.gamemusic.playBall(); 
            return;//表示处理完了
         }
    },
    //移除轨迹点
    removeTrackSprites: function () {
        for (var i = 0; i < this.trackSprites.length; i++ ) {
            let trackSprite = this.trackSprites[i];
            if (trackSprite) {
                trackSprite.removeFromParent();
            }
        }
        //this.trackLayout.node.active = false;
    }
    // update (dt) {},
});
