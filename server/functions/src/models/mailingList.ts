import {QueryDocumentSnapshot} from "firebase-admin/firestore";
import db from "../config/db";
import {MailingList} from "../schema/maliinglist.model";

export class MailingListModel {
  private collection = db.collection("mailingList");

  async create(data: MailingList): Promise<MailingList> {
    const docRef = await this.collection.add(data);
    const doc = await docRef.get();
    return {id: doc.id, ...doc.data()} as MailingList;
  }

  async read(id: string): Promise<MailingList> {
    const doc = await this.collection.doc(id).get();
    return {id: doc.id, ...doc.data()} as MailingList;
  }

  async getByEmail(email: string): Promise<MailingList|null> {
    const snapshot = await this.collection.where("email", "==", email).get();
    if (snapshot.empty) {
      return null;
    }
    return {id: snapshot.docs[0].id, ...snapshot.docs[0].data()} as MailingList;
  }

  async update(id: string, data: MailingList): Promise<MailingList> {
    await this.collection.doc(id).update(data as any);
    return data;
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }

  async list(): Promise<MailingList[]> {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc: QueryDocumentSnapshot) => ({id: doc.id, ...doc.data()} as MailingList));
  }
}
