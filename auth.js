const info = document.getElementById("info");

if (!("NDEFReader" in window)) {
  info.textContent = "Gunakan Chrome Android";
}

(async ()=>{
  try{
    const ndef = new NDEFReader();
    await ndef.scan();
    info.textContent = "Tempelkan kartu NFC...";

    ndef.onreading = e=>{
      let data = {};
      for(const r of e.message.records){
        if(r.recordType==="text"){
          const text = new TextDecoder(r.encoding).decode(r.data);
          text.split("\n").forEach(l=>{
            const [k,v] = l.split("=");
            if(k && v) data[k.trim()] = v.trim();
          });
        }
      }

      if(!data.ROLE){
        info.textContent = "Role tidak ditemukan";
        return;
      }

      localStorage.setItem("user", JSON.stringify(data));

      // routing role
      if(data.ROLE==="gerbang") location.href="gerbang.html";
      else if(data.ROLE==="operator") location.href="operator.html";
      else if(data.ROLE==="wali") location.href="wali.html";
      else if(data.ROLE==="guru") location.href="guru.html";
      else if(data.ROLE==="siswa") location.href="siswa.html";
      else info.textContent="Role tidak dikenali";
    };
  }catch{
    info.textContent="Gagal membaca NFC";
  }
})();
