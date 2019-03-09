document.getElementById("button").onclick = function keyGen(){

    console.log("clicked on button");

    var input = document.getElementById("input").value;


        
    
    //var passwordLength  = input.val();

        

            var char = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*_-?";
            var charArr = [...char];

                    console.log(charArr[chooseRandomChar]);

                        var keyGen = [];

                        for(i = 0; i <= (input - 1); i++)
                        {
                            //chooses a random character from array
                            var chooseRandomChar = Math.floor(Math.random() * charArr.length);
                            
                                keyGen.push(charArr[chooseRandomChar]);
                        }           
                                    var password = keyGen.join('');

                                    var result = document.getElementById("result").innerHTML = password
                                    
                                      

                                        //copy to clipboard
                                        document.getElementById("copy").onclick(function copyToClipboard(){

                                           alert("hello");
                                            

                                        });
                                        
}               