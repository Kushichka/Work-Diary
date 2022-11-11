
export const formInputHandler = (e, pass = '') => {
    let error = '';

    switch (e.target.name) {
        case 'firstName':
            if (e.target.value.length < 3 || e.target.value.length > 24) {
                error = 'Wrong length! (3 - 24)';
                if (!e.target.value) error = 'Field cannot be empty!';
            }
            break;
        case 'lastName':
            if (e.target.value.length < 3 || e.target.value.length > 24) {
                error = 'Wrong length! (3 - 24)';
                if (!e.target.value) error = 'Field cannot be empty!';
            }
            break;
        case 'email':
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(e.target.value).toLowerCase())) {
                error = 'Wrong email format!';
                if (!e.target.value) error = 'Field cannot be empty!';
            }
            break;
        case 'pass':
            if (e.target.value.length < 6 || e.target.value.length > 30) {
                error = 'Wrong length! (6 - 30)';
                if (!e.target.value) error = 'Field cannot be empty!';
            }
            break;
        case 'rePass':
            if (e.target.value !== pass) {
                error = 'Passwords do not match';
                if (!e.target.value) error = 'Field cannot be empty!';
            }
            break;
        default:
            break;
    }
    return error;
}
