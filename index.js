import moment from "moment"
import readline from "readline"

// minitask
// - Membuat program interaktif bernama "convert tanggal" untuk mengubah input tanggal 24-04-2015
// menjadi 24/04/2015 menggunakan package moment
// - Jika input user tidak sesuai format. maka outputkan pesan "Format tanggal salah"
// - Membuat padanan program tanpa external package, tapi dengan menggunakan alur sendiri

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Silakan masukkan tanggal [DD-MM-YYYY]: `, (input)=>{
    const inputFormat = moment(input, "DD-MM-YYYY", true)
    if(inputFormat.isValid()){
        const changeFormat = inputFormat.format("DD/MM/YYYY")
        console.log(changeFormat)
    }else{
        console.log("Format tanggal salah.")
    }
    
rl.close()
})


