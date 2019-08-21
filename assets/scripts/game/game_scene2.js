cc.Class({
    extends: cc.Component,

    properties: {
      ball_root:{
          type: cc.Node,
          default: null
      },
      white_ball: {
          type: cc.Node,
          default: null
      },
      music: {
        type: cc.Node,
        default: null,
        },
      win: {
        type: cc.Node,
        default: null,
        },
      lose: {
        type: cc.Node,
        default: null,
        },
        label1: {
            type: cc.Node,
            default: null,
        },
        label2: {
            type: cc.Node,
            default: null,
        },
        giftwin: {
            type: cc.Node,
            default: null,
        },
        mask: {
            type: cc.Node,
            default: null,
        },
        _Checkpoint:Number,
        _cueLostNum:Number,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._Checkpoint = 1;
        this._cueLostNum = 3;
        this.CheckpointLabel = this.label1.getComponent(cc.Label).string;
        this.cuelostNumLabel = this.label2.getComponent(cc.Label).string;
        this.CheckpointLabel = this._Checkpoint;
        this.cuelostNumLabel = this._cueLostNum;
        this.gamemusic = this.music.getComponent("gameMusic");
        var manager = cc.director.getCollisionManager();
        this.gamemusic = this.music.getComponent("gameMusic");
        manager.enabled = true;
    },

    start () {
        for (var i = 0; i < this._Checkpoint; i++) {
            var b =this.ball_root.children[i];
            b.getComponent('ball2').set(this._Checkpoint);//获得脚本
        }
        this.is_game_started = true;//游戏是否开始
    },
    restart_game() {
        for (var i = 0; i< this._Checkpoint;i++) {
            var b =this.ball_root.children[i];
            b.active = false;
        }
        this._Checkpoint = 1;
        this._cueLostNum = 3;
        for (var i = 0; i< this._Checkpoint;i++) {
            var b =this.ball_root.children[i];
            b.active = false;
            b.getComponent('ball2').set(this._Checkpoint);//获得脚本并重置
        }
        this.label1.getComponent(cc.Label).string = this._Checkpoint;
        this.label2.getComponent(cc.Label).string = this._cueLostNum;
        this.white_ball.getComponent('white_ball2').reset();
        this.is_game_started = true;
    },
    check_game(){
        for (var i = 0; i < this._Checkpoint; i++) {
            var b =this.ball_root.children[i];
            if(this._cueLostNum == 1)
            {
                this.game_over();
            }
            if(b.active == true)
            {
                this._cueLostNum -= 1;
                this.label2.getComponent(cc.Label).string = this._cueLostNum;
                return;
            }
            else{
                this.check_game_over();
                return;
            }
            
            
        }
    },
    check_game_over () {
            for (var i = 0; i< this.ball_root.childrenCount;i++) {
                var b =this.ball_root.children[i];
                if (b.active === true) {//如果球还存在桌上
                    return;
                }
            }
            this.gamemusic.playWin();
            this.win.active = true;
            this.scheduleOnce(function() {
            this.win.active = false;
                }, 2);
            var giftNum = this.giftwin.getChildByName("coin").getChildByName("label");
            giftNum.getComponent(cc.Label).string = 10*this._Checkpoint;
            var Data = JSON.parse(cc.sys.localStorage.getItem('userData'));
            Data.gold += 10*this._Checkpoint;
            cc.sys.localStorage.setItem('userData', JSON.stringify(Data));
            this.giftwin.active = true;
            this.mask.active = true;
            this._Checkpoint += 1;
            this._cueLostNum = 3;
            this.label2.getComponent(cc.Label).string = this._cueLostNum;
            this.label1.getComponent(cc.Label).string = this._Checkpoint;
            this.start();
            //this.is_game_started = false;//game_over;游戏结束
        
        //this.scheduleOnce(this.restart_game.bind(this),5);//5秒钟之后重新开一局
    },
    checkBall_game_over () {
        for (var i = 0; i< this.ball_root.childrenCount;i++) {
            var b =this.ball_root.children[i];
            if (b.active === true && b.value != 8) {//如果球还存在桌上
                this.gamemusic.playLose();
                this.lose.active = true;
                    this.scheduleOnce(function() {
                    this.lose.active = false;
                        }, 2);
                this.is_game_started = false;//game_over;游戏结束
                this.scheduleOnce(this.restart_game.bind(this),2);//5秒钟之后重新开一局
                return; 
            }
        }
        this.check_game_over();
    },
    game_over () {
            this.is_game_started = false;//game_over;游戏结束
            this.gamemusic.playLose();
            this.lose.active = true;
            this.scheduleOnce(function() {
             this.lose.active = false;
            }, 2);
            this.scheduleOnce(function() {
                this.backWelcome()
               }, 2.1);
            //this.scheduleOnce(this.restart_game.bind(this),2);//5秒钟之后重新开一局
    },
    update (dt) {
        if (!this.is_game_started) {
            return;
        }
    },
    backWelcome:function(){
        cc.director.loadScene("welcome");
    },
});
