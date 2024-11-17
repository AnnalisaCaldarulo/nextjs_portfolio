// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// // const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend('re_9MmuspKE_CiBbvPdGfWweeFW1rQRUtDRv');

// export async function POST(req, res) {
//     const { body } = await req.json();
//     const { email, subject, message } = body;
//     try {
//         const data = await resend.emails.send({
//             from: 'OrcDev <onboarding@resend.dev>',
//             to: [process.env.MY_MAIL],
//             subject: subject,
//             react:
//                 <>
//                     <h1> {subject}</h1>
//                     <p>{message}, {email} </p>
//                 </>
//         });
//         return NextResponse.json(data);
//     } catch (error) {
//         return NextResponse.json({ error });
//     }
// };
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    try {
        const data = await resend.emails.send({
            from: 'OrcDev <onboarding@resend.dev>',
            to: [process.env.MY_MAIL],
            subject: subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us!</p>
                    <p>New message submitted:</p>
                    <p>{message}</p>
                    <h5>From: {email} </h5>
                </>
            ),
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}