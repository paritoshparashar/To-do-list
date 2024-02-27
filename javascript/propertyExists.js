export default function checkPropertyExists (obj , prop) {
    if (obj.hasOwnProperty(prop)) {
        return true;
    }
    else {
        console.log(`Property not found: '${taskName}'`);
        return false;
        }
}