import moment from "moment";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Silakan masukkan tanggal [DD-MM-YYYY]: `, (input)=>{
  const inputFormat = moment(input, "DD-MM-YYYY", true);
  if(inputFormat.isValid()){
    const changeFormat = inputFormat.format("DD/MM/YYYY");
    console.log(changeFormat);
  }else{
    console.log("Format tanggal salah.");
  } 
  rl.close();
});