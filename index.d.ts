interface Options {
  /**
   * Maximum number of UTF-8 bytes to try decoding at once
   * @default 4
   */
  maxSequenceSize?: number;

  /**
   * Remove malformed sequences instead of keeping them
   * @default true
   */
  removeMalform?: boolean;
}

/**
 * Safely decodeURIComponent by attempting partial decoding of malformed sequences
 * @param str - string to decode
 * @param options - decoding options
 * @throws {TypeError} When input is not a string
 * @returns decoded string
 */
declare function betterDecodeURIComponent(str: string, options?: Options): string;
export = betterDecodeURIComponent;
