import { db } from "./server/db";

await db.user.create({
    data: {
        emojiAddress: 'test@email.com',
        firstName: 'yosuke',
        lastName: 'kimoto',
    }
});

console.log('Done');