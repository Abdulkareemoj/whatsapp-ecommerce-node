const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '5000',   
    Meta_WA_accessToken:'EAAIGcvji9uoBAL15qjZAvE9ZAV1aRXIQCqGKwi2sL3RNNhPDCNeLTNDhSZCQJMuEzaPBp4DL22H53Sdp9ZBzbPQ5JFiTZCZBKx6hKFugpWcuIj6cs9bZCYrZC7opCP4t58eeDG1PImIGo6Ip9Q620PNZAHj2SC7m4hKlrjKoYOn8ejJMbGxXHo9hsz58nVF4HiiPFACCzFl3yOQZDZD',
    Meta_WA_SenderPhoneNumberId: '111213461904874',
    Meta_WA_wabaId: '101984142840263',
    Meta_WA_VerifyToken: 'ekzfZFccx?z0ZbbG3e-JX9?bKAdj4kQq4EgX3U6THFXial-xvCfWAp5gfLFH9a70CKERdbQw7IFw/?yrXqD=MISUDIiTXZOeX=QH9r6zNANt6?A!tBr1-/Cef0iZaZjDdx3-TEY3Qdt/ElX-eGDDO-fcEgxWXYRoR?/05Luvw/Zm1KOynMHl7Dqz=AEaDxbojk9gq8mW3w/Z4cd5-pIQCw!5puJfgbgyTnWIEMjfhf4d8scXuJsJ1pefsrNdj2',
    };

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};