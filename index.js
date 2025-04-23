import moment from "moment";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertDate(){
  rl.question(`Silakan masukkan tanggal [DD-MM-YYYY]: `, (input)=>{
    try{
      const inputFormat = moment(input, "DD-MM-YYYY", true);
      if(inputFormat.isValid()){
        const changeFormat = inputFormat.format("DD/MM/YYYY");
        console.log(changeFormat);
      }else {
        throw new Error("Format tanggal salah.");
      } 
    } catch (err) {
      console.log("Masukkan tanggal sesuai format.");
    }
    rl.close();
  });
}
convertDate();
