let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex flex-wrap basis-full `;
   task.innerHTML = `
            <p class="flex w-1/2 justify-start items-center mr-24"> - ${title}</p>
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                  class=" flex w-1/5 border rounded border-blue-400 bg-blue-400 p-1 m-1 font-semibold">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                  class="flex w-1/5 border rounded border-red-500 bg-red-500 p-1 m-1 font-semibold">
         
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
