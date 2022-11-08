import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const getUser = async () => {
    try {
        const res = query(collection(db, "users"), where("pass", "==", "123321Lol"));
        const querySnapshot = await getDocs(res);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data().firstName);
        });

    } catch (err) {
        console.log(err);
    }
}
