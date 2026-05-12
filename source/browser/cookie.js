/**
 * Returns the value of a document cookie by name, or undefined.
 *
 * @function getCookie
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} cookieName - Cookie name.
 * @returns {String|undefined} - Decoded cookie value.
 *
 * @example
 * import { getCookie } from '@universalweb/acid';
 * getCookie('session');
 */
export function getCookie(cookieName) {
	const prefix = `${cookieName}=`;
	const cookieEntries = document.cookie.split('; ');
	for (const cookieEntry of cookieEntries) {
		if (cookieEntry.startsWith(prefix)) {
			return decodeURIComponent(cookieEntry.slice(prefix.length));
		}
	}
}
/**
 * Sets a document cookie. Defaults to path '/'. Pass options to control expires/maxAge/sameSite/secure.
 *
 * @function setCookie
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} cookieName - Cookie name.
 * @param {String} cookieValue - Cookie value (will be URI-encoded).
 * @param {Object} [options]
 * @param {Number} [options.maxAge] - Max-age in seconds.
 * @param {Date} [options.expires] - Expiry date.
 * @param {String} [options.path='/'] - Cookie path.
 * @param {String} [options.domain] - Cookie domain.
 * @param {String} [options.sameSite] - SameSite policy.
 * @param {Boolean} [options.secure] - Secure flag.
 * @returns {undefined}
 *
 * @example
 * import { setCookie } from '@universalweb/acid';
 * setCookie('lang', 'en', { maxAge: 3600 });
 */
export function setCookie(cookieName, cookieValue, options = {}) {
	let cookieString = `${cookieName}=${encodeURIComponent(cookieValue)}`;
	const { maxAge, expires, path = '/', domain, sameSite, secure } = options;
	if (maxAge !== undefined) cookieString += `; Max-Age=${maxAge}`;
	if (expires) cookieString += `; Expires=${expires.toUTCString()}`;
	if (path) cookieString += `; Path=${path}`;
	if (domain) cookieString += `; Domain=${domain}`;
	if (sameSite) cookieString += `; SameSite=${sameSite}`;
	if (secure) cookieString += '; Secure';
	document.cookie = cookieString;
}
/**
 * Deletes a cookie by setting its expiry in the past.
 *
 * @function removeCookie
 * @category browser
 * @ignoreTest
 * @type {Function}
 * @param {String} cookieName - Cookie name.
 * @param {Object} [options] - Path/domain must match the original cookie to delete it.
 * @returns {undefined}
 *
 * @example
 * import { removeCookie } from '@universalweb/acid';
 * removeCookie('session');
 */
export function removeCookie(cookieName, options = {}) {
	setCookie(cookieName, '', { ...options, maxAge: 0 });
}
