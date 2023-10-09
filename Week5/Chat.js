var topic1 = document.getElementById("Topic1");
var comment1 = document.getElementById("Comment1");
var comment2 = document.getElementById("Comment2");

topic1 = 0;
comment1 = 0;
comment2 = 0;

alert("Are u ready!!");
function postFunction() { 
    
    var text1 = document.getElementById("Text1").value
    if (topic1 == 0) {
        document.getElementById("Topic1").innerText = text1
        topic1 = text1
        alert("wait...");
    }
    else if (comment1 == 0) {
        document.getElementById("Comment1").innerText = text1
        comment1 = text1
       alert("please somone!");
    }
    else if (comment2 == 0) {
        document.getElementById("Comment2").innerText = text1
        comment2 = text1
        alert("Let's stop comment.");
    }
}

function clearFunction() { 
    alert("ClearAll!!!");
    topic1 = 0;
    comment1 = 0;
    comment2 = 0;
    document.getElementById("Topic1").innerText = "";
    document.getElementById("Comment1").innerText = "";
    document.getElementById("Comment2").innerText = "";
    document.getElementById("Text1").value = "";
}


