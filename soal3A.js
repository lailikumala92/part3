// const checkOddEven = (param) => {
//     return new Promise((resolve, reject) => {
//         if(typeof param != 'number') reject(new Error('param must be a number'))
//         if(param % 2 == 0) resolve(resolve(`${param} is an even number`))
//         else if(param % 2 == 1) reject(new Error(`${param} is an odd number`))
//     })
// }
// checkOddEven(8)
// .then((res) => console.log(res))
// .catch((err) => console.log(err.message))

// const oddEven = async (param) => {
//     try {
//         const result = await checkOddEven(param)
//         console.log(result)
//     } catch (err) {
//         console.log(err.message)
//     }
// }
// oddEven(8)


const palindrom = (text) => {
    return new Promise((resolve, reject) => {
        if(typeof text != 'string') reject(new Error('text must be a string'))
        let x = text.toLocaleLowerCase()
        for(i=0; i<x.length; i++) {
            let reverse = x[x.length -1 -i];
            if(x[i] == reverse) resolve('palindrom')
            else if(x[i] != reverse) reject(new Error('not palindrom'))    
        }
    })
}
// palindrom('malam')
// .then((res) => console.log(res))
// .catch((err) => console.log(err.message))

const checkPalindrom = async (text) => {
    try {
        const result = await palindrom(text)
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}
checkPalindrom('malam')


