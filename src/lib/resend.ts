'use server';

import { Resend } from "resend";

const resend = new Resend("re_98UjyBbb_PLn7bTa2tnJJNoKpGDohqAmi");

export const sendEmail = async() =>{
await resend.emails.send(
    {
        to:"jhaphpdeveloper@gmail.com",
        from:"Website Develop <info@websitedevelop.in>",
        subject:"First Mail send by next js app",
        html:"<strong>Jai Mata Di </strong>"
    }
);

}