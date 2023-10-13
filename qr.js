const generateBtn = document.getElementById('generate');
    const downloadLink = document.getElementsByClassName('download')[0];
        

            const eData =  document.getElementById("data");
            const width =  document.getElementById('width');
            const height =  document.getElementById('height');
            const format =  document.getElementById('format');

let qrimg;

const qrGen = () => {
      
        downloadLink.style.display = "block";
      

  qrimg = "https://api.qrserver.com/v1/create-qr-code/?data=" + eData.value + "&size=" + height.value + "x" + width.value + "&format=" + format.value ;

        const imgbox = document.getElementsByClassName('imgbox')[0];
        imgbox.src = qrimg;   

      

        generateBtn.disabeled=true

        // console.log(qrimg);
        // console.log(eData.value, width.value, height.value, qrcolor.value, bgcolor.value, format.value);

    };



    const downloadClk = async() => {
      try {
        const responce = await fetch(qrimg);
        const rblob =  await responce.blob();
      
        const objUrl = window.URL.createObjectURL(rblob);
        
        downloadLink.href =   objUrl;
        downloadLink.download=`qrcode.${format.value}`
        downloadLink.click();
        window.URL.revokeObjectURL(objUrl);
        
        downloadLink.removeEventListener('click', downloadClk);

        location.reload();
      } catch (error) {
        console.error(`THI IS THE ERROR---->   ${error}`);
      }
      
    }
downloadLink.addEventListener('click', downloadClk);
generateBtn.addEventListener('click', qrGen);
