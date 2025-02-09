module.exports = (str, { maxSequenceSize = 4, removeMalform = true } = {}) => {
    if (typeof str !== 'string') throw new TypeError('Expected string but got ' + typeof str);

    try { return decodeURIComponent(str); } catch(e) { }

    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, match => {
        let res = '';

        let pos = 0;
        while (pos < match.length) {
            let decoded = false;

            for (let len = Math.min(match.length - pos, maxSequenceSize * 3); len >= 3; len -= 3) {
                const sub = match.substring(pos, pos + len);

                try {
                    res += decodeURIComponent(sub);
                    pos += len;
                    decoded = true;
                    break;
                } catch(e) {}
            }

            if (!decoded) {
                if (!removeMalform) res += match.substring(pos, pos + 3);
                pos += 3;
            }
        }

        return res;
    });
}
