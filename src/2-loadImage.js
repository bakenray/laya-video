(function(){
    //初始化函数
    (function(){
        Laya.init(600,400,Laya.WebGL)
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE
        LoadImage()
    })()

    //加载图片
    function LoadImage(){
        var img =new Laya.Image('imgs/img.png')
        img.size(90,112)
        img.pos(Laya.stage.width/2,Laya.stage.height/2)
        img.pivot(img.width/2,img.height/2)
        Laya.stage.addChild(img)
    }
})()