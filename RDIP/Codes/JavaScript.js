englishSentences = [
	["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
	["some students like to study in the night","at night some students like to study"],
	["John and Mary went to church","Mary and John went to church"],
	["John went to church after eating","after eating John went to church","John after eating went to church"],
	["did he go to market","he did go to market"],
	["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
	["John goes to the library and studies","John studies and goes to the library"],
	["John ate an apple so did she","she ate an apple so did John"],
	["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
	["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]
]
hindiSentences = [
	["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
	["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
	["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
	["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
	["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
	["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
	["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"],
]
var words,displaySen;
function Language(lang)
{
	if(lang=="null"){
		alert('Select language');
		return;
	}
	document.getElementById("Instructions").style.display="";
	document.getElementById("btnsHolder").innerHTML = "";
	document.getElementById("reform").style.display="none";
	document.getElementById("userSentence").style.display="none";
	document.getElementById("userSentence").innerHTML = "";
	document.getElementById("check").style.display="none";
	document.getElementById("Instructions2").style.display = "none";
	document.getElementById("rightorwrong").innerHTML = "";
	document.getElementById("getanswers").innerText = "Get Correct Sentence";
	document.getElementById("getanswers").style.display = "none";
	document.getElementById("correctanswers").innerHTML = "";
	if(lang=="English"){
		var sentencesList = englishSentences;
	}
	else{
		var sentencesList = hindiSentences;
	}
		var noOfSenetences = sentencesList.length;
	displaySen = sentencesList[Math.floor(Math.random() * (noOfSenetences-1))];
	words = displaySen[0].split(' ').sort(() => Math.random() - 0.5);
	var btnsHolder = document.getElementById("btnsHolder");
	for(var i=0; i<words.length; i++){
		var wordbutton = document.createElement("button");
		wordbutton.innerText = words[i];
		wordbutton.setAttribute("class","wordbutton");
		btnsHolder.appendChild(wordbutton);
	}
	for(var i=0; i<words.length; i++){
		var wordbutton = document.getElementsByClassName('wordbutton')[i];
		wordbutton.addEventListener("click",addWordToSentence);
	}
}
function addWordToSentence(event){
	document.getElementById("Instructions2").style.display = "";
	document.getElementById("reform").style.display = "";
	document.getElementById("userSentence").style.display="";
	var clickedWord = event.target.innerText;
	event.target.parentNode.removeChild(event.target);
	var userSentence = document.getElementById("userSentence");
	userSentence.innerHTML += clickedWord+" ";
	if(document.getElementById("btnsHolder").childElementCount == 0){
		document.getElementById("check").style.display="";
	}
}
function reform(){
	document.getElementById("Instructions2").style.display = "none";
	document.getElementById("userSentence").innerHTML = "";
	document.getElementById("btnsHolder").innerHTML = "";
	document.getElementById("reform").style.display = "none";
	document.getElementById("check").style.display="none";
	document.getElementById("rightorwrong").style.display="none";
	document.getElementById("getanswers").innerText = "Get Correct Sentence";
	document.getElementById("getanswers").style.display = "none";
	document.getElementById("correctanswers").innerHTML = "";
	for(var i=0; i<words.length; i++){
		var wordbutton = document.createElement("button");
		wordbutton.innerText = words[i];
		wordbutton.setAttribute("class","wordbutton");
		btnsHolder.appendChild(wordbutton);
	}
	for(var i=0; i<words.length; i++){
		var wordbutton = document.getElementsByClassName('wordbutton')[i];
		wordbutton.addEventListener("click",addWordToSentence);
	}

}
function check(){
	var rightorwrong = document.getElementById("rightorwrong");
	var finalSentence = document.getElementById("userSentence").innerText.trim();
	document.getElementById("correctanswers").innerHTML = "";
	for(var i=0; i<displaySen.length; i++){
		if(finalSentence == displaySen[i].trim()){
			rightorwrong.style.color = "green";
			rightorwrong.style.display = "";
			rightorwrong.innerHTML = "Right answer!!!";
			return;
		}
	}
	rightorwrong.style.color = "red";
	rightorwrong.innerHTML = "Wrong answer!!!";
	rightorwrong.style.display = "";
	document.getElementById("getanswers").innerText = "Get Correct Sentence";
	document.getElementById("getanswers").style.display = "";
}
function getanswers(action){
	var correctanswers = document.getElementById("correctanswers");
	if(action=="Get Correct Sentence" || action=="Get Answers"){
		document.getElementById("getanswers").innerText = "Hide the correct Sentence";
		correctanswers.innerHTML = "";
		var len = displaySen.length;
		for(var i=0;i<len;i++){
			var line = document.createElement("li");
			line.innerHTML = displaySen[i]+"<br>";
			correctanswers.appendChild(line);
		}
	}
	else{
		document.getElementById("getanswers").innerText = "Get Answers";
		correctanswers.innerHTML="";
	}
}
