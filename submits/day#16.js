//Ask the Bob
function hey(message) {
    let shout = true;
    for (l of message) {
        if (!(l >= 'A' && l <= 'Z')) {
            shout = false
            break;
        }
    }
    if (shout) {
        if (message.includes('?')) {
            return "Calm down, I know what I'm doing!";
        }
        else {
            return "Whoa, chill out!"
        }
    }

    message = message.toLocaleLowerCase();
    if (message.startsWith('how')) {
        return 'Sure.';
    }

    if (message.includes('bob')) {
        return "Fine. Be that way!";
    }

    return "Whatever.";
}

