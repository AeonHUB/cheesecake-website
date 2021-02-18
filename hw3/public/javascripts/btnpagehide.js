eventHandler = function( event ) {
    const btn = document.querySelector('#btn');
    
    $(document).ready(function(){
      $("button").click(function(){
        const rbs = document.querySelectorAll('input[name="type"]');
	
  	let selectedValue;
	
	for(const rb of rbs){
	  if (rb.checked){
	    selectedValue = rb.value;
	    break;
	  }
	}
	
	$("p").hide();
        $("label").hide();
	$("form").hide();
	$("table").hide();
	var not = $.trim($("#notes").val());
	if(not == "vegan"){
	  alert("Cheesecakes contain Dairy!");
	} else {
        alert("Thank you! Your Order Has Been Placed:\n" + " " + $("#qwe").val() + " " + selectedValue + " cheesecake" );
	}
      }
      $("dropbtn")
    }
$(function() {     
  $("button").click(eventHandler); 
});
