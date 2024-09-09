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

type Props = {
    content: any;
};

const Contact = ({ content }: Props) => {
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
                <p className="section-head">{content.head}</p>
                <div className="flex justify-center pt-12">
                    <form
                        onSubmit={handleSubmit(sendMail)}
                        className="w-full max-w-[700px] m-auto"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                            <div className="mt-4 input-container">
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    className={`${errors.name ? "input-error" : "input"}`}
                                />
                                <label
                                    className={
                                        values.name ? "input-label-float" : "input-label"
                                    }
                                >
                                    {content.name}
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
                                    className={`${errors.email ? "input-error" : "input"}`}
                                />
                                <label
                                    className={
                                        values.email ? "input-label-float" : "input-label"
                                    }
                                >
                                    {content.email}
                                </label>
                            </div>
                        </div>
                        <div className="mt-8 input-container">
                            <input
                                type="text"
                                {...register("subject", { required: true })}
                                className={`${errors.subject ? "input-error" : "input"}`}
                            />
                            <label
                                className={
                                    values.subject ? "input-label-float" : "input-label"
                                }
                            >
                                {content.subject}
                            </label>
                        </div>
                        <div className="mt-8 input-container">
                            <textarea
                                {...register("message", { required: true })}
                                className={`${errors.message ? "input-error" : "input"}`}
                                rows={6}
                            />
                            <label
                                className={
                                    values.message ? "input-label-float" : "input-label"
                                }
                            >
                                {content.message}
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="button-primary w-full mt-4 px-4 py-2 rounded-lg"
                        >
                            {content.send}
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
