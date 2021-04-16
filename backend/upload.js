/**
 * Quick'n Dirty script to upload a json to firebase
 * 
 * DANGER: do not upload the service-accounts folder to any repo or something
 */
// load firebase admin SDK
const admin = require('firebase-admin');

// load the service account
const serviceAccount = require('./service-accounts/firebase-admin.json');

// load file module
const fs = require('fs');

// load crypto 
const crypto = require('crypto');

// get the upload filename from the process
const fname = process.argv[2] ? process.argv[2] : '/data.json';

// initialize firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

// load the data from the given file
process.stdout.write(`Reading ${fname}...\n`);
const data = JSON.parse(fs.readFileSync(fname, 'utf8'));

// create the MD5 checksum
const md5 = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');

// start uploading
process.stdout.write(`\nCheck data:\n-----------\n`);
process.stdout.write(`type:          ${typeof data === 'object'}\n`);
process.stdout.write(`length:        ${Object.keys(data).length === 1}\n`);
process.stdout.write(`cities exist:  ${!!data.cities}\n`);
process.stdout.write(`keys:          ${Object.keys(data.cities).length}\n`);

if (typeof data !== 'object' || Object.keys(data).length !== 1) {
    process.stderr.write(`not fine.\nFuck you!\n`);
    process.exit();
}
process.stdout.write(`fine!\nchecksum:      ${md5}\n-----------\n`);

// reach out.
admin.firestore().collection('public').doc('data').get().then(doc => {
    // get the current remote
    const remoteData = doc.data();

    // verify that md5 changed
    if (remoteData.md5sum !== md5) {
        process.stdout.write(`${remoteData.md5sum} !== ${md5}\nUploading...`);

        // create upload object
        const uploadData = {
            ...data,
            lastUpdate: new Date(),
            md5sum: md5
        }
        admin.firestore().collection('public').doc('data').set(uploadData).then(() => {
            process.stdout.write('done.\n');
        });

    } else {
        // there are no changes -> exit
        process.stdout.write(`No updates since ${new Date(remoteData.lastUpdate.seconds * 1000)}.\n`);
        process.exit();
    }
});
