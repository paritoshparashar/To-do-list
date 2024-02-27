export default function checkPropertyExists (obj , prop) {
    if (obj.hasOwnProperty(prop)) {
        return true;
    }
    else {
        console.log(`'${taskName}' task not found.`);
        return false;
        }
}