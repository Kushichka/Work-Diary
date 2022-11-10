import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getUser = async (data) => {
    let res = false;
    try {
        const req = query(collection(db, "users"), where("pass", "==", data.pass), where("email", "==", data.email));
        const querySnapshot = await getDocs(req);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data().firstName);
            res = doc ? true : false;
        });
    } catch (err) {
        console.log(err);
    }
    return res;
}
