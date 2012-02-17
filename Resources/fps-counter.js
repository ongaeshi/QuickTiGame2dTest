//
// @brief
// @author ongaeshi
// @date   2012/02/18

var mFrameCount = 0;
var mNow = +new Date();

exports.update = function(label) {
  mFrameCount++;
  
  if (+new Date() - mNow > 5000) {
    var fps = mFrameCount / 5.0;

    label.text = fps + " FPS";
    mFrameCount = 0;
    mNow = +new Date();
  }
}


