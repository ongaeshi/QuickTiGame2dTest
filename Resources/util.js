//
// @brief
// @author ongaeshi
// @date   2012/02/18

exports.createLabel = function () {
  return Titanium.UI.createLabel({
    color:'black',
    backgroundColor:'white',
    text:'0.0 FPS',
    font:{fontSize:20,fontFamily:'Helvetica Neue'},
    textAlign:'center',
    width:'auto',
    height:'auto',
    top: 0,
    left: 0
  });
}
