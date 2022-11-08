import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const createNewUser = async (user) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            pass: user.pass
        });

        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}