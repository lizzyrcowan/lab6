'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
	$('#colorBtn').click(randomizeColors);
//	$(".details")


}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	var details = $(this).closest('.details');
	
	$.get("/project/"+ idNumber,callbackFn);


	console.log("User clicked on project " + idNumber);
}
function callbackFn(result){
	console.log(result);
	var projHTML = '<img src="' + result.image + '" class ="detailsImage"></p>' + '<p>Title: ' + result.title + '</p>' + result.date + result.summary; // to get the title, image, and stuff
	$("#project" + "#projectID" + " .details").html(projHTML); // to display it

    //var projHTML = '<a href="#class" class="project">' +
    //'<img src="' + result['image'] + '"class="detailsImage">' +
     //'<p>' + result['title'] + '</p>' + '<p><small>' +
     //result['date'] + '</small><p>' + '<p>' +
     //result['summary'] + '</p></a>';
	//$("#projectID .details").html(projHTML);

 }

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}