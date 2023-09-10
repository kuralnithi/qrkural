const generateBtn = document.getElementById('generate');
const downloadLink = document.getElementsByClassName('download')[0];
    

        const eData =  document.getElementById('data');
        const width =  document.getElementById('width');
        const height =  document.getElementById('height');
        const qrcolor =  document.getElementById('qr-color');
        const bgcolor =  document.getElementById('bg-color');
        const format =  document.getElementById('format');

const qrGen =  () => {
    
    const qrimg = "https://api.qrserver.com/v1/create-qr-code/?data=" + eData.value +"&size=" + height.value +"x"+ width.value + "&format=" + format.value + "&color=" + qrcolor.value + "&bgcolor="+ bgcolor.value ;

  const imgbox = document.getElementsByClassName('imgbox')[0];
  imgbox.src = qrimg;   
    downloadLink.href =  qrimg ;
    
    downloadLink.download = `qrcode.${format.value}`;
    downloadLink.style.display = "block";
    console.log(qrimg);
    console.log(eData.value, width.value, height.value, qrcolor.value, bgcolor.value, format.value);
};

const downloadClk = () => {
  downloadLink.href.click();
  console.log(downloadLink.click());
}
