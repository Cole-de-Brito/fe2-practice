$(document).ready(function(){

  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  
  var array = [1, 2, 3, 4, 5, 6]
  for (var i = 0; i <= array.length; i++) {
    $('div').append(i);
  }
  
  var musicians = [];
  var instruments = [];
 
  
+  var musicians = [],
+      instruments = [];
+
+  $('#musicians').find('li').each(function() {
+      var musician = $(this).text();
+      musicians.push(musician);
+  });
+  
    

});