import { promises as fs } from 'fs';

const filePath = "./hello.txt";
// Write to a file (synchronously)
async function writeFile() {
    try {
        const data = "yo";
        await fs.writeFile(filePath, data, 'utf8');
        console.log("File written.");
    } catch (err) {
        console.error("Error.", err);
    }
}

async function readFile() {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        console.log("File contents:", content);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}
// Read the file (synchronously)
async function Main() {
    await writeFile();
    console.log("async maybe");
    await readFile(); 
}

Main();