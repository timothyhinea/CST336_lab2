$(document).ready(function(){
    
    //global variables
    var score = 0;
    var attempts = localStorage.getItem("total_attempts");
    
    //event listeners
    $("button").on("click", gradeQuiz);
    
    //Question 5 images
    $(".q5Choice").on("click", function(){
        $(".q5Choice").css("background","");
        $(this).css("background-color","rgb(255,255,0)");
    })
      //Question 10 images
    $(".q10Choice").on("click", function(){
        $(".q10Choice").css("background","");
        $(this).css("background-color","rgb(255,255,0)");
    })
    
    displayQ4Choices();
    displayQ9Choices();

    //Functions
    function displayQ4Choices(){
        let q4ChoicesArray = ["Maine","Rhode Island", "Maryland", "Delaware"];
        q4ChoicesArray = _.shuffle(q4ChoicesArray)
        
        
        for(let i = 0; i < q4ChoicesArray.length; i++){
            $("#q4Choices").append(` <input type="radio" name="q4" 
            id="${q4ChoicesArray[i]}" value="${q4ChoicesArray[i]}"> 
            <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`);
        }
    }
    
    function displayQ9Choices(){
        let q9ChoicesArray = ["Texas","Alaska", "California", "Montana"];
        q9ChoicesArray = _.shuffle(q9ChoicesArray)
        
        
        for(let i = 0; i < q9ChoicesArray.length; i++){
            $("#q9Choices").append(` <input type="radio" name="q9" 
            id="${q9ChoicesArray[i]}" value="${q9ChoicesArray[i]}"> 
            <label for="${q9ChoicesArray[i]}"> ${q9ChoicesArray[i]}</label>`);
        }
    }

    function isFormValid() {
		let isValid = true;
		
		for(var i = 0; i < 10; i++)
		{

			console.log(i)
			if($("#q" + i).val() == "") {
				isValid = false;
				$("#validationFdbk").html(`Question ${i} was not ansered`);
		}
		}
		return isValid;
    }
    
    function rightAnswer(index) {
		$(`#q${index}Feedback`).html("Correct!");
		$(`#q${index}Feedback`).attr("class", "bg-success text-white");
		$(`#markImg${index}`).html("<img src='img/checkmark.png' alt='checkmark'>");
		score += 10;
	}
	
	function wrongAnswer(index) {
		$(`#q${index}Feedback`).html("Incorrect!");
		$(`#q${index}Feedback`).attr("class", "bg-warning text-white");
		$(`#markImg${index}`).html("<img src='img/xmark.png' alt='xmark'>");
	}
		
	function gradeQuiz(){
	    $("#validationFdbk").html("");//Resets validation feedback
	    if(!isFormValid()){
	        retrun;
	    }
	    
	    //variables
	    score = 0;
	    let q1Response = $("#q1").val().toLowerCase();
	    let q6Response = $("#q6").val().toLowerCase();
	    let q2Response = $("#q2").val();
	    let q7Response = $("#q7").val();
	    let q4Response = $("input[name=q4]:checked").val();
	    let q9Response = $("input[name=q9]:checked").val();
	    //Question 1
	    if(q1Response == "sacramento"){
	        rightAnswer(1);
	    }else{
	        wrongAnswer(1);
	    }
	    
	    //Question 2
	    if(q2Response == "mo"){
	        rightAnswer(2);
	    }else{
	        wrongAnswer(2);
	    }
	    
	    
	    //Question 3
	    if($("#Jefferson").is(":checked") && 
			$("#Roosevelt").is(":checked") && 
			!$("#Jackson").is(":checked") && 
			!$("#Franklin").is(":checked")) {
				rightAnswer(3);
			} else { // Question 3: Incorrect
				wrongAnswer(3);
			}
		
		//question 4
		if(q4Response == "Rhode Island"){
		    rightAnswer(4);
		}else{
		    wrongAnswer(4);
		}

		//question 5
		if($("#seal2").css("background-color") == "rgb(255, 255, 0)"){
		    rightAnswer(5);
		}else{
		    wrongAnswer(5);
		}
		
		//Question 6
	    if(q6Response == "nashville"){
	        rightAnswer(6);
	    }else{
	        wrongAnswer(6);
	    }
	    
	    //Question 7
	    if(q7Response == "ca"){
	        rightAnswer(7);
	    }else{
	        wrongAnswer(7);
	    }
	    
	    
	    //Question 8
	    if($("#Wilson").is(":checked") && 
			$("#Roosevelt2").is(":checked") && 
			!$("#Jackson2").is(":checked") && 
			!$("#Franklin2").is(":checked")) {
				rightAnswer(8);
			} else { // Question 3: Incorrect
				wrongAnswer(8);
			}
		
		//question 9
		if(q9Response == "Alaska"){
		    rightAnswer(9);
		}else{
		    wrongAnswer(9);
		}

		//question 10
		if($("#seal6").css("background-color") == "rgb(255, 255, 0)"){
		    rightAnswer(10);
		}else{
		    wrongAnswer(10);
		}
		//Score Display
		if(score >=80){
		 $("#totalScore").html(`Total S  core: ${score} Congradulations!`);
		 $("#totalScore").css('color', 'green');	
		}else{
			$("#totalScore").html(`Total Score: ${score}`);
			$("#totalScore").css('color', 'red');	
		}
        $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
        localStorage.setItem("total_attempts", attempts);
	}
	   
    });