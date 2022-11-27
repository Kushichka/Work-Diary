import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getUser = async (user) => {
    let accExist = false;
    let userData = {};
    let userID = '';
    try {
        const req = query(collection(db, "users"), where("pass", "==", user.pass), where("email", "==", user.email));
        const querySnapshot = await getDocs(req);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data().firstName);
            accExist = doc ? true : false;
            userData = doc.data();
            userID = doc.id;
        });
    } catch (err) {
        console.log(err);
    }
    return {accExist, userData, userID};
}
