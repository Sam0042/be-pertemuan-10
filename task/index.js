/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  }
  
  /**
   * Fungsi untuk download file
   * @param {function} callback - Function callback show
   */
  const download = (callShowDownload) => {
    return new Promise((resolve, reject) => {
        const result = "windows-10.exe";
        setTimeout(() => {
            if(callShowDownload){
                resolve(callShowDownload(result));
            }
            else{
                reject("Download Gagal");
            }
        },3000)
    })
  }

  const main = async () => {
    try{
        return(await download(showDownload))
    }
    catch (error) {
        console.log(error)
    }
  }

  main()

  /**
   * TODO:
   * - Refactor callback ke Promise atau Async Await (DONE)
   * - Refactor function ke ES6 Arrow Function (DONE)
   * - Refactor string ke ES6 Template Literals (DONE)
   */