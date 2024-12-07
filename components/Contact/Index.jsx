"use client";
import styles from './style.module.scss';
import { useRef, useState } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useForm } from '@formspree/react';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';

export default function Index() {
    function ContactForm() {
        const [state, handleSubmit] = useForm("xvgolwyk"); // Replace with your Formspree form ID
        const [tooltip, setTooltip] = useState(null); // Tooltip message state
        const [formData, setFormData] = useState({
            name: "",
            Service: "",
            email: "",
            message: "",
        }); // State to manage form inputs

        const onInputChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value })); // Update state on input change
        };

        const onSubmit = async (e) => {
            e.preventDefault(); // Prevent default form submission

            try {
                // Submit the form using Formspree's handleSubmit
                const result = await handleSubmit(formData); // Send formData explicitly
                if (result?.succeeded) {
                    setTooltip("Thank you for your attention!"); // Show success message
                    setFormData({ name: "", Service: "", email: "", message: "" }); // Clear form inputs
                } else {
                    setTooltip("Something went wrong. Please try again."); // Error message
                }
            } catch (error) {
                console.error("Submission Error:", error); // Debugging any errors
                setTooltip("Something went wrong. Please try again."); // General error message
            } finally {
                setTimeout(() => setTooltip(null), 3000); // Clear tooltip after 3 seconds
            }
        };

        return (
            <form method="post" onSubmit={onSubmit}>
                <div className="flex flex-col gap-6 mt-10">
                    {/* Name Input */}
                    <div className="flex gap-2">
                        <h4 className="gradient-text text-[25px]">My name is</h4>
                        <input
                            className="gradient-text w-[250px] border-gradient bg-transparent border-b-2"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={onInputChange}
                            required
                        />
                    </div>

                    {/* Service Input */}
                    <div className="flex gap-2">
                        <h4 className="gradient-text text-[25px]">I'm interested in</h4>
                        <input
                            className="gradient-text w-[250px] border-gradient bg-transparent border-b-2"
                            name="Service"
                            type="text"
                            placeholder="Service Name"
                            value={formData.Service}
                            onChange={onInputChange}
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="flex gap-2">
                        <h4 className="gradient-text text-[25px]">Please, contact me at</h4>
                        <input
                            className="gradient-text w-[250px] border-gradient bg-transparent border-b-2"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={onInputChange}
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="flex gap-2">
                        <h4 className="gradient-text text-[25px]">
                            Optionally, I'm sharing more details
                        </h4>
                        <textarea
                            className="gradient-text w-[350px] border-gradient bg-transparent border-b-2"
                            name="message"
                            placeholder="Message"
                            rows="3"
                            value={formData.message}
                            onChange={onInputChange}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button className="gradient-text w-24 h-24 text-[25px] rounded-full" type="submit">
                        Submit
                    </button>
                </div>

                {/* Tooltip */}
                {tooltip && (
                    <div className="tooltip">
                        <p>{tooltip}</p>
                    </div>
                )}
            </form>
        );
    }

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

    return (
        <motion.div style={{ y }} ref={container} className={styles.contact}>
            <div className={styles.body}>
                {/* Title */}
                <div className={styles.title}>
                    <span>
                        <h2 className="gradient-text">Hey! I'm ready</h2>
                    </span>
                    <h2 className="gradient-text">to consult you</h2>
                    <ContactForm />
                </div>

                {/* Navigation */}
                <div className={styles.nav}>
                    <Rounded>
                        <p className="gradient-text">jasmineanimator576@gmail.com</p>
                    </Rounded>
                    <Rounded>
                        <p className="gradient-text">+92 03176827836</p>
                    </Rounded>
                </div>

                {/* Footer Info */}
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3 className="gradient-text">Powered By Adnan Dani</h3>
                            <p className="gradient-text">2024 © Edition</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3 className="gradient-text">Socials</h3>
                            <Magnetic>
                                <p className="gradient-text">WhatsApp</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p className="gradient-text">Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p className="gradient-text">Facebook</p>
                        </Magnetic>
                        <Magnetic>
                            <p className="gradient-text">LinkedIn</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
