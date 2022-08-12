function checkAnswers(animal){
        user_input = document.getElementById(animal+'_input');


        input_string = user_input.value;
        if (input_string.length > 0){
                if (input_string.toLowerCase() === animal){
                        document.getElementById(animal+'_answer').innerHTML = "Correct!";
                }
                else{
                        document.getElementById(animal+'_answer').innerHTML = "Try Again!";
                }
        }

}


