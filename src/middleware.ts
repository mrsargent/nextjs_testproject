
//instead of this we can export directly as shown below
//import middleware from 'next-auth/middleware'
//export default middleware;

export {default} from 'next-auth/middleware';

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    matcher: ['/dashboard/:path*']
}