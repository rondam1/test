var currentTab = 0; // Current tab is set to be the first tab (0)

function tabClick(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("area-tab");
  var y = document.getElementsByClassName("tab");
  
  for (i = 0; i < 4; i++) {
  y[i].classList.remove('activeTab');}

  document.getElementById("nextBtn").innerHTML = "Next";
  
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
	  x[n].style.display = "block";
	  y[n].classList.add('activeTab');
	  currentTab = n;
	  document.getElementById("prevBtn").style.display = "none";

  } else { x[0].style.display = "none"; document.getElementById("prevBtn").style.display = "inline"; }

if (n == 1) {
	  x[n].style.display = "block";
	y[n].classList.add('activeTab');
	currentTab = n;
  } else {  x[1].style.display = "none";}

if (n == 2) {
	  x[n].style.display = "block";
	y[n].classList.add('activeTab');
	currentTab = n;
  } else {  x[2].style.display = "none";}

if (n == 3) {
	  x[n].style.display = "block";
	y[n].classList.add('activeTab');
	currentTab = n;
	document.getElementById("nextBtn").innerHTML = "Submit"; 
  } else {  x[3].style.display = "none";}

  // ... and run a function that displays the correct step indicator:

}


function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("area-tab");

  // Exit the function if any field in the current tab is invalid:

  
// Hide the current tab:
  x[currentTab].style.display = "none";

  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  
// if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("formA").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  tabClick(currentTab);
}
