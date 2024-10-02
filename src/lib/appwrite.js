import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66fcf9f80038392d8153');
export const account = new Account(client);
export { ID } from 'appwrite';
