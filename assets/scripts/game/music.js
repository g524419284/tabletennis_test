cc.Class({
    extends: cc.Component,

    properties: {
        MusicSlider:{
            default:null,
            type:cc.Node,
        },
        SfxSlider:{
            default:null,
            type:cc.Node,
        },
        BGM:{
            default:null,
            type:cc.Node,
        },
    },
    onload(){
        this.volume = this.BGM.getComponent(cc.AudioSource).volume;
    },
    getUrl:function(url){
        return cc.url.raw("resources/music/" + url);
    },
    playBGM(url){
        var audioUrl = this.getUrl(url);
        cc.audioEngine.playMusic(audioUrl,true);
    },
    playSFX(url){
        var audioUrl = this.getUrl(url);
        cc.audioEngine.playEffect(audioUrl,false);   
    },


    setSFXVolume(SFXprogressbar){
        cc.audioEngine.setEffectsVolume(SFXprogressbar);
    },
    setBGMVolume(BGMprogressbar){
        cc.audioEngine.setMusicVolume(BGMprogressbar);
    },



    playBtnClick:function(){
        this.setSFXVolume(this.SFXprogressbar);
        this.playSFX("MatchOne.mp3");
    },
    playCheer:function(){
        this.setSFXVolume(this.SFXprogressbar);
        this.playSFX("7Combo.mp3");
    },
    playEnterRoom:function(){
        this.setSFXVolume(this.SFXprogressbar);
        this.playSFX("EnterRoom.mp3");
    },
    playWin:function(){
        this.setSFXVolume(this.SFXprogressbar);
        this.playSFX("MatchWin.mp3");
    },
    playLose:function(){
        this.setSFXVolume(this.SFXprogressbar);
        this.playSFX("MatchFail.mp3");
    },
    playBall:function(){
        this.setSFXVolume(this.SFXprogressbar);
        this.playSFX("sfx_ball.mp3");
    },
    playCue:function(){
        this.setSFXVolume(this.SFXprogressbar);
        this.playSFX("sfx_cue.mp3");
    },
    update (dt) {
        this.SFXprogressbar = this.SfxSlider.getComponent(cc.ProgressBar).progress;
        this.BGMprogressbar = this.MusicSlider.getComponent(cc.ProgressBar).progress;
        this.setSFXVolume(this.SFXprogressbar);
        this.setBGMVolume(this.BGMprogressbar);
        this.volume = this.BGMprogressbar;
        this.BGM.getComponent(cc.AudioSource).volume = this.volume;
    },
});