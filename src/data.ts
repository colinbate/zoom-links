import { shortId } from "./id";
import { durablePair, durableWritable } from "./durable-store";
import type { Contact, User } from "./types";

const ALL_USERS = 'ALL_USERS';
const CONTACT_SUFFIX = '-CONTACTS';

const [users, setUsers] = durablePair<User[]>(ALL_USERS, []);

export { users };

export async function createUser(name: string) {
  const user: User = {
    id: shortId(),
    name
  };
  setUsers.update((old) => old ? [...old, user] : [user]);
}

export function getContacts(user: User) {
  const contactsKey = `${user.id}${CONTACT_SUFFIX}`;
  const contacts = durableWritable<Contact[]>(contactsKey, []);
  return contacts;
}