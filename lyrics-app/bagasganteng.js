
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b87b47a802mshd934b3a16af03cap178f94jsn1d3b4bb446b6',
		'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
	}
};

fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/2396871/lyrics', options)
	.then(response => response.json())
	.then(data =>{
        let output ='';
        data.data.map(item =>{
            output += `
            <p>${song_id}</p>
            `
        })
        document.querySelector('.job').innerHTML = output;
    })
	.catch(err => console.error(err));

    

// const search = document.getElementById("search");
// const btn = document.querySelector('button');

// let params = ''
// const callParams = () => {
//     params = search.value
//     fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/download?track=${params}`, options)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         console.log(data)
//         // .then(data => {
//         //     console.log(data)
//         //     let output = '';
//             // data.data.map(item => {
//             //     output += `
//             //         <h1>${item.job_title}</h1>
//             //         <p>${item.job_description}</p>
//             //         <p>${item.employer_name}</p>
//             //         <p>${item.job_city} ${item.job_country}</p>
//             //         <video src="${url}" controls></video>
//             //         `;

            
//         //     document.querySelector('.job').innerHTML = output;
//         // })
//         .catch(err => console.error(err));
//     userInput.value = '';
// }


// btn.addEventListener('click', callParams)