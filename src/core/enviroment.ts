const baseUrl = 'http://localhost:8080/api/';
const clientPrefix = baseUrl + 'client/';

export function createEnv() {
  return {
    login: 'http://localhost:8080/api/v1/basicauth',

    clientPrefix,
    signIn: baseUrl + 'sign-in',
    signUp: baseUrl + 'sign-up',
    signOut: baseUrl + 'signOut',

    getClient: clientPrefix,
    getUserById: baseUrl + 'getUserById',
    setComplaint: baseUrl + 'setComplaint',
    setNotification: baseUrl + 'setNotification',
    setRequest: baseUrl + 'setRequest',
    setLesson: baseUrl + 'setLesson',
    setStudents: baseUrl + 'setStudents',
    getNotifications: baseUrl + 'getNotifications',
    getSingleNotification: baseUrl + 'getSingleNotification',
    getLessons: baseUrl + 'getLessons',
    getUsers: baseUrl + 'getUsers'
  };
}

export let environment = createEnv();
