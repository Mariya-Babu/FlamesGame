function showLoading() {
    // Hide the result initially
    document.getElementById("result").textContent = "";
    document.querySelector(".result").style.display = "none";

    // Show the loading spinner
    document.getElementById("loading").style.display = "block";

    // Wait for 3 seconds before calculating the result
    setTimeout(calculateFLAMES, 3000);
}


function calculateFLAMES() {
    const name1 = document.getElementById("name1").value.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const name2 = document.getElementById("name2").value.toLowerCase().replace(/[^a-zA-Z]/g, '');

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    const count = getRemainingCount(name1, name2);
    console.log(count);
    const result = getFLAMESResult(count);

    // Hide the loading spinner
    document.getElementById("loading").style.display = "none";

    // Show the result after 3 seconds
    document.getElementById("result").textContent = result;
    document.querySelector(".result").style.display = "block";
}

function getRemainingCount(name1, name2) {
    let copyname1 = name1;
    for(let ch of copyname1){
        if(name2.includes(ch)){
            name1 = name1.replace(ch,"");
            name2 = name2.replace(ch,"");
        }
    }

    return name1.length + name2.length;
}

function getFLAMESResult(count) {
    const flames = ["Friends...👫", "Love...❤️", "Affection...😊", "Marriage...💍", "Enemy...👿", "Siblings...👭"];
    let index = 0;

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    return flames[0];
}
