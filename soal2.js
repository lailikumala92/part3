
const getmonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        if(!error) {
            callback(null,month) 
        } else {
            callback(new Error('Sorry data not found', []))
        }
    },4000)
}
getmonth((callback, param) => {
        let checkMonth = param.map(item => item)
        console.log(checkMonth);
});

