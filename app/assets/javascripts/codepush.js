var CODEPUSH = (function(my){

  var url = 'https://codepush.firebaseio.com/features'
  var features = new Firebase('https://codepush.firebaseio.com/features');

  my.enableFeature = function(environment, feature, demographics, enabledCallback, disabledCallback){
    features.child(feature+"/env/"+environment).on('value', function(snapshot){
      var val = snapshot.val();
      if (!val || !val.status) {
        disabledCallback();
      } else {
        var rule = val.rule;
        if (rule == 'toggle') {
          enabledCallback();
        } else if (rule.match(/^([0-9]+)%$/)) {
          var percent = rule.match(/^([0-9]+)%$/)[1];
          var random = Math.floor(Math.random()*100);
          if (random < percent) {
            enabledCallback();
          } else {
            disabledCallback();
          }
        }
      }
    }, function() {
      disabledCallback();
    });
  };

  return my;
})(CODEPUSH || {});