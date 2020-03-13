function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}
  
 
function sayHiToGrandma(string){
  var String = string;
  if (String.toLowerCase() === string){
    console.log("I can't hear you!")
  } else if (String.toUpperCase() === string){
    console.log("YES INDEED!")
  } else if(String === "I love you, Grandma"){
    console.log("I love you, too")
  }
}

