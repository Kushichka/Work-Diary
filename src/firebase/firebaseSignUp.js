import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const createNewUser = async (user) => {
    let errorMsg = '';
    let docExist = false;

    try {
        const req = query(collection(db, "users"), where("email", "==", user.email));
        const querySnapshot = await getDocs(req);
        querySnapshot.forEach((doc) => {
            docExist = doc ? true : false;
        });

        if(!docExist) {
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    pass: user.pass,
                    status: 'user'
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        } else errorMsg = docExist ? 'Choose another email' : '';
    } catch (error) {
        console.error(error);
    }
    return errorMsg;
}