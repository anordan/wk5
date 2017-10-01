//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

    var user = window.prompt('What is your name?');
    if ( typeof user === 'string' && user !==""){
      console.log("hi" + user);
    } else {
      console.log("ok, I'll just call you user.");
    }

document.getElementById('BtnDonate').addEventListener('click', function(){
var favoriteAuthor = window.prompt('Who is your favorite author?');
switch(favoriteAuthor){
  case'Churchill':
  alert(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech ');
break;
  case'Ghandi':
  alert(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech ');
break;
  case'Demosthenes':
  alert(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech ');
  default:
  alert('Oh no!, Im not sure who that is');
}  //Code in here executes when the user clicks the "Donate" button.
});



document.getElementById('BtnChurchill').addEventListener('click', function(){
alert(' This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.');  //Code in here executes when the user clicks the "Churchill" button.

if (speechesArray[0].yearIsBCE) {
  console.log('This speech took place before the common era');
} else {
  console.log('This speech took place during the common era');
}
if (speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
  alert("This is the oldest speech on the page.");
}
else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
  alert("This is the most recent speech on the page.");
}
});


document.getElementById('BtnGhandi').addEventListener('click', function(){
alert(' This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.');  //Code in here executes when the user clicks the "Ghandi" button.

if (speechesArray[1].yearIsBCE) {
  console.log('This speech took place before the common era');
} else {
  console.log('This speech took place during the common era');
}
if (speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
  alert("This is the oldest speech on the page.");
}
else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
  alert("This is the most recent speech on the page.");
}
});


document.getElementById('BtnDemosthenes').addEventListener('click', function(){
alert(' This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.');
if (speechesArray[2].yearIsBCE) {
  console.log('This speech took place before the common era');
} else {
  console.log('This speech took place during the common era');
}
if (speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
  alert("This is the oldest speech on the page.");
}
else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
  alert("This is the most recent speech on the page.");
}
  //Code in here executes when the user clicks the "Demosthenes" button.
});
