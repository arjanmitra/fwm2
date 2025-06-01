import { db } from "../app/utils/firebase.ts";
import { doc, setDoc } from "firebase/firestore";

export const seedData = async () => {
    try {
        await setDoc(doc(db, 'user', 'tej'), {
            "age": '30',
            'height': '160',
            'name': 'tej',
            'weight': '130'
        })
    } catch (error) {

    }
}

seedData();
