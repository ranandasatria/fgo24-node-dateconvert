// function sebuahProgram(kondisi){
//   if(typeof kondisi !== "boolean"){
//     console.log("Gagal, tidak sesuai kondisi");
//     return;
//   }
//   return "Program berjalan";
// }
// const result = sebuahProgram("");
// console.log(result);

// Error handling 
function sebuahProgram(kondisi){
  if(typeof kondisi !== "boolean"){    //jika yang diinput bukan tipe data boolean
    const err = new Error("tipe_data");//jadikan dia error object dengan nama "tipe_data"
    throw err;
  }
  if(!kondisi){ // jika kondisi bernilai false
    const err = new Error("false");//jadikan dia error dengan nama "false"
    throw err;
  }
  return "Program berjalan"; // kalau yang diinput true, maka return string di line ini
}

try{
  const result = sebuahProgram("aaa"); // panggil fungsi di atas
  console.log(result); // tampilkan result
}catch(x){
  console.log(x);
  if(x.message === "tipe_data"){
    console.log("Tipe data tidak sesuai");
  }
  if(x.message === "false"){
    console.log(`Parameter tidak boleh diisikan false`);
  }
}