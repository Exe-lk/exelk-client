import {db} from "@/db/firebase-cloud-dbms/db-config/firebase"
import { collection, addDoc,doc, setDoc  } from "firebase/firestore";

// Function to format the date into a string
function formatDateToID(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

const createDocument = async (collectionName,docData) => {

    // Use the current date and time as the document ID
    const myDocumentId = formatDateToID(new Date());

    try {
        // const docRef = await addDoc(collection(db, "clientRequests"), reqMsg);
        await setDoc(doc(db, collectionName, myDocumentId),docData);
        return {status:200,msg:'Successfully Submitted'}
    } catch (error) {
        console.error('Error adding document:', error);
        return {status:400,msg:'Faild to submit'}
    }
};

export default createDocument