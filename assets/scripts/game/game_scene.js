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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.is_game_started = true;//游戏是否开始
        this.gamemusic = this.music.getComponent("gameMusic");
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    },
    restart_game() {
        for (var i = 0; i< this.ball_root.childrenCount;i++) {
            var b =this.ball_root.children[i];
            b.getComponent('ball').reset();//获得脚本并重置
        }
        this.white_ball.getComponent('white_ball').reset();
        this.is_game_started = true;
    },
    check_game_over () {
            //游戏普通检测
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
            this.is_game_started = false;//game_over;游戏结束
            this.scheduleOnce(this.restart_game.bind(this),5);//5秒钟之后重新开一局
    },
    checkBall_game_over () {
        //游戏检测黑8
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
        //游戏结束
            this.gamemusic.playLose();
            this.lose.active = true;
            this.scheduleOnce(function() {
             this.lose.active = false;
            }, 2);
            this.is_game_started = false;//game_over;游戏结束
            this.scheduleOnce(this.restart_game.bind(this),2);//5秒钟之后重新开一局
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
