# better-decode-uri-component

Safe and maximum possible decodeURIComponent

## Installation

```bash
npm install better-decode-uri-component
```

## Usage

Browser
```html
<script src="https://cdn.jsdelivr.net/npm/better-decode-uri-component"></script>
```

ES Modules
```javascript
import betterDecodeURIComponent from 'better-decode-uri-component';
```

CommonJS
```javascript
const betterDecodeURIComponent = require('better-decode-uri-component');
```

Normal usage (works like standard decodeURIComponent)
```javascript
betterDecodeURIComponent('Hello%20World'); // "Hello World"
```

Safely handles malformed sequences
```javascript
betterDecodeURIComponent('Hello%FF%20World'); // "Hello World"
```

Maximum possible decoding
```javascript
betterDecodeURIComponent('%E6%97%A5%FF%E6%9C%AC%E8%AA%9E'); // "日本語"
```

Keep malformed sequences with removeMalform: false
```javascript
betterDecodeURIComponent('Hello%FF%20World', { removeMalform: false }); // "Hello%FF World"
```

## Options

```javascript
betterDecodeURIComponent(str, {
  maxSequenceSize: 4,    // Maximum number of UTF-8 bytes to try decoding at once (default: 4)
  removeMalform: true    // Remove malformed sequences instead of keeping them (default: true)
});
```

## License

MIT
