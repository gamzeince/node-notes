const fs = require("fs");
const process = require("process");

const filePath = "notes.json";



if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
}


const readFile = () => {
    try {
        const data = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        console.error("Hata: Dosya okunamadı!", err);
        return [];
    }
};


const writeFile = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    } catch (err) {
        console.error("Hata: Dosya yazılamadı!", err);
    }
};


const addNote = (content) => {
    const notes = readFile();
    const newNote = {
        id: notes.length + 1,
        content,
    };
    notes.push(newNote);

    writeFile(notes);
    console.log(`✅ Yeni not eklendi: ${newNote.id} - ${newNote.content}`);
};


const listNotes = () => {
    const notes = readFile();
    if (notes.length === 0) {
        console.log("📂 Kayıtlı not bulunamadı.");
    } else {
        notes.forEach((note) => {
            console.log(`${note.id} - ${note.content}`);
        });
    }
};



const deleteNote = (id) => {
    let notes = readFile();
    const newNotes = notes.filter((note) => note.id !== parseInt(id));

    if (notes.length === newNotes.length) {
        console.log("❌ Silinecek not bulunamadı.");
    } else {
        writeFile(newNotes);
        console.log(`🗑️ Not silindi: ID ${id}`);
    }


};




const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case "ekle":
        addNote(args.slice(1).join(" "));
        break;
    case "listele":
        listNotes();
        break;
    case "sil":
        deleteNote(args[1]);
        break;
    default:
        console.log("⚠️ Hatalı komut! Kullanılabilir komutlar: ekle, listele, sil");
        
}
