const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('ini bukan hari kerja'))
            }
        }, 3000)
    })
}

//then : akan dijalankan ketika promise sudah terpenuhi
//catch : mengembalikan promise dan hanya setuju jika kasusnya gagal.
cekHariKerja('minggu')
.then((res) => console.log(res))
.catch((err) => console.log(err.message))

//try : memungkinkan untuk menentukan blok kode yang akan diuji untuk keselahan ketika sedang dieksekusi.
//catch : memungkinkan untuk menentukan blok kode yang akan dieksekusi, jika kesalahan yang terjadi pada blok try

// const hariKerja = async (day) => {
//     try {
//         const res = await cekHariKerja(day)
//         console.log(res)
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// hariKerja('minggu')




