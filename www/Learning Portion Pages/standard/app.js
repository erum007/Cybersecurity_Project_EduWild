const button = document.querySelector('.btn-primary');
const content = document.querySelector('.content');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function(){
    const speech = new SpeechSynthesisUtterance;
    speech.text='Voice activated.';
    window.speechSynthesis.speak(speech);
}
recognition.onresult = function(event){
 const current = event.resultIndex;
 const transcript = event.results[current][0].transcript;
 content.textContent = transcript;
 readOutLoud(transcript);
}
button.addEventListener('click', () =>{
recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance;
        
        if(message.includes('pay')){
            speech.text= 'Go pro to access this feature.';
        };
        if(message.includes('payment')){
            speech.text= 'Go pro to access this feature.';
        };
        if(message.includes('transaction')){
            speech.text= 'Go pro to access this feature.';
        };
        if(message.includes('virtual wallet')){
            speech.text= 'Go pro to access this feature.';
        };
        if(message.includes('wallet')){
            speech.text= 'Go pro to access this feature.';
        };
        if(message.includes('animation')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('Animation')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('animations')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('Animations')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('video')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('Video')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('videos')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('Videos')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('watch')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('Watch')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('view')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('View')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Animations.html");
        };
        if(message.includes('simulation')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('simulations')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('Simulation')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('Simulations')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('click')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('Click')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('point')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('Point')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('interact')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('interactive')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('Interact')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('Interactive')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/SImulations.html");
        };
        if(message.includes('play')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('Play')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('Bore')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('bore')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('Bored')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('bored')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('game')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('Game')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('games')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('Games')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/MiniGames.html");
        };
        if(message.includes('book')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('books')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('Book')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('Books')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('read')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('Read')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('ebook')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('ebooks')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('Ebook')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('Ebooks')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('e-book')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('e-books')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('E-book')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('E-books')){
            speech.text= 'See here.';
            window.location.replace("https://eduwildlearn.netlify.app/Plan%20My%20Trip.html");
        };
        if(message.includes('fact')){
            speech.text= 'African elephant is the largest land animal in the world.';
        };
        if(message.includes('facts')){
            speech.text= 'Riverine Rabbit is the rarest and most endangered south African species.';
        };
        if(message.includes('Fact')){
            speech.text= 'See here.';
            speech.text= 'African elephant is the largest land animal in the world.';
        };
        if(message.includes('Facts')){
            speech.text= 'Riverine Rabbit is the rarest and most endangered south African species.';
        };
        if(message.includes('random')){
            speech.text= 'African wilddog is the most endangered hunter and also the most successful hunter of the continent.';
        };
        if(message.includes('Random')){
            speech.text= 'African wilddog is the most endangered hunter and also the most successful hunter of the continent.';
        };
        if(message.includes('knowledge')){
            speech.text= 'Gold moles rank surprisingly high on the Africa wildlife endangered species list.';
        };
        if(message.includes('Knowledge')){
            speech.text= 'Gold moles rank surprisingly high on the Africa wildlife endangered species list.';
        };
        if(message.includes('wildlife')){
            speech.text= 'There are over 100000 known species of plants, animals, and fungi in South Africa.';
        };
        if(message.includes('Wildlife')){
            speech.text= 'There are over 100000 known species of plants, animals, and fungi in South Africa.';
        };
        if(message.includes('fact')){
            speech.text= 'African elephant is the largest land animal in the world.';
        };
        if(message.includes('facts')){
            speech.text= 'Riverine Rabbit is the rarest and most endangered south African species.';
        };
        if(message.includes('Fact')){
            speech.text= 'See here.';
            speech.text= 'African elephant is the largest land animal in the world.';
        };
        if(message.includes('Facts')){
            speech.text= 'Riverine Rabbit is the rarest and most endangered south African species.';
        };
        if(message.includes('random')){
            speech.text= 'African wilddog is the most endangered hunter and also the most successful hunter of the continent.';
        };
        if(message.includes('Random')){
            speech.text= 'African wilddog is the most endangered hunter and also the most successful hunter of the continent.';
        };
        if(message.includes('knowledge')){
            speech.text= 'Gold moles rank surprisingly high on the Africa wildlife endangered species list.';
        };
        if(message.includes('Knowledge')){
            speech.text= 'Gold moles rank surprisingly high on the Africa wildlife endangered species list.';
        };
        if(message.includes('wildlife')){
            speech.text= 'There are over 100000 known species of plants, animals, and fungi in South Africa.';
        };
        if(message.includes('Wildlife')){
            speech.text= 'There are over 100000 known species of plants, animals, and fungi in South Africa.';
        }
        speech.volume = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        
}
        

