$(document).ready(function ($) {
  
    // Sidebar Toggle
    
    $('.btn-navbar').click( function() {
	    $('html').toggleClass('expanded');
    });
    
    
    // Slide Toggles
    
    $('#section3 .button').on('click', function () {
	    
	    var section = $(this).parent();
		
		section.toggle();
	    section.siblings(".slide").slideToggle('2000', "easeInQuart");
	});
	
	$('#section3 .read-more').on('click', function () {
	    
	    var section = $(this).parent();
		
		section.toggle();
	    section.siblings(".slide").slideToggle('2000', "easeInQuart");
	});
	
	$('#section4 .article-tags li').on('click', function () {
	    
	    var section = $(this).parents('.span4');
	    var category = $(this).attr('data-blog');
	    var articles = section.siblings();
	    
	    // Change Tab BG's
	    $(this).siblings('.current').removeClass('current');
	    $(this).addClass('current');
		
		// Hide/Show other articles
	    section.siblings('.current').removeClass('current').hide();
	    
    	$(articles).each(function (index) {
	    	
	    	var newCategory = $(this).attr('data-blog');
	    	
	    	if ( newCategory == category ) {
		    	$(this).slideDown('1000', "easeInQuart").addClass('current');
	    	}
	    });

	});
	
	
		
	// Waypoints Scrolling
	
	var links = $('.navigation').find('li');
	var button = $('.intro button');
    var section = $('section');
    var mywindow = $(window);
    var htmlbody = $('html,body');

    
    section.waypoint(function (direction) {

        var datasection = $(this).attr('data-section');

        if (direction === 'down') {
            $('.navigation li[data-section="' + datasection + '"]').addClass('active').siblings().removeClass('active');
        }
        else {
        	var newsection = parseInt(datasection) - 1;
            $('.navigation li[data-section="' + newsection + '"]').addClass('active').siblings().removeClass('active');
        }

    });
    
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-section="1"]').addClass('active');
            $('.navigation li[data-section="2"]').removeClass('active');
        }
    });
    
    function goToByScroll(datasection) {
        
        if (datasection == 1) {
	        htmlbody.animate({
	            scrollTop: $('.section[data-section="' + datasection + '"]').offset().top
	        }, 500, 'easeOutQuart');
        }
        else {
	        htmlbody.animate({
	            scrollTop: $('.section[data-section="' + datasection + '"]').offset().top + 70
	        }, 500, 'easeOutQuart');
        }
        
    }

    links.click(function (e) {
        e.preventDefault();
        var datasection = $(this).attr('data-section');
        goToByScroll(datasection);
    });
    
    button.click(function (e) {
        e.preventDefault();
        var datasection = $(this).attr('data-section');
        goToByScroll(datasection);
    });
  
    // Snap to scroll (optional)
    
    /*

    section.waypoint(function (direction) {

        var nextpos = $(this).attr('data-section');
        var prevpos = $(this).prev().attr('data-section');

        if (nextpos != 1) {
	        if (direction === 'down') {
	            htmlbody.animate({
		            scrollTop: $('.section[data-section="' + nextpos + '"]').offset().top
		        }, 750, 'easeOutQuad');
	        }
	        else {
	            htmlbody.animate({
		            scrollTop: $('.section[data-section="' + prevpos + '"]').offset().top
		        }, 750, 'easeOutQuad');
	        }
        }
        

    }, { offset: '60%' });	
    
    */
   
       
    
    
    // Redirect external links
	
	$("a[rel='external']").click(function(){
		this.target = "_blank";
	}); 	
	
	
	// Modernizr SVG backup
	
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}    
	    
    

    
    


});

function submitform()
{


var name = c.contact_name.value;
var email = c.contact_email.value;
var phone = c.contact_phone.value;
var website = c.contact_website.value;
var msg = c.contact_message.value;
var s = c.su;

if(name.length!=0 && email.length!=0 && msg.length!=0)
{
s.innerHTML = "Sending...";
var http;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  http=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  http=new ActiveXObject("Microsoft.XMLHTTP");
  }
  
var url = "contact_ajax.php";
var params = "pwdsa=ashutosh&name=" + name + "&email=" + email + "&phone=" + phone + "&website=" + website + "&msg=" + msg;
http.open("POST", url, true);
//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");
http.onreadystatechange = function() {//Call a function when the state changes.
	if(http.readyState == 4 && http.status == 200) {
		
			if(http.responseText==1)
			{	
				s.style.display='none';
				name="";
				email="";
				phone="";
				website="";
				msg="";
				alert("Message Sent . I Will Reply Soon as Possible");
			}
				else
				{
				alert("Some Random Error Occured . Send a mail to webmaster@ashutoshanand.com");
				}
			
	}
  }
  
http.send(params);
}
else
alert("Please Fill Name, Email and Message");
}