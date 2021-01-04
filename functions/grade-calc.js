//Challenge - create a grade calculator which
// spits out the symbol based on the score and
//the totalscore

//A 90 -100 B 80 - 89 C 70 - 79 D 60 - 69 F 0-59

let gradeCalc = function(score, totalScore){
    let percent = (score/totalScore)*100
    let grade = null

    if(percent >= 90 && percent <= 100){
        grade = 'A'
    } else if(percent >= 80 && percent <= 89){
        grade = 'B'
    } else if(percent >= 70 && percent <= 79){
        grade = 'C'
    } else if(percent >= 60 && percent <= 69){
        grade = 'D'
    } else {
        grade='F'
    }

    console.log(`You got ${score} out of a maximum ${totalScore} points: You scored an ${grade}`)
}

gradeCalc(10,100)