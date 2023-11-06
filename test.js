const sentences = ["Hey", "Somebody once told me the world is gonna roll me", "I ain't the sharpest tool in the shed", "She was looking kind of dumb with her finger and her thumb"];

function loopThrough(ranSentences){
    let numChanged = 0;
    for (i of ranSentences){
        if(i.length > 20)
        {
            i = "Shrek";
            numChanged ++;
            console.log(i);

        }
        else{
            console.log(i);
        }
    }
    return numChanged;

}

console.log(loopThrough(sentences));


async function wpm (practice){
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        if(practice){
            resolve('I practiced every day');
        }
        else{
            reject(new Error("I slept"));
        }
       }) 
    }, 2000)
    

}

wpm(true)
    .then((good) => console.log("I reached my goal"))
    .catch((error) => console.log("I failed"))

