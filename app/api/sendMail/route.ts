import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    const { username, contact, email, message } = await req.body.formData;
    const resumeFile = req.files?.resume; 

    try {
    
        if (resumeFile) {
            const uploadPath = path.join(process.cwd(), 'public', 'resume', resumeFile.name);
            await fs.promises.writeFile(uploadPath, resumeFile.data);
        }

        const htmlBody = `
        <div>
            <h1>New Enquiry From IBFSA Website. Please contact on following details for a follow-up.</h1>  
            <h3>Name: ${username}</h3>
            <h3>Contact Number: ${contact}</h3>
            <h3>Email: ${email}</h3>
            <h3>Message: ${message}</h3>
            ${data.resume[0] ? `<h3>Resume: <a href="${process.env.BASE_URL}/resume/${data.resume[0].name}">${data.resume[0].name}</a></h3>` : ''}
        </div>
    `;
    

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_PASSWORD
            }
        });

        const messageToSend = {
            from: process.env.USER_EMAIL,
            to: [ 'document@ibfsaedu.com','info@ibfsaedu.com', 'support@ibfsaedu.com'],
    
            subject: "New Enquiry From IBFSA Website.",
            text: "",
            html: `${htmlBody}`
        }


        await transporter.sendMail(messageToSend).then((info: any) => {
            console.log("Email sent: %s", info.messageId);
        })

        return NextResponse.json({
            "Message": `Email sent successfully to ${email}.`
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({
            "Message": "Something went wrong"
        }, { status: 500 })
    }
}