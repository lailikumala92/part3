const dataFatch = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
            data.map(nm => {
                console.log(nm.name); 
            })
        }).catch(error => {
            console.log(error);
        });
}
dataFatch();





// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/users') .then(response => {
//         console.log(response);
//         if(!response.ok) {
//             throw Error('ERROR');
//         }
//         return response.json();
//         }).then(data => {
//             console.log(data);
//             const html = data.map(user => {
//                 console.log(user.name); 
//             })
//             document.querySelector('#app').insertAdjacentHTML('afterbegin', '<p><h1>hello</h1></p>'); 
//         }).catch(error => {
//             console.log(error);
//         });
// }
// fetchData();













