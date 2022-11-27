import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export const getTimes = async (id) => {
    let data = {};
    try {
        const docRef = doc(db, "usersTime", id);
        const query = await getDoc(docRef);
        if (query.exists()) {
            data = query.data();
          }
          else {
            console.log("No such document!");
          }
    } catch (err) {
        console.log(err);
    }
    return data;
};