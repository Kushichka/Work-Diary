import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const addWorkData = async (id) => {

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let daysCount = 0;
    const data = {};

    for (let i = 1; i < 32; i++) {
        if(daysCount >= 7) daysCount = 0;
        data[i] = {
            date: {
                day: days[daysCount],
                dayNumber: i
            },
            dayOff: days[daysCount] === 'saturday' || days[daysCount] === 'sunday' ? true : false,
            shift: {
                start: { 
                    hour: days[daysCount] === 'saturday' || days[daysCount] === 'sunday' ? 0 : 7,
                    minute: 0
                },
                end: {
                    hour: days[daysCount] === 'saturday' || days[daysCount] === 'sunday' ? 0 : 15, 
                    minute: 0 
                }
            },
            breaks: [
                {
                    start: {
                        hour: days[daysCount] === 'saturday' || days[daysCount] === 'sunday' ? 0 : 10,
                        minute: days[daysCount] === 'saturday' || days[daysCount] === 'sunday' ? 0 : 30 
                    },
                    end: {
                        hour: days[daysCount] === 'saturday' || days[daysCount] === 'sunday' ? 0 : 11,
                        minute: 0 
                    }
                }
            ],
            hours: { 
                hour: days[daysCount] === 'saturday' || days[daysCount] === 'sunday' ? 0 : 8,
                minute: 0 
            },
            overtime: { hour: 0, minute: 0 }
        };
        daysCount++;
    }

    await setDoc(doc(db, "usersTime", id), data);
};