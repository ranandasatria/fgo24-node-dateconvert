import moment from "moment";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Menggunakan package

function convertDate(){
  rl.question(`Silakan masukkan tanggal [DD-MM-YYYY]: `, (input)=>{
    try{
      const inputFormat = moment(input, "DD-MM-YYYY", true);
      if(inputFormat.isValid()){
        const changeFormat = inputFormat.format("DD/MM/YYYY");
        console.log(changeFormat);
      }else {
        throw new Error("format_salah");
      } 
    } catch (Err) {
      console.log("Masukkan tanggal sesuai format.");
    }
    rl.close();
  });
}

// Manual tanpa package
// function convertDate(){
//   rl.question(`Silakan masukkan tanggal [DD-MM-YYYY]: `, (input) => {
//     try{
//     const wadah = input.split("-")

//     if(wadah.length !== 3 || wadah[0] < "01" || wadah[0] > "31" || 
//       wadah[1] < "01" || wadah[1] > "12"){
//       const err = new Error("format_salah")
//       throw err
//     }
//     const newFormat = wadah.join("/");
//     console.log(newFormat);
//     }catch(err) {
//       if(err.message === "format_salah"){
//         console.log("Masukkan tanggal sesuai format.")
//       }
//     }
//     rl.close()
//   })
// }

convertDate()