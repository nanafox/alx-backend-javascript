import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Asynchronously handles profile signup by signing up a user and uploading a photo.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise<Array<{status: string, value: any}>>} An array of objects
 * containing the status and value of each operation. The status is either
 * 'fulfilled' or 'rejected'.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const results = await Promise.allSettled(promises);
  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
