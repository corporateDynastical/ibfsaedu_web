"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState } from "react"
import axios from 'axios'
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./textarea"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    contact: z.string().min(10, {
        message: "Please enter a valid contact number",
    }),
    email: z.string().email({
        message: "Please enter a valid email id."
    }),
    message: z.string(),
    resume: z.string().optional(), // Update to accept a file
})


export function ContactForm() {

    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            contact: "",
            email: "",
            message: "",
            resume: "", // Initialize resume field
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setLoading(true)
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('contact', data.contact);
        formData.append('email', data.email);
        formData.append('message', data.message);
        formData.append('resume', data.resume[0]); // Append the file to FormData
    
        try {
            const response = await axios.post(`/api/sendMail`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            toast({
                title: "Thank you for your response",
                description: "Response submitted successfully. We will get back to you!",
            });
            setLoading(false);
            form.reset({
                username: "",
                contact: "",
                email: "",
                message: "",
                resume: "", // Reset the resume field
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Error",
                description: "Something went wrong while submitting the form.",
                status: "error"
            });
            setLoading(false);
        }
    }
    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 space-y-6">
                <FormField
                    disabled={loading}
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Name" {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={loading}
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contact Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Mobile No." {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={loading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Email" {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={loading}
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type your message here." {...field} rows={6} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    disabled={loading}
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Upload Resume</FormLabel>
                            <FormControl>
                                <Input type="file" {...field} required />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={loading} className="w-full" type="submit">
                    {loading ? `Submitting response..` : `Submit`}
                </Button>
            </form>
        </Form>
    )
}
