import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Notification from "../Notification";

type FormTypes = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const Contact = () => {
    const [sent, setSent] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const {
        register,
        watch,
        getValues,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormTypes>();

    const watchForm = watch(["name", "email", "subject", "message"]);

    const sendMail = (data: FormTypes) => {
        emailjs
            .send(
                "gmail_service",
                "portfolio_template",
                data,
                process.env.NEXT_PUBLIC_EMAILJS_KEY,
            )
            .then(() => {
                setSent(true);
                setTimeout(() => setSent(false), 3000);
            })
            .catch((error) => {
                console.error(error);
                setError(true);
                setTimeout(() => setError(false), 3000);
            });

        setSent(true);
        setTimeout(() => setSent(false), 3000);

        reset();
    };

    let values = getValues();

    useEffect(() => {
        values = getValues();
    }, [watchForm]);

    return (
        <div className="section">
            <div id="contact" className="contact">
                <p className="section-head">Contact</p>
                <div className="flex justify-center md:pt-8">
                    <form
                        onSubmit={handleSubmit(sendMail)}
                        className="w-full max-w-[700px] m-auto"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div className="mt-4 input-container">
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    className={`input ${errors.name && "error"}`}
                                />
                                <label className={values.name ? "input-label-float" : "input-label"}>
                                    Name
                                </label>
                            </div>
                            <div className="mt-4 input-container">
                                <input
                                    type="text"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className={`input ${errors.email && "error"}`}
                                />
                                <label className={values.email ? "input-label-float" : "input-label"}>
                                    Email
                                </label>
                            </div>
                        </div>
                        <div className="mt-8 input-container">
                            <input
                                type="text"
                                {...register("subject", { required: true })}
                                className={`input ${errors.subject && "error"}`}
                            />
                            <label className={values.subject ? "input-label-float" : "input-label"}>
                                Subject
                            </label>
                        </div>
                        <div className="mt-8 input-container">
                            <textarea
                                {...register("message", { required: true })}
                                className={`input ${errors.message && "error"}`}
                                rows={6}
                            />
                            <label className={values.message ? "input-label-float" : "input-label"}>
                                Message
                            </label>
                        </div>
                        <button type="submit" className="button w-full mt-4 px-4 py-2 rounded-lg">
                            <span className="background">
                                <span className="content">
                                    Send
                                </span>
                            </span>
                            Send
                        </button>
                    </form>
                </div>
            </div>

            {sent && (
                <Notification type="success" message="Email sent successfully" />
            )}
            {error && <Notification type="error" message="Something went wrong" />}
        </div>
    );
};

export default Contact;
